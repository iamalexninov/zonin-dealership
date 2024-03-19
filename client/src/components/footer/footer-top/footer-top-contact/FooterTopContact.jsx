import { FooterTopContactList } from "./footer-top-contact-list/FooterTopContactList";
import styles from "./style.module.css";

export const FooterTopContact = () => {
  const mockdata = [
    {
      icon: "phone",
      title: "Phone Number",
      desc: "+359 896 35 9512",
    },
    {
      icon: "email",
      title: "Email Address",
      desc: "zonin@gmail.com",
    },
    {
      icon: "location",
      title: "Location",
      desc: "Bul.Bulgaria, Plovdiv, Bulgaria",
    },
  ];

  return (
    <div className={styles.contacts}>
      <h4 className={styles.title}>Contact Us</h4>
      <p className={styles.description}>
        There are many variations of passes of Lorem ipsum available, but the
        majority have in some form, by ipsum injected.
      </p>
      <FooterTopContactList contacts={mockdata} />
    </div>
  );
};
