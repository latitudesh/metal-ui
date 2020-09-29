import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';

import { useTabController, navigationKeyTypes } from '../../providers/TabController';
import SearchBox from '../SearchBox';
import ResultsList from '../ResultsList';
import Controls from '../Controls';
import Loader from '../Loader';
import NoResults from '../NoResults';

const SearchComponent = (props) => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
    indices,
    searchOperators,
    specialChar,
    scrollWindowHeight,
    customLoader,
    customNoResults,
    indexResultsLimit,
    parentWindowHeight,
    className,
  } = props;

  const {
    activeElementIndex,
    scrollableWindowHeight,
    setScrollableWindowTopOffset,
    scrollableWindowTopOffset,
    scrollDistance,
    setScrollWindowRef,
    shouldBypassSearch,
    setShouldBypassSearch,
    setScrollableWindowHeight,
    isScrollDisabled,
    handleKeyNavigation,
    totalElementsCount,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
    controlsHeight,
    searchInputHeight,
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
  const searchComponentRef = useRef(null);
  const [filterState, setFilterState] = useState('');
  const [conditionalOperands, setConditionalOperands] = useState(null);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  
  const handleClickOutside = (e) => {
    if (searchComponentRef.current.contains(e.target)) {
      return;
    }

    setIsResultsWindowOpen(false);
  };

  useEffect(() => {
    setScrollWindowRef(scrollWindowRef);
  }, [setScrollWindowRef]);

  useEffect(() => {
    if (parentWindowHeight) {
      setScrollableWindowHeight(parentWindowHeight - controlsHeight - searchInputHeight);
    } else {
      setScrollableWindowHeight(scrollWindowHeight);
    }
  }, [scrollWindowHeight, parentWindowHeight, controlsHeight, searchInputHeight]);

  useEffect(() => {
    if (Array.isArray(searchOperators) && searchOperators.length > 0) {
      const sortedSearchOperators = searchOperators.sort((a, b) => a.length - b.length);
      const adjustedSearchOperators = sortedSearchOperators.map((condition) => `${specialChar}${condition}`);
      setConditionalOperands(adjustedSearchOperators);
    }
  }, [specialChar, searchOperators]);

  useEffect(() => {
    const scrollableResultsBoundingRect = scrollWindowRef.current.getBoundingClientRect();
    if (scrollableResultsBoundingRect !== scrollableWindowTopOffset) {
      setScrollableWindowTopOffset(scrollableResultsBoundingRect.top);
    }
  }, [setScrollableWindowTopOffset, activeElementIndex]);

  useEffect(() => {
    if (typeof scrollDistance === 'number' && isResultsWindowOpen && !isScrollDisabled) {
      scrollWindowRef.current.scrollTo(0, scrollDistance);
    }
  }, [scrollDistance, isResultsWindowOpen, isScrollDisabled]);
  
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
  
  useEffect(() => {
    if (isResultsWindowOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isResultsWindowOpen]);

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
  
  const LoaderToRender = customLoader ? customLoader : <Loader />;
  const NoResultsToRender = customNoResults ? customNoResults : <NoResults />;

  return (
    <div ref={searchComponentRef} className={className}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].indexName}
        onSearchStateChange={handleOnSearchStateChange}
      >
        <div
          onKeyDown={handleOnKeyDown}
          role="listbox"
          className="relative"
        >
          <SearchBox id={ALGOLIA_APP_ID} />

          <div
            className="shadow-xl rounded absolute w-full bg-white border border-gray-200"
            style={{ visibility: `${isResultsWindowOpen ? 'visible' : 'hidden'}` }}
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
                      hitsPerPage={indexResultsLimit}
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

              {(totalElementsCount === 0 && isSearchEmpty) && NoResultsToRender}

              {(totalElementsCount === 0 && !isSearchEmpty) && LoaderToRender}

            </div>
            <Controls />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

SearchComponent.defaultProps = {
  scrollWindowHeight: 400,
  customLoader: null,
  customNoResults: null,
}

SearchComponent.propTypes = {
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
  indexResultsLimit: PropTypes.number.isRequired,
}

export default SearchComponent;
