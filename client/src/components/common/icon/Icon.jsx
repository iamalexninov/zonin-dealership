import styles from "./style.module.css";

import {
  MdEmail,
  MdOutlinePostAdd,
  MdContacts,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaTwitter,
  FaRegUserCircle,
  FaHome,
  FaInfoCircle,
  FaComments,
  FaEdit,
  FaTools,
  FaMoneyBill,
  FaExchangeAlt,
  FaRoad,
  FaPinterestP,
  FaCheck,
  FaMinus,
  FaFlagCheckered,
} from "react-icons/fa";
import {
  FaRegClock,
  FaFacebookF,
  FaLinkedin,
  FaSquareGithub,
  FaBars,
  FaPlus,
  FaCar,
  FaPhone,
  FaLocationDot,
  FaGasPump,
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
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    pinterest: FaPinterestP,
    github: FaSquareGithub,
    facebookSquare: FaFacebookSquare,
    twitterSquare: FaTwitterSquare,
    home: FaHome,
    info: FaInfoCircle,
    reviews: FaComments,
    blog: MdOutlinePostAdd,
    contact: MdContacts,
    close: CgClose,
    open: FaBars,
    search: IoSearchOutline,
    edit: FaEdit,
    car: FaCar,
    tools: FaTools,
    money: FaMoneyBill,
    exchange: FaExchangeAlt,
    road: FaRoad,
    phone: FaPhone,
    location: FaLocationDot,
    arrowRight: MdKeyboardArrowRight,
    arrowUp: MdOutlineKeyboardArrowUp,
    check: FaCheck,
    plus: FaPlus,
    minus: FaMinus,
    setting: IoMdSettings,
    gasoline: FaGasPump,
    flag: FaFlagCheckered,
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
