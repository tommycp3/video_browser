import React from 'react';
import ReactDOM from 'react-dom';



// create a new componet and make sure it gets converted to html

const App = () => {
    return <div>Hi! </div>;
}


// take this component and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'));
