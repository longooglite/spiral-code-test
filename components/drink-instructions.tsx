import React from 'react';
import styled from '@emotion/styled';

import {DrinkContext} from '../contexts/drink-context';

const Instructions = styled.p`
    display: inline-block;
    width: 25vw;
`;

export const DrinkInstructions = () => {
    const {instructions} = React.useContext(DrinkContext);
    return (
        <div>
            <h3>Instructions</h3>
            <Instructions>
                {instructions}
            </Instructions>
        </div>
    );
};
