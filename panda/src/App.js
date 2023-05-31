import logo from './logo.svg';
import './App.css';
import Articles from './Articles.js';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [dimensionValues, setDimensionValues] = useState([''])
  const [articleDict, setArticleDict] = useState('');
  const [dimensionToSort, setDimensionToSort] = useState("Data DrivenIndex")
  // Defining articleTest state from the beginning
  // Test Article with only a 'personal' perspective index?
  const [articleTest, setArticleTest] = useState(
    {
        "AG Pax­ton Sues Bat­tle­ground States for Uncon­sti­tu­tion­al Changes to 2020 Elec­tion Laws": {
            "AnecdotalIndex": 37,
            "Data DrivenIndex": 16,
            "PersonalIndex": "3",
            "url": "https://www.texasattorneygeneral.gov/news/releases/ag-paxton-sues-battleground-states-unconstitutional-changes-2020-election-laws"
        },
        "DOD Has Enduring Role in Election Defense": {
            "AnecdotalIndex": 48,
            "Data DrivenIndex": 9,
            "PersonalIndex": "7",
            "url": "https://www.defense.gov/News/News-Stories/Article/Article/2078716/dod-has-enduring-role-in-election-defense/"
        },
        "Did fake news influence the outcome of Election 2016?": {
            "AnecdotalIndex": 100,
            "Data DrivenIndex": 24,
            "PersonalIndex": "7",
            "url": "https://www.pbs.org/newshour/classroom/2016/11/why-is-it-important-for-news-sources-to-be-trustworthy/"
        },
        "Early vote count surpasses ordinary midterm turnout": {
            "AnecdotalIndex": 24,
            "Data DrivenIndex": 100,
            "PersonalIndex": "7",
            "url": "https://abcnews.go.com/Politics/national-early-vote-counts-hit-million-surpassing-ordinary/story?id=91620263"
        },
        "Election 2016: Campaigns as a Direct Source of News": {
            "AnecdotalIndex": 73,
            "Data DrivenIndex": 73,
            "PersonalIndex": "4",
            "url": "https://www.pewresearch.org/journalism/2016/07/18/election-2016-campaigns-as-a-direct-source-of-news/"
        },
        "Election Crimes and Security — FBI": {
            "AnecdotalIndex": 48,
            "Data DrivenIndex": 0,
            "url": "https://www.fbi.gov/how-we-can-help-you/safety-resources/scams-and-safety/common-scams-and-crimes/election-crimes-and-security"
        },
        "Election coverage: Newspapers": {
            "AnecdotalIndex": 33,
            "Data DrivenIndex": 0,
            "PersonalIndex": "5",
            "url": "https://www.jfklibrary.org/asset-viewer/archives/JFKCAMP1960/1045/JFKCAMP1960-1045-009"
        },
        "Revealed: 50 million Facebook profiles harvested for Cambridge Analytica in major data breach": {
            "AnecdotalIndex": 50,
            "Data DrivenIndex": 20,
            "PersonalIndex": "10",
            "url": "https://www.theguardian.com/news/2018/mar/17/cambridge-analytica-facebook-influence-us-election"
        },
        "Stanford study examines fake news and the 2016 presidential election": {
            "AnecdotalIndex": 62,
            "Data DrivenIndex": 33,
            "PersonalIndex": "3",
            "url": "https://news.stanford.edu/2017/01/18/stanford-study-examines-fake-news-2016-presidential-election/"
        },
        "What are midterm elections, and why are they important?": {
            "AnecdotalIndex": 12,
            "Data DrivenIndex": 15,
            "PersonalIndex": "7",
            "url": "https://it.usembassy.gov/what-are-midterm-elections-and-why-are-they-important/"
        }
    });



  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // prevent page refresh

    // 👇️ access input values here
    console.log('searchInput', searchInput);

    setArticleDict({})

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

    var dimensionURLExtension = ''
    for (var i=0; i < dimensionValues.length; i++) {
      if (dimensionValues[i] != '') {
        if (i==0) {
          dimensionURLExtension += '?dimension='+dimensionValues[i]
        } else {
          dimensionURLExtension += '&dimension='+dimensionValues[i]
        }
      }
    }

    console.log(`http://127.0.0.1:8000/${searchInput}` + dimensionURLExtension)

    var response = await fetch(`http://127.0.0.1:8000/${searchInput}` + dimensionURLExtension)
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

  let handleChange = (i, e) => {
    let newDimensionValues = [...dimensionValues];
    newDimensionValues[i] = e.target.value;
    setDimensionValues(newDimensionValues);
  }
    
  let addDimensionFields = () => {
      setDimensionValues([...dimensionValues, ''])
  }

  let removeDimensionFields = (i) => {
      let newDimensionValues = [...dimensionValues];
      newDimensionValues.splice(i, 1);
      setDimensionValues(newDimensionValues)
  }

  let setDimensionToSortHelp = (e) => {
    setDimensionToSort(e)
  }


  return (
    <div className="App">
      <div className="shadow bg-gray-800">
            <ul className="flex py-4 shadow bg-gray-800">
              <li className="flex-1 mr-2">
                  <p className="font-bold text-2xl text-gray-300">PANDA</p>
              </li>
              <li className="flex-1 mr-2"></li>
              <li className="flex-1 mr-2"></li>
              <li className="flex-1 mr-2">
              <a href="#" className=" transition-colors duration-300 transform text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>
            </li>
            <li className="flex-1 mr-2">
              <a href="#" className="border-b-2 border-transparent transition-colors duration-300 transform text-gray-300 hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</a>
            </li>
            <li className="text-center flex-1">
            <a href="https://github.com/JustinAronson/News/tree/reactWebsite" className="border-b-2 border-transparent transition-colors duration-300 transform text-gray-300 hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">GitHub</a>
            </li>
            </ul>
        </div>


      <div className="p-8">
          <div className="flex flex-row">
            <div className="w-1/2 px-8">
              <label className="block text-left text-4xl font-medium text-gray-800 pb-4">Search Articles</label>
            </div>
            <div className="w-1/2 px-8">
            <label className="block text-left text-4xl font-medium text-gray-800 pb-4">Add Dimensions</label>
            </div>
          </div>
          

          <form onSubmit={handleSubmit}>   
            <div className="flex flex-row">
              <div className="w-1/2 h-14 max-h-14 relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>

                  <input 
                    onChange={event => setSearchInput(event.target.value)}
                    value={searchInput}
                    placeholder="Search News Articles..." 
                    type="search" 
                    name="searchInput"
                    id="default-search" 
                    className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                    required/>

                <div className="button-section">
                    
                    <button type="submit" 
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                      Submit</button>
                </div>

              </div>
              <div className="w-1/2 flex flex-col">
                {dimensionValues.map((element, index) => (
                    <div className="form-inline flex-row" key={index}>

                      <input type="text" 
                              placeholder="Insert Dimension..." 
                              class="mt-2 w-1/2 placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" 
                             
                              name="dimension" 
                              value={element || ""} 
                              onChange={e => handleChange(index, e)}
                             
                             />

                      {
                        index ? 
                          <button type="button"  className="button remove px-4" onClick={() => removeDimensionFields(index)}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>                          </button>
                        : <button className="px-7"></button>
                      }
                    </div>
                  ))}
                  <button type="button" onClick={() => addDimensionFields()}
                      >Add</button>
              </div>
            </div>
          </form>
      </div>

{/* Add buttons to get dimension to sort on */}
      {/* <form>
        <input type="radio" id="option1" name="options" value="option1"/>
        <label for="option1">Option 1</label>
      </form> */}

        {/* Buttons for sorting by Data Driven or Anecdotal */}
        <div>
          <label >Sort By Data-Driven Index </label>
          <input type="radio"
          checked={dimensionToSort === "Data DrivenIndex"}
          onChange={event => setDimensionToSort("Data DrivenIndex")}/> 
        </div>
        <div>
          <label >Sory By Anecdotal Index </label>
          <input type="radio"
          checked={dimensionToSort === "AnecdotalIndex"}
          onChange={event => setDimensionToSort("AnecdotalIndex")}/> 
        </div>

        {/* Buttons for sorting other dimensions */}
      {dimensionValues.map(function(dimension) {
        if (dimension != "Data Driven" && dimension != "Anecdotal") {
          return( 
        <div>
        <label >Sort by {dimension} Index </label>
        <input type="radio" 
        checked={dimensionToSort === dimension+"Index"}
        onChange={event => setDimensionToSortHelp(dimension+"Index")}/> 
        </div>)
        }
      }) }
      {dimensionValues.map(function(dimension) {
        <div>
        {dimension}
        </div>
      })}

      <div> 
        {articleDict ? <Articles props={[articleDict, dimensionToSort]}/> : <div></div>}
      </div>
         
      
    </div>
  );
}


export default App;
