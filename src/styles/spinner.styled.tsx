import styled from "styled-components";

export const Table = styled.div`
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
  background: #ffeede;

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

  /* @media (max-width: 700px) {
    width: 65vw;
    height: 65vw;
    top: 45vw;
  } */
`;

export const ItemSelector = styled.div`
  position: absolute;
  right: 21vw;
  top: 26vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1600px) {
    right: 19.5vw;
  }

  @media (max-width: 1250px) {
    right: 17vw;
  }

  @media (max-width: 1000px) {
    left: 50%;
    right: 0;
    top: 35vw;
    transform: translate(-50%, 0);
  }
`;

export const SelectedItem = styled.img`
  width: 25rem;

  @media (max-width: 1300px) {
    width: 22rem;
  }
  @media (max-width: 1000px) {
    width: 20rem;
  }

  @media (max-width: 700px) {
    width: 16rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 61rem;
  position: absolute;
  top: 13vw;

  @media (max-width: 1350px) {
    width: 50rem;
  }

  @media (max-width: 1100px) {
    width: 40rem;
  }

  @media (max-width: 1000px) {
    top: 15vw;
  }

  @media (max-width: 550px) {
    width: 30rem;
    top: 20vw;
  }
`;
