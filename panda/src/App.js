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
  
  const [articleTest, setArticleTest] = useState('');
  setArticleTest(article_test = {
    // "props": {
      "Article 1": {"url": "google.com", "dataDrivenIndex": 1.23, "anecdotalIndex": 4.56},
      "Article 2": {"url": "cnn.com", "dataDrivenIndex": 2.34, "anecdotalIndex": 2.56},
      "Article 3": {"url": "nytimes.com", "dataDrivenIndex": 4.23, "anecdotalIndex": 3.56},
      "Article 4": {"url": "abc.com", "dataDrivenIndex": 5.23, "anecdotalIndex": 4.56},
      "Article 5": {"url": "xyz.com", "dataDrivenIndex": 6.23, "anecdotalIndex": 5.56},
      "Article 6": {"url": "jjjj.com", "dataDrivenIndex": 7.23, "anecdotalIndex": 6.56},
      "Article 7": {"url": "foxnews.com", "dataDrivenIndex": 8.23, "anecdotalIndex": 7.56},
      "Article 8": {"url": "msnbc.com", "dataDrivenIndex": 9.23, "anecdotalIndex": 8.56},
      "Article 9": {"url": "hold.com", "dataDrivenIndex": 10.23, "anecdotalIndex": 9.56},
      "Article 10": {"url": "test.com", "dataDrivenIndex": 11.23, "anecdotalIndex": 10.56}
    // }
  })
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
