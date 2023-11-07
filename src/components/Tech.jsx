import BallCanvas from "./canvas/Ball";
import { technologies } from "../constants";
import { SectionContainer, SectionHeader } from "./SectionContainer";

export const Tech = () => {
  return (
    <SectionContainer>
      <SectionHeader subTitle={"Skills"} title={"Key Technologies."} />

      <div className="flex flex-wrap items-center justify-center gap-10 mt-5">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
