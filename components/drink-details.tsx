import React from 'react';
import styled from '@emotion/styled';

import {MeasuresPieChart} from './measures-pie-chart';
import {DrinkIngredientsList} from './drink-ingredients-list';
import {DrinkInstructions} from './drink-instructions';
const DetailsSection = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-around;
`;

export const DrinkDetails = () => (
    <DetailsSection>
        <MeasuresPieChart/>
        <DrinkIngredientsList />
        <DrinkInstructions />
    </DetailsSection>
);
