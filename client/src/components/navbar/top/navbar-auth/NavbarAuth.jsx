import styles from "./style.module.css";
import { Icon } from "../../../common/icon/Icon";
import { HrefTag } from "../../../common/Link";
import { dynamicStyles } from "../../../../utils/dynamicStyles";

export const NavbarAuth = () => {
  const iconStyles = {
    color: "var(--orange)",
  };

  const useStyles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      color: "var(--gray)",
      textTransform: "uppercase",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      color: "var(--orange)",
      textTransform: "uppercase",
    },
  };

  return (
    <div className={styles.auth}>
      <Icon
        type="user"
        baseStyle={iconStyles}
        hoverStyle={iconStyles}
        size={25}
      />
      <div className={styles.auth_links}>
        <HrefTag
          path="/signin"
          content="Login"
          baseStyle={useStyles.baseStyle}
          hoverStyle={useStyles.hoverStyle}
        />
        <span className={styles.separator}></span>
        <HrefTag
          path="/signup"
          content="Register"
          baseStyle={useStyles.baseStyle}
          hoverStyle={useStyles.hoverStyle}
        />
      </div>
    </div>
  );
};
