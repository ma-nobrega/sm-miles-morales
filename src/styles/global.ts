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
    align-items:flex-start;
    justify-content:center;
  }
  body{
    background: #0B0C10;
  }
  body,button, input, textarea{
    font: 500 1.6rem Mukta;
    color: var(--color-text-base)
  }
  :root {
  font-size: 60%;
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
