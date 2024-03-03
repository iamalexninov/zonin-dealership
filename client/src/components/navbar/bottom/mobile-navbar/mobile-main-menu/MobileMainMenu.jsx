import styles from './style.module.css'
import { NavbarCta } from "../../NavbarCta";
import { NavbarItem } from "../../navbar-item/NavbarItem";

export const MobileMainMenu = ({items}) => {
  return (
    <>
      <span className={styles.menu_title}>Main Menu</span>
      <ul className={styles.menu}>
        {items.map((item) => (
          <NavbarItem
            path={item.path}
            content={item.content}
            icon={item.icon}
            key={item.content}
          />
        ))}
        <div className={styles.btn}>
          <NavbarCta />
        </div>
      </ul>
    </>
  );
};
