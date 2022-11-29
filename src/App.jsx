import Navigation from "./shared/components/Navigation";
import About from "./shared/components/About";
import Projects from "./shared/components/Projects";
import Experience from "./shared/components/Experience";

import "./index.css";
import "./fontawesome";

import navigationLinks from "./data/navigationLinks.json";
import projects from "./data/projects.json";
import experience from "./data/relevantExperience.json";
import about from "./data/about.json";

const App = () => {
  return (
    <div className="bg-white antialiased space-y-6 mb-4">
      <Navigation navigation={navigationLinks} />
      <About about={about} />
      <Projects projects={projects} />
      <Experience experience={experience} />
    </div>
  );
};
export default App;
