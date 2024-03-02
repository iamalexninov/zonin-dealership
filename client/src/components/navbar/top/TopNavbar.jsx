import styles from "./style.module.css";
import { Wrapper } from "../../common/wrapper/Wrapper";
import { NavbarContacts } from "./navbar-contacts/NavbarContacts";
import { NavbarSocials } from "./navbar-socials/NavbarSocials";
import { NavbarAuth } from "./navbar-auth/NavbarAuth";

export const TopNavbar = () => {
  return (
    <div className={styles.top_nav}>
      <Wrapper>
        <div className={styles.container}>
          <NavbarContacts />
          <div className={styles.socials_auth}>
            <NavbarSocials />
            <NavbarAuth />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
