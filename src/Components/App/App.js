import "./App.css";
import Header from "../Header";
import { data } from "../../testdata";
import { useState, useEffect } from "react";
import NewsContainer from "../NewsContainer";

function App() {
  const [filter, setFilter] = useState("hidden");
  const [newsData, setNewsData] = useState();

  useEffect(() => {}, []);

  function showFilter() {
    setFilter("search-filters");
  }

  async function getNewsData() {
    const response = await fetch(
      'https://gnews.io/api/v4/search?q="boxing"&in=title&apikey=1ef7f63af57bb2ddf8cd7522aa776eee'
    );
    const data = await response.json();

    console.log(data);
    setFilter("hidden");
  }


  return (
    <div className="App">
      <Header
        getNewsData={getNewsData}
        filter={filter}
        showFilter={showFilter}
      />
      <NewsContainer />
    </div>
  );
}

export default App;
