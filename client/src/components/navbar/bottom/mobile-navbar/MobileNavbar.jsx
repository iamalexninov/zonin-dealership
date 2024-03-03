import styles from "./style.module.css";
import { MobileHeader } from "./mobile-header/MobileHeader";
import { MobileSearch } from "./mobile-search/MobileSearch";
import { MobileMainMenu } from "./mobile-main-menu/MobileMainMenu";
import { MobileTitle } from "./mobile-title/MobileTitle";

export const MobileNavbar = ({ menu, toggleMenu, items }) => {
  return (
    <div
      className={
        !menu ? styles.container : [styles.container, styles.active].join(" ")
      }
    >
      <MobileHeader toggleMenu={toggleMenu}/>
      <MobileSearch />
      <MobileMainMenu items={items} />
      <MobileTitle />
    </div>
  );
};
