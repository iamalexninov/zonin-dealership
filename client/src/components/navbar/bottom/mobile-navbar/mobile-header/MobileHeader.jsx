import styles from "./style.module.css";
import logo from "../../../../../assets/images/light-logo.png";
import { Icon } from "../../../../common/icon/Icon";
import { dynamicStyles } from "../../../../../utils/dynamicStyles";

export const MobileHeader = ({ toggleMenu }) => {
  const useStyles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      cursor: "pointer",
      color: "var(--white)",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      cursor: "pointer",
      color: "var(--white)",
    },
  }

  return (
    <div className={styles.header}>
      <img src={logo} alt="Light Zonin Logo" />
      <Icon
        type="close"
        size={35}
        baseStyle={useStyles.baseStyle}
        hoverStyle={useStyles.hoverStyle}
        onClick={toggleMenu}
      />
    </div>
  );
};
