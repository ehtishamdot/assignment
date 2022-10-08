import {
  Actions,
  ItemSelector,
  SelectedItem,
} from "../../styles/spinner.styled";
import dish1 from "../../assets/display-dish-3.png";
import { SpinButton } from "../../styles/standards.style";
import { Arrow } from "../../data/icons";

const Carousel = () => {
  return (
    <ItemSelector>
      <SelectedItem src={dish1} />
      <Actions>
        <SpinButton>
          <Arrow />
        </SpinButton>
        <SpinButton>
          <Arrow />
        </SpinButton>
      </Actions>
    </ItemSelector>
  );
};

export default Carousel;
