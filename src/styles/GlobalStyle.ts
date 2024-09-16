import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  /* Estilo global para links */
  a {
    text-decoration: none;
    color: inherit; 
  }
`;

export default GlobalStyle;
