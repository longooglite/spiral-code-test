import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link'

import {SearchResultsContext} from '../contexts/search-results-context';

const ResultsList = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    max-width: 800px;
`;

const ResultsListItem = styled.li`
    border-bottom: solid #dddddd 1px;
`;

const DrinkThumbnail = styled.img`
    height: 50px;
    display: inline-block;
    vertical-align: top;
    margin-right: 50px;
`;

const StyledLink = styled.a`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
`;

export const SearchResults = () => {
    const {searchResults} = React.useContext(SearchResultsContext);
    if (!searchResults) {
        return <>Uh Oh! No drinks found.</>;
    }
    return (
        <ResultsList>
            {searchResults.map((
                {strDrink,idDrink,strDrinkThumb}:{strDrink:string, idDrink:string, strDrinkThumb:string},
                ) => (
                <ResultsListItem key={idDrink}>
                    <DrinkThumbnail src={strDrinkThumb} />
                    <Link href={`/drink/${idDrink}`} passHref>
                        <StyledLink>
                            {strDrink}
                        </StyledLink>
                    </Link>
                </ResultsListItem>
            ))}
        </ResultsList>
    );
};
