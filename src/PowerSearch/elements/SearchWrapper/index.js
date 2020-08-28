import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';

import { useTabController, navigationKeyTypes } from '../../context';
import SearchBox from '../SearchBox';
import ResultsList from '../ResultsList';
import Controls from '../Controls';

const SearchWrapper = (props) => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
    indices,
    searchOperators,
    specialChar,
    scrollWindowHeight,
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

  const handleOnSearchStateChange = ({ query }) => {
    let filter = '';
    let operandFound = false;

    if (query) {
      // sets the filter for the Configure component
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

  return (
    <div className="p-4 bg-white">
      <InstantSearch
        searchClient={searchClient}
        indexName="devices"
        onSearchStateChange={handleOnSearchStateChange}
      >
        <div
          onKeyDown={handleOnKeyDown}
          role="listbox"
        >
          <SearchBox />
          <div
            className="shadow-xl rounded"
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
}

export default SearchWrapper;
