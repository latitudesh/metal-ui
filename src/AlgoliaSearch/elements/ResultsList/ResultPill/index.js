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
    manuallySetActiveIndex,
  } = useTabController();

  const resultPillRef = useRef(null);
  const clickableLink = useRef(null);

  const currentElementIndex = (sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex;
  const isCurrentElement = ((activeElementIndex === currentElementIndex) && searchHasText) && !noResults;

  useEffect(() => {
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
  
  const handleHoverSelection = () => {
    manuallySetActiveIndex(elementIndex);
  }

  if (noResults) {
    return (
      <li
        ref={resultPillRef}
        className="mb-1"
        style={{...styles.resultPill}}
        tabIndex={0}
        role="option"
        aria-selected={isCurrentElement}
        onMouseEnter={handleHoverSelection}
      >
        <div
          ref={clickableLink}
          className="px-2 border rounded text-gray-800"
          style={{...styles.resultPillLink}}
        >
          {children}
        </div>
      </li>
    );
  }

  return (
    <li
      className="mb-1"
      style={{...styles.resultPill}}
      tabIndex={0}
      role="option"
      aria-selected={isCurrentElement}
      ref={resultPillRef}
      onMouseEnter={handleHoverSelection}
    >
      <a
        ref={clickableLink}
        href={formatHitURL}
        className={`px-2 border border-white rounded outline-none ${isCurrentElement ? 'bg-indigo-600 text-white' : 'text-gray-800'}`}
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
