import styles from "./style.module.css";
import light from "../../../../assets/images/light-logo.png";
import dark from "../../../../assets/images/dark-logo.png";

export const NavbarLogo = ({ scrolled }) => {
  return (
    <>
      {scrolled ? (
        <img src={dark} alt="Dark Zonin Dealership Logo" />
      ) : (
        <img src={light} alt="Light Zonin Dealership Logo" />
      )}
    </>
  );
};
