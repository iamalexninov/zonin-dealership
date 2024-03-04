import styles from "./style.module.css";
import { Wrapper } from "../../components/common/wrapper/Wrapper";
import { SearchByMaker } from "./search-by-maker/SearchByMaker";
import { SearchByPopular } from "./search-by-popular/SearchByPopular";

export const Search = () => {
  return (
    <section className={styles.search}>
      <Wrapper>
        <SearchByMaker />
        <SearchByPopular />
      </Wrapper>
    </section>
  );
};
