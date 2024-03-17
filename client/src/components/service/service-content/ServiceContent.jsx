import styles from "./style.module.css";
import mercedes from "../../../assets/images/posters/services-mercedes.png";
import { ServiceContentItem } from "./ServiceContentItem";

export const ServiceContent = () => {
  // TODO: Change them later
  const rightcontentmockdata = [
    {
      icon: "tools",
      title: "Vehicle Maintenance Service",
      desc: "Professional maintenance and servicing for all types of vehicles to ensure optimal performance and longevity.",
    },
    {
      icon: "money",
      title: "Financing Assistance",
      desc: " Expert assistance in securing financing options and loans tailored to individual needs and budgets.",
    },
  ];

  const leftcontentmockdata = [
    {
      icon: "exchange",
      title: "Trade-In Evaluation",
      desc: "Accurate assessment and fair valuation of trade-in vehicles to facilitate seamless upgrades to newer models.",
    },
    {
      icon: "road",
      title: "Test Drives",
      desc: "Arrange test drives of various vehicles to allow customers to experience firsthand the performance and features before making a purchase decision.",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.content_right}>
        {rightcontentmockdata.map((item) => (
          <ServiceContentItem
            key={item.icon}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <img className={styles.img} src={mercedes} alt="Mercedes Poster" />
      <div className={styles.content_left}>
        {leftcontentmockdata.map((item) => (
          <ServiceContentItem
            key={item.icon}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};
