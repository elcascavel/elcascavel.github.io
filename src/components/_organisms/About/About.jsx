import styles from "./About.module.scss";

const About = (props) => {
  return (
    <div id="aboutme" className={styles["parent"]}>
      <section className={styles["about"]}>
        <h2 className={styles["title"]}>{props.about.title}</h2>
        <p className={styles["text"]}>{props.about.body}</p>
        <h2 className={styles["text"]}>I have experience with:</h2>
        <ul className={styles["list"]}>
          {props.about.skills.map((skill) => (
            <li className={styles["list-item"]} key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <img
        className={styles["portrait"]}
        src={props.about.portrait}
        alt="portrait"
      ></img>
    </div>
  );
};
export default About;
