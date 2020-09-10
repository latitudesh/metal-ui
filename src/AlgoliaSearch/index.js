import React from 'react';
import PropTypes from 'prop-types';

import TabController from './providers/TabController';
import SearchComponent from './elements/SearchComponent';

const AlgoliaSearch = (props) => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
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
      <SearchComponent {...props} />
    </TabController>
  );
};

AlgoliaSearch.propTypes = {
  ALGOLIA_APP_ID: PropTypes.string.isRequired,
  ALGOLIA_API_SEARCH_KEY: PropTypes.string.isRequired,
};

export default AlgoliaSearch;
