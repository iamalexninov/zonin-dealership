import styles from "./style.module.css";
import { useState } from "react";
import { Icon } from "../common/icon/Icon";

export const FAQQuestion = ({ question, answer }) => {
  const [toggled, setToggled] = useState(false);

  const plusIconStyle = {
    backgroundColor: "var(--dark-purple-gray)",
    color: "var(--white)",
    padding: "5px",
  };

  const minusIconStyle = {
    backgroundColor: "var(--orange)",
    color: "var(--white)",
    padding: "5px",
  };

  const handleClick = () => {
    setToggled((prev) => !prev);
  };

  return (
    <li className={styles.item}>
      <div className={styles.question}>
        <p>{question}</p>
        <div onClick={handleClick}>
          {toggled === true ? (
            <Icon
              type="minus"
              baseStyle={minusIconStyle}
              hoverStyle={minusIconStyle}
            />
          ) : (
            <Icon
              type="plus"
              baseStyle={plusIconStyle}
              hoverStyle={plusIconStyle}
            />
          )}
        </div>
      </div>
      {toggled === true && <p className={styles.answer}>{answer}</p>}
    </li>
  );
};
