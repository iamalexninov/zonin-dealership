import { FAQQuestion } from "./FAQQuestion";

export const FAQQuestions = ({ list }) => {
  return (
    <ul>
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
