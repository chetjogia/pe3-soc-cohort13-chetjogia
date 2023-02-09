import "./index.css";
import { CiSearch } from "react-icons/ci";
import { countries } from "../../countrydata.js";
import { useRef } from "react";

function SearchBar({ getNewsData }) {
  const search = useRef("");
  const sort = useRef("");
  const country = useRef("");
  const date = useRef("");

  return (
    <div className="search-div">
      <div className="search-bar-and-button">
        <input ref={search} type="text"></input>
        <button
          onClick={() =>
            getNewsData({
              search: search.current.value,
              sortby: sort.current.value,
              country: country.current.value,
              date: date.current.value,
            })
          }
          className="search-button"
        >
          <CiSearch className="search-icon" />
        </button>
      </div>

      <div className="search-filters">
        <div className="sort-container">
          <label htmlFor="sort">Sort:</label>
          <select id="sort" ref={sort} name="sort">
            <option value="publishedAt">Date</option>
            <option value="relevance">Relevance</option>
          </select>
        </div>

        <div className="country">
          <label htmlFor="country">Country: </label>
          <select id="country" ref={country} name="country">
            <option value="newspaper">Please select a country</option>
            {countries.map((element) => (
              <option key={element[1]} value={element[1]}>
                {element[0]}
              </option>
            ))}
          </select>
        </div>

        <div className="time-frame">
          <label htmlFor="date">Date: </label>
          <select id="date" ref={date} name="date">
            <option value="24">Past 24 Hours</option>
            <option value="week">Last Week</option>
            <option value="month">30 Days</option>
            <option value="year">Last Year</option>
            <option value="">All Time</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
