import { useState } from "react";

const useStyles = (basicStyle, hoverStyle) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const useStyle = isHovered ? hoverStyle : basicStyle;

  return {
    useStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};

export default useStyles;
