import React from 'react';

import {SearchBar} from '../components/search-bar';
import {Header} from '../components/header';
import {SearchResults} from '../components/search-results';

import {SearchResultsContext} from '../contexts/search-results-context';

const Search = () => {
    const [results, setResults] = React.useState([]);
    return (
        <SearchResultsContext.Provider
            value={{
                searchResults: results,
                setSearchResults: setResults,
            }}
        >
            <Header subtitle='Find a Drink' />
            <SearchBar />
            <SearchResults />
        </SearchResultsContext.Provider>
    );
}

export default Search;
