import styles from "./style.module.css";
import { NavbarContactEmail } from "./NavbarContactEmail";
import { NavbarContactTime } from "./NavbarContactTime";

export const NavbarContacts = () => {
  const iconStyles = {
    color: "var(--orange)",
  };

  return (
    <div className={styles.info}>
      <NavbarContactEmail useStyle={iconStyles} />
      <NavbarContactTime useStyle={iconStyles}/>
    </div>
  );
};
