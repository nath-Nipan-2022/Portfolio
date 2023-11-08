import { motion as m } from "framer-motion";

import { fadeIn } from "../utils";
import { projects } from "../constants";
import { github, arrow_right } from "../assets";

import { SectionContainer, SectionHeader } from "./SectionContainer";
import { CardWrapper } from "./CardWrapper";

export const Works = () => {
  return (
    <SectionContainer id="works">
      <SectionHeader subTitle={"Works"} title={"My Projects."} />
      <m.p
        variants={fadeIn("bottom", "spring", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </m.p>
      t
      <div className="relative z-0 flex flex-wrap py-20 gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}

        <div className="absolute top-0 right-1 w-[100px] h-[100px] rounded-full -z-10 scale-125 bg-[#804dee]/20"></div>
        <div className="absolute left-1 bottom-0 w-[100px] h-[100px] rounded-full -z-10 scale-125 bg-[#FFA737]/20"></div>
      </div>
    </SectionContainer>
  );
};

const ProjectCard = ({ project, index }) => {
  const { name, description, tags, image, source_code_link } = project;

  return (
    <CardWrapper index={index}>
      <div className="relative bg-black/80 backdrop-blur-xl rounded-[20px] p-4">
        <div className="w-full h-[230px] relative">
          <img
            src={image}
            alt="project image"
            className="object-cover object-top w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end gap-2 p-4 transition">
            {/* github link */}
            <a
              href={source_code_link}
              rel="noreferrer"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 p-2 transition rounded-full cursor-pointer black-gradient hover:invert"
            >
              <img src={github} alt="github" />
            </a>
            {/* live view */}
            <a
              href={name}
              rel="noreferrer"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 p-1 transition rounded-full cursor-pointer black-gradient hover:invert"
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
            >
              <img
                src={arrow_right}
                alt="arrow right"
                className="w-full -rotate-45 invert"
              />
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-sm text-secondary">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-sm font-bold px-2 py-1 rounded-full ${tag.color} `}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};
