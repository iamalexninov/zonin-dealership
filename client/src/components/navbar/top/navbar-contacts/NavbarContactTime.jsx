import styles from "./style.module.css";
import { Icon } from "../../../common/icon/Icon";

export const NavbarContactTime = ({ useStyle }) => {
  return (
    <div className={styles.info_entry}>
      <Icon type="clock" size={25} baseStyle={useStyle} hoverStyle={useStyle} />
      <p className={styles.info_text}>10:00 AM To 6:00 PM</p>
    </div>
  );
};
