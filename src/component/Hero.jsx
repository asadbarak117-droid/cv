import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

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

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-5 text-white">
      <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Hi, I'm <span className="text-blue-500">Neda</span> 👋
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            I'm a Computer Science student and Front-End Developer. I create
            modern, responsive websites using React and Tailwind CSS.
          </p>

          <div className="flex gap-4 mb-8">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
              My Work
              <IoArrowForward size={18} />
            </motion.a>

            <motion.a
              href="https://wa.me/93791938951"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-6 py-3 rounded-full"
            >
              Contact
            </motion.a>
          </div>

          <div className="flex gap-5">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2 }}
                className="hover:text-blue-500 transition"
                title={item.name}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-72 h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
