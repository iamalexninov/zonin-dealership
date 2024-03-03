import styles from "./style.module.css";
import { Wrapper } from "../../../components/common/wrapper/Wrapper";
import { HeroContentBox } from "./hero-content/HeroContentBox";
import { HeroBackgrounds } from "./hero-backgrounds/HeroBackgrounds";

export const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <Wrapper>
        <HeroBackgrounds />
        <HeroContentBox />
      </Wrapper>
    </section>
  );
};
