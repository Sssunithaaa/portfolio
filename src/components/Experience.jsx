import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, zoomIn } from "../utils/motion";
const ExperienceCard = ({ experience, delay }) => {
  return (
    <motion.div
      variants={zoomIn(delay * 1.5, 1)}
      className="my-4 p-4 rounded-lg shadow-card bg-tertiary"
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work experience</h2>
      </motion.div>
      <div className="mt-5 flex flex-col">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} delay={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");
