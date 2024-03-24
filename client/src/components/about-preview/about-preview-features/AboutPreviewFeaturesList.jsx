import styles from "./style.module.css";
import { AboutPreviewFeaturesItem } from "./AboutPreviewFeaturesItem";

export const AboutPreviewFeaturesList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <AboutPreviewFeaturesItem item={item} key={item.text} />
      ))}
    </ul>
  );
};
