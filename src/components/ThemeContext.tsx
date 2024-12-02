import React, { ReactNode, createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  background: "#ffffff", // White background
  text: "#000000",       // Black text
  primary: "#6200ea",    // Primary button color (purple)
};

const darkTheme = {
  background: "#121212", // Dark gray background
  text: "#ffffff",       // White text
  primary: "#bb86fc",    // Primary button color (light purple)
};


const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  currentTheme: lightTheme,
});

interface CustomThemeProviderProps {
  children: ReactNode; // Explicitly type the children prop
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
