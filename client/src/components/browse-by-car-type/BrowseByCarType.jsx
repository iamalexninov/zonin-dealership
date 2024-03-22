import styles from "./style.module.css";
import coupe from "../../assets/images/car-types/coupe.png";
import hatchback from "../../assets/images/car-types/hatchback.png";
import sedan from "../../assets/images/car-types/sedan.png";
import station_wagon from "../../assets/images/car-types/station-wagon.png";
import suv from "../../assets/images/car-types/suv.png";

import { BrowseByCarTypeList } from "./browse-by-car-type-list/BrowseByCarTypeList";
import { Wrapper } from "../common/wrapper/Wrapper";
import { SectionIntroduction } from "../common/SectionIntroduction";

export const BrowseByCarType = () => {
  const mockdata = [
    {
      img: coupe,
      type: "Coupe",
    },
    {
      img: hatchback,
      type: "Hatchback",
    },
    {
      img: sedan,
      type: "Sedan",
    },
    {
      img: station_wagon,
      type: "Station Wagon",
    },
    {
      img: suv,
      type: "Suv",
    },
  ];

  const sectionContent = {
    container: {
      style: {
        marginBottom: "50px",
      },
    },
    title: {
      type: "h3",
      text: "Browse By Car Type",
    },
    subtitle: {
      text: "categories",
    },
  };

  return (
    <section className={styles.browse}>
      <Wrapper>
        <div className={styles.container}>
          <SectionIntroduction content={sectionContent} />
          <BrowseByCarTypeList items={mockdata} />
        </div>
      </Wrapper>
    </section>
  );
};
