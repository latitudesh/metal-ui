import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useTabController } from '../../../providers/TabController';

import styles from './style';

const ResultPill = (props) => {
  const {
    children,
    elementIndex,
    sectionIndex,
    formattedHitURL,
    noResults,
    onSelect,
  } = props;

  const {
    activeElementIndex,
    sectionLengthsArray,
    isResultsWindowOpen,
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
  const isCurrentElement = ((activeElementIndex === currentElementIndex) && isResultsWindowOpen) && !noResults;

  useEffect(() => {
    if (isCurrentElement && enterKeyWasPressed) {
      if (formattedHitURL) {
        clickableLink.current.click();
      } else if (onSelect) {
        onSelect()
      } else {
        alert('The formattedHitURL or onSelect props were not found, it is used to format the url for the pill! Without it, we dont know where to send you :)')
      }
      setEnterKeyWasPressed(false);
    }

    if (isCurrentElement) {
      const activePillBoundingRect = resultPillRef.current.getBoundingClientRect();
      const resultPillOffset = activePillBoundingRect.top + activePillBoundingRect.height;
      const activePillTopOffset = resultPillOffset - scrollableWindowTopOffset + scrollWindowRef.current.scrollTop;
      let distToScroll = 0;

      if ((activePillTopOffset) > scrollableWindowHeight) {
        distToScroll = (activePillTopOffset) - scrollableWindowHeight;
      }

      setScrollDistance(distToScroll);
    }
  }, [isCurrentElement, scrollableWindowHeight, scrollableWindowTopOffset, scrollWindowRef, setScrollDistance, setEnterKeyWasPressed, enterKeyWasPressed]);

  const handleHoverSelection = () => {
    manuallySetActiveIndex((sectionLengthsArray[sectionIndex - 1] || 0) + elementIndex);
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
          className="px-2 border border-border rounded text-accent-eight"
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
        href={!onSelect ? formattedHitURL : null}
        onClick={onSelect}
        className={`px-2 rounded outline-none ${isCurrentElement ? 'bg-accent-two text-foreground' : 'text-accent-eight'}`}
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
  onSelect: null,
};

ResultPill.propTypes = {
  children: PropTypes.node.isRequired,
  elementIndex: PropTypes.number,
  sectionIndex: PropTypes.number,
  formattedHitURL: PropTypes.string.isRequired,
  noResults: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default ResultPill;
