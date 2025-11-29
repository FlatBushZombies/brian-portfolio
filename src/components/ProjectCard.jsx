import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.6)}>
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={400}
      className="bg-gray-900 p-5 rounded-2xl w-full sm:w-[360px] cursor-pointer shadow-lg hover:shadow-xl"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="absolute top-3 right-3 w-10 h-10 bg-black/50 rounded-full flex justify-center items-center hover:bg-black transition"
        >
          <span className="text-white font-bold">↗</span>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-xs font-semibold ${tag.color} bg-gray-800 px-2 py-1 rounded`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
};

export default ProjectCard;
