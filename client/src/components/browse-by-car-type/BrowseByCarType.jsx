import styles from "./style.module.css";
import coupe from "../../assets/images/car-types/coupe.png";
import hatchback from "../../assets/images/car-types/hatchback.png";
import sedan from "../../assets/images/car-types/sedan.png";
import station_wagon from "../../assets/images/car-types/station-wagon.png";
import suv from "../../assets/images/car-types/suv.png";

import { BrowseByCarTypeHeading } from "./browse-by-car-type-heading/BrowseByCarTypeHeading";
import { BrowseByCarTypeList } from "./browse-by-car-type-list/BrowseByCarTypeList";
import { Wrapper } from "../common/wrapper/Wrapper";

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

  return (
    <section className={styles.browse}>
      <Wrapper>
        <div className={styles.container}>
          <BrowseByCarTypeHeading />
          <BrowseByCarTypeList items={mockdata} />
        </div>
      </Wrapper>
    </section>
  );
};
