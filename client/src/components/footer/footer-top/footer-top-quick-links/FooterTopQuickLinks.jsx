import styles from "./style.module.css";
import { FooterTopList } from "../footer-top-list/FooterTopList";

export const FooterTopQuickLinks = () => {
  const mockdata = [
    {
      link: "/signin",
      content: "Sign In",
    },
    {
      link: "/signup",
      content: "Sign Up",
    },
    {
      link: "/inventory",
      content: "Catalogue",
    },
    {
      link: "/contact",
      content: "Contact",
    },
  ];

  return (
    <div className={styles.quick_links}>
      <h4 className={styles.title}>Quick Links</h4>
      <FooterTopList links={mockdata} />
    </div>
  );
};
