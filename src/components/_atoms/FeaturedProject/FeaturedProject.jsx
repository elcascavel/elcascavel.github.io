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
    <div className={styles["project-content"]}>
      <img className={styles["project-image"]} src={image} alt={title} />
      <div className={styles["project-description"]}>
        <h3 className={styles["project-title"]}>{title}</h3>
        <p>{description}</p>
        <div className={styles["project-technologies"]}>
          {technologies.map((technology) => (
            <span className={styles["technology-list"]} key={technology}>
              {technology}
            </span>
          ))}
          {link && (
            <a href={link}>
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
