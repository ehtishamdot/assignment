import styled, { keyframes } from "styled-components";

interface IButton {
  buttonColor: string | undefined;
  boxShadowColor?: string | undefined;
}

const buttonScale = keyframes`
  0% {
    width: 2vw;
    height: 2vw;
  }
  100%{
    width: 3vw;
    height: 3vw;
  }
`

export const PrimaryButton = styled.button<IButton>`
  width: 16.3rem; /*163px*/
  height: 4.8rem; /*48px*/
  background: ${props => (props.buttonColor)};
  transition: background .3s linear, 
              box-shadow .3s linear, 
              width .3s linear, 
              height .3s linear;
  box-shadow: 0px 2rem 4rem ${props => (props.boxShadowColor)};
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

export const SpinButton = styled.button<IButton>`
  width: 3vw;
  height: 3vw;
  transition: background .3s linear;
  background: ${props => (props.buttonColor)};
  box-shadow: 0px 10px 20px ${props => (props.boxShadowColor)};
  border: none;
  border-radius: 100%;
  cursor: pointer;
 
  @media (max-width:1000px){
    width: 4rem;
    height: 4rem;
  }
`;
