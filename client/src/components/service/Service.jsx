import styles from "./style.module.css";
import { Wrapper } from "../common/wrapper/Wrapper";
import { ServiceContent } from "./service-content/ServiceContent";
import { SectionIntroduction } from "../common/SectionIntroduction";

export const Service = () => {
  const sectionContent = {
    container: {
      style: {
        marginBottom: "50px",
      },
    },
    subtitle: {
      text: "our services",
    },
    title: {
      type: "h3",
      text: "Exclusive Car Featured",
    },
  };

  return (
    <section className={styles.service}>
      <Wrapper>
        <SectionIntroduction content={sectionContent} />
        <ServiceContent />
      </Wrapper>
    </section>
  );
};
