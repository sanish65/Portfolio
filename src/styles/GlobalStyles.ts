import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Ensure full height and width for the page */
  html, body {
    height: 100%;
    width: 100%;  /* Ensure the width takes up full screen */
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  /* Body styling */
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;  /* Ensure the body takes up the full width */
  }

  /* Ensure the root element uses the full viewport width */
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;  /* Ensure root container spans the entire width */
  }

  /* Styling for links */
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  /* Styling for buttons */
  button {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    
    &:hover {
      background-color: ${({ theme }) => theme.primary};
    }
  }

  /* Add more global styles here if necessary */
`;

export default GlobalStyle;
