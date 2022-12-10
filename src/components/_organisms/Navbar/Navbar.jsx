import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <nav className={styles["navbar-container"]}>
      <svg
        className={styles["logo"]}
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_2"
        data-name="Layer 2"
        viewBox="0 0 107.61 124.25"
      >
        <defs />
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            d="M26.25 37.22h3.93c4.65 0 8.06 1.02 10.25 3.07 2.18 2.05 3.37 5.12 3.55 9.21h-9.52l-.21-3.17c-.23-1.61-1.22-2.42-2.97-2.42h-3.31c-2.12 0-3.63.45-4.55 1.35-.92.9-1.38 2.52-1.38 4.86 0 2.02.51 3.59 1.52 4.69 1.24 1.47 4.02 2.53 8.35 3.17 4.09.6 7.13 1.82 9.11 3.66 2.76 2.48 4.14 6.39 4.14 11.73 0 4-1.16 7.2-3.48 9.59-2.32 2.39-5.85 3.59-10.59 3.59h-4.35c-4.83 0-8.51-1.01-11.04-3.04-2.53-2.02-3.89-5.11-4.07-9.25h9.59l.07 3.04c.18 1.7 1.2 2.55 3.04 2.55h5.04c2.39 0 4.01-.51 4.86-1.52.85-1.01 1.28-2.74 1.28-5.17 0-2.71-.62-4.6-1.86-5.66-1.29-1.15-4.19-2.02-8.69-2.62-3.73-.51-6.62-1.7-8.69-3.59-2.58-2.44-3.86-5.96-3.86-10.56 0-4.19 1.15-7.49 3.45-9.9 2.3-2.42 5.77-3.62 10.42-3.62Z"
            fill="currentColor"
          />
          <path
            d="M106.61 92.96 53.6 123.1 1 92.26V31.29L54 1.15l52.61 30.84v60.97z"
            stroke="currentColor"
            strokeWidth="6"
            strokeMiterlimit="10"
            fill="currentColor"
            fillOpacity={0}
            fillRule="nonzero"
          />
          <path
            d="m71.26 70.08-3 9.23 2.28.15v6.42H57.35v-6.42l2.28-.27 14.14-41.61h9.8l14.15 41.61 2.2.27v6.42H85.74v-6.42l2.28-.29-2.99-9.09-6.39-21.31-7.38 21.31z"
            fill="currentColor"
          />
        </g>
      </svg>
      <ol className={styles["navbar-links"]}>
        {props.navigation.map((link) => (
          <li key={link.id}>
            <a href={link.href}>
              {link.id}. {link.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;
