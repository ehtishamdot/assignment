import { useState } from "react";
import { Locker, Logo } from "../../data/icons";
import {
  Bar,
  MainNav,
  NavLi,
  Bucket,
  BarLogo,
  Burger,
  BurgerBun,
} from "../../styles/nav.styled";

const Navbar = () => {
  const [isMobileNavOn, SetIsMobileNavOn] = useState(false);

  const onCLickMobileNavHandler = () => SetIsMobileNavOn((prev) => !prev); //toggle the condition

  return (
    <>
      <Bar
        opacity={isMobileNavOn}
        width={isMobileNavOn}
        display={isMobileNavOn}
        paddingLeft={isMobileNavOn}
      >
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
      <Burger onClick={onCLickMobileNavHandler}>
        <BurgerBun />
        <BurgerBun />
        <BurgerBun />
      </Burger>
    </>
  );
};

export default Navbar;
