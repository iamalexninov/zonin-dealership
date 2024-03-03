import styles from "./style.module.css";
import { Wrapper } from "../../common/wrapper/Wrapper";
import { NavbarLogo } from "./navbar-logo/NavbarLogo";
import { MobileNavbar } from "./mobile-navbar/MobileNavbar";
import { Icon } from "../../common/icon/Icon";
import { useMobileMenu } from "../../../hooks/useMobileMenu";
import { NavbarList } from "./navbar-list/NavbarList";
import { useNavbarClasses } from "../../../hooks/useNavbarClasses";

export const BottomNavbar = () => {
  const { menu, toggleMenu } = useMobileMenu();
  const { scrolled } = useNavbarClasses();

  const mockdata = [
    {
      icon: "home",
      path: "/",
      content: "Home",
    },
    {
      icon: "info",
      path: "/about",
      content: "About Us",
    },
    {
      icon: "reviews",
      path: "/reviews",
      content: "Reviews",
    },
    {
      icon: "blog",
      path: "/blog",
      content: "Blog",
    },
    {
      icon: "contact",
      path: "/contact",
      content: "Contact",
    },
  ];

  return (
    <div
      className={
        scrolled
          ? [styles.bottom_nav, styles.bottom_nav_scrolled].join(" ")
          : [styles.bottom_nav, styles.bottom_nav_unscrolled].join(" ")
      }
    >
      <Wrapper>
        <div className={styles.container}>
          <NavbarLogo scrolled={scrolled}/>
          <NavbarList items={mockdata} toggleMenu={toggleMenu} scrolled={scrolled}/>
          <MobileNavbar menu={menu} toggleMenu={toggleMenu} items={mockdata} />
        </div>
      </Wrapper>
    </div>
  );
};
