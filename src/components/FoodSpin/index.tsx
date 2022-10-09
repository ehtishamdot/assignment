import { Table, TableItems } from "../../styles/spinner.styled";
import menu from "../../assets/menu.png";
import Carousel from "./Carousel";
import { useContext } from "react";
import { MealContext } from "../../store/meal-context";

const FoodSpin = () => {

  const { mealDescription, currentChoice } = useContext(MealContext);

  return (
    <>
      <Table backgroundColor={mealDescription.backgroundColor}>
        <TableItems style={{ transform: `rotate(${-Math.abs(currentChoice) * 36}deg)` }} src={menu} alt={menu} />
      </Table>
      <Carousel />
    </>
  );
};

export default FoodSpin;
