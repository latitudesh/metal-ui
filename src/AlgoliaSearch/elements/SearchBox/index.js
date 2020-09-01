import React from 'react';
import PropTypes from 'prop-types';
import { connectSearchBox } from 'react-instantsearch-dom';

import { useTabController } from '../../context';

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
    setSearchHasText,
    searchHasText,
  } = useTabController();

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (e.keyCode !== 40 && e.keyCode !== 38) {
      resetActiveElementIndex();
      refine(value);
    } else {
      e.preventDefault();
    }

    setSearchHasText(valHasLength(value));
  };

  const checkIfSearchHasText = (e) => {
    const { value } = e.target;
    setSearchHasText(valHasLength(value));
  };

  return (
    <div className="ais-SearchBox">
      <form
        className="ais-SearchBox-form m-0"
        noValidate
        role="search"
      >
        <input
          className={`${searchHasText ? 'focused' : ''} ais-SearchBox-input p-3 border rounded w-full`}
          type="search"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="Search here..."
          value={currentRefinement}
          aria-label="Search for a resource by typing here"
          onChange={handleOnChange}
          onFocus={checkIfSearchHasText}
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
