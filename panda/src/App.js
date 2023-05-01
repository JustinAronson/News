import logo from './logo.svg';
import './App.css';
import Articles from './Articles.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <input type="text" placeholder="Search" name="searchBox"></input>
        <button id="fetch-button">Fetch JSON Data</button>
        <Articles />
      </header>
    </div>
  );
}

async function logJSONData() {
  const response = await fetch("http://example.com/movies.json");
  const jsonData = await response.json();
  console.log(jsonData);
}

const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click", logJSONData);

export default App;
