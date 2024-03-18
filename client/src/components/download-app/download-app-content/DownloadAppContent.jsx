import styles from "./style.module.css";
import google_play from "../../../assets/images/download-app/google-play.png";
import app_store from "../../../assets/images/download-app/app-store.png";

export const DownloadAppContent = () => {
  return (
    <div className={styles.content}>
      <h4 className={styles.subtitle}>download app</h4>
      <h3 className={styles.title}>Download Our Free App Car Service</h3>
      <p className={styles.description}>
        With our innovative mobile application, car buying has never been easier
        or more convenient. Say goodbye to endless hours spent at the dealership
        and hello to a streamlined, hassle-free experience right at your
        fingertips.
      </p>
      <div className={styles.stores}>
        <img src={google_play} alt="Google Play Store" />
        <img src={app_store} alt="Apple Store" />
      </div>
    </div>
  );
};
