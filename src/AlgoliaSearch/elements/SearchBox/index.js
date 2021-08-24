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
  const {
    currentRefinement,
    refine,
    id,
    placeholder,
    selectedText,
    inputProps,
    onSelect,
  } = props;

  const {
    resetActiveElementIndex,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
    setSearchInputHeight,
  } = useTabController();

  const inputRef = useRef();
  const searchInputRef = useRef(null);

  useEffect(() => {
    refine(selectedText);
    inputRef.current.value = selectedText || "";
  }, [selectedText]);

  const handleOnChange = (value, e) => {
    if (e.keyCode !== 40 && e.keyCode !== 38) {
      resetActiveElementIndex();
      refine(value);
    } else {
      e.preventDefault();
    }

    if (!value?.length && onSelect) {
      // Trigger on Select when field clears
      onSelect();
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
    <div className="ais-SearchBox" ref={searchInputRef}>
      <form className="ais-SearchBox-form m-0" noValidate role="search">
        <Input
          ref={inputRef}
          inputClassName={`${
            isResultsWindowOpen ? "focused" : ""
          } -mt-1 ais-SearchBox-input w-full`}
          value={currentRefinement}
          onChange={handleOnChange}
          onFocus={checkIfResultsWindowShouldOpen}
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
