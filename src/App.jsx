import styles from "./common/styles/globals.scss";

import Navigation from "./components/_organisms/Navbar/Navbar";
import Header from "./components/_organisms/Header/Header";
import About from "./components/_organisms/About/About";
import Projects from "./components/_organisms/Projects/Projects";
import Experience from "./components/_organisms/Experience/Experience";

import "./fontawesome";

import navigationLinks from "./data/navigationLinks.json";
import projects from "./data/projects.json";
import experience from "./data/relevantExperience.json";
import header from "./data/header.json";
import about from "./data/about.json";

const App = () => {
  return (
    <div>
      <Navigation navigation={navigationLinks} />
      <Header header={header} />
      <About about={about} />
      <Projects projects={projects} />
      <Experience experience={experience} />
    </div>
  );
};
export default App;
