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
  const { currentRefinement, refine, id, dark, placeholder } = props;

  const {
    resetActiveElementIndex,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
    setSearchInputHeight,
  } = useTabController();

  const searchInputRef = useRef(null);

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
          inputClassName={`${
            (isResultsWindowOpen ? "focused" : "",
            dark
              ? "bg-accents-eight placeholder-accents-three text-white focus:text-accents-three focus:border-accents-three border border-border hover:border-accents-three"
              : "bg-white border-border text-foreground focus:border-accents-three hover:border-accents-three")
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
        />
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default connectSearchBox(SearchBox);
