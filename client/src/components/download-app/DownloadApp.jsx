import { Wrapper } from "../common/wrapper/Wrapper";
import { DownloadAppContent } from "./download-app-content/DownloadAppContent";
import { DownloadAppPoster } from "./download-app-poster/DownloadAppPoster";
import styles from "./style.module.css";

export const DownloadApp = () => {
  return (
    <section className={styles.download}>
      <Wrapper>
        <div className={styles.download_bg}>
          <div className={styles.container}>
            <DownloadAppContent />
            <DownloadAppPoster />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
