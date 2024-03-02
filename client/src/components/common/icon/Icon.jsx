import styles from "./style.module.css";

import { MdEmail, MdOutlinePostAdd, MdContacts } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRegUserCircle,
  FaHome,
  FaInfoCircle,
  FaComments,
} from "react-icons/fa";
import {
  FaRegClock,
  FaFacebookF,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareGithub,
} from "react-icons/fa6";

// import { useScrollOnTop } from "../../../hooks/useScrollOnTop";
import { useDynamicStyles } from "../../../hooks/useDynamicStyles";

export const Icon = ({ type, size = 20, baseStyle, hoverStyle, onClick }) => {
  // const { scrollOnTop } = useScrollOnTop();
  const { useStyle, onMouseEnter, onMouseLeave } = useDynamicStyles(
    baseStyle,
    hoverStyle
  );

  const iconComponents = {
    email: MdEmail,
    clock: FaRegClock,
    user: FaRegUserCircle,
    facebook: FaFacebookF,
    twitter: FaSquareXTwitter,
    linkedin: FaLinkedin,
    github: FaSquareGithub,
    facebookSquare: FaFacebookSquare,
    twitterSquare: FaTwitterSquare,
    home: FaHome,
    info: FaInfoCircle,
    reviews: FaComments,
    blog: MdOutlinePostAdd,
    contact: MdContacts,
    close: CgClose,
  };

  const IconComponent = iconComponents[type] || null;

  const handleClick = () => {
    if (onClick) {
      onClick();
      // scrollOnTop();
    }
  };

  return (
    <div
      className={styles.icon}
      style={useStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <IconComponent size={size} />
    </div>
  );
};
