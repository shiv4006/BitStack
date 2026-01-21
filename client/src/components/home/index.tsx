import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Solutions from "./Solutions";
import WhyChooseUs from "./WhyChooseUs";
import ContactCTA from "./ContactCTA";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Services />
      <Solutions />
      <WhyChooseUs />
      <ContactCTA />
    </div>
  );
};

export default Home;
