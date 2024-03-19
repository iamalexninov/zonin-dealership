import { FooterTopContactItem } from "../footer-top-contact-item/FooterTopContactItem";
import styles from "./style.module.css";

export const FooterTopContactList = ({ contacts }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <FooterTopContactItem key={contact.title} contact={contact} />
      ))}
    </ul>
  );
};
