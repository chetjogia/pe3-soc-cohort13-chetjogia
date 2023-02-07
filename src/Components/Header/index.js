import SearchBar from "../SearchBar";
import "./index.css";

function Header({getNewsData, filter, showFilter}) {
  return (
    <div className="header-container">
      <h1 className="app-title">Percayso Inform News</h1>
      <SearchBar getNewsData={getNewsData} filter={filter} showFilter={showFilter}/>
      <nav className="nav-bar">
        <a>Top Stories</a>
        <a>Language/Region</a>
      </nav>
   
    </div>
  );
}

export default Header;
