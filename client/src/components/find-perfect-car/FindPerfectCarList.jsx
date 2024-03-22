import { FindPerfectCarItem } from "./FindPerfectCarItem";

export const FindPerfectCarList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <FindPerfectCarItem
          key={item.title}
          numbers={item.numbers}
          title={item.title}
        />
      ))}
    </>
  );
};
