import { motion as m } from "framer-motion";
import { staggerContainer, textVariant } from "../utils";

export const SectionContainer = ({ children }) => {
  return (
    <m.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer()}
      viewport={{ once: true, amount: 0.25 }}
      className="pt-20 mx-auto paddingX max-w-7xl"
    >
      {children}
    </m.section>
  );
};

export const SectionHeader = ({ subTitle, title }) => {
  return (
    <m.div variants={textVariant()}>
      <div className="sectionSubText">
        {subTitle}
        <div className="w-[76px] h-[1px] bg-secondary/60 rounded"></div>
      </div>
      <h2 className="sectionHeadText">{title}</h2>
    </m.div>
  );
};
