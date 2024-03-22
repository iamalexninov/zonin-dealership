import styles from "./style.module.css";
import { HrefTag } from "../../../common/Link";
import { dynamicStyles } from "../../../../utils/dynamicStyles";

export const FooterTopLink = ({ item }) => {
  const useStyles = {
    ...dynamicStyles,
    baseStyle: {
      color: "var(--white)",
    },
    hoverStyle: {
      color: "var(--orange)",
    },
  };

  return (
    <li className={styles.link}>
      <HrefTag
        path={item.link}
        content={item.content}
        baseStyle={useStyles.baseStyle}
        hoverStyle={useStyles.hoverStyle}
      />
    </li>
  );
};
