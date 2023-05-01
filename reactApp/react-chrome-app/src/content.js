// import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import Articles from './Articles';
// Call categorizer from python
function createList(data) {
  console.log("In src Folder");
  // render the Articles component to the DOM
  ReactDOM.render(<Articles props={data} />, document.getElementById('root'));
}
createList(["asdfasdf","asdfasdfdfdfd"]);
