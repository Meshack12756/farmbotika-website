import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-900 to-green-950 text-white py-8 px-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-lime-300">
            Contact FarmBotika
          </h3>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-lime-300" />
            <a
              href="mailto:support@farmbotika.africa"
              className="hover:underline text-white"
            >
              support@farmbotika.africa
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-lime-300" /> Nairobi, Kenya
          </p>
        </div>

        {/* Partners Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-lime-300">Our Partners</h3>
          <div className="flex flex-col gap-6">
            {/* JHub Africa */}
            <a
              href="https://jhubafrica.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:scale-105 transition"
            >
              <img
                src="/assets/jhub.webp"
                alt="JHub Africa"
                className="h-14 w-auto object-contain rounded-sm shadow-lg"
              />
              <span className="text-white font-semibold text-base">
                JHub Africa
              </span>
            </a>

            {/* JKUAT */}
            <a
              href="https://www.jkuat.ac.ke"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:scale-105 transition"
            >
              <img
                src="/assets/jkuat.jpg"
                alt="JKUAT"
                className="h-14 w-auto object-contain rounded-sm shadow-lg"
              />
              <span className="text-white font-semibold text-base">
                Jomo Kenyatta University of Agriculture and Technology
              </span>
            </a>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-lime-300">Our Mission</h3>
          <p className="text-white/80">
            Empower smallholder farmers with inclusive technology that improves
            yields, builds climate resilience, and connects communities across
            Africa.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} FarmBotika. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
