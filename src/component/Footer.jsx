import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "motion/react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={25} />,
      link: "https://github.com/asadbarak117-droid",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={25} />,
      link: "https://www.linkedin.com/in/neda-barakzai-3697353a0/",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={25} />,
      link: "mailto:asadbarak117@gmail.com",
    },
  ];

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={25} />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={25} />,
    },
    {
      name: "React",
      icon: <FaReact size={25} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={25} />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={25} />,
    },
    {
      name: "Backend Learning",
      icon: <FaNodeJs size={25} />,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black px-6 py-16 text-white">
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-10 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        relative z-10 mx-auto grid max-w-6xl gap-10
        rounded-3xl border border-white/20
        bg-white/10 p-8 backdrop-blur-xl
        md:grid-cols-3
        "
      >
        <div>
          <motion.h2
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mb-4 flex items-center gap-3 text-3xl font-bold text-cyan-400"
          >
            <FaCode size={35} />
            Neda Barakzai
          </motion.h2>

          <p className="leading-relaxed text-gray-300">
            Computer Science student and future Full Stack Developer. Passionate
            about programming, mathematics, quantum science, and modern
            technology.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-2xl font-bold text-cyan-400">Skills</h3>

          <div className="grid gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.08,
                  x: 15,
                }}
                className="
                flex items-center gap-3
                rounded-xl border border-white/10
                bg-black/30 p-3
                hover:border-cyan-400
                "
              >
                <motion.span
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="text-cyan-400"
                >
                  {skill.icon}
                </motion.span>

                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-2xl font-bold text-cyan-400">Contact</h3>

          <div className="flex gap-4">
            {socialLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                }}
                className="
                rounded-full bg-white/10 p-4
                hover:text-cyan-400
                "
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-400">asadbarak117@gmail.com</p>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        relative z-10 mt-10
        flex justify-center
        text-center text-gray-400
        "
      >
        © 2026 Neda Barakzai | Full Stack Developer
      </motion.div>
    </footer>
  );
};

export default Footer;
