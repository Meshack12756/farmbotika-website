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
    <section id="team" className="bg-green-100 text-green-800 py-16 px-4">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl text-center font-mogra text-green-800 drop-shadow mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Team
      </motion.h2>

      <motion.p
        className="text-black text-lg font-poppins text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        Meet the dedicated team behind the project
      </motion.p>

      {/* Project PI */}
      <motion.div
        className="max-w-2xl mx-auto mb-12"
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg transition hover:scale-[1.02]">
          {pi.image ? (
            <img
              src={pi.image}
              alt={pi.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-green-400"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-green-800 flex items-center justify-center text-white text-2xl font-semibold">
              {pi.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              {pi.name}
            </h3>
            <p className="text-sm text-black mb-2">{pi.role}</p>
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {others.map((member, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center gap-6 p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg transition hover:scale-[1.02]"
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-green-400"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-green-800 flex items-center justify-center text-white text-2xl font-semibold">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
            )}
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-black mb-2">{member.role}</p>
              <div className="flex justify-center sm:justify-start gap-4 text-xl">
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
