import styles from "./style.module.css";
import { Wrapper } from "../../common/wrapper/Wrapper";
import { NavbarLogo } from "./navbar-logo/NavbarLogo";
import { MobileNavbar } from "./mobile-navbar/MobileNavbar";

export const BottomNavbar = () => {
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
    <div className={styles.bottom_nav}>
      <Wrapper>
        <div className={styles.container}>
          <NavbarLogo />
          <MobileNavbar items={mockdata} />
        </div>
      </Wrapper>
    </div>
  )
};
