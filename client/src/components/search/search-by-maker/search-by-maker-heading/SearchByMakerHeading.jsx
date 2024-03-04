import styles from "./style.module.css";
import { Icon } from "../../../common/icon/Icon";
import { Button } from "../../../common/button/Button";
import { dynamicStyles } from "../../../../utils/dynamicStyles";

export const SearchByMakerHeading = () => {
  const useButtonStyles = {
    ...dynamicStyles,
    baseStyle: {
      ...dynamicStyles.baseStyle,
      backgroundColor: "var(--dark-purple-gray)",
      color: "var(--white)",
    },
    hoverStyle: {
      ...dynamicStyles.hoverStyle,
      backgroundColor: "transparent",
      color: "var(--dark-purple-gray)",
      border: "1px solid var(--dark-purple-gray)",
    },
  };

  const useIconStyles = {
    color: "var(--orange)",
  };

  return (
    <div className={styles.heading_container}>
      <div className={styles.heading}>
        <Icon
          type="car"
          size={35}
          baseStyle={useIconStyles}
          hoverStyle={useIconStyles}
        />
        <h4 className={styles.title}>
          looking for a <span className={styles.vehicle}>vehicle?</span>
        </h4>
      </div>
      <Button
        content="Search"
        baseStyle={useButtonStyles.baseStyle}
        hoverStyle={useButtonStyles.hoverStyle}
      />
    </div>
  );
};
