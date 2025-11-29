import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-gray-400 text-sm uppercase tracking-widest">My Projects</p>
      <h2 className="text-white text-3xl font-bold mt-2">Portfolio</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="text-gray-400 mt-3 max-w-3xl text-sm leading-6"
    >
      These projects showcase my skills and experience. Each project includes a brief description, technologies used, and links to live demos or source code.
    </motion.p>

    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      className="mt-10 flex flex-wrap gap-7 justify-center"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </motion.div>
  </>
);

export default SectionWrapper(Works, "work");
