import "./App.css";
import Header from "../Header";
import { useState, useEffect } from "react";
import NewsContainer from "../NewsContainer";
import SearchBar from "../SearchBar";


function App() {
  const [newsData, setNewsData] = useState([]);
  const [language, setLanguage] = useState("")
  
  useEffect(() => {async function topNewsOnRender(){
    let queryString = `https://gnews.io/api/v4/top-headlines?&category=general&apikey=${process.env.REACT_APP_API_KEY}`
    console.log(queryString)
    const response = await fetch(
      queryString
    );
    const data = await response.json();
      console.log(data)
    setNewsData(data.articles)
  }
   topNewsOnRender()
  }, []);
  console.log(process.env.API_KEY)

  function handleLanguage(chosenLanguage){
    console.log(chosenLanguage)
      setLanguage(chosenLanguage)
  }

  async function getTopNews(category, language){
    console.log("LANG", language)
    let queryString = `https://gnews.io/api/v4/top-headlines?lang=${language}&category=${category}&apikey=${process.env.REACT_APP_API_KEY}`
    console.log(queryString)
    const response = await fetch(
      queryString
    );
    const data = await response.json();
      console.log(data)
    setNewsData(data.articles)
  }
  

  async function getNewsData(newsQuery) {
    newsQuery.today = new Date().toJSON();
    if(newsQuery.country === "newspaper"){
      newsQuery.country = '""'
    }

    if (newsQuery.date === "24") {
      let today = new Date();
      let date = today.getDate();
      let newDate = date - 1;
      console.log("DATE", newDate);
      today.setDate(newDate);
      newsQuery.date = today.toJSON();
    }
    else if(newsQuery.date === "week"){
      let today = new Date();
      let date = today.getDate();
      let newDate = date - 7;
      console.log("DATE", newDate);
      today.setDate(newDate);
      newsQuery.date = today.toJSON();
    }
    else if(newsQuery.date === "month"){
      let today = new Date();
      let date = today.getDate();
      let newDate = date - 30;
      console.log("DATE", newDate);
      today.setDate(newDate);
      newsQuery.date = today.toJSON();
    }
    else if(newsQuery.date === "year"){
      let today = new Date();
      let date = today.getDate();
      let newDate = date - 365;
      console.log("DATE", newDate);
      today.setDate(newDate);
      newsQuery.date = today.toJSON();
    }
    else if(newsQuery.date === ""){
      newsQuery.date = ""
      newsQuery.today = ""
    }
    let queryString = `https://gnews.io/api/v4/search?q=${newsQuery.search}&sortby=${newsQuery.sortby}&country=${newsQuery.country}&to="${newsQuery.today}"&from="${newsQuery.date}"&lang=${language}&apikey=${process.env.REACT_APP_API_KEY}`
    console.log("QUERY STRING", queryString)
    console.log(newsQuery);
     const response = await fetch(
      queryString
    );
    const data = await response.json();
      console.log(data)

    setNewsData(data.articles)
  }

  return (
    <div className="App">
      <Header getNewsData={getNewsData} getTopNews={getTopNews} handleLanguage={handleLanguage} />
      <SearchBar getNewsData={getNewsData} />
      <NewsContainer  newsData={newsData} />
    </div>
  );
}

export default App;
