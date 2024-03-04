import { SearchByMakerFields } from "./search-by-maker-fields/SearchByMakerFields";
import { SearchByMakerHeading } from "./search-by-maker-heading/SearchByMakerHeading";
import styles from "./style.module.css";

export const SearchByMaker = () => {
  return (
    <div className={styles.search}>
      <SearchByMakerHeading />
      <SearchByMakerFields />
    </div>
  );
};
