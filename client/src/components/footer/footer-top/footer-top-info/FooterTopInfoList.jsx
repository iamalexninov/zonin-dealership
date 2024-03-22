import styles from './style.module.css';
import { FooterTopInfoLink } from "./FooterTopInfoLink";

export const FooterTopInfoList = ({ items }) => {
  return (
    <ul className={styles.links}>
      {items.map((item) => (
        <FooterTopInfoLink item={item}  key={item.content}/>
      ))}
    </ul>
  );
};
