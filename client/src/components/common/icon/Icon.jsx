import styles from "./style.module.css";

import { MdLogin, MdLogout, MdEmail } from "react-icons/md";
import {
  FaUser,
  FaRegClock,
  FaBars,
  FaRocket,
  FaX,
  FaCheck,
  FaCartShopping,
  FaFacebookF,
  FaLinkedin,
  FaPinterest,
  FaSquareXTwitter,
  FaGoogle,
  FaPhone,
  FaLocationDot,
  FaArrowRight,
  FaArrowUpLong,
  FaGasPump,
  FaMinus,
  FaPlus,
  FaWrench,
  FaLeaf,
  FaArrowLeft,
} from "react-icons/fa6";
import { IoCarSport, IoCarSportSharp, IoStorefront } from "react-icons/io5";
import { IoMdSettings, IoIosSpeedometer } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbWorldSearch } from "react-icons/tb";
import { useScrollOnTop } from "../../../hooks/useScrollOnTop";

export const Icon = ({ type, size = 20, onClick }) => {
  const { scrollOnTop } = useScrollOnTop();
  const iconComponents = {
    email: MdEmail,
    clock: FaRegClock,
    user: FaUser,
    facebook: FaFacebookF,
    linkedin: FaLinkedin,
    twitter: FaSquareXTwitter,
  };

  const IconComponent = iconComponents[type] || null;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    scrollOnTop();
  };

  return (
    <div className={styles.icon} onClick={handleClick}>
      <IconComponent size={size} />
    </div>
  );
};
