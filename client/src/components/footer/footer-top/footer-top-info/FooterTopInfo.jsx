import styles from "./style.module.css";
import { FooterTopList } from "../footer-top-list/FooterTopList";

export const FooterTopInfo = () => {
  const mockdata = [
    {
      link: "/about",
      content: "About Us",
    },
    {
      link: "/reviews",
      content: "Reviews",
    },
    {
      link: "/inventory",
      content: "Our Vehicles",
    },
    {
      link: "/blog",
      content: "Blog",
    },
  ];

  return (
    <div className={styles.info}>
      <h4 className={styles.title}>Our Info</h4>
      <FooterTopList links={mockdata} />
    </div>
  );
};
