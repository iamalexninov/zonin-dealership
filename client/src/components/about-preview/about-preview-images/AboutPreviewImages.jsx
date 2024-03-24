import styles from "./style.module.css";
import dealer from "../../../assets/images/posters/dealer.png";
import mechanic from "../../../assets/images/posters/mechanic.png";

export const AboutPreviewImages = () => {
  return (
    <div className={styles.pictures}>
      <img
        className={[styles.img, styles.img_dealer].join(' ')}
        src={dealer}
        alt="Dealer Poster"
      />
      <img
        className={[styles.img, styles.img_mechanic].join(' ')}
        src={mechanic}
        alt="Mechanic Poster"
      />
    </div>
  );
};
