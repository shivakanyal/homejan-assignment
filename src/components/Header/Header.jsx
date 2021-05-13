import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.contentBox}>
        <h1 className={styles.primaryHeading}>Cari Cari</h1>
        <p className={styles.mainPara}>
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </p>
      </div>
    </header>
  );
};

export default Header;
