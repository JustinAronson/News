import logo from './logo.svg';
import './App.css';
import Articles from './Articles.js';
import { useState } from 'react';
import axios from 'axios';
/*
try {
  const response = await axios.get(`http://127.0.0.1:5000/${searchVal}.json`);
  console.log("getting response");
  const jsonData = await response.json();
  setSearchResults(jsonData)
  console.log("getting jsonData");
  console.log(jsonData);

  
  } catch (err) {
    console.log('Couldn\'t execute fetch');
    console.log('Error: ')
    console.log(err)
  }

*/

function App() {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // prevent page refresh

    // 👇️ access input values here
    console.log('searchInput', searchInput);

    fetchSearch()

    // 👇️ clear all input values in the form
    setSearchInput('');
  };

  async function fetchSearch() {
    console.log("In fetch search");
    // var searchVal = document.getElementById("searchInput").value
    
    //async function logJSONData() {
    
    //}
    //const axios = require('axios').default;
// axios.<method> will now provide autocomplete and parameter typings
// Make a request for a user with a given ID
/*
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
*/  var test = ''
    var response = await fetch(`http://127.0.0.1:5000/${searchInput}`)
    var responseJson = await response.json()
    console.log(responseJson)
    // throw new Error(json)
    
    // fetch(`http://127.0.0.1:5000/${searchVal}`)
    //   .then(response => {
    //     test = response

    //     throw new Error(response)
    //     setTimeout(() => {

    //       console.log(response.json());
    //     }, 3000);
    //     console.log(response.json())
        
    //   })
    //   .catch(err => {
    //       console.log(err)
    //       console.log("Search term: " + searchVal)
    //       console.log("URL: " + `http://127.0.0.1:5000/${searchVal}`)
    //     });
    // console.log(test)





    // TypeError: NetworkError when attempting to fetch resource.

    // const axios = require('axios');
    // axios.get(`http://127.0.0.1:5000/${searchVal}`)
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.log(err)
    //   console.log("Search term: " + searchVal)
    //   console.log("URL: " + `http://127.0.0.1:5000/${searchVal}`)
    // });
    
    //TypeError: t(...).get is not a function

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
        <div>

        </div>
      </header>
        {/* <Articles /> */}
      
    </div>
  );
}


export default App;
