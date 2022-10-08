import Carousel from "../../components/FoodSpin";
import Content from "../../components/Content";
import { Container } from "../../styles/containers.styled";

const Main = () => {
  return (
    <>
      <Container>
        <Carousel />
        <Content />
      </Container>
    </>
  );
};

export default Main;
