import { FooterTopContact } from "./footer-top-contact/FooterTopContact";
import { FooterTopInfo } from "./footer-top-info/FooterTopInfo";
import { FooterTopLinks } from "./footer-top-links/FooterTopLinks";
import { FooterTopPayment } from "./footer-top-payment/FooterTopPayment";
import { FooterTopSubscribe } from "./footer-top-subscribe/FooterTopSubscribe";
import styles from "./style.module.css";

export const FooterTop = () => {
  return (
    <div className={styles.footer_top}>
      <FooterTopContact />
      <FooterTopInfo />
      <FooterTopLinks />
      <FooterTopSubscribe />
      <FooterTopPayment />
    </div>
  );
};
