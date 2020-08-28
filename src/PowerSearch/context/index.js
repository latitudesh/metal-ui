import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TabControllerContext = createContext({});
export const useTabController = () => useContext(TabControllerContext);

export const navigationKeyTypes = {
  CURSOR: 'cursor',
  ARROW_DOWN: 'arrowDown',
  ARROW_UP: 'arrowUp',
  ENTER: 'enter',
};

const TabController = (props) => {
  const { children } = props;

  // keeps track of the currently focused element in the results panel
  const [activeElementIndex, setActiveElementIndex] = useState(0);

  // keeps track of the total number of elements that have been rendered
  const [totalElementsCount, setTotalElementsCount] = useState(0);

  // an array of integers, the number of results per section
  const [sectionLengthsArray, setSectionLengthsArray] = useState([0]);

  // height of the scrollable container
  const [scrollableWindowHeight, setScrollableWindowHeight] = useState(300);

  // distance to top of the page from the scrollable container
  const [scrollableWindowTopOffset, setScrollableWindowTopOffset] = useState(0);

  // scroll distance to be set and read from
  const [scrollDistance, setScrollDistance] = useState(0);

  // boolean to set whether or not the search box has text
  const [searchHasText, setSearchHasText] = useState(false);

  const [scrollWindowRef, setScrollWindowRef] = useState(null);

  const [shouldBypassSearch, setShouldBypassSearch] = useState(true);

  const [enterKeyWasPressed, setEnterKeyWasPressed] = useState(false);
  
  // allows for manual scroll disabling
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  
  const handleKeyNavigation = (key) => {
    switch (key) {
      case navigationKeyTypes.ARROW_UP:
        decrementActiveElementIndex();
        setShouldBypassSearch(true);
        break;

      case navigationKeyTypes.ARROW_DOWN:
        incrementActiveElementIndex();
        setShouldBypassSearch(true);
        break;
        
      case navigationKeyTypes.ENTER:
        setEnterKeyWasPressed(true);
        setShouldBypassSearch(true);
        break;

      default:
        break;
    }
  };
  
  const manuallySetActiveIndex = (index) => {
    setIsScrollDisabled(true);
    setActiveElementIndex(index);
  }

  // resets the active element to the first one
  const resetActiveElementIndex = () => {
    setActiveElementIndex(0);
  };

  // adds section results length
  const appendNewSectionLength = (sectionIndex, length) => {
    const copyOfSectionLengthsArray = [...sectionLengthsArray];
    copyOfSectionLengthsArray[sectionIndex] = length;
    setSectionLengthsArray(copyOfSectionLengthsArray);
    setTotalElementsCount(copyOfSectionLengthsArray.reduce((a, b) => a + b, 0));
  };

  // increments the active index by 1 or resets to 0 if past total number of elements
  const incrementActiveElementIndex = () => {
    let nextIndex = activeElementIndex + 1;
    if (nextIndex >= totalElementsCount) nextIndex = 0;
    setIsScrollDisabled(false);
    setActiveElementIndex(nextIndex);
  };

  // decrements the active index by 1 or resets to "totalElementsCount - 1" if index < 0
  const decrementActiveElementIndex = () => {
    let prevIndex = activeElementIndex - 1;
    if (prevIndex < 0) prevIndex = totalElementsCount - 1;
    setIsScrollDisabled(false);
    setActiveElementIndex(prevIndex);
  };

  return (
    <TabControllerContext.Provider
      value={{
        activeElementIndex,
        resetActiveElementIndex,
        appendNewSectionLength,
        sectionLengthsArray,
        manuallySetActiveIndex,
        setActiveElementIndex,

        scrollableWindowHeight,
        setScrollableWindowHeight,
        scrollableWindowTopOffset,
        setScrollableWindowTopOffset,
        scrollDistance,
        setScrollDistance,
        searchHasText,
        setSearchHasText,
        setScrollWindowRef,
        scrollWindowRef,

        shouldBypassSearch,
        setShouldBypassSearch,

        setEnterKeyWasPressed,
        enterKeyWasPressed,
        
        isScrollDisabled,
        handleKeyNavigation,
      }}
    >
      {children}
    </TabControllerContext.Provider>
  );
};


export default TabController;
