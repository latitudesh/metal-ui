import React from 'react';
import PropTypes from 'prop-types';

import TabController from './context';
import SearchWrapper from './elements/SearchWrapper';

const AlgoliaSearch = (props) => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
    indices,
    searchOperators,
    specialChar,
    scrollWindowHeight,
  } = props;

  if (!ALGOLIA_APP_ID || !ALGOLIA_API_SEARCH_KEY) {
    return (
      <>
        {!ALGOLIA_APP_ID && <h1>ALGOLIA_APP_ID prop was not found and is required.</h1>}
        {!ALGOLIA_API_SEARCH_KEY && <h1>ALGOLIA_API_SEARCH_KEY prop was not found and is required.</h1>}
      </>
    )
  }

  return (
    <TabController>
      <SearchWrapper
        ALGOLIA_APP_ID={ALGOLIA_APP_ID}
        ALGOLIA_API_SEARCH_KEY={ALGOLIA_API_SEARCH_KEY}
        indices={indices}
        searchOperators={searchOperators}
        specialChar={specialChar}
        scrollWindowHeight={scrollWindowHeight}
      />
      <h2>content below</h2>
    </TabController>
  );
}

AlgoliaSearch.defaultProps = {
  customLoader: null,
  customNoResults: null,
};

AlgoliaSearch.propTypes = {
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
};

export default AlgoliaSearch;
