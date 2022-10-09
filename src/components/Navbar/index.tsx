import { useContext, useState } from "react";
import { Locker, Logo } from "../../data/icons";
import { MealContext } from "../../store/meal-context";
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

  const { mealDescription } = useContext(MealContext);

  return (
    <>
      <Bar
        opacity={isMobileNavOn ? "1" : "0"}
        width={isMobileNavOn ? "40%" : "0"}
        paddingLeft={isMobileNavOn ? "3rem" : "0"}
        backgroundColor={mealDescription.buttonColor}
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
