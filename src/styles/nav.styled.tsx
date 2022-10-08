import styled from "styled-components";

export const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  z-index: 10;
  position: absolute;
  width: 100%;
  top: 5.2rem;

  /* 1rem = 10px originaly in figma padding-left & padding-right is 100px each */
`;

export const MainNav = styled.ul`
  display: flex;
  margin-left: 17rem;
  width: 100%;
`;

export const NavLi = styled.li`
  list-style: none;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 6rem;
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
`;
