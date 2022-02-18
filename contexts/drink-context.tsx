import React from 'react';


const defaultValues = {
    ingredients: [],
    measures: [],
    name: '',
    instructions: '',
    image: '',
};

export const DrinkContext = React.createContext(defaultValues);
