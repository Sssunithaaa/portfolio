import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-[220px] mx-auto">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full black-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 2, speed: 450, axis: "Y" }}
          className="bg-tertiary rounded-[20px] py-5 px-[6px] min-h-[130px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className="w-14 h-14 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer proficient in the MERN stack, Python, and Java.
        I specialize in building web applications that seamlessly integrate
        front-end and back-end functionalities. With a strong problem-solving
        ability and a continuous learning mindset, I approach every project with
        dedication and a desire to deliver efficient solutions. Keeping up with
        the latest technologies allows me to stay innovative and adapt to
        evolving industry standards, making me a reliable contributor to any
        team or project.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {technologies.map((service, index) => (
          <ServiceCard key={service.name} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
