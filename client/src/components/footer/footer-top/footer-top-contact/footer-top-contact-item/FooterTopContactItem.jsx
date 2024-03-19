import styles from "./style.module.css";
import { Icon } from "../../../../common/icon/Icon";

export const FooterTopContactItem = ({ contact }) => {
  const iconStyle = {
    color: "var(--white)",
  };

  return (
    <li className={styles.item}>
      <div className={styles.icon}>
        <Icon
          type={contact.icon}
          size={25}
          baseStyle={iconStyle}
          hoverStyle={iconStyle}
        />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>{contact.title}</p>
        <p className={styles.desc}>{contact.desc}</p>
      </div>
    </li>
  );
};
