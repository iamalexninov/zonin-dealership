import { HomeHero } from "./home-hero/HomeHero";
import { Search } from "../../components/search/Search";
import { Service } from "../../components/service/Service";
import { FindPerfectCar } from "../../components/find-perfect-car/FindPerfectCar";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Search />
      <Service />
      <FindPerfectCar />
    </>
  );
};
