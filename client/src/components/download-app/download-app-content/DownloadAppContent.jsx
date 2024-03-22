import styles from "./style.module.css";
import google_play from "../../../assets/images/download-app/google-play.png";
import app_store from "../../../assets/images/download-app/app-store.png";
import { SectionIntroduction } from "../../common/SectionIntroduction";

export const DownloadAppContent = () => {
  const sectionContent = {
    container: {
      style: {
        color: "var(--white)",
      },
    },
    title: {
      type: "h3",
      text: "Download Our Free App Car Service",
      style: {
        color: "var(--white)",
        marginBottom: "10px",
      },
    },
    paragraph: {
      text: "With our innovative mobile application, car buying has never been easier or more convenient. Say goodbye to endless hours spent at the dealership and hello to a streamlined, hassle-free experience right at your fingertips.",
      style: {
        color: "var(--white)",
        marginBottom: "30px",
      },
    },
  };

  return (
    <div className={styles.content}>
      <SectionIntroduction content={sectionContent} />
      <div className={styles.stores}>
        <img src={google_play} alt="Google Play Store" />
        <img src={app_store} alt="Apple Store" />
      </div>
    </div>
  );
};
