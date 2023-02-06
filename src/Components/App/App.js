import './App.css';
import Header from '../Header';
import SearchBar from '../SearchBar';
import {data} from '../../testdata'

function App() {

  async function getNewsData(){
  const response = await fetch('https://gnews.io/api/v4/search?q="boxing"&in=title&apikey=1ef7f63af57bb2ddf8cd7522aa776eee')
  const data = await response.json()

  console.log(data)
  }

  //getNewsData()
  console.log(data)

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;


