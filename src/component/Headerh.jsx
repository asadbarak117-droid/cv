import { Link } from "react-router-dom";
import { House, User, Mail, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", path: "/", icon: <House size={20} /> },
  { name: "About Me", path: "/about", icon: <User size={20} /> },
  { name: "Contact Me", path: "/contact", icon: <Mail size={20} /> },
];

function Headerh() {
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative h-20 overflow-hidden bg-black">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-5 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-5 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: [0, -5, 0],
          x: [0, 3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7,
        }}
        className="
        fixed top-0 left-0 z-20 h-20 w-full
        border-b border-white/10
        bg-black/70
        backdrop-blur-xl
        "
      >
        <div className="relative flex h-full items-center px-6">
          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            <motion.div
              whileTap={{
                scale: 0.8,
                rotate: 90,
              }}
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </motion.div>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className={`
              ${open ? "block" : "hidden md:block"}
              absolute left-1/2 top-full
              w-screen -translate-x-1/2
              bg-black/90 p-5
              md:static md:w-auto
              md:translate-x-0
              md:bg-transparent md:p-0
              `}
            >
              <div className="flex flex-col items-center gap-4 md:flex-row">
                {links.map((link) => (
                  <motion.div
                    key={link.path}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className="
                      flex items-center gap-3
                      rounded-xl px-5 py-3
                      font-semibold text-white
                      transition
                      hover:bg-white/10
                      hover:text-cyan-400
                      "
                    >
                      <motion.span
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      >
                        {link.icon}
                      </motion.span>

                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

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
            ml-auto hidden
            rounded-2xl
            border border-white/20
            bg-white/10
            px-5 py-2
            text-white
            backdrop-blur-md
            md:flex md:flex-col
            "
          >
            <span className="text-xs uppercase tracking-widest text-cyan-300">
              Today
            </span>

            <span className="text-sm">
              {currentTime.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>

            <span className="text-xl font-bold text-cyan-400">
              {currentTime.toLocaleTimeString()}
            </span>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
}

export default Headerh;
