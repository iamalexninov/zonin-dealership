import styles from "./style.module.css";
import { Icon } from "../../common/icon/Icon";

export const AboutPreviewFeaturesItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.item_box}>
        <Icon
          type={item.icon}
          baseStyle={{ color: "var(--orange)" }}
          hoverStyle={{ color: "var(--orange)" }}
        />
        <p className={styles.paragraph}>{item.text}</p>
      </div>
    </li>
  );
};
