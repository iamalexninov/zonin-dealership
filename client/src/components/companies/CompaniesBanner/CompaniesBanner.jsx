import styles from "./style.module.css";

export const CompaniesBanner = ({ item }) => {
  return (
    <li
      className={[styles.item, item.alt === "Race Banner" && styles.race].join(
        " "
      )}
    >
      <img className={styles.img} src={item.src} alt={item.alt} />
    </li>
  );
};
