import styles from "./style.module.css";
import { Wrapper } from "../common/wrapper/Wrapper";
import { SectionIntroduction } from "../common/SectionIntroduction";

export const LatestCars = () => {
  const sectionContent = {
    subtitle: {
      text: "our featured cars",
    },
    title: {
      type: "h3",
      text: "Latest Released Cars",
      style: {
        color: "var(--black)",
      },
    },
  };

  return (
    <section>
      <Wrapper>
        <SectionIntroduction content={sectionContent} />
      </Wrapper>
    </section>
  );
};
