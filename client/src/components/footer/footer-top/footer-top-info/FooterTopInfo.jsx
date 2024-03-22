import { FooterTopInfoList } from "./FooterTopInfoList";
import styles from "./style.module.css";

export const FooterTopInfo = () => {
  const baseStyles = {
    color: "var(--light-gray)",
  };

  const hoverStyles = {
    color: "var(--orange)",
  };

  const mockdata = [
    {
      link: "/about",
      content: "About Us",
      baseStyles,
      hoverStyles,
    },
    {
      link: "/reviews",
      content: "Reviews",
      baseStyles,
      hoverStyles,
    },
    {
      link: "/inventory",
      content: "Our Vehicles",
      baseStyles,
      hoverStyles,
    },
    {
      link: "/blog",
      content: "Blog",
      baseStyles,
      hoverStyles,
    },
  ];

  return (
    <div className={styles.info}>
      <h4 className={styles.title}>Our Info</h4>
      <FooterTopInfoList items={mockdata} />
    </div>
  );
};
