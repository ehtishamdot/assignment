import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html{
    font-size: 10px;   /* 1rem = 10px  */
    font-family: 'Poppins', sans-serif;
    background: #ffffff;
    color: #333333;
  }

  @media (max-width:2000px){
    html{
      font-size: 13px;
    }
  }

  @media (max-width:1000px){
    html{
      font-size:10px
    }
  }

  
  @media (max-width:700px){
    html{
      font-size:12px
    }
  }


  body{
    overflow-y: hidden;
  }
 
  body,ul,h1,h2,p,button {
    margin: 0;
    padding: 0;
  }

`;
