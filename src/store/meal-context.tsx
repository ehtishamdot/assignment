import React, { useState } from "react";

interface IMealContext {
    increaseMeal: () => void,
    decreaseMeal: () => void,
    currentChoice: number,
}

type Props = {
    children: JSX.Element,
};

export const MealContext = React.createContext<IMealContext>({
    increaseMeal: () => { },
    decreaseMeal: () => { },
    currentChoice: 0,
});


const MealContextProvider: React.FC<Props> = ({ children }) => {

    const [mealIndex, setMealIndex] = useState(0);

    const onIncreaseHandler = () => {
        setMealIndex((pre) => pre === 2 ? 0 : pre + 1);

    };
    const onDecreaseHandler = () => {
        setMealIndex((pre) => pre === -2 ? 0 : pre - 1)

    };



    const contextValue = {
        increaseMeal: onIncreaseHandler,
        decreaseMeal: onDecreaseHandler,
        currentChoice: mealIndex,
    };

    return (
        <MealContext.Provider value={contextValue}>
            {children}
        </MealContext.Provider>
    );
};

export { MealContextProvider };