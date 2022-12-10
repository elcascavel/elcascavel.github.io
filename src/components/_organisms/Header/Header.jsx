import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={styles["header"]}>
      <div>
        <h1 className={styles["title"]}>{props.header.title}</h1>
        <p className={styles["subtitle"]}>{props.header.subtitle}</p>
        <p className={styles["description"]}>{props.header.description}</p>
      </div>
    </div>
  );
};
export default Header;
