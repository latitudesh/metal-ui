import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connectSearchBox } from "react-instantsearch-dom";

import { useTabController } from "../../providers/TabController";
import Input from "../../../Input";

const valHasLength = (value) => {
  if (value.length >= 1) return true;
  return false;
};

const SearchBox = (props) => {
  const { currentRefinement, refine, id, dark, placeholder, selectedText, inputProps } = props;

  const {
    resetActiveElementIndex,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
    setSearchInputHeight,
  } = useTabController();

  const inputRef = useRef()
  const searchInputRef = useRef(null);

  useEffect(() => {
    refine(selectedText)
    inputRef.current.value = selectedText || ''
  }, [selectedText])

  const handleOnChange = (value, e) => {
    if (e.keyCode !== 40 && e.keyCode !== 38) {
      resetActiveElementIndex();
      refine(value);
    } else {
      e.preventDefault();
    }

    setIsResultsWindowOpen(valHasLength(value));
  };

  const checkIfResultsWindowShouldOpen = (e) => {
    const { value } = e.target;
    setIsResultsWindowOpen(valHasLength(value));
  };

  useEffect(() => {
    if (searchInputRef?.current) {
      setSearchInputHeight(searchInputRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="ais-SearchBox pb-2" ref={searchInputRef}>
      <form className="ais-SearchBox-form m-0" noValidate role="search">
        <Input
          ref={inputRef}
          inputClassName={`${
            (isResultsWindowOpen ? "focused" : "",
            dark
              ? "bg-gray-800 border-gray-600 text-white focus:border-gray-500 hover:border-gray-500"
              : "bg-white border-gray-200 text-gray-900 focus:border-gray-300 hover:border-gray-300")
          } -mt-1 ais-SearchBox-input w-full focus:outline-none focus:shadow-none`}
          value={currentRefinement}
          onChange={handleOnChange}
          onFocus={checkIfResultsWindowShouldOpen}
          type="search"
          aria-label="Search for a resource by typing here"
          placeholder={`${placeholder ? placeholder : "Search..."}`}
          id={`search-box-${id}`}
          autoComplete="off"
          type="search"
          {...inputProps}
        />
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  selectedText: PropTypes.string,
};

export default connectSearchBox(SearchBox);
