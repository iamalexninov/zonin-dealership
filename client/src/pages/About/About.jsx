import { Hero } from "../../components/hero/Hero";
import { Companies } from "../../components/companies/Companies";

export const About = () => {
  const heroContent = {
    title:'About Our History',
    page:'About Us'
  }

  return (
    <>
      <Hero content={heroContent}/>
      {/* About Preview */}
      {/* FAQ */}
      <Companies />
    </>
  );
};
