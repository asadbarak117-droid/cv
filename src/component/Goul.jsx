import React from "react";
import { Target, BookOpen, Code, Atom, Music, Globe } from "lucide-react";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Goul = () => {
  const interests = [
    {
      title: "Full Stack Developer",
      icon: <Code size={35} />,
      text: "Building modern frontend and backend applications.",
    },
    {
      title: "International Tech Market",
      icon: <Globe size={35} />,
      text: "Working and growing in the global technology market.",
    },
    {
      title: "Programming & Mathematics",
      icon: <Target size={35} />,
      text: "Solving problems with logic and creativity.",
    },
    {
      title: "Quantum Science",
      icon: <Atom size={35} />,
      text: "Exploring advanced science and future technologies.",
    },
    {
      title: "Reading Books",
      icon: <BookOpen size={35} />,
      text: "Learning from books about science and programming.",
    },
    {
      title: "Learning Music",
      icon: <Music size={35} />,
      text: "Improving creativity through music.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-0 top-20 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl sm:h-72 sm:w-72"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 top-40 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl sm:h-96 sm:w-96"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 sm:h-[500px] sm:w-[500px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="relative z-10 mx-auto max-w-7xl rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl sm:rounded-[40px] sm:p-10 md:p-14"
      >
        <h1 className="mb-6 flex flex-col items-center gap-3 text-center text-3xl font-bold text-cyan-400 sm:flex-row sm:text-5xl md:text-6xl">
          <span className="rounded-full bg-cyan-400/20 p-3">
            <Target size={35} className="sm:h-[50px] sm:w-[50px]" />
          </span>
          My Goals & Interests
        </h1>

        <p className="text-center text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
          My goal is to become a professional Full Stack Developer and work in
          the international technology market. I want to create modern software
          solutions and continue improving my skills in computer science. I
          enjoy reading books about mathematics, programming, science, and
          quantum technology. I also enjoy learning music and developing my
          creativity.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
          className="mt-10 sm:mt-14"
        >
          {interests.map((item, index) => (
            <SwiperSlide key={item.title}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="min-h-[230px] rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-black/40 p-6 hover:border-cyan-400 sm:min-h-[280px] sm:p-8"
              >
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="mb-5 text-cyan-400"
                >
                  {item.icon}
                </motion.div>

                <h2 className="mb-3 text-xl font-bold sm:text-2xl">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-400 sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Goul;
