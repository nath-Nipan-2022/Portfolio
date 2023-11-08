import { motion } from "framer-motion";
import ReactParallaxTilt from "react-parallax-tilt";
import { fadeIn } from "../utils";

export const CardWrapper = ({ children, index, className }) => {
  return (
    <motion.div
      className="card"
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    >
      <ReactParallaxTilt className="xs:w-[360px] w-full">
        <div className={`relative p-[2px] z-0 rounded-[20px] ${className}`}>
          {children}

          <div className="absolute inset-0 -z-10 rounded-[20px] card-border"></div>
        </div>
      </ReactParallaxTilt>
    </motion.div>
  );
};
