import { motion } from "framer-motion";
import ReactParallaxTilt from "react-parallax-tilt";

export const CardWrapper = ({ children, className, animationVariant }) => {
  // NOTE: 'card' className is for ->
  // -> selecting all cards while mouse moves

  return (
    <motion.div className="card" variants={animationVariant}>
      <ReactParallaxTilt>
        <div className={`relative p-[2px] z-0 rounded-[20px] ${className}`}>
          {children}

          <div className="absolute inset-0 -z-10 rounded-[20px] card-border"></div>
        </div>
      </ReactParallaxTilt>
    </motion.div>
  );
};
