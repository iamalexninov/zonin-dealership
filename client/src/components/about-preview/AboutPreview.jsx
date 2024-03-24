import styles from "./style.module.css";

import { Wrapper } from "../common/wrapper/Wrapper";
import { SectionIntroduction } from "../common/SectionIntroduction";
import { AboutPreviewImages } from "./about-preview-images/AboutPreviewImages";
import { AboutPreviewFeaturesList } from "./about-preview-features/AboutPreviewFeaturesList";

export const AboutPreview = () => {
  const sectionContent = {
    container: {},
    subtitle: {
      text: "about the company",
    },
    title: {
      type: "h3",
      text: "Revolutionary Automotive Hub: Cars and Parts Unified",
      style: {
        color: "var(--white)",
        marginBottom: "10px",
      },
    },
    paragraph: {
      text: "At the heart of our endeavor lies a transformative automotive hub where car sales and auto parts distribution converge seamlessly. Enabling a unified marketplace, our platform empowers enthusiasts and industry players by offering a cohesive space for purchasing vehicles and procuring a diverse range of auto parts.",
      style: {
        color: "var(--white)",
        marginBottom: "30px",
      },
    },
  };

  const iconType = "check";
  const features = [
    { icon: iconType, text: "Quality Inventory" },
    { icon: iconType, text: "Exceptional Customer Service" },
    { icon: iconType, text: "Transparency and Trust" },
  ];

  return (
    <section className={styles.about}>
      <Wrapper>
        <div className={styles.container}>
          <AboutPreviewImages />
          <div className={styles.content}>
            <SectionIntroduction content={sectionContent} />
            <AboutPreviewFeaturesList list={features}/>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
