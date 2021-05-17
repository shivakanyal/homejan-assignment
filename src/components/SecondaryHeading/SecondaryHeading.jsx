import styles from "./SecondaryHeading.module.css";
const SecondaryHeading = ({ heading }) => {
  return <h2 className={styles.secondaryHeading}>{heading}</h2>;
};

export default SecondaryHeading;
