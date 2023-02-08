import SearchBar from "../SearchBar";
import "./index.css";
import { useRef } from "react";
import { languages } from "../../countrydata";
import logo from "../../percaysologo.png";
function Header({ getNewsData, handleLanguage, getTopNews }) {
  const language = useRef("");

  return (
    <div className="top-container">
      <div className="header-container">
        {/*   <h1 className="app-title">Percayso Inform News</h1> */}
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <nav className="nav-bar">
          <div className="set-region">
            <label>Set Region/Language:</label>
            <select
              ref={language}
              onChange={() => handleLanguage(language.current.value)}
            >
              <option value="">All</option>
              {languages.map((element) => (
                <option value={element[1]}>{element[0]}</option>
              ))}
            </select>
          </div>
        </nav>
      </div>
      <div className="top-stories">
        <button
          className="category-button"
          onClick={() => getTopNews("general", language.current.value)}
        >
          Top Stories
        </button>
        <button
          className="category-button"
          onClick={() => getTopNews("world", language.current.value)}
        >
          World
        </button>
        <button
          className="category-button"
          onClick={() => getTopNews("nation", language.current.value)}
        >
          Nation
        </button>
        <button
          className="category-button"
          onClick={() => getTopNews("business", language.current.value)}
        >
          Business
        </button>
        <button
          className="category-button"
          onClick={() => getTopNews("entertainment", language.current.value)}
        >
          Entertainment
        </button>
        <button
          className="category-button"
          onClick={() => getTopNews("sports", language.current.value)}
        >
          Sports
        </button>
        <button
          className="category-button"
          onClick={() => getTopNews("science", language.current.value)}
        >
          Science
        </button>
        <button
          className="category-button"
          onClick={() => getTopNews("health", language.current.value)}
        >
          Health
        </button>
      </div>
    </div>
  );
}

export default Header;
