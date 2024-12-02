import React from "react";
import styled from "styled-components";
import { useTheme } from './ThemeContext';

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
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
