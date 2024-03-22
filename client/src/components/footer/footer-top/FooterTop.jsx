import { FooterTopContact } from "./footer-top-contact/FooterTopContact";
import { FooterTopInfo } from "./footer-top-info/FooterTopInfo";
import { FooterTopQuickLinks } from "./footer-top-quick-links/FooterTopQuickLinks";
import { FooterTopPayment } from "./footer-top-payment/FooterTopPayment";
import { FooterTopSubscribe } from "./footer-top-subscribe/FooterTopSubscribe";
import styles from "./style.module.css";

export const FooterTop = () => {
  return (
    <div className={styles.footer_top}>
      <FooterTopContact />
      <FooterTopInfo />
      <FooterTopQuickLinks />
      <FooterTopSubscribe />
      <FooterTopPayment />
    </div>
  );
};
