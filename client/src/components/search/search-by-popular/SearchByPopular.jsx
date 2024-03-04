import styles from "./style.module.css";
import banner from "../../../assets/images/search/popular_selling_banner.jpg";
import { HrefTag } from "../../common/Link";
import { SearchByPopularBrands } from "./SearchByPopularBrands";

export const SearchByPopular = () => {
  const linkStyles = {
    color: "var(--gray)",
    textDecoration: "underline",
  };

  return (
    <div className={styles.popular}>
      <div className={styles.popular_heading}>
        <h4>Popular Selling Vehicles</h4>
        <HrefTag
          path="/inventory"
          content="See All Makers"
          baseStyle={linkStyles}
          hoverStyle={linkStyles}
        />
      </div>
      <div className={styles.banners_container}>
        <div className={styles.popular_makers}>
          <SearchByPopularBrands />
        </div>
        <div className={styles.banner_box}>
          <img
            className={styles.banner}
            src={banner}
            alt="Popular Selling Vehicles Banner"
          />
        </div>
      </div>
    </div>
  );
};
