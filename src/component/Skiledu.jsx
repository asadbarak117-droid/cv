import React from "react";
import { Code, Palette, Globe, Brain, Server, Languages } from "lucide-react";
import { motion } from "motion/react";

const Skiledu = () => {
  const skills = [
    { name: "HTML", icon: <Code /> },
    { name: "CSS", icon: <Palette /> },
    { name: "React", icon: <Globe /> },
    { name: "Bootstrap", icon: <Code /> },
    { name: "Backend (Learning)", icon: <Server /> },
    { name: "Computer Science", icon: <Brain /> },
    { name: "Dari (Native)", icon: <Languages /> },
    { name: "Pashto (Native)", icon: <Languages /> },
    { name: "English (Fluent)", icon: <Languages /> },
  ];

  return (
    <div className="flex min-h-screen flex-col gap-8 px-4 py-12 sm:px-6 sm:py-20 md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl md:w-1/2"
      >
        <video
          className="h-[500px] w-full object-cover sm:h-[600px]"
          src="https://video-previews.elements.envatousercontent.com/81d61c39-53c7-4843-acc5-6f6a50fe6544/watermarked_preview/watermarked_preview.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-0 p-5 sm:p-8"
        >
          <h2 className="mb-3 text-3xl font-bold text-cyan-400 sm:text-4xl">
            My Education
          </h2>

          <p className="text-sm leading-relaxed text-gray-200 sm:text-lg">
            My education journey started at Sardar-e Kabul High School, where I
            completed my school education. Currently, I am studying Computer
            Science at Zen University and continuing my studies through the
            University of the People (UoPeople). My goal is to become a Full
            Stack Developer and improve my frontend and backend development
            skills.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:p-8 md:w-1/2"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center text-3xl font-bold text-cyan-400 sm:text-4xl"
        >
          My Skills
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 hover:border-cyan-400"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-cyan-400"
              >
                {skill.icon}
              </motion.div>

              <span className="text-sm font-semibold text-white sm:text-lg">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skiledu;
