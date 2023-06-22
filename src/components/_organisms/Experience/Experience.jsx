import { Tab } from "@headlessui/react";
import styles from "./Experience.module.scss";

const Experience = (props) => {
  return (
    <div id="workexperience" className={styles["container"]}>
      <h2 className={styles["title"]}>3. Relevant Experience</h2>
      <Tab.Group>
        <Tab.List>
          {props.experience.map((experience) => {
            return (
              <Tab className={styles["tab-button"]} key={experience.company}>
                {experience.company}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels>
          {props.experience.map((experience) => {
            return (
              <Tab.Panel key={experience.id}>
                <p>
                  {experience.title}{" "}
                  <span className={styles["workplace"]}>
                    @ {experience.company}
                  </span>
                </p>
                <p>{experience.date}</p>
                <ul>
                  {experience.tasks.map((task) => {
                    return <li key={task}>{task}</li>;
                  })}
                </ul>
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default Experience;
