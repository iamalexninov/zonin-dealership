import styles from "./style.module.css";
import { Icon } from "../../../../common/icon/Icon";

export const MobileSearch = () => {
  const iconStyle = {
    color: "var(--dark-purple-gray)",
  };

  return (
    // TODO: Fix, after connecting db
    <div className={styles.container}>
      <div className={styles.field_container}>
        <div className={styles.search_icon}>
          <Icon
            type="search"
            size={20}
            baseStyle={iconStyle}
            hoverStyle={iconStyle}
          />
        </div>
        {/* TODO: Make common Field Component */}
        <input type="text" placeholder="Search..." className={styles.field} />
      </div>
      <div className={styles.btn}>
        <Icon
          type="edit"
          baseStyle={iconStyle}
          hoverStyle={iconStyle}
        />
      </div>
    </div>
  );
};
