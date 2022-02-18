import React from 'react';
import styled from '@emotion/styled';

import {DrinkContext} from '../contexts/drink-context';

const IngredientList = styled.ul`
    list-style-type: none;
    display: inline-block;
    width: 25vw;
    margin: 0;
`;

export const DrinkIngredientsList = () => {
    const {measures, ingredients} = React.useContext(DrinkContext);
    return (
        <div>
            <h3>Ingredients</h3>
            <IngredientList>
                {ingredients.map((ingredient, index) => (
                    <li key={`ingredient-${ingredient}`}>{ingredient}{measures[index] ? `: ${measures[index]}` : ''}</li>
                ))}
            </IngredientList>
        </div>
    );
};
