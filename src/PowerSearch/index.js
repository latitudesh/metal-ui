import React from 'react';
import PropTypes from 'prop-types';

import TabController from './context';
import SearchWrapper from './elements/SearchWrapper';

const PowerSearch = (props) => {
  const {
    ALGOLIA_APP_ID,
    ALGOLIA_API_SEARCH_KEY,
    indices,
    conditions,
    specialChar,
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
        conditions={conditions}
        specialChar={specialChar}
      />
    </TabController>
  );
}

PowerSearch.propTypes = {
  indices: PropTypes.arrayOf(PropTypes.shape({
    indexName: PropTypes.string,
    displayName: PropTypes.string,
    renderCardInfo: PropTypes.func,
    formatHitURL: PropTypes.func,
  })).isRequired,
  conditions: PropTypes.arrayOf(PropTypes.string).isRequired,
  specialChar: PropTypes.string.isRequired,
  ALGOLIA_APP_ID: PropTypes.string.isRequired,
  ALGOLIA_API_SEARCH_KEY: PropTypes.string.isRequired,
}

export default PowerSearch;
