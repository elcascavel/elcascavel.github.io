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
    <div>
      <div className={styles["project-content"]}>
        <div className={styles["project-description"]}>
          <h3 className={styles["title"]}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <img className={styles["project-image"]} src={image} alt={title} />
    </div>
  );
};
