import styles from "./style.module.css";
import { HrefTag } from "../../../common/Link";
import { dynamicStyles } from "../../../../utils/dynamicStyles";
import { Icon } from "../../../common/icon/Icon";

export const NavbarItem = ({ path, content, icon, scrolled }) => {
  const linkStyles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      color: scrolled ? "var(--black)" : "var(--white)",
      textTransform: "uppercase",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      color: "var(--orange)",
      textTransform: "uppercase",
    },
  };

  const iconStyles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      color: "var(--light-gray)",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      color: "var(--light-gray)",
    },
  };

  return (
    <HrefTag
      path={path}
      baseStyle={linkStyles.baseStyle}
      hoverStyle={linkStyles.hoverStyle}
    >
      <li className={styles.link}>
        <Icon
          type={icon}
          size={25}
          baseStyle={iconStyles.baseStyle}
          hoverStyle={iconStyles.hoverStyle}
        />
        {content}
      </li>
    </HrefTag>
  );
};
