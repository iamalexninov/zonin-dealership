import styles from "./style.module.css";
import { dynamicStyles } from "../../../../utils/dynamicStyles";
import { IconList } from "../../../common/icon/IconList";

export const NavbarSocials = () => {
  const iconStyles = {
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

  const mockdata = [
    {
      type: "facebookSquare",
      styles: iconStyles,
    },
    {
      type: "twitterSquare",
      styles: iconStyles,
    },
    {
      type: "linkedin",
      styles: iconStyles,
    },
  ];

  return (
    <ul className={styles.socials}>
      {mockdata.map((icon) => (
        <IconList type={icon.type} styles={icon.styles} key={icon.type} />
      ))}
    </ul>
  );
};
