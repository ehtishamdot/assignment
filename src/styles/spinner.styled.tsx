import styled, { keyframes } from "styled-components";

interface ISelectedItem {
  animation?: boolean;
}

interface ITable {
  backgroundColor?: string;
}

const rotate = keyframes`
  0% {
      transform: rotate(270deg) scale(1);
      opacity: 0;
  }
  100% {
      transform: rotate(360deg) scale(0.5);
      opacity: 1;
  }  
`;

export const Container = styled.div`
  margin: 28.6rem 10rem 0 10rem;
  @media (max-width: 600px) {
    margin: 28.6rem 1rem 0 1rem;
  }
`;

export const Table = styled.div<ITable>`
  display: flex;
  justify-content: center;
  align-items: end;
  overflow: hidden;
  border-radius: 100%;
  position: absolute;
  width: 80vw;
  height: 80vw;
  right: -10vw;
  top: -45vw;
  transition: background .3s linear;
  background: ${props => (props.backgroundColor)};

  @media (max-width: 1200px) {
  }

  @media (max-width: 1000px) {
    right: 0;
    left: 50%;
    transform: translate(-50%, 0);
    top: -40vw;
    height: 90vw;
    width: 90vw;
  }
`;

export const TableItems = styled.img`
  width: 45vw;
  height: 45vw;
  position: absolute;
  top: 58vw;
  transition: all .3s linear;

  @media (max-width: 1250px) {
    width: 50vw;
    height: 50vw;
    top: 55vw;
  }

  @media (max-width: 1000px) {
    width: 80vw;
    height: 80vw;
    top: 47vw;
  }
`;

export const ItemSelector = styled.div`
  position: absolute;
  right: 19.5vw;
  top: 26vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px) {
    right: 19.5vw;
  }

  @media (max-width: 1000px) {
    left: 50%;
    right: 0;
    top: 35vw;
    transform: translate(-50%, 0);
  }
`;

export const SelectedItem = styled.img<ISelectedItem>`
  width: 20vw;
  animation:${rotate} 0.3s linear reverse;

   @media (max-width: 1000px) {
    width: 28vw;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45vw;
  position: absolute;
  top: 13vw;

  @media (max-width: 1000px) {
    width: 50vw;
    top: 15vw;
  }
  
  @media (max-width: 550px) {
    width: 70vw;
    top: 20vw;
  }
`;
