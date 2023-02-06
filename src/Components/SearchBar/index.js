import './index.css'
import {CiSearch} from 'react-icons/ci'


function SearchBar() {
  return (
    <div className="search-div">
      <div className="search-bar-and-button">
        <input type="text"></input>
        <button className='search-button'><CiSearch/></button>
      </div>
      <div className="search-filters">
        <select name="date" value="date">
          <option value="24">Past 24 Hours</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
          <option value="range">Custom Range</option>
        </select>
        {/* Remember to change the state to hide show data fields */}
        <div>
          <label>From:</label>
          <input type="date" hidden={false}></input>
        </div>
        <div>
          <label>To:</label>
          <input type="date" hidden={false}></input>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
