import {
  Actions,
  ItemSelector,
  SelectedItem,
} from "../../styles/spinner.styled";
import dishes from "../../assets/dishes";
import { SpinButton } from "../../styles/standards.styled";
import { Arrow } from "../../data/icons";
import { useContext, useEffect, useState } from "react";
import { MealContext } from "../../store/meal-context";

const Carousel = () => {

  const { increaseMeal, decreaseMeal, currentChoice, mealDescription } = useContext(MealContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      decreaseMeal();
    }, 5000)

    return () => {
      clearTimeout(timer);
    }
  }) // could not found any dependencies

  return (
    <ItemSelector>
      {dishes.map(
        (dish, index) =>
          <SelectedItem key={index}
            style={Math.abs(currentChoice) === index ? { display: "inline" } : { display: "none" }}
            src={dish} />
      )}
      <Actions>
        <SpinButton buttonColor={mealDescription.buttonColor} boxShadowColor={mealDescription.boxShadowColor} onClick={decreaseMeal}>
          <Arrow />
        </SpinButton>
        <SpinButton buttonColor={mealDescription.buttonColor} boxShadowColor={mealDescription.boxShadowColor} onClick={increaseMeal}>
          <Arrow />
        </SpinButton>
      </Actions>
    </ItemSelector >
  );
};

export default Carousel;
