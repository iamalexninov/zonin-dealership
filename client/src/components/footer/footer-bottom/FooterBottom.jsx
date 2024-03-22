import styles from "./style.module.css";
import { Icon } from "../../common/icon/Icon";
import { dynamicStyles } from "../../../utils/dynamicStyles";

export const FooterBottom = () => {
  const useIconStyles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      backgroundColor: "var(--orange)",
      color: "var(--white)",
      borderRadius: "3px",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      backgroundColor: "transparent",
      color: "var(--orange)",
      border: "1px solid var(--orange)",
    },
  };

  return (
    <div className={styles.footer_bottom}>
      <p className={styles.paragraph}>
        Copyright © 2021. All rights reserved. by Zonin
      </p>
      <div className={styles.icon_box}>
        <Icon
          type="arrowUp"
          size={40}
          baseStyle={useIconStyles.baseStyle}
          hoverStyle={useIconStyles.hoverStyle}
        />
      </div>
    </div>
  );
};
