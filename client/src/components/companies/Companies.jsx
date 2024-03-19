import styles from "./style.module.css";
import race from "../../assets/images/companies/race.png";
import bosch from "../../assets/images/companies/bosch.png";
import mahle from "../../assets/images/companies/mahle.png";
import fram from "../../assets/images/companies/fram.png";
import swag from "../../assets/images/companies/swag.png";
import lmi from '../../assets/images/companies/lmi.png'
import { Wrapper } from "../common/wrapper/Wrapper";
import { CompaniesList } from "./CompaniesList/CompaniesList";

export const Companies = () => {
  const mockdata = [
    {
      src: race,
      alt: "Race Banner",
    },
    {
      src: bosch,
      alt: "Bosch Banner",
    },
    {
      src: mahle,
      alt: "Mahle Banner",
    },
    {
      src: fram,
      alt: "Fram Banner",
    },
    {
      src: swag,
      alt: "Swag Banner",
    },
    {
      src:lmi,
      alt:'Lemförder Banner'
    }
  ];

  return (
    <section className={styles.companies}>
      <Wrapper>
        <div className={styles.container}>
          <CompaniesList items={mockdata} />
        </div>
      </Wrapper>
    </section>
  );
};
