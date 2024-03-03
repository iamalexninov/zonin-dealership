import styles from "./style.module.css";
import { HeroContentSubtitle } from "./hero-content-subtitle/HeroContentSubtitle";
import { HeroContentTitle } from "./hero-content-title/HeroContentTitle";
import { HeroContentParagraph } from "./hero-content-paragraph/HeroContentParagraph";
import { HeroContentBtn } from "./hero-content-btn/HeroContentBtn";

export const HeroContentBox = () => {
  return (
    <div className={styles.content}>
      <HeroContentSubtitle />
      <HeroContentTitle />
      <HeroContentParagraph />
      <HeroContentBtn />
    </div>
  );
};
