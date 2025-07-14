import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr.Lawrence Nderu PHD",
    role: "Project PI",
    image: "/assets/nderu.jpg",
    linkedin: "https://www.linkedin.com/in/dr-lawrence-nderu",
    github: "",
  },
  {
    name: "Meshack Ochieng",
    role: "Team Lead",
    image: "/assets/mesh.jpg",
    linkedin: "https://www.linkedin.com/in/meshack-ochieng-68a70530b",
    github: "https://github.com/Meshack12756",
  },
  {
    name: "Philip Simiyu",
    role: "UI/UX Designer",
    image: "/assets/phil.jpg",
    linkedin: "https://www.linkedin.com/in/philip-glen-38754422b",
    github: "https://github.com/philglenny24",
  },
  {
    name: "Elsie Wanjiku",
    role: "UI/UX Designer",
    image: "/assets/elc.jpg",
    linkedin: "https://www.linkedin.com/in/elsie-ngethe-wanjiku-6144a4367",
    github: "https://github.com/elsie-wanjiku",
  },
  {
    name: "Nicholas Mwangi",
    role: "ML Engineer",
    image: "/assets/nik.jpg",
    linkedin: "https://www.linkedin.com/in/nicholas-mwangi-59a224282",
    github: "https://github.com/nikola-code",
  },
  {
    name: "Maureen Nkatha",
    role: "Data Scientist",
    image: "/assets/mau.jpg",
    linkedin: "https://www.linkedin.com/in/nkatha-imanene",
    github: "https://github.com/Nkatha-Imanene",
  },
  {
    name: "Brian Kipkirui",
    role: "Backend Developer",
    image: "/assets/bri.jpg",
    linkedin: "https://www.linkedin.com/in/brian-kipkirui-3606942a5",
    github: "https://github.com/kipkirui73",
  },
  {
    name: "Ian Mandila",
    role: "IoT Engineer",
    image: "/assets/man.jpg",
    linkedin: "https://www.linkedin.com/in/ian-mandila-04a68327a",
    github: "https://github.com/IanMandila",
  },
  {
    name: "Emmanuel Kamau",
    role: "IoT Engineer",
    image: "/assets/manu.jpg",
    linkedin: "https://www.linkedin.com/in/emmanuel-kamau-7a266a209",
    github: "https://github.com/treyul",
  },
  {
    name: "Victoria Limo",
    role: "IoT Engineer",
    image: "/assets/vic.jpg",
    linkedin: "https://www.linkedin.com/in/limovictoria",
    github: "https://github.com/victorialimo",
  },
  {
    name: "Shalom Musyoki",
    role: "IoT Engineer",
    image: "/assets/sha.jpg",
    linkedin: "http://www.linkedin.com/in/shalom-musyoki-a31b31282",
    github: "https://github.com/musyokiii",
  },
  {
    name: "Judith Atieno Adhiambo",
    role: "Communication Specialist",
    image: "/assets/cha.jpg",
    linkedin: "https://www.linkedin.com/in/judith-odhiambo",
    github: "https://github.com/Chachi15",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Team = () => {
  const pi = teamMembers[0];
  const others = teamMembers.slice(1);

  return (
    <section
      id="team"
      className="bg-gradient-to-br from-green-50 via-lime-100 to-white py-20 px-6 text-green-900"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl text-center font-mogra drop-shadow mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Meet the Team
      </motion.h2>

      <motion.p
        className="text-lg font-poppins text-center text-gray-700 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        The passionate minds behind FarmBotika — blending technology,
        agriculture, and community impact.
      </motion.p>

      {/* Project PI */}
      <motion.div
        className="max-w-3xl mx-auto mb-16"
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition">
          <img
            src={pi.image}
            alt={pi.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-green-400"
          />
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-xl font-semibold text-green-800">{pi.name}</h3>
            <p className="text-sm text-gray-700 mb-2">{pi.role}</p>
            <div className="flex justify-center sm:justify-start gap-4 text-xl">
              {pi.linkedin && (
                <a
                  href={pi.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-600"
                >
                  <FaLinkedin />
                </a>
              )}
              {pi.github && (
                <a
                  href={pi.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-600"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Remaining Members */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((member, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-green-300 mb-4"
            />
            <h3 className="text-lg font-semibold text-green-700">
              {member.name}
            </h3>
            <p className="text-sm text-gray-700 mb-3">{member.role}</p>
            <div className="flex gap-4 text-xl">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
