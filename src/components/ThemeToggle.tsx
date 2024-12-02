import React from "react";
import styled from "styled-components";
import { useTheme } from './ThemeContext';

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text === "#ffffff" ? "#000000" : "#ffffff"}; // Contrast color
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s;

  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.text}; /* Swap colors for hover */
    color: ${(props) => props.theme.primary};
  }
`;


const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </ToggleButton>
  );
};

export default ThemeToggle;
