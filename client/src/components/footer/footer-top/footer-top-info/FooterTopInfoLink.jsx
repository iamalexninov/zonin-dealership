import styles from "./style.module.css";
import { HrefTag } from "../../../common/Link";

export const FooterTopInfoLink = ({ item }) => {

    

  return (
    <li className={styles.link}>
      <HrefTag
        path={item.link}
        content={item.content}
        baseStyle={item.baseStyles}
        hoverStyle={item.hoverStyles}
      />
    </li>
  );
};
