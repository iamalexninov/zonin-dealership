import styles from "./style.module.css";
import { Icon } from "../../../common/icon/Icon";

export const NavbarContactEmail = ({ useStyle }) => {
  return (
    <div className={styles.info_entry}>
      <Icon type="email" size={25} baseStyle={useStyle} hoverStyle={useStyle} />
      <p className={styles.info_text}>zonin@support.com</p>
    </div>
  );
};
