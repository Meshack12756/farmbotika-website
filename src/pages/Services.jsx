import React from "react";
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaMobileAlt,
  FaChartLine,
  FaHandshake,
  FaCalendarAlt,
  FaCloudSunRain,
  FaFlask,
  FaBug,
} from "react-icons/fa";

// Services Data
const services = [
  {
    icon: <FaSeedling size={40} />,
    title: "Smart Crop Advisory",
    description:
      "Receive region-specific tips on crop selection, planting techniques, and soil compatibility to maximize your yield and reduce risk.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "USSD + Mobile Tools",
    description:
      "Even with limited connectivity, farmers can access farming advice, weather alerts, and crop records in their native language via mobile.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Market Insights",
    description:
      "Compare buyer prices, forecast trends, and make smarter selling decisions based on real-time data integrated from local markets.",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Community Support",
    description:
      "Connect with agronomists, farmer groups, and extension officers to share knowledge and seek guidance when it matters most.",
  },
  {
    icon: <FaCalendarAlt size={40} />,
    title: "Seasonal Planner",
    description:
      "Generate planting calendars based on your location, crop type, rainfall predictions, and season goals for strategic planning.",
  },
  {
    icon: <FaCloudSunRain size={40} />,
    title: "Local Weather Alerts",
    description:
      "Get proactive notifications about drought risks, rain patterns, and temperature shifts that can affect planting or harvest.",
  },
  {
    icon: <FaFlask size={40} />,
    title: "Soil Health Tracker",
    description:
      "Monitor nutrients and pH over time by logging soil tests, and receive input suggestions based on soil profile data.",
  },
  {
    icon: <FaBug size={40} />,
    title: "Pest & Disease Watch",
    description:
      "Stay protected with early alerts and proven treatments tailored to pests common in your region and crop type.",
  },
];

// Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-green-50 via-lime-100 to-white text-black"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        variants={fadeUp}
        className="max-w-6xl mx-auto text-center space-y-16"
      >
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-mogra text-green-800 drop-shadow">
            Our Services
          </h2>
          <p className="text-lg font-poppins text-gray-700 max-w-3xl mx-auto">
            FarmBotika provides powerful yet simple tools designed for farmers
            of every scale — from seed to harvest.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative p-6 h-64 bg-white/80 backdrop-blur-md rounded-xl border border-green-300 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
            >
              {/* Icon + Title */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-green-700 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                {service.icon}
                <h3 className="text-xl mt-4 font-semibold font-montserrat text-green-800 text-center">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 px-6 text-center transition-opacity duration-700 delay-150">
                <p className="text-sm font-poppins text-green-900 leading-relaxed">
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
