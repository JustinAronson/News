import logo from './logo.svg';
import './App.css';
import Articles from './Articles.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <input type="text" placeholder="Search" name="searchBox"></input>
        
        <Articles/>
      </header>
    </div>
  );
}

export default App;
