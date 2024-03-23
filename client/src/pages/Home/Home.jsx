import { HomeHero } from "./home-hero/HomeHero";
import { Search } from "../../components/search/Search";
import { Service } from "../../components/service/Service";
import { FindPerfectCar } from "../../components/find-perfect-car/FindPerfectCar";
import { BrowseByCarType } from "../../components/browse-by-car-type/BrowseByCarType";
import { DownloadApp } from "../../components/download-app/DownloadApp";
import { Companies } from "../../components/companies/Companies";
import { LatestCars } from "../../components/latest-cars/LatestCars";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Search />
      <Service />
      <FindPerfectCar />
      <BrowseByCarType />
      <LatestCars />
      <DownloadApp />
      <Companies />
    </>
  );
};
