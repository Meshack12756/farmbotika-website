import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-white scroll-smooth">
      {/*Hero Section */}
      <section id="home" className="">
        <Hero />
      </section>

      {/*About Section */}
      <section id="story" className="">
        <About />
      </section>

      {/*Services Section */}
      <section id="services" className="">
        <Services />
      </section>

      {/*Blog Section */}
      <section id="team" className="">
        <Team />
      </section>
    </div>
  );
};

export default Home;
