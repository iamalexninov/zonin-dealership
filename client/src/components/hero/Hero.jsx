import { HrefTag } from "../common/Link";
import styles from "./style.module.css";

export const Hero = ({ content }) => {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>{content.title}</h2>
      <div className={styles.nav}>
        <HrefTag
          path="/"
          baseStyle={{ color: "var(--light-purple-gray)" }}
          hoverStyle={{ color: "var(--light-purple-gray)" }}
        >
          <p className={styles.home}>Home</p>
        </HrefTag>
        <div className={styles.line}></div>
        <p className={styles.current_page}>{content.page}</p>
      </div>
    </section>
  );
};
