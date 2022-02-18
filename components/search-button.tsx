import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
    display: inline-flex;
`;

export const SearchButton = ({loading, onClick}: {loading: boolean, onClick: Function}) => {

    return (
        <StyledButton
            disabled={loading}
            onClick={() => {
                onClick();
            }}
        >
            Search
        </StyledButton>
    );
};
