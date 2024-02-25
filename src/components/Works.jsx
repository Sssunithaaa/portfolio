import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { styles } from "../style";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 1 * index, 0.75)}
      className="bg-tertiary sm:w-[360px] border-green-pink-gradient rounded-2xl p-5"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white text-[24px] font-bold">{project.name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <p
            key={tag.name}
            index={index}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("down", "spring", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my portfolio's project section! Here, you'll find a
          collection of the work I've done, from small personal projects to
          larger professional endeavors. Each project represents a piece of my
          journey, showcasing my skills and experiences. Take a look around and
          explore the different projects I've been a part of!
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
