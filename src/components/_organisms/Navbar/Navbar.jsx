import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <nav className={styles["navbar-container"]}>
      <svg className={styles["logo"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.7 119.74"><defs /><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path stroke="currentColor"
        strokeWidth="4"
        strokeMiterlimit="10"
        fill="currentColor"
        fillOpacity={0}
        fillRule="nonzero" d="m101.7 88.98-50.04 28.45L2 88.32V30.76L52.04 2.31l49.66 29.11v57.56z" />
        <path fill="currentColor" d="M77.24 69.61q-2.56-10.7-5.14-21.37l-3.23-13.66h-.61l-4.83 14.06-5.87 18.51a15.24 15.24 0 0 0-2.68-8c-1.46-2-3.76-3.88-4.94-4 3-9.57 6.79-19.36 9.64-29h18l17.59 63.43H82.39" class="cls-2" />
        <path fill="currentColor" d="M29.17 26.17h5.06q9 0 13.17 3.94T52 42H39.73l-.27-4.08c-.29-2.07-1.57-3.1-3.81-3.1h-4.26q-4.08 0-5.85 1.73c-1.19 1.15-1.78 3.24-1.78 6.25a8.61 8.61 0 0 0 1.95 6q2.4 2.85 10.74 4.08 7.89 1.16 11.7 4.7 5.33 4.8 5.33 15.08 0 7.71-4.48 12.34t-13.62 4.58h-5.59q-9.3 0-14.19-3.9T10.37 73.8H22.7l.09 3.9q.35 3.3 3.9 3.3h6.47c3.08 0 5.16-.65 6.26-2s1.64-3.52 1.64-6.65q0-5.23-2.4-7.28-2.47-2.2-11.17-3.37-7.18-1-11.18-4.61-5-4.69-5-13.57 0-8.07 4.44-12.73t13.42-4.62Z" class="cls-2" /></g></g></svg>
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
