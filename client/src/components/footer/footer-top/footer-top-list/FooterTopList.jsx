import styles from "./style.module.css";
import { FooterTopLink } from "../footer-top-link/FooterTopLink";

export const FooterTopList = ({ links }) => {
  return (
    <ul className={styles.links}>
      {links.map((item) => (
        <FooterTopLink key={item.content} item={item} />
      ))}
    </ul>
  );
};
