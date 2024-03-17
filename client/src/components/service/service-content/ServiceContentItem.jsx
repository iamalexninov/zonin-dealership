import styles from "./style.module.css";
import { Icon } from "../../common/icon/Icon";

export const ServiceContentItem = ({ icon, title, desc }) => {
  const iconStyles = {
    color: "var(--orange)",
  };

  return (
    <div className={styles.content_item}>
      <Icon type={icon} size={60} baseStyle={iconStyles} hoverStyle={iconStyles}/>
      <h4>{title}</h4>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};
