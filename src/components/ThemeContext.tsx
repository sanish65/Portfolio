import React, { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  primary: "#6200ea",
};

const darkTheme = {
  background: "#121212",
  text: "#ffffff",
  primary: "#bb86fc",
};

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  currentTheme: lightTheme,
});

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
