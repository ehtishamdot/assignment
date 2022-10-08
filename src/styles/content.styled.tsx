import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 36.7rem;
  z-index: 10;

  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 69vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 650px) {
    margin-top: 76vw;
  }
`;
