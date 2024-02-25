import { Link } from "react-router-dom";
import { useDynamicStyles } from "../../../hooks/useDynamicStyles";

export const HrefTag = ({ path, content, baseStyle, hoverStyle, children }) => {
  const { useStyle, onMouseEnter, onMouseLeave } = useDynamicStyles(
    baseStyle,
    hoverStyle
  );
  return (
    <Link
      to={path}
      style={useStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content || children}
    </Link>
  );
};
