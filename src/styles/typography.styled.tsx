import styled from "styled-components";

// 1rem = 10px
export const PrimaryHeading = styled.h2`
  color: #ff922c;
  font-size: 4.4rem; /* 44px */
  font-weight: 600;
`;

export const SecondaryHeading = styled.h1`
  font-size: 3.6rem; /* 36px */
  font-weight: 500;
  color: #333333;
  line-height: 5rem;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 1.95rem;
  font-weight: 400;
  margin-top: 1.2rem;
`;

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
