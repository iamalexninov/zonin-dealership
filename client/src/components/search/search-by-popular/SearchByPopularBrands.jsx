import audi from "../../../assets/images/search/audi.png";
import bmw from "../../../assets/images/search/bmw.png";
import mercedes from "../../../assets/images/search/mercedes.png";
import honda from "../../../assets/images/search/honda.png";
import renault from "../../../assets/images/search/renault.png";
import vw from "../../../assets/images/search/vw.png";
import opel from "../../../assets/images/search/opel.png";
import nissan from "../../../assets/images/search/nissan.png";

export const SearchByPopularBrands = () => {
  const mockdata = [
    {
      img: audi,
      alt: "Audi Maker Poster",
    },
    {
      img: bmw,
      alt: "BMW Maker Poster",
    },
    {
      img: mercedes,
      alt: "Mercedes Maker Poster",
    },
    {
      img: honda,
      alt: "Honda Maker Poster",
    },
    {
      img: renault,
      alt: "Renault Maker Poster",
    },
    {
      img: vw,
      alt: "VW Maker Poster",
    },
    {
      img: opel,
      alt: "Opel Maker Poster",
    },
    {
      img: nissan,
      alt: "Nissan Maker Poster",
    },
  ];

  return (
    <>
      {mockdata.map((maker) => (
        <img src={maker.img} alt={maker.alt} />
      ))}
    </>
  );
};
