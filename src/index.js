import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDinKHsiu9UNKYh9ZHXxQs3f-v4vLqlpyg';

YTSearch({key: API_KEY, term: 'swimming'}, function(data) {
    console.log(data);
});

// create a new componet and make sure it gets converted to html

const App = () => {
    return (
        <div>
            <SearchBar />
            <div>Hello</div>
            
        </div>
    );
}


// take this component and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'));
