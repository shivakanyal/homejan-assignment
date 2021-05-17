import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { React, Component } from "react";
import CircleBox from "../CircleBox/CircleBox";
class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Navbar />
        <div className={styles.contentBox}>
          <div className={styles.headingBox}>
            <h1 className={styles.primaryHeading}>Cari Cari</h1>
            <p className={styles.mainPara}>
              Live from their sofa to yours. Get closer to your favorite
              artists, and never miss out.
            </p>
          </div>
        </div>
        <CircleBox />
      </header>
    );
  }
}

export default Header;
