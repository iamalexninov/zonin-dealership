import styles from "./style.module.css";
import { Wrapper } from "../common/wrapper/Wrapper";
import { FooterTop } from "./footer-top/FooterTop";
import { FooterBottom } from "./footer-bottom/FooterBottom";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <Wrapper>
        <div className={styles.container}>
          <FooterTop />
          <FooterBottom />
        </div>
      </Wrapper>
    </section>
  );
};
