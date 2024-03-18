import styles from "./style.module.css";
import { BrowseByCarTypeItem } from "../browse-by-car-type-item/BrowseByCarTypeItem";

export const BrowseByCarTypeList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <BrowseByCarTypeItem key={item.type} item={item} />
      ))}
    </ul>
  );
};
