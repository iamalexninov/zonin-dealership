import styles from './style.module.css';
import { FooterTopSubscribeSocialItem } from "./FooterTopSubscribeSocialItem";

export const FooterTopSubscribeSocials = ({ socials }) => {
  return (
    <ul className={styles.socials}>
      {socials.map((social) => (
        <FooterTopSubscribeSocialItem social={social} key={social.type} />
      ))}
    </ul>
  );
};
