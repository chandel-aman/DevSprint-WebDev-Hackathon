import React from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
  const handleChange = (e) => {
    const searchText = e.target.value;
    if(searchText.trim().length > 0) {
      props.setSearchedMovie(searchText.trim());
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          className="search"
          type="text"
          placeholder="Search for movies"
          onChange={handleChange}
        />
      </div>

      <Link to={"/search/movie/query=" + props.searchedMovie}>
        <button className="search-btn" onClick={props.fetchSearch}>
          Search
        </button>
      </Link>
    </div>
  );
};

export default Search;
