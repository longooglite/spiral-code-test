import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
    display: inline-flex;
    width: 100%;
    border: 0;
    border-bottom: solid #dddddd 1px;
    outline: 0;
    font-size: 24pt;
    background: #eeeeee;
`;

export const SearchInput = ({onChange}: {onChange: React.ChangeEventHandler}) => {
    return (
        <StyledInput
            placeholder='Find a drink'
            onChange={onChange}
        />
    );
};
