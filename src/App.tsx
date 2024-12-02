import React from "react";
import { ThemeProvider } from "styled-components";
import ThemeToggle from "./components/ThemeToggle";
import PersonalDetails from "./components/PersonalDetails";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import GlobalStyle from './styles/GlobalStyles';
import { CustomThemeProvider, useTheme } from './components/ThemeContext';
import TimelineComponent from './components/Timeline';
import ProjectLinks from './components/ProjectLinks';
import EducationSection from './components/EducationSection';

const App: React.FC = () => {
  const { currentTheme } = useTheme(); // Access the current theme

  return (
    <CustomThemeProvider>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <ThemeToggle />
        <PersonalDetails />
        <TimelineComponent/>
        <ProjectLinks />
        <EducationSection />
        <Experience />
        <ContactForm />
      </ThemeProvider>
    </CustomThemeProvider>
  );
};

export default App;
