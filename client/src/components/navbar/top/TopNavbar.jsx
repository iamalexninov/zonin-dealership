import styles from "./style.module.css";
import { Wrapper } from "../../common/wrapper/Wrapper";
import { Icon } from "../../common/icon/Icon";
import { IconList } from "../../common/icon/IconList";
import { HrefTag } from "../../common/Link";
import { dynamicStyles } from "../../../utils/dynamicStyles";

export const TopNavbar = () => {
  const unchangeStyles = {
    color: "var(--orange)",
  };

  let iconLinkStyles = {
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

  const socialIconsList = [
    {
      type: "facebookSquare",
      styles: iconLinkStyles,
    },
    {
      type: "twitterSquare",
      styles: iconLinkStyles,
    },
    {
      type: "linkedin",
      styles: iconLinkStyles,
    },
  ];

  return (
    <div className={styles.top_nav}>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.info_email}>
              <Icon
                type="email"
                size={25}
                baseStyle={unchangeStyles}
                hoverStyle={unchangeStyles}
              />
              <p className={styles.text}>zonin@support.com</p>
            </div>
            <div className={styles.info_time}>
              <Icon
                type="clock"
                size={25}
                baseStyle={unchangeStyles}
                hoverStyle={unchangeStyles}
              />
              <p className={styles.text}>10:00 AM To 6:00 PM</p>
            </div>
          </div>
          <div className={styles.auth_and_socials}>
            <ul className={styles.socials}>
              {socialIconsList.map((icon) => (
                <IconList
                  type={icon.type}
                  styles={icon.styles}
                  key={icon.type}
                />
              ))}
            </ul>
            <div className={styles.auth}>
              <Icon
                type="user"
                baseStyle={unchangeStyles}
                hoverStyle={unchangeStyles}
              />
              <div className={styles.auth_links}>
                <HrefTag
                  path="/signin"
                  content="Login"
                  baseStyle={iconLinkStyles.baseStyle}
                  hoverStyle={iconLinkStyles.hoverStyle}
                />
                <span className={styles.separator}></span>
                <HrefTag
                  path="/signup"
                  content="Register"
                  baseStyle={iconLinkStyles.baseStyle}
                  hoverStyle={iconLinkStyles.hoverStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
