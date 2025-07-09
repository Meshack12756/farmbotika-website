import React from "react";
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaMobileAlt,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSeedling size={36} className="text-green-700" />,
    title: "Smart Crop Advisory",
    description:
      "Get personalized planting guides and crop health tips based on your region and seasonality.",
  },
  {
    icon: <FaMobileAlt size={36} className="text-green-700" />,
    title: "USSD + Mobile Tools",
    description:
      "Access farming tools with or without internet, thanks to our offline-first and multilingual mobile platform.",
  },
  {
    icon: <FaChartLine size={36} className="text-green-700" />,
    title: "Market Insights",
    description:
      "Track crop prices, demand trends, and connect to buyers with real-time market intelligence.",
  },
  {
    icon: <FaHandshake size={36} className="text-green-700" />,
    title: "Community Support",
    description:
      "Learn from other farmers and connect to local agronomists and extension officers in your area.",
  },
];

// Animation config
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-green-100 text-black"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center space-y-16"
      >
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-mogra text-green-800 drop-shadow">
            Our Services
          </h2>
          <p className="text-lg font-poppins text-black max-w-3xl mx-auto">
            FarmBotika offers smart, accessible tools designed for farmers of
            every scale — from seed to sale.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex items-start gap-6 p-6 bg-green-200 shadow-md rounded-xl hover:shadow-lg transition duration-300"
            >
              <div className="shrink-0">{service.icon}</div>
              <div className="space-y-2 text-left">
                <h3 className="text-xl font-semibold font-montserrat text-green-800">
                  {service.title}
                </h3>
                <p className="text-black font-poppins leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
