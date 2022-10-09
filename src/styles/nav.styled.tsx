import styled from "styled-components";

interface IBar {
  opacity?: Boolean;
  width?: Boolean;
  display?: Boolean;
  paddingLeft?: Boolean;
}

export const Bar = styled.nav<IBar>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* 1rem = 10px originaly in figma padding-left & padding-right is 100px each */
  padding: 0 10rem;
  z-index: 10;
  position: absolute;
  width: 100%;
  top: 5.2rem;
  transition: opacity 1s ease-in-out, width 1s ease-in-out,
    padding 1s ease-in-out;


  @media (max-width: 700px) {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    background: orange;
    height: 100%;
    top: 0;
    left: 0;
    padding-left: ${(props) => (props.paddingLeft ? "3rem" : "0")};
    width: ${(props) => (props.width ? "40%" : "0")};
    opacity: ${(props) => (props.opacity ? "1" : "0")};
  }
`;

export const MainNav = styled.ul`
  display: flex;
  margin-left: 17rem;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0;
    align-items: flex-start;
    height: 100%;
  }
`;

export const NavLi = styled.li`
  list-style: none;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 6rem;
  }

  @media (max-width: 700px) {
    margin: 2rem 1rem;
    font-size: 1.7rem;
    color: white;
  }
`;

export const Bucket = styled.button`
  background: 0;
  border: 0;
  cursor: pointer;
`;

export const BarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 500;

  & svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 700px) {
    margin: 0;
    margin: 2.5rem 0;
    color: #ffffff;
    justify-content: flex-start;
  }
`;

export const Burger = styled.div`
  position: fixed;
  top: 3%;
  right: 3%;
  z-index: 10;
  cursor: pointer;
`;

export const BurgerBun = styled.div`
  width: 2rem;
  margin: 0.5rem;
  height: 0.3rem;
  background: #49310e;

  @media (min-width: 700px) {
    display: none;
  }
`;
