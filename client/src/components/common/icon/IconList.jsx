import { Icon } from "./Icon";

export const IconList = ({ type, styles, size }) => {
  return (
    <li>
      <Icon
        type={type}
        size={size}
        baseStyle={styles.baseStyle}
        hoverStyle={styles.hoverStyle}
      />
    </li>
  );
};
