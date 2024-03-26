import styles from "./style.module.css";
import testImg from "../../assets/images/backgrounds/test-car.jpg";
import { Wrapper } from "../common/wrapper/Wrapper";
import { SectionIntroduction } from "../common/SectionIntroduction";
import { Icon } from "../common/icon/Icon";

export const LatestCars = () => {
  const sectionContent = {
    container: { style: { textAlign: "center", marginBottom: "50px" } },
    subtitle: {
      text: "our featured cars",
    },
    title: {
      type: "h3",
      text: "Latest Released Cars",
      style: {
        color: "var(--white)",
      },
    },
  };

  return (
    <section className={styles.latest}>
      <Wrapper>
        <SectionIntroduction content={sectionContent} />
        <div className={styles.container}>
          <div className={styles.preview}>
            <div className={styles.title_and_price}>
              <h4 className={styles.title}>Jaguer M1 Hybrid</h4>
              <p className={styles.price}>$2500</p>
            </div>
            <p className={styles.build_year_text}>
              Build Year: <p className={styles.year}>2020</p>
            </p>
            <img className={styles.img} src={testImg} alt="Jaguer M1 Hybrid" />
            <ul className={styles.details}>
              <li className={styles.item}>
                <Icon
                  type="setting"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Automatic</p>
              </li>
              <li className={styles.item}>
                <Icon
                  type="gasoline"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Gasoline</p>
              </li>
              <li className={styles.item}>
                <Icon
                  type="flag"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Automatic</p>
              </li>
            </ul>
          </div>
          <div className={styles.preview}>
            <div className={styles.title_and_price}>
              <h4 className={styles.title}>Jaguer M1 Hybrid</h4>
              <p className={styles.price}>$2500</p>
            </div>
            <p className={styles.build_year_text}>
              Build Year: <p className={styles.year}>2020</p>
            </p>
            <img className={styles.img} src={testImg} alt="Jaguer M1 Hybrid" />
            <ul className={styles.details}>
              <li className={styles.item}>
                <Icon
                  type="setting"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Automatic</p>
              </li>
              <li className={styles.item}>
                <Icon
                  type="gasoline"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Gasoline</p>
              </li>
              <li className={styles.item}>
                <Icon
                  type="flag"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Automatic</p>
              </li>
            </ul>
          </div>
          <div className={styles.preview}>
            <div className={styles.title_and_price}>
              <h4 className={styles.title}>Jaguer M1 Hybrid</h4>
              <p className={styles.price}>$2500</p>
            </div>
            <p className={styles.build_year_text}>
              Build Year: <p className={styles.year}>2020</p>
            </p>
            <img className={styles.img} src={testImg} alt="Jaguer M1 Hybrid" />
            <ul className={styles.details}>
              <li className={styles.item}>
                <Icon
                  type="setting"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Automatic</p>
              </li>
              <li className={styles.item}>
                <Icon
                  type="gasoline"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Gasoline</p>
              </li>
              <li className={styles.item}>
                <Icon
                  type="flag"
                  size={15}
                  baseStyle={{ color: "var(--gray)" }}
                />
                <p className={styles.desc}>Automatic</p>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
