import React, { useEffect, useState } from "react";

interface IMealDescription {
    id?: number;
    name?: string;
    price?: number;
    description?: string;
    backgroundColor?: string;
    boxShadowColor?: string;
    buttonColor?: string;
}

interface IMealContext {
    increaseMeal: () => void,
    decreaseMeal: () => void,
    currentChoice: number,
    mealDescription: IMealDescription;
}

type Props = {
    children: JSX.Element,
};

export const MealContext = React.createContext<IMealContext>({
    increaseMeal: () => { },
    decreaseMeal: () => { },
    currentChoice: 0,
    mealDescription: {},
});

const MealContextProvider: React.FC<Props> = ({ children }) => {

    const [mealDescription, setMealDescription] = useState<IMealDescription>({});
    const [mealIndex, setMealIndex] = useState(0);

    useEffect(() => {
        const fetchMeals = async () => {
            const data = await import("../data/data.json")
            setMealDescription(data.meals[Math.abs(mealIndex)]);
        }
        fetchMeals();
    })

    const onIncreaseHandler = () => {
        setMealIndex((pre) => pre === 1 ? 0 : pre + 1);
    };

    const onDecreaseHandler = () => {
        setMealIndex((pre) => pre === -1 ? 0 : pre - 1)
    };

    const contextValue = {
        increaseMeal: onIncreaseHandler,
        decreaseMeal: onDecreaseHandler,
        mealDescription,
        currentChoice: mealIndex,
    };

    return (
        <MealContext.Provider value={contextValue}>
            {children}
        </MealContext.Provider>
    );
};

export { MealContextProvider };