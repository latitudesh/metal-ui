import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connectSearchBox } from 'react-instantsearch-dom';

import { useTabController } from '../../providers/TabController';
import Input from '../../../Input';

const valHasLength = (value) => {
  if (value.length >= 1) return true;
  return false;
};

const SearchBox = (props) => {
  const {
    currentRefinement,
    refine,
  } = props;

  const {
    resetActiveElementIndex,
    isResultsWindowOpen,
    setIsResultsWindowOpen,
  } = useTabController();

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

  return (
    <div className="ais-SearchBox">
      <form
        className="ais-SearchBox-form m-0"
        noValidate
        role="search"
      >
        <Input
          inputClassName={`${isResultsWindowOpen ? 'focused' : ''} -mt-1 ais-SearchBox-input w-full border-gray-200 shadow-none`}
          value={currentRefinement}
          onChange={handleOnChange}
          onFocus={checkIfResultsWindowShouldOpen}
          type="search"
          aria-label="Search for a resource by typing here"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectSearchBox(SearchBox);
