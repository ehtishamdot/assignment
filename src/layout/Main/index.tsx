import FoodSpin from "../../components/FoodSpin";
import Content from "../../components/Content";
import { Container } from "../../styles/spinner.styled";

const Main = () => {
  return (
    <>
      <Container>
        <Content />
        <FoodSpin />
      </Container>
    </>
  );
};

export default Main;
