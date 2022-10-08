import { Table, TableItems } from "../../styles/spinner.styled";
import menu from "../../assets/menu.png";
import Carousel from "./Carousel";

const FoodSpin = () => {
  return (
    <>
      <Table>
        <TableItems src={menu} alt="" />
      </Table>
      <Carousel />
    </>
  );
};

export default FoodSpin;
