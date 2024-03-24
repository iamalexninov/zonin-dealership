import { Hero } from "../../components/hero/Hero";
import { Companies } from "../../components/companies/Companies";
import { Service } from "../../components/service/Service";
import { AboutPreview } from "../../components/about-preview/AboutPreview";

export const About = () => {
  const heroContent = {
    title: "About Our History",
    page: "About Us",
  };

  return (
    <>
      <Hero content={heroContent} />
      <Service />
      <AboutPreview />
      {/* FAQ */}
      <Companies />
    </>
  );
};
