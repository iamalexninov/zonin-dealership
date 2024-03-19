import styles from "./style.module.css";
import { CompaniesBanner } from "../CompaniesBanner/CompaniesBanner";

export const CompaniesList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <CompaniesBanner key={item.alt} item={item} />
      ))}
    </ul>
  );
};
