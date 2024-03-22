import styles from "./style.module.css";
import { Icon } from "../../../../common/icon/Icon";

export const FooterTopSubscribeSocialItem = ({ social }) => {
  return (
    <li className={styles.social} style={social.styles}>
      <Icon type={social.type} />
    </li>
  );
};
