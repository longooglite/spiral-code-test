import React from 'react';

// 100% wouldn't have gotten this without googling, thanks nextjs for including dynamic routing in v9
import {useRouter} from 'next/router'

import {Header} from '../../components/header';
import {DrinkContext} from '../../contexts/drink-context';
import {DrinkMainImage} from '../../components/drink-main-image';
import {DrinkDetails} from '../../components/drink-details';

const URL_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getKeysByStart = (data, startString) => Object.entries(data).filter(([key, value]) => value && key.startsWith(startString)).map(([key, value]) => value);

const getIngredients = (data) => getKeysByStart(data, 'strIngredient');
const getMeasures = (data) => getKeysByStart(data, 'strMeasure');

const parseDrink = (rawDrink) => {
    const ingredients = getIngredients(rawDrink);
    const measures = getMeasures(rawDrink);
    return {
        name: rawDrink.strDrink,
        instructions: rawDrink.strInstructions,
        thumbnail: rawDrink.strDrinkThumb,
        measures,
        ingredients,
    };
};

const Drink = () => {
    const router = useRouter();
    const {drink: drinkId} = router.query;
    const [loading, setLoading] = React.useState(true);
    const [{
        name,
        thumbnail,
        ingredients,
        measures,
        instructions,
    }, setDrink] = React.useState({
        name: '',
        thumbnail: '',
        instructions: '',
        ingredients: [],
        measures: [],
    });

    React.useEffect(() => {
        if (drinkId) {
            fetch(`${URL_BASE}${drinkId}`)
                .then((response:Response) => {
                    return response.json();
                })
                .then(({drinks}:{drinks:Array<any>}) => {
                    if (drinks.length === 1) {
                        const rawDrink = drinks[0];
                        setDrink(parseDrink(rawDrink));
                    } else {
                        throw 'Either a collision or an id not mapped to a drink';
                    }

                })
                .finally(() => {
                    setLoading(false);
                })
                .catch((error:PromiseRejectedResult) => {
                    console.error(error);
                });
        }
    }, [drinkId])

    if (loading) {
        return 'Loading';
    }

    return (
        <DrinkContext.Provider
            value={{
                ingredients,
                measures,
                name,
                image: thumbnail,
                instructions,
            }}
        >
            <Header subtitle={name} />
            <DrinkMainImage />
            <DrinkDetails />
        </DrinkContext.Provider>
    );
}

export default Drink;
