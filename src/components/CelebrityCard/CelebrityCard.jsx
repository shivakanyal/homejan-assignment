import styles from "./CelebrityCard.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const CelebrityCard = ({ img, singingType, name }) => {
  return (
    <div className={styles.celebrityCard}>
      <div className={styles.image}>
        <img src={img} alt="celebrityImage" />
      </div>
      <span className={styles.type}>{singingType}</span>
      <span className={styles.name}>{name}</span>
      <div className={styles.infoBox}>
        <span className={styles.info}>More Info</span>
        <img src="images/arrow.png" alt="" className={styles.arrow} />
      </div>
    </div>
  );
};

export default CelebrityCard;
