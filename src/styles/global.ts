import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html, body, #root{
    height:100vh
  }
  #root{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  body{
    background: var(---color-background)
  }
  body,button, input, textarea{
    font: 500 1.6rem Poppins;
    color: var(--color-text-base)
  }
  :root {
  font-size: 60%;
  --color-background: #f0f3f7;
  }
  .container{
    width:90vw;
    max-width: 700px;
  }
  @media(min-width:700px){
    :root{
      font-size:62.5%;
    }
  }
`;
