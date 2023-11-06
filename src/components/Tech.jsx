import { motion as m } from "framer-motion";
import { staggerContainer, textVariant } from "../utils";

import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";

export const Tech = () => {
  return (
    <m.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer()}
      viewport={{ once: true, amount: 0.25 }}
      className="pt-20 mx-auto paddingX max-w-7xl"
    >
      <m.div variants={textVariant()}>
        <div className="sectionSubText">
          Skills{" "}
          <div className="w-[76px] h-[1px] bg-secondary/60 rounded"></div>
        </div>
        <h2 className="sectionHeadText">Key Technologies.</h2>
      </m.div>

      <div className="flex flex-wrap items-center justify-center gap-10 mt-5">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </m.section>
  );
};
