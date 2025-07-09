import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <nav className="w-screen bg-green-100 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div
        className="text-3xl font-bold font-mogra text-green-700 cursor-pointer"
        onClick={() => goToSection("home")}
      >
        FarmBotika
      </div>

      <div className="lg:flex visible bg-transparent pr-10 text-black font-bold my-auto w-fit items-center">
        <button
          type="button"
          onClick={() => goToSection("home")}
          className="w-screen lg:w-fit transition-all hover:duration-700 ease-in duration-400 px-3 mx-3 rounded-full cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-white focus:active my-3 active"
        >
          HOME
        </button>
        <button
          type="button"
          onClick={() => goToSection("story")}
          className="w-screen lg:w-fit transition-all hover:duration-700 ease-in duration-400 px-3 mx-3 rounded-full cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-white focus:active my-3 active"
        >
          ABOUT US
        </button>
        <button
          type="button"
          onClick={() => goToSection("services")}
          className="w-screen lg:w-fit transition-all hover:duration-700 ease-in duration-400 px-3 mx-3 rounded-full cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-white focus:active my-3 active"
        >
          SERVICES
        </button>
        <button
          type="button"
          onClick={() => goToSection("team")}
          className="w-screen lg:w-fit transition-all hover:duration-700 ease-in duration-400 px-3 mx-3 rounded-full cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-white focus:active my-3 active"
        >
          TEAM
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
