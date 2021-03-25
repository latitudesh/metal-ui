import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connectHits } from 'react-instantsearch-dom';

import { useTabController } from '../../providers/TabController';
import ResultPill from './ResultPill';
import SectionTitle from './SectionTitle';

const ResultsList = (props) => {
  const {
    hits,
    sectionTitle,
    sectionIndex,
    renderCardInfo,
    formatHitURL,
    onSelect,
    isSelectable,
  } = props;

  const { appendNewSectionLength, shouldHideResults, setIsResultsWindowOpen } = useTabController();

  useEffect(() => {
    if (hits.length > 0) {
      appendNewSectionLength(sectionIndex, hits.length);
    } else {
      appendNewSectionLength(sectionIndex, 0);
    }
  }, [hits.length]); // eslint-disable-line

  const formattedHitURL = useCallback((hit) => {
    return formatHitURL ? formatHitURL(hit) : null
  }, [formatHitURL]);

  if ((Array.isArray(hits) && hits.length > 0) && !shouldHideResults) {
    return (
      <React.Fragment>
        <SectionTitle title={sectionTitle} />
        <ul role="listbox">
          {(typeof renderCardInfo === 'function')
            && (hits.map((hit, index) => {
              return (
                <ResultPill
                  key={index}
                  elementIndex={index}
                  sectionIndex={sectionIndex}
                  formattedHitURL={formattedHitURL(hit)}
                  onSelect={isSelectable ? () => {
                    onSelect(hit)
                    setIsResultsWindowOpen(false)
                  } : null}
                >
                  {renderCardInfo(hit)}
                </ResultPill>
              )}
            ))}
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
  formatHitURL: PropTypes.func,
  onSelect: PropTypes.func,
};

export default connectHits(ResultsList);
