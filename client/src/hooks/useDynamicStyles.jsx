import { useState } from "react";

export const useDynamicStyles = (baseStyle, hoverStyle) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const useStyle = isHovered ? hoverStyle : baseStyle;

  return {
    useStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};