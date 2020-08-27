import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useTabController } from '../../../context';

import styles from './style';

const ResultPill = (props) => {
  const {
    children,
    elementIndex,
    sectionIndex,
    formatHitURL,
    noResults,
  } = props;

  const {
    activeElementIndex,
    sectionLengthsArray,
    searchHasText,
    scrollWindowRef,
    scrollableWindowHeight,
    scrollableWindowTopOffset,
    setScrollDistance,
    enterKeyWasPressed,
    setEnterKeyWasPressed,
  } = useTabController();

  const resultPillRef = useRef(null);
  const clickableLink = useRef(null);

  const currentElementIndex = (sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex;
  const isCurrentElement = ((activeElementIndex === currentElementIndex) && searchHasText) && !noResults;

  useEffect(() => {
    // TODO: Allow for onClick if it is active

    if (isCurrentElement && enterKeyWasPressed) {
      if (formatHitURL) {
        clickableLink.current.click();
      } else {
        alert('The formatHitURL prop was not found, it is used to format the url for the pill! Without it, we dont know where to send you :)')
      }
      setEnterKeyWasPressed(false);
    }

    if (isCurrentElement) {
      const activePillBoundingRect = resultPillRef.current.getBoundingClientRect();
      const resultPillOffset = activePillBoundingRect.top + activePillBoundingRect.height;
      let distToScroll = 0;

      if ((resultPillOffset - scrollableWindowTopOffset + scrollWindowRef.current.scrollTop) > scrollableWindowHeight) {
        distToScroll = (resultPillOffset - scrollableWindowTopOffset + scrollWindowRef.current.scrollTop) - scrollableWindowHeight;
      }

      setScrollDistance(distToScroll);
    }
  }, [isCurrentElement, scrollableWindowHeight, scrollableWindowTopOffset, scrollWindowRef, setScrollDistance, setEnterKeyWasPressed, enterKeyWasPressed]);

  if (noResults) {
    return (
      <li
        ref={resultPillRef}
        className="pb-1"
        style={{...styles.resultPill}}
        tabIndex={0}
        role="option"
        aria-selected={isCurrentElement}
      >
        <div
          ref={clickableLink}
          className="p-3 border shadow-sm rounded text-gray-800"
          style={{...styles.resultPillLink}}
        >
          {children}
        </div>
      </li>
    );
  }

  return (
    <li
      className="pb-1"
      style={{...styles.resultPill}}
      tabIndex={0}
      role="option"
      aria-selected={isCurrentElement}
      ref={resultPillRef}
    >
      <a
        ref={clickableLink}
        href={formatHitURL}
        className={`p-3 border shadow-sm rounded ${isCurrentElement ? 'bg-purple-800 text-white shadow-l' : 'text-gray-800 shadow-sm'}`}
        style={{...styles.resultPillLink}}
      >
        {children}
      </a>
    </li>
  );
};

ResultPill.defaultProps = {
  elementIndex: null,
  sectionIndex: null,
  noResults: false,
};

ResultPill.propTypes = {
  children: PropTypes.node.isRequired,
  elementIndex: PropTypes.number,
  sectionIndex: PropTypes.number,
  formatHitURL: PropTypes.func.isRequired,
  noResults: PropTypes.bool,
};

export default ResultPill;
