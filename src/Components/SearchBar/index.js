import "./index.css";
import { CiSearch } from "react-icons/ci";
import { countries } from "../../countrydata.js";


function SearchBar({getNewsData, filter, showFilter}) {
 


  return (
    <div className="search-div">
      <div className="search-bar-and-button">
        <button onClick={showFilter}>Filter</button>
        <input type="text"></input>
        <button onClick={getNewsData} className="search-button">
          <CiSearch />
        </button>
      </div>
      <div  className={filter}>
        <div className="exact">
          <label>Exact phrase: </label>
          <input type="text"></input>
        </div>
        <div className="has-words">
          <label>Contains: </label>
          <input type="text"></input>
        </div>
        <div className="excludes">
          <label>Exclude words: </label>
          <input type="text"></input>
        </div>
        <div className="sort-container">
          <label>Sort By:</label>
          <select name="sort" value="sort">
            <option value="date">Date</option>
            <option value="relevance">Relevance</option>
          </select>
        </div>
        <div className="country">
          <label>Country: </label>
          <select name="country" value="country">
            <option value="newspaper">Please select a country</option>
            {countries.map((element) => (
              <option value={element[1]}>{element[0]}</option>
            ))}
          </select>
        </div>

        <div className="time-frame">
          <label>Date: </label>
          <select name="date" value="date">
            <option value="24">Past 24 Hours</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
            <option value="range">Custom Range</option>
          </select>
          {/* Remember to change the state to hide show data fields */}
          <div className="date-container">
            <div className="custom-date">
              <label>From:</label>
              <input type="date" hidden={false}></input>
            </div>
            <div className="custom-date">
              <label>To:</label>
              <input type="date" hidden={false}></input>
            </div>
          </div>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
