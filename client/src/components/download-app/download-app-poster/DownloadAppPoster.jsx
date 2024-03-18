import styles from "./style.module.css";
import download_app from "../../../assets/images/download-app/mobile.png";

export const DownloadAppPoster = () => {
  return (
    <>
      <img
        className={styles.poster}
        src={download_app}
        alt="Zonin Dealership Mobile App Preview"
      />
    </>
  );
};
