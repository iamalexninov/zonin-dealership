import styles from "./style.module.css";
import { Wrapper } from "../common/wrapper/Wrapper";
import { FindPerfectCarItem } from "./FindPerfectCarItem";

export const FindPerfectCar = () => {
  const mockdata = [
    {
      numbers: "2600+",
      title: "New Cars In Stock",
    },
    {
      numbers: "3500+",
      title: "Used Cars In Stock",
    },
    {
      numbers: "1250+",
      title: "Service Centers",
    },
    {
      numbers: "34K",
      title: "Happy Clients",
    },
  ];

  return (
    <section className={styles.perfect_car}>
      <Wrapper>
        <div className={styles.perfect_car_items}>
        {mockdata.map((item) => (
            <FindPerfectCarItem key={item.title} numbers={item.numbers} title={item.title}/>
            ))}
            </div>
      </Wrapper>
    </section>
  );
};
