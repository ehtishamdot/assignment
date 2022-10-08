import { Locker, Logo } from "../../data/icons";
import { Bar, MainNav, NavLi, Bucket, BarLogo } from "../../styles/nav.styled";

const Navbar = () => {
  return (
    <Bar>
      <BarLogo>
        <Logo />
        FoodSpin
      </BarLogo>
      <MainNav>
        <NavLi>Breakfast</NavLi>
        <NavLi>Lunch</NavLi>
        <NavLi>Dinner</NavLi>
      </MainNav>
      <Bucket>
        <Locker />
      </Bucket>
    </Bar>
  );
};

export default Navbar;
