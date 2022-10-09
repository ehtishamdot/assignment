import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: 16.3rem; /*163px*/
  height: 4.8rem; /*48px*/
  background: #ff922c;
  box-shadow: 0px 2rem 4rem #f4e2d1;
  border-radius: 6.9rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  border: none;
  cursor: pointer;
  margin-top: 4.2rem; /*temporary?*/

  /* identical to box height */
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: #ffffff;
`;

export const SpinButton = styled.button`
  width: 3vw;
  height: 3vw;
  background: #ff922c;
  box-shadow: 0px 10px 20px #f5ece3;
  transform: rotate(-180deg);
  border: none;
  border-radius: 100%;
  cursor: pointer;

  @media (max-width:1000px){
    width: 4rem;
    height: 4rem;
  }
`;
