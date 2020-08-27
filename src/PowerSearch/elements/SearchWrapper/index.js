import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';

import { useTabController } from '../../context';
import SearchBox from '../SearchBox';
import ResultsList from '../ResultsList';
import Controls from '../Controls';

const SearchWrapper = (props) => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
    indices,
    conditions,
    specialChar,
  } = props;

  const {
    incrementActiveElementIndex,
    decrementActiveElementIndex,
    scrollableWindowHeight,
    setScrollableWindowTopOffset,
    scrollDistance,
    searchHasText,
    setScrollWindowRef,
    shouldBypassSearch,
    setShouldBypassSearch,
    setEnterKeyWasPressed,
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
    const sortedConditions = conditions.sort((a, b) => a.length - b.length);
    const adjustedConditions = sortedConditions.map((condition) => `${specialChar}${condition}`);
    setConditionalOperands(adjustedConditions);
  }, [specialChar, conditions]);

  useEffect(() => {
    const scrollableResultsBoundingRect = scrollWindowRef.current.getBoundingClientRect();
    setScrollableWindowTopOffset(scrollableResultsBoundingRect.top);
  }, [setScrollableWindowTopOffset]);

  useEffect(() => {
    if (typeof scrollDistance === 'number' && searchHasText) {
      scrollWindowRef.current.scrollTo(0, scrollDistance);
    }
  }, [scrollDistance, searchHasText]);

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

  const configureFilterState = (searchRestrictions = null) => {
    if (searchRestrictions) {
      return `${filterState ? `${filterState} AND` : searchRestrictions}`;
    }

    return filterState;
  }

  const handleOnKeyDown = (e) => {
    switch (e.keyCode) {
      case 40:
        // down arrow
        setShouldBypassSearch(true);
        incrementActiveElementIndex();
        break;

      case 38:
        // up arrow
        setShouldBypassSearch(true);
        decrementActiveElementIndex();
        break;

      case 13:
        // enter key
        setShouldBypassSearch(true);
        setEnterKeyWasPressed(true);
        e.preventDefault();
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
                const { indexName, displayName, renderCardInfo, formatHitURL, searchRestrictions } = algoliaIndice;

                return (
                  <Index
                    key={sectionIndex}
                    indexName={indexName}
                    limit={4}
                  >
                    <Configure
                      filters={configureFilterState(searchRestrictions)}
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


export default SearchWrapper;
