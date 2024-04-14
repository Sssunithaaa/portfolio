import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariantt } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      staggerChildren: 0.08,
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const line1 = "Here's my portfolio";
const Hero = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 1700); // Adjust this timeout based on your motion.div animation duration
    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {" "}
{/*           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
        </div>
        <div className="flex flex-col">
          <motion.div variants={textVariantt(0.8)}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi I'm <span className="text-[#915eff]">Sunitha</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a web developer <br className="sm:block hidden" /> and a
              student
            </p>
          </motion.div>
          <motion.h3
            className="load-screen--message"
            variants={sentence}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            delay="2.2"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span
                  key={char + "-" + index}
                  variants={letter}
                  className={`${styles.heroSubText} text-white`}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h3>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "");
