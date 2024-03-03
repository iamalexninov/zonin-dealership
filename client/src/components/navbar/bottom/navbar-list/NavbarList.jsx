import styles from "./style.module.css";
import { NavbarItem } from "../navbar-item/NavbarItem";
import { Icon } from "../../../common/icon/Icon";

export const NavbarList = ({ items, toggleMenu, scrolled }) => {
  const openMobileMenuStyle = {
    color: scrolled ? "var(--black)" : "var(--white)",
  };

  return (
    <>
      <ul className={styles.links}>
        {items.map((item) => (
          <NavbarItem
            path={item.path}
            icon={item.icon}
            content={item.content}
            key={item.content}
            scrolled={scrolled}
          />
        ))}
      </ul>
      <div className={styles.open_mobile}>
        <Icon
          type="open"
          size={30}
          baseStyle={openMobileMenuStyle}
          hoverStyle={openMobileMenuStyle}
          onClick={toggleMenu}
        />
      </div>
    </>
  );
};
