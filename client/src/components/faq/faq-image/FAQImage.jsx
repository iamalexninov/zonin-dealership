import styles from "./style.module.css";
import faq_mechanic from "../../../assets/images/posters/faq-mechanic.jpg";

export const FAQImage = () => {
  return (
    <div className={styles.img_box}>
      <img
        className={styles.poster}
        src={faq_mechanic}
        alt="Frequency Asked Questions - Poster"
      />
    </div>
  );
};
