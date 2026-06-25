import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedProperties />
        <AboutSection />
        <Services />
        <ContactSection />
    </>
  );
};

export default Home;