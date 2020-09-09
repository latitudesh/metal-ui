import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';

import { useTabController, navigationKeyTypes } from '../../context';
import SearchBox from '../SearchBox';
import ResultsList from '../ResultsList';
import Controls from '../Controls';
import Loader from '../Loader';
import NoResults from '../NoResults';

const SearchWrapper = (props) => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
    indices,
    searchOperators,
    specialChar,
    scrollWindowHeight,
    customLoader,
    customNoResults,
  } = props;

  const {
    scrollableWindowHeight,
    setScrollableWindowTopOffset,
    scrollDistance,
    searchHasText,
    setScrollWindowRef,
    shouldBypassSearch,
    setShouldBypassSearch,
    setScrollableWindowHeight,
    isScrollDisabled,
    handleKeyNavigation,
    totalElementsCount,
  } = useTabController();

  const algoliaClient = algoliasearch(
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
  );

  const searchClient = {
    search(requests) {
      if (shouldBypassSearch === true) return null;

      return algoliaClient.search(requests);
    },
  };

  const scrollWindowRef = useRef(null);
  const [filterState, setFilterState] = useState('');
  const [conditionalOperands, setConditionalOperands] = useState(null);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  useEffect(() => {
    setScrollWindowRef(scrollWindowRef);
  }, [setScrollWindowRef]);

  useEffect(() => {
    setScrollableWindowHeight(scrollWindowHeight);
  }, [scrollWindowHeight])

  useEffect(() => {
    if (Array.isArray(searchOperators) && searchOperators.length > 0) {
      const sortedSearchOperators = searchOperators.sort((a, b) => a.length - b.length);
      const adjustedSearchOperators = sortedSearchOperators.map((condition) => `${specialChar}${condition}`);
      setConditionalOperands(adjustedSearchOperators);
    }
  }, [specialChar, searchOperators]);

  useEffect(() => {
    const scrollableResultsBoundingRect = scrollWindowRef.current.getBoundingClientRect();
    setScrollableWindowTopOffset(scrollableResultsBoundingRect.top);
  }, [setScrollableWindowTopOffset]);

  useEffect(() => {
    if (typeof scrollDistance === 'number' && searchHasText && !isScrollDisabled) {
      scrollWindowRef.current.scrollTo(0, scrollDistance);
    }
  }, [scrollDistance, searchHasText, isScrollDisabled]);
  
  useEffect(() => {
    let interval = null;
    if (totalElementsCount === 0) {
      setTimeout(() => {
        if (totalElementsCount === 0) {
          setIsSearchEmpty(true);
        }
      }, 800);  
    } else {
      setIsSearchEmpty(false);
    }
    
    return clearInterval(interval);
  }, [totalElementsCount]);

  const handleOnSearchStateChange = ({ query }) => {
    let filter = '';
    let operandFound = false;

    if (query) {
      conditionalOperands.forEach((operand) => {
        const operandIndex = query.indexOf(operand);

        if (operandIndex !== -1) {
          const [fieldName, compareValue] = query.split(operand);

          filter = `${fieldName} ${operand.substr(specialChar.length)} ${compareValue}`;
          operandFound = true;
        }
      });

      if (!operandFound && query.indexOf(specialChar) !== -1) {
        const [fieldName, compareValue] = query.split(specialChar);

        filter = `${fieldName} = ${compareValue}`;
        operandFound = true;
      }

      setFilterState(operandFound ? filter : '');
    }
  };

  const configureFilterState = (searchConditions = null) => {
    if (Array.isArray(searchConditions) && searchConditions.length > 0) {
      const conditionalFilterState = searchConditions.reduce((acc, condition, index) => {
        const { conditionType, conditionString } = condition;

        if (index === 0) {
          if (filterState) return `${filterState} ${conditionType || 'AND'} ${conditionString}`;
          return `${conditionString}`;
        }

        return `${acc} ${conditionType || 'AND'} ${conditionString}`;
      }, '');

      return conditionalFilterState;
    }

    return filterState;
  }

  const handleOnKeyDown = (e) => {
    switch (e.keyCode) {
      case 40:
        handleKeyNavigation(navigationKeyTypes.ARROW_DOWN);
        break;

      case 38:
        handleKeyNavigation(navigationKeyTypes.ARROW_UP);
        break;

      case 13:
        handleKeyNavigation(navigationKeyTypes.ENTER);
        break;

      default:
        setShouldBypassSearch(false);
        break;
    }
  };
  
  const LoaderToRender = customLoader ? customLoader : Loader;
  const NoResultsToRender = customNoResults ? customNoResults : NoResults;

  return (
    <div>
      <InstantSearch
        searchClient={searchClient}
        indexName="devices"
        onSearchStateChange={handleOnSearchStateChange}
      >
        <div
          onKeyDown={handleOnKeyDown}
          role="listbox"
          className="relative"
        >
          <SearchBox />

          <div
            className="shadow-xl rounded absolute w-full bg-white"
            style={{ visibility: `${searchHasText ? 'visible' : 'hidden'}` }}
          >
            <div
              className="overflow-y-auto pl-2 pr-2"
              style={{ maxHeight: `${scrollableWindowHeight}px` }}
              ref={scrollWindowRef}
            >
              {indices.map((algoliaIndice, sectionIndex) => {
                const { indexName, displayName, renderCardInfo, formatHitURL, searchConditions } = algoliaIndice;

                return (
                  <Index
                    key={sectionIndex}
                    indexName={indexName}
                    limit={4}
                  >
                    <Configure
                      filters={configureFilterState(searchConditions)}
                      hitsPerPage={5}
                    />
                    <ResultsList
                      sectionTitle={displayName}
                      renderCardInfo={renderCardInfo}
                      sectionIndex={sectionIndex}
                      formatHitURL={formatHitURL}
                    />
                  </Index>
                );
              })}

              {(totalElementsCount === 0 && isSearchEmpty) && <NoResultsToRender />}

              {(totalElementsCount === 0 && !isSearchEmpty) && <LoaderToRender />}

            </div>
            <Controls />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

SearchWrapper.defaultProps = {
  scrollWindowHeight: 400,
  customLoader: null,
  customNoResults: null,
}

SearchWrapper.propTypes = {
  ALGOLIA_APP_ID: PropTypes.string.isRequired,
  ALGOLIA_API_SEARCH_KEY: PropTypes.string.isRequired,
  specialChar: PropTypes.string.isRequired,
  searchOperators: PropTypes.arrayOf(PropTypes.string).isRequired,
  indices: PropTypes.arrayOf(PropTypes.shape({
    indexName: PropTypes.string,
    displayName: PropTypes.string,
    renderCardInfo: PropTypes.func,
    formatHitURL: PropTypes.func,
    searchConditions: PropTypes.arrayOf(
      PropTypes.shape({
        conditionType: PropTypes.oneOf(['OR', 'AND']),
        conditionString: PropTypes.string,
      }),
    )
  })).isRequired,
  scrollWindowHeight: PropTypes.number,
  customLoader: PropTypes.node,
  customNoResults: PropTypes.node,
}

export default SearchWrapper;
