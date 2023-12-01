import { motion as m } from "framer-motion";

import { services } from "../constants";
import { fadeIn } from "../utils";
import { SectionContainer, SectionHeader } from "./SectionContainer";
import { CardWrapper } from "./CardWrapper";
import { useCardsHoverEffect } from "../hooks/useCardsHoverEffect";

export const About = () => {
  useCardsHoverEffect("#about");

  return (
    <SectionContainer id="about">
      <SectionHeader subTitle={"Introduction"} title={"Overview."} />
      <m.p
        variants={fadeIn("bottom", "tween", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled frontend developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Tailwind css, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </m.p>

      <div className="flex flex-wrap justify-center gap-10 pb-10 mt-20 sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

const ServiceCard = ({ title, icon, index }) => {
  return (
    <CardWrapper
      animationVariant={fadeIn("right", "spring", 0.15 * index, 0.75)}
      className="shadow-card w-[260px]"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="object-contain w-16 h-16"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </CardWrapper>
  );
};
