import React from "react";
import { ExternalLink, Globe, Code2, Laptop } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Sufer Website",
    description:
      "A modern React website with responsive design, animations, and clean user interface.",
    link: "https://sufer-hbkd.vercel.app/",
    icon: <Globe size={45} />,
  },
  {
    title: "CV Website",
    description:
      "A personal portfolio website to present skills, education, and projects.",
    link: "https://cv-gyf7.vercel.app/",
    icon: <Code2 size={45} />,
  },
  {
    title: "Boot Camp Project",
    description:
      "A frontend development project created during a coding boot camp.",
    link: "https://boot-camp-azure.vercel.app/",
    icon: <Laptop size={45} />,
  },
];

function Project() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4">
      <motion.h1
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
        absolute
        top-8
        z-30
        text-3xl
        font-bold
        text-cyan-400
        sm:text-4xl
        md:text-5xl
        "
      >
        My Projects
      </motion.h1>

      <div
        className="
        relative
        z-10
        h-[280px]
        w-[280px]
        overflow-hidden
        rounded-full
        border-4
        border-cyan-400/50

        sm:h-[350px]
        sm:w-[350px]

        md:h-[420px]
        md:w-[420px]
        "
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          src="https://media.istockphoto.com/id/2184499109/video/blue-gradient-animation-looping-video-background-4k.mp4?s=mp4-640x640-is&k=20&c=_WpI5B51Og29rHwX5tc46rcd0q68J947eWq2g2n3Ino="
        />
      </div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-900, 0, 0, 900],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
            delay: index * 3,
          }}
          className="
          absolute
          z-20
          flex
          h-44
          w-44

          sm:h-56
          sm:w-56

          md:h-64
          md:w-64

          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/70
          bg-black
          p-4
          text-center
          text-white
          shadow-2xl
          backdrop-blur-xl
          "
          style={{
            left: index === 0 ? "30%" : index === 1 ? "50%" : "70%",

            top: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div className="mb-2 text-cyan-400">{project.icon}</div>

          <h2
            className="
            text-sm
            font-bold
            text-cyan-300

            sm:text-lg
            md:text-xl
            "
          >
            {project.title}
          </h2>

          <p
            className="
            mt-2
            hidden
            text-xs
            text-gray-300

            sm:block
            md:text-sm
            "
          >
            {project.description}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            mt-3
            flex
            items-center
            gap-2
            rounded-full
            bg-cyan-400
            px-4
            py-2
            text-xs
            font-bold
            text-black

            md:text-sm
            "
          >
            View
            <ExternalLink size={14} />
          </a>
        </motion.div>
      ))}
    </section>
  );
}

export default Project;
