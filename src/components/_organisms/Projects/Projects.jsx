import { FeaturedProject } from "../../_atoms/FeaturedProject/FeaturedProject";
import styles from "./Projects.module.scss";

const Projects = (props) => {
  return (
    <div>
      <h2 className={styles["title"]}>2. Featured Projects</h2>
      <div id="featuredprojects" className={styles["container"]}>
        {props.projects.map((project) => {
          return (
            <FeaturedProject
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
              linkTitle={project.linkTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
