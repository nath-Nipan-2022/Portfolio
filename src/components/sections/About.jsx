import { motion as m } from "framer-motion";

import { services, socialLinks } from "../../constants";
import { fadeIn } from "../../utils";
import { SectionContainer, SectionHeader } from "./SectionContainer";
import { CardWrapper } from "../CardWrapper";
import { useCardsHoverEffect } from "../../hooks/useCardsHoverEffect";

export const About = () => {
  useCardsHoverEffect("#about");

  return (
    <SectionContainer id="about">
      <SectionHeader subTitle={"Introduction"} title={"Overview."} />

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
        <m.p
          variants={fadeIn("bottom", "tween", 0.1, 1)}
          className="max-w-3xl mt-4 text-lg text-secondary"
        >
          I&apos;m a creative frontend developer from India, I bring a dynamic
          set of skills and a fervent passion for web development to the table.
          Proficient in JavaScript and TypeScript, I&apos;ve honed my expertise
          in frameworks such as React, Redux, Tailwind CSS and Three.js.
          I&apos;m committed to crafting scalable, user-friendly web
          applications. With a focus on building real-life projects, I&apos;m
          dedicated to enhancing my skills continuously, ensuring that I&apos;m
          a perfect fit for companies seeking top-tier frontend talent.
        </m.p>

        <div className="lg:-mt-4">
          <h3 className="pb-2 text-2xl border-b border-secondary/50 text-white-100 w-fit whitespace-nowrap">
            Connect with me
          </h3>
          <m.ul className="flex flex-wrap overflow-hidden gap-x-6 lg:flex-col lg:gap-0 lg:divide-y divide-secondary/50">
            {socialLinks.map((item, i) => (
              <m.li variants={fadeIn("right", "tween", i * 0.15)} key={item.id}>
                <a
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                  className="flex py-3 space-x-3 text-secondary group"
                >
                  <img
                    src={item.icon}
                    alt={item.id}
                    className="flex-shrink-0 w-5 h-5 opacity-70 group-hover:opacity-100"
                  />
                  <span className="transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white-100">
                    {item.id}
                  </span>
                </a>
              </m.li>
            ))}
          </m.ul>
        </div>
      </div>

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
      className="w-[260px]"
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
