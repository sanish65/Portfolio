// import React from "react";
// import { CustomThemeProvider } from './components/ThemeContext'; // Import your theme provider
// import ThemeToggle from "./components/ThemeToggle";
// import PersonalDetails from "./components/PersonalDetails";
// import Experience from "./components/Experience";
// import ContactForm from "./components/ContactForm";
// import GlobalStyle from './styles/GlobalStyles';
// import TimelineComponent from './components/Timeline';
// import ProjectLinks from './components/ProjectLinks';
// import EducationSection from './components/EducationSection';
// import GitCommitGraph from './components/GitCommitGraph';
// import BitbucketCommitGraph from './components/BitBucketCommitGraph';
// import ResumeDownload from './components/ResumeDownload';
// import Footer from './components/Footer';

// const App: React.FC = () => {
//   return (
//     <CustomThemeProvider>
//       <GlobalStyle />
//       <ThemeToggle />
//       <PersonalDetails />
//       <ProjectLinks />
//       <EducationSection />
//       <TimelineComponent />
//       <Experience />
//       <GitCommitGraph />
//       <BitbucketCommitGraph />
//       <ResumeDownload />
//       <ContactForm />
//       <Footer />
//     </CustomThemeProvider>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomThemeProvider } from "./components/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import PersonalDetails from "./components/PersonalDetails";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import GlobalStyle from "./styles/GlobalStyles";
import TimelineComponent from "./components/Timeline";
import ProjectLinks from "./components/ProjectLinks";
import EducationSection from "./components/EducationSection";
import GitCommitGraph from "./components/GitCommitGraph";
import BitbucketCommitGraph from "./components/BitBucketCommitGraph";
import ResumeDownload from "./components/ResumeDownload";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <CustomThemeProvider>
        <GlobalStyle />
        <ThemeToggle />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PersonalDetails />
                <ProjectLinks />
                <EducationSection />
                <TimelineComponent />
                <Experience />
                <GitCommitGraph />
                <BitbucketCommitGraph />
                <ResumeDownload />
                <ContactForm />
                <Footer />
              </>
            }
          />
        </Routes>
      </CustomThemeProvider>
    </Router>
  );
};

export default App;
