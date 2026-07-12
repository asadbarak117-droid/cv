import React from "react";
import { User, GraduationCap, MapPin, Code, Brain } from "lucide-react";
import { motion } from "motion/react";

const Personlintr = () => {
  const info = [
    {
      icon: <MapPin size={24} />,
      text: "Born in Iran, 2003",
    },
    {
      icon: <GraduationCap size={24} />,
      text: "Sardar-e Kabul High School",
    },
    {
      icon: <Code size={24} />,
      text: "Computer Science & Web Development",
    },
    {
      icon: <Brain size={24} />,
      text: "Mathematics & Quantum Science",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-12 text-white sm:px-6 sm:py-20">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://video-previews.elements.envatousercontent.com/811f8401-6faa-448b-a6f0-15fa0773517a/watermarked_preview/watermarked_preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-stretch gap-6 md:grid-cols-2 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:p-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3 text-3xl font-bold text-cyan-400 sm:text-4xl"
          >
            <span className="rounded-full bg-cyan-400/20 p-2 sm:p-3">
              <User size={30} />
            </span>
            About Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base leading-relaxed text-gray-300 sm:text-lg"
          >
            My name is Neda Barakzai. I was born in 2003 in Iran and completed
            my school education at Sardar-e Kabul High School. I am passionate
            about technology, programming, mathematics, and quantum science. I
            enjoy exploring complex ideas, solving problems, and understanding
            how science and technology shape the world around us. Currently, I
            am developing my skills in computer science and web development.
          </motion.p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
            {info.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-3 hover:border-cyan-400 sm:gap-4 sm:p-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-cyan-400"
                >
                  {item.icon}
                </motion.div>

                <span className="text-sm sm:text-base">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl"
        >
          <motion.video
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="h-[400px] w-full object-cover sm:h-[600px] md:h-full md:min-h-[700px]"
            src="https://video-previews.elements.envatousercontent.com/5473031e-e0a3-45bd-89aa-96d9017b9091/watermarked_preview/watermarked_preview.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Personlintr;
