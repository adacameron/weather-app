/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      return onSubmit();
    }
    return null;
  };

  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button
        type="submit"
        className="search-form__button"
        onClick={onSubmit}
        onKeyPress={handleEnter}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
