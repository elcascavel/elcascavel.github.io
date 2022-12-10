import styles from "./FeaturedProject.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const RenderLink = ({ link, linkTitle }) => {
  if (link === undefined) {
    return null;
  } else {
    return (
      <a className="font-semibold text-sky-500" href={link}>
        {linkTitle}
      </a>
    );
  }
};

export const FeaturedProject = ({
  title,
  image,
  description,
  technologies,
  link,
}) => {
  return (
    <div className={styles["container"]}>
      <img className={styles["project-image"]} src={image} alt={title} />
      <div className={styles["project-content"]}>
        <h3 className={styles["project-title"]}>{title}</h3>
        <p>{description}</p>
        {link ? (
          <a href={link}>
            <FontAwesomeIcon icon={faLink} />
          </a>
        ) : (
          <a href={link}>
            <FontAwesomeIcon icon={faLink} color={"#888"} />
          </a>
        )}
      </div>
      <div className={styles["project-footer"]}>
        <div className={styles["technology-list"]}>
          {technologies.map((technology) => {
            return (
              <span key={technology} className={styles["project-technology"]}>
                {technology}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
