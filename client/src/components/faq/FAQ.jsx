import styles from "./style.module.css";
import { Wrapper } from "../common/wrapper/Wrapper";
import { FAQQuestions } from "./FAQQuestions";
import { FAQImage } from "./faq-image/FAQImage";

export const FAQ = () => {
  const mockdata = [
    {
      question: "What is the best price you can offer for this car?",
      answer:
        "Our dealership strives to provide competitive pricing on all our vehicles. While we understand that price is an important factor, it's essential to consider various aspects such as the vehicle's condition, features, and market value. Let's discuss your budget preferences so we can find the best option for you.",
    },
    {
      question: "Can I test drive this car before making a decision?",
      answer:
        "Absolutely! We encourage all our customers to take the car for a test drive to experience its performance and features firsthand. It's a crucial step in the buying process to ensure that the vehicle meets your expectations and suits your driving needs.",
    },
    {
      question: "What financing options are available?",
      answer:
        "We offer a range of financing options to accommodate different budgets and credit situations. Our finance team can help you explore loan terms, interest rates, and payment plans tailored to your needs. Whether you're looking for a traditional auto loan or a lease, we're here to assist you in finding the best solution.",
    },
    {
      question: "Does this car come with any warranties or maintenance plans?",
      answer:
        "Many of our vehicles come with manufacturer warranties, providing coverage for specific components and services. Additionally, we offer extended warranty options and maintenance plans for added peace of mind. Let's discuss the warranty coverage available for the car you're interested in and any additional protection plans that may suit your needs.",
    },
    {
      question: "Do you accept trade-ins, and how does the process work?",
      answer:
        "Yes, we accept trade-ins! If you have a vehicle you'd like to trade, we'll assess its value based on factors such as its condition, mileage, and market demand. The trade-in value can then be applied towards the purchase of your new car, reducing the overall cost. Our team will guide you through the trade-in process and ensure a smooth transition.",
    },
  ];

  return (
    <section className={styles.faq}>
      <Wrapper>
        <div className={styles.container}>
          <FAQQuestions list={mockdata} />
          <FAQImage />
        </div>
      </Wrapper>
    </section>
  );
};
