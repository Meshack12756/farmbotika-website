import React, { useState, useEffect } from "react";

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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden" id="Home">
      {/* 🔁 Slideshow Background */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})`, filter: "blur(2px)" }}
        />
      ))}

      {/* 🟩 Tint and Foreground Content */}
      <div className="relative z-10 w-full h-full bg-[#021500]/70 backdrop-blur-sm flex items-center justify-around pl-6">
        <div className="space-y-6">
          <p className="text-xl font-poppins md:text-[3rem] lg:text-[8rem] text-white drop-shadow-md leading-none">
            FarmBotika
          </p>
          <div className="space-y-8">
            <p className="text-xl font-montserrat lg:text-4xl text-[#D6F9C6] drop-shadow-md leading-none font-extralight">
              Your Farming Ally from Ground to Growth
            </p>
            <p className="text-xl text-white font-poppins lg:text-2xl">
              Empowers small-scale farmers with smart, <br />
              accessible tools for better yields, <br />
              financial growth, and climate resilience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
