import React from 'react';


const defaultValues = {
    setSearchResults: (resultItems:Array<any>) => {},
    searchResults: [],
};

export const SearchResultsContext = React.createContext(defaultValues);
