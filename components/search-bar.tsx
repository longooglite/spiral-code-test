import React from 'react';
import styled from '@emotion/styled';

import {SearchResultsContext} from '../contexts/search-results-context';
import {SearchInput} from './search-input';

const StyledWrapper = styled.div`
    margin-top: 70px;
`;

const URL_BASE = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';

export const SearchBar = () => {
    const [loading, setLoading] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');
    const {setSearchResults} = React.useContext(SearchResultsContext);

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        // In production, I'd debounce this and either front or back end, ensure it's sanitized
        setSearchTerm(e.currentTarget.value);
    };

    React.useEffect(() => {
        if (searchTerm) {
            setLoading(true);
            fetch(`${URL_BASE}${searchTerm}`)
                .then((response:Response) => {
                    return response.json();
                })
                .then(({drinks}:{drinks:Array<any>}) => {
                    setSearchResults(drinks);
                })
                .catch((error:PromiseRejectedResult) => {
                    console.error(error);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [searchTerm, setSearchResults])

    return (
        <StyledWrapper>
            <SearchInput
                onChange={changeHandler}
            />
        </StyledWrapper>
    );
};
