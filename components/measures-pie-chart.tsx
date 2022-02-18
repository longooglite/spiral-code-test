
import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

// I have experience with both d3 and high charts, but they seemed sooooooo overkill for this
import {PieChart} from 'react-minimal-pie-chart';
import {DrinkContext} from '../contexts/drink-context';

const StyledPieChart = styled(PieChart)`
    height: 200px;
    width: 20vw;
`;

const LabelStyles = {
    fill: 'white',
    fontSize: '6pt',
};

const COLORS = [
    '#d83175',
    '#ad275e',
    '#821d46',
    '#56142f',
    '#410f23',
    '#d83175',
    '#ad275e',
    '#821d46',
    '#56142f',
    '#410f23',
];

const fractionRegex = /[1-9]\/[1-9]/;
const fractionOrNumberRegEx = /[1-9]\/?[1-9]?/;

const isFraction = (string:string) => {
    return string.match(fractionRegex);
};

const fractionToDecimal = (fractionString:string) => {
    const [numerator, denominator] = fractionString.split('/');
    return Number(numerator) / Number(denominator);
}

const isNumberOrFraction = (string:string) => {
    return string.match(fractionOrNumberRegEx);
};

const measurableUnits = [
    'OZ',
    'CL',
    'CUP',
    'CUPS',
    'ML',
    'JIGGERS',
    'JIGGER',
    'PART',
    'PARTS',
]

const hasMeasurableIngredients = (string:string) => {
    return measurableUnits.find((checkValue) => string.toUpperCase().includes(checkValue));
}

const parseMeasures = (measures:Array<string>) => {
    if (!Array.isArray(measures)) {
        return [];
    }

    const cleanedStrings = measures.map((string:string) => string.trim());
    const zeroOutDiscreteIngredients = cleanedStrings.map((string) => (hasMeasurableIngredients(string)) ? string: '');
    const numericalPairs = zeroOutDiscreteIngredients.map((stringToParse) => stringToParse.split(' ').filter(isNumberOrFraction));

    const flattenedNumbers = numericalPairs.map((arrayToFlatten) => {
        return arrayToFlatten.reduce((total, current) => {
            if (isFraction(current)) {
                return fractionToDecimal(current) + total;
            }
            return total + Number(current);
        }, 0);
    });
    return flattenedNumbers;
};
const zipMeasuresAndIngredients = (parsedIngredients:Array<string>, parsedMeasures:Array<number>) => {
    if (!Array.isArray(parsedIngredients)) {
        return [];
    }
    return parsedIngredients.reduce((acc, currentIngredient, index) => {
        return [...acc, [currentIngredient, parsedMeasures[index]]];
    }, [])
};


export const MeasuresPieChart = () => {
    const {measures, ingredients} = React.useContext(DrinkContext);
    const parsedMeasures = parseMeasures(measures);
    const measuredPairs = zipMeasuresAndIngredients(ingredients, parsedMeasures).map(([title, value], index) => ({title, value, color: COLORS[index]}));
    const chartData = measuredPairs.filter(({value}) => value);
    return (
        <StyledPieChart
            data={chartData}
            label={({dataEntry}) => dataEntry.title}
            labelStyle={() => LabelStyles}
        />
    );

};