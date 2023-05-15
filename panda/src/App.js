import logo from './logo.svg';
import './App.css';
import Articles from './Articles.js';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [articleDict, setArticleDict] = useState('');
  // Defining articleTest state from the beginning
  const [articleTest, setArticleTest] = useState({
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
});

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
    var response = await fetch(`http://127.0.0.1:8000/${searchInput}?dimension=theoretical&dimension=historical&dimension=statistical`)
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

  return (
    <div className="App">

      <div className="shadow bg-gray-800">

            <ul class="flex py-2 shadow bg-gray-800">
              <li class="flex-1 mr-2">
                  <p className="font-bold text-2xl text-gray-300">PANDA</p>
              </li>
              <li class="flex-1 mr-2"></li>
              <li class="flex-1 mr-2"></li>
              <li class="flex-1 mr-2">
              <a href="#" class=" transition-colors duration-300 transform text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>
            </li>
            <li class="flex-1 mr-2">
              <a href="#" class="border-b-2 border-transparent transition-colors duration-300 transform text-gray-300 hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</a>
            </li>
            <li class="text-center flex-1">
            <a href="https://github.com/JustinAronson/News/tree/reactWebsite" class="border-b-2 border-transparent transition-colors duration-300 transform text-gray-300 hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">GitHub</a>
            </li>
            </ul>
        </div>


      <div class="max-w-2xl p-8">
          <label class="block text-left text-lg font-medium text-gray-800 pb-4">Search Articles</label>
          
          <form onSubmit={handleSubmit}>   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input 
                    onChange={event => setSearchInput(event.target.value)}
                    value={searchInput}
                    placeholder="Search News Articles..." 
                    type="search" 
                    name="searchInput"
                    id="default-search" 
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required/>
                    <button 
                      type="submit" 
                      class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Search
                    </button>
              </div>
          </form>
      </div>

      <div>
        {/* <Articles props={articleTest}/> */}
        {articleDict ? <Articles props={articleDict}/> : <div></div>}
      </div>
         
      
    </div>
  );
}


export default App;
