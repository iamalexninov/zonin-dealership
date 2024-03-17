import styles from "./style.module.css";
import { Wrapper } from "../common/wrapper/Wrapper";
import { ServiceHeading } from "./service-heading/ServiceHeading";
import { ServiceContent } from "./service-content/ServiceContent";

export const Service = () => {
  return (
    <section className={styles.service}> 
      <Wrapper>
        <ServiceHeading />
        <ServiceContent />
      </Wrapper>
    </section>
  );
};
