import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "motion/react";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contect";
import Project from "./component/Project";
import Headerh from "./component/Headerh";

function Loader() {
  return (
    <div
      className="
      relative
      flex
      h-screen
      items-center
      justify-center
      overflow-hidden
      bg-gradient-to-b
      from-sky-900
      to-blue-300
      "
    >
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        h-96
        w-96
        rounded-full
        bg-white/20
        blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [-250, 250, -250],
          y: [0, -12, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[35%]
        text-8xl
        sm:text-9xl
        "
      >
        🐧
      </motion.div>

      {[1, 2, 3, 4, 5, 6].map((item) => (
        <motion.div
          key={item}
          animate={{
            y: [-50, 800],
            x: [0, 40, -40, 0],
            rotate: [0, 180, 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 6 + item,
            repeat: Infinity,
            delay: item,
            ease: "linear",
          }}
          className="
          absolute
          top-0
          text-3xl
          "
          style={{
            left: `${item * 15}%`,
          }}
        >
          ❄️
        </motion.div>
      ))}

      <motion.div
        animate={{
          scaleX: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[30%]
        h-8
        w-80
        rounded-full
        bg-white/60
        blur-sm
        "
      />

      <motion.div
        animate={{
          x: [0, 20, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[28%]
        h-3
        w-96
        rounded-full
        bg-white/80
        "
      />

      <motion.h1
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        text-center
        text-3xl
        font-bold
        text-white
        sm:text-5xl
        "
      >
        Neda Portfolio
      </motion.h1>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Headerh />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
