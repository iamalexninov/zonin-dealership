import { Icon } from "./Icon";

export const IconList = ({ type, styles }) => {
  return (
    <li>
      <Icon
        type={type}
        baseStyle={styles.baseStyle}
        hoverStyle={styles.hoverStyle}
      />
    </li>
  );
};
