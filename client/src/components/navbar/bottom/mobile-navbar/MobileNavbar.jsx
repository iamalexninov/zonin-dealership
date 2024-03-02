import styles from "./style.module.css";
import logo from "../../../../assets/images/light-logo.png";
import { NavbarCta } from "../NavbarCta";
import { NavbarItem } from "../navbar-item/NavbarItem";
import { Icon } from "../../../common/icon/Icon";
import { dynamicStyles } from "../../../../utils/dynamicStyles";
import { useMobileMenu } from "../../../../hooks/useMobileMenu";

export const MobileNavbar = ({ items }) => {
  const { menu, toggleMenu } = useMobileMenu();

  const mobileIconStyles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      cursor: "pointer",
      color: "var(--white)",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      cursor: "pointer",
      color: "var(--white)",
    },
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu_nav}>
          <img src={logo} alt="Light Zonin Logo" />
          <Icon
            type="close"
            size={35}
            baseStyle={mobileIconStyles.baseStyle}
            hoverStyle={mobileIconStyles.hoverStyle}
            onClick={toggleMenu}
          />
        </div>
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
      </div>
    </>
  );
};
