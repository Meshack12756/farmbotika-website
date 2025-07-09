import React from "react";
import { motion } from "framer-motion";

const AboutImage = "/assets/about-farmers.jpg";
const AboutImage5 = "/assets/farmer-smile.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.section
      className="min-h-screen w-full bg-green-100 px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-mogra text-green-800 leading-tight drop-shadow-sm">
            About FarmBotika
          </h2>
          <p className="text-lg font-poppins text-black leading-relaxed">
            FarmBotika is more than just a platform — it’s a movement rooted in
            innovation, resilience, and community. We empower small-scale
            farmers in Kenya and beyond through intuitive technology that
            supports sustainable agriculture, market access, and climate
            adaptability.
          </p>
          <p className="text-lg font-poppins text-black leading-relaxed">
            From AI-assisted insights to localized support in multiple
            languages, our mission is to make farming smarter, not harder — one
            field at a time.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative group"
        >
          <img
            src={AboutImage}
            alt="Farmers"
            className="rounded-xl shadow-xl w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 ring-1 ring-green-200 mt-2"
          />
          <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded text-sm font-medium text-green-900 shadow">
            🇰🇪 Empowering local farmers
          </div>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-24 max-w-4xl mx-auto text-center space-y-10"
      >
        <h3 className="text-3xl md:text-4xl font-mogra text-green-800 drop-shadow-sm">
          Our Story
        </h3>

        <div className="text-lg font-poppins leading-relaxed text-black tracking-wide text-left space-y-6">
          <p>
            At FarmBotika, we understood that access to advice, data, and
            digital tools shouldn’t be a luxury. Our solutions are tailored for
            the everyday farmer — multilingual, mobile-friendly, and built for
            real-world challenges.
          </p>
          <p className="text-green-900 font-semibold">
            We’re not just building software — we’re cultivating dignity,
            efficiency, and hope. One harvest at a time.
          </p>
        </div>

        {/* Smiling Farmer Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center pt-8"
        >
          <img
            src={AboutImage5}
            alt="Smiling farmer"
            className="rounded-lg shadow-lg w-full max-w-lg object-cover ring-2 ring-green-300 transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
