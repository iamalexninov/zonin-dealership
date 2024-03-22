import styles from "./style.module.css";
import { dynamicStyles } from "../../../../utils/dynamicStyles";
import { Icon } from "../../../common/icon/Icon";
import { FooterTopSubscribeSocials } from "./footer-top-subscribe-socials/FooterTopSubscribeSocials";

export const FooterTopSubscribe = () => {
  const useIconStyles = {
    ...dynamicStyles,
    baseStyle: {
      color: "var(--white)",
    },
    hoverStyle: {
      color: "var(--orange)",
    },
  };

  const color = "var(--white)";
  const mockdata = [
    {
      type: "facebook",
      styles: {
        backgroundColor: "#3b5998",
        color,
      },
    },
    {
      type: "twitter",
      styles: {
        backgroundColor: "#55acee",
        color,
      },
    },
    {
      type: "pinterest",
      styles: {
        backgroundColor: "#d71e18",
        color,
      },
    },
    {
      type: "linkedin",
      styles: {
        backgroundColor: "#1565c0",
        color,
      },
    },
  ];

  return (
    <div className={styles.subscribe}>
      <h4 className={styles.title}>Subscribe Us</h4>
      <div className={styles.field}>
        {/* TODO: make common input field */}
        <input
          type="text"
          placeholder="Your Email..."
          className={styles.input}
        />
        <div className={styles.icon_container}>
          <Icon
            type="arrowRight"
            size={35}
            baseStyle={useIconStyles.baseStyle}
            hoverStyle={useIconStyles.hoverStyle}
          />
        </div>
      </div>
      <FooterTopSubscribeSocials socials={mockdata}/>
    </div>
  );
};
