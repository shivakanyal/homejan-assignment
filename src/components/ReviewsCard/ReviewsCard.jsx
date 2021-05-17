import styles from "./ReviewsCard.module.css";
const ReviewsCard = ({ image, flag, name, location, text }) => {
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.infoBox}>
        <div className={styles.imageBox}>
          <img src="images/testimonial1.png" alt="" />
        </div>
        <div className={styles.fanInfo}>
          <p className={styles.name}>{name}</p>
          <div className={styles.location}>
            <img src="images/🇺🇸.png" alt="" className={styles.flag} />
            <div className={styles.address}>{location}</div>
          </div>
        </div>
      </div>
      <p className={styles.reviewsPara}>{text}</p>
    </div>
  );
};

export default ReviewsCard;
