import React from 'react';
import styled from '@emotion/styled';

import {DrinkContext} from '../contexts/drink-context';

const MainImage = styled.img`
    height: 150px;
    display: block;
    margin: 70px auto 0 auto;
    border-radius: 50%;
`;

export const DrinkMainImage = () => {
    const {image} = React.useContext(DrinkContext);
    return (
        <MainImage src={image} />
    );
};
