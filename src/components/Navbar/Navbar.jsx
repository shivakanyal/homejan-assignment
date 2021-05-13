import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.row}>
      <navbar className={styles.nav}>
        <div className={styles.logoBox}>
          <img src="images/logo.png" alt="brand-logo" />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
        </ul>
      </navbar>
    </div>
  );
};

export default Navbar;
