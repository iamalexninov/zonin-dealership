import styles from "./style.module.css";
import { FAQQuestion } from "./FAQQuestion";

export const FAQQuestions = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <FAQQuestion
          key={item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </ul>
  );
};
