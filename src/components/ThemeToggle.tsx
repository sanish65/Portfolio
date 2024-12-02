import React from "react";
import { useTheme } from "./ThemeContext";
import styled from "styled-components";

const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Position the button in the top-right corner */
  position: fixed;
  top: 20px;  /* Adjust this value to control the distance from the top */
  right: 20px; /* Adjust this value to control the distance from the right */
  z-index: 9999; /* Ensure the button stays on top of other elements */

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </ToggleButton>
  );
};

export default ThemeToggle;
