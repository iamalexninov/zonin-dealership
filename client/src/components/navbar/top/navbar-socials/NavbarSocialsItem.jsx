import styles from "./style.module.css";
import { Icon } from "../../../common/icon/Icon";

export const NavbarSocialsItem = ({ social }) => {
  return (
    <li className={styles.item}>
      <Icon
        type={social.type}
        size={20}
        baseStyle={social.styles.baseStyle}
        hoverStyle={social.styles.hoverStyle}
      />
    </li>
  );
};
