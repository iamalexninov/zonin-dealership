import styles from "./style.module.css";
import { dynamicStyles } from "../../../../utils/dynamicStyles";
import { NavbarSocialsList } from "./NavbarSocialsList";

export const NavbarSocials = () => {
  const iconStyles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      color: "var(--gray)",
      textTransform: "uppercase",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      color: "var(--orange)",
      textTransform: "uppercase",
    },
  };

  const mockdata = [
    {
      type: "facebookSquare",
      styles: iconStyles,
    },
    {
      type: "twitterSquare",
      styles: iconStyles,
    },
    {
      type: "linkedin",
      styles: iconStyles,
    },
  ];

  return (
    <>
      <NavbarSocialsList socials={mockdata} />
    </>
  );
};
