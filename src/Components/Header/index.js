import SearchBar from "../SearchBar";
import "./index.css";

function Header() {
  return (
    <div className="header-container">
      <h1 className="app-title">Percayso Inform News</h1>
      <SearchBar />
      <nav>
        <a>Top Stories</a>
        <a>Language/Region</a>
      </nav>
   
    </div>
  );
}

export default Header;
