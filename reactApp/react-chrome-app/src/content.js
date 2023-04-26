import('./Articles.js')
import('./reactApp/react-chrome-app/node_modules/react')

// content.js
alert('Hello, world!');
createList(["asdfasdf","asdfasdfdfdfd"])

// Call categorizer from python

function createList(data) {

    return <Articles props={data}></Articles>
    
}