import SearchBar from "../SearchBar";
import "./index.css";

function Header() {
  return (
    <div className="header-container">
      <h1 className="app-title">NEWS APP</h1>
      <SearchBar />
    </div>
  );
}

export default Header;
