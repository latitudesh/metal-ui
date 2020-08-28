import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connectHits } from 'react-instantsearch-dom';

import { useTabController } from '../../context';
import ResultPill from './ResultPill';
import SectionTitle from './SectionTitle';

const ResultsList = (props) => {
  const {
    hits,
    sectionTitle,
    sectionIndex,
    renderCardInfo,
    formatHitURL,
  } = props;

  const { appendNewSectionLength } = useTabController();

  useEffect(() => {
    if (hits.length > 0) {
      appendNewSectionLength(sectionIndex, hits.length);
    } else {
      appendNewSectionLength(sectionIndex, 0);
    }
  }, [hits.length]); // eslint-disable-line

  if (Array.isArray(hits) && hits.length > 0) {
    return (
      <React.Fragment>
        <SectionTitle title={sectionTitle} />
        <ul role="listbox">
          {(typeof renderCardInfo === 'function')
            && (hits.map((hit, index) => (
              <ResultPill
                key={index}
                elementIndex={index}
                sectionIndex={sectionIndex}
                formatHitURL={() => formatHitURL(hit)}
              >
                {renderCardInfo(hit)}
              </ResultPill>
            )))}
        </ul>
      </React.Fragment>
    );
  }

  return null;
};

ResultsList.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionIndex: PropTypes.number.isRequired,
  renderCardInfo: PropTypes.func.isRequired,
  formatHitURL: PropTypes.func.isRequired,
};

export default connectHits(ResultsList);
