import styles from "./style.module.css";
import { SectionIntroduction } from "../../../common/SectionIntroduction";
import { FooterTopContactList } from "./footer-top-contact-list/FooterTopContactList";

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

  const sectionContent = {
    container: {
      style: {
        marginBottom: "30px",
      },
    },
    title: {
      type: "h4",
      text: "Contact Us",
      style: {
        marginBottom: "10px",
      },
    },
    paragraph: {
      text: "There are many variations of passes of Lorem ipsum available, but the majority have in some form, by ipsum injected.",
    },
  };

  return (
    <div className={styles.contacts}>
      <SectionIntroduction content={sectionContent} />
      <FooterTopContactList contacts={mockdata} />
    </div>
  );
};
