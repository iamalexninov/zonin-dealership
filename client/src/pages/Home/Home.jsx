import { HomeHero } from "./home-hero/HomeHero";
import { Search } from "../../components/search/Search";
import { Service } from "../../components/service/Service";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Search />
      <Service />
    </>
  );
};
