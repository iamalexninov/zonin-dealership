import styles from "./style.module.css";
import { useDynamicStyles } from "../../../hooks/useDynamicStyles";

export const Button = ({ content, baseStyle, hoverStyle, onClick }) => {
  const { useStyle, onMouseEnter, onMouseLeave } = useDynamicStyles(
    baseStyle,
    hoverStyle
  );

  if (onClick) {
    onClick();
    // TODO: consider adding scroll on top function
  }

  return (
    <button
      type="submit"
      style={useStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={styles.btn}
    >
      {content}
    </button>
  );
};
