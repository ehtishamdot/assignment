import {
  Actions,
  ItemSelector,
  SelectedItem,
} from "../../styles/spinner.styled";
import dishes from "../../assets/dishes";
import { SpinButton } from "../../styles/standards.style";
import { Arrow } from "../../data/icons";
import { useContext, useState } from "react";
import { MealContext } from "../../store/meal-context";

const Carousel = () => {

  const { increaseMeal, decreaseMeal, currentChoice } = useContext(MealContext);


  return (
    <ItemSelector>
      {dishes.map((dish, index) => <SelectedItem style={Math.abs(currentChoice) === index ? { display: "inline" } : { display: "none" }} src={dish} />)}
      <Actions>
        <SpinButton onClick={decreaseMeal}>
          <Arrow />
        </SpinButton>
        <SpinButton onClick={increaseMeal}>
          <Arrow />
        </SpinButton>
      </Actions>
    </ItemSelector >
  );
};

export default Carousel;
