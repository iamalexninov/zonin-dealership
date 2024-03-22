import styles from "./style.module.css";
import payment from "../../../../assets/images/payment-methods.png";

export const FooterTopPayment = () => {
  return (
    <div className={styles.payment}>
      <p className={styles.paragraph}>
        We know that honesty and transparency friendly customer service.
      </p>
      <img className={styles.img} src={payment} alt="Payment Methods" />
    </div>
  );
};
