import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.background}; /* Uses theme's background */
    color: ${(props) => props.theme.text};                 /* Uses theme's text */
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden; /* Prevent horizontal scrollbars */
  }
`;


export default GlobalStyle;
