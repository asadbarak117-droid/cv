import React from "react";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const contactLinks = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={35} />,
    link: "https://wa.me/93791938951",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={35} />,
    link: "mailto:asadbarak117@gmail.com",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={35} />,
    link: "https://github.com/asadbarak117-droid",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={35} />,
    link: "https://www.linkedin.com/in/neda-barakzai-3697353a0/",
  },
];

const Contect = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-5 overflow-hidden">
      <div className="text-center">
        <motion.h2
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-5xl font-bold mb-5"
        >
          Contact <span className="text-blue-500">Me</span>
        </motion.h2>

        <p className="text-gray-400 mb-12">
          Let's connect and build something amazing.
        </p>

        <div className="flex gap-8 flex-wrap justify-center">
          {contactLinks.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                x: [0, 30, -30, 0],
                y: [0, -20, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                rotate: 0,
              }}
              className="w-32 h-32 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-blue-500 transition"
            >
              {item.icon}

              <span className="text-sm">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contect;
