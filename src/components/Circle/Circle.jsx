import styles from "./Circle.module.css";

const Label = ({ number, label, image }) => {
  return (
    <div className={styles.circle}>
      <img className={styles.image} src="images/Vector.png" alt="image" />
      <span className={styles.number}>{number}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Label;
