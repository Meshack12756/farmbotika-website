import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const backgroundImages = [
  "/assets/pic1.jpg",
  "/assets/pic2.jpg",
  "/assets/pic3.jpeg",
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden" id="Home">
      {/*  Background Slideshow */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            filter: "brightness(110%) contrast(115%) blur(2px)",
          }}
        />
      ))}

      {/* ✨ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-green-100/30 z-10 pointer-events-none" />

      {/* Ambient Motion */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-16 left-16 w-8 h-8 bg-green-300 rounded-full blur-sm z-10"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-24 right-12 w-6 h-6 bg-lime-400/40 rounded-full blur z-10"
      />

      {/*  Foreground Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 md:p-14 lg:p-16 max-w-3xl text-center shadow-2xl border border-white/30"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-green-900 font-poppins tracking-tight drop-shadow-lg mb-4"
          >
            FarmBotika
          </motion.h1>

          {/*  Partner Credibility Badges
          <div className="flex justify-center gap-3 mt-2 mb-4">
            <span className="px-3 py-1 bg-green-700 text-white rounded-full text-sm font-semibold shadow-md">
              Supported by JKUAT
            </span>
            <span className="px-3 py-1 bg-lime-600 text-white rounded-full text-sm font-semibold shadow-md">
              Powered by JHub Africa
            </span>
          </div>*/}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl text-lime-800 font-light mb-4"
          >
            Your Farming Ally from Ground to Growth
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-xl text-green-800 leading-relaxed"
          >
            Empowering small-scale farmers with smart,
            <br />
            accessible tools for better yields,
            <br />
            financial growth, and climate resilience
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-sm italic text-green-700/80"
          >
            Technology for thriving farms, resilient futures, and connected
            communities.
          </motion.p>

          {/*  CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            className="mt-6 px-6 py-3 bg-lime-600 hover:bg-lime-700 text-white rounded-full text-lg font-semibold shadow-lg transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
