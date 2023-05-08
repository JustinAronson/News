import logo from './logo.svg';
import './App.css';
import Articles from './Articles.js';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [articleDict, setArticleDict] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // prevent page refresh

    // 👇️ access input values here
    console.log('searchInput', searchInput);

    fetchSearch()
    // 👇️ clear all input values in the form
    // setSearchInput('');
  };

  async function fetchSearch() {
    console.log("In fetch search");
    // setArticleDict('');
    var test = ''
    if (searchInput == '') {
      console.log('Search term is empty')
    }
    var response = await fetch(`http://127.0.0.1:8000/${searchInput}`)
    var responseJson = await response.json()
    if (responseJson instanceof Error) {
      console.log('It is an error!');
    }
    else {
      console.log(responseJson);
      // setArticleDict(JSON.parse(responseJson));
      setArticleDict(responseJson);
    }
  }
  const article_test = {
    // "props": {
      "Article 1": [1.23, 4.56],
      "Article 2": [2.34, 5.67],
      "Article 3": [3.45, 6.78],
      "Article 4": [4.56, 7.89],
      "Article 5": [5.67, 8.90],
      "Article 6": [6.78, 9.01],
      "Article 7": [7.89, 1.12],
      "Article 8": [8.90, 2.23],
      "Article 9": [9.01, 3.34],
      "Article 10": [1.12, 4.45]
    // }
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input 
            id="searchInput"
            name="searchInput"
            type="text" 
            placeholder="Search"
            onChange={event => setSearchInput(event.target.value)}
            value={searchInput}></input>
          <button type="submit">Submit form</button>
        </form>
        

      </header>
      <div>
        <Articles props={article_test}/>
        {/*articleDict ? <Articles props={articleDict}/> : <div></div>*/}
      </div>
         
      
    </div>
  );
}


export default App;
