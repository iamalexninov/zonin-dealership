import styles from "./style.module.css";
import { NavbarSocialsItem } from "./NavbarSocialsItem";

export const NavbarSocialsList = ({ socials }) => {
  return (
    <ul className={styles.socials}>
      {socials.map((social) => (
        <NavbarSocialsItem social={social} key={social.type} />
      ))}
    </ul>
  );
};
