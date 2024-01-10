import { motion as m } from "framer-motion";
import { slideIn } from "../../utils";

import { EarthCanvas } from "../canvas";

import ContactForm from "../ContactForm";
import { SectionContainer, SectionHeader } from "./SectionContainer";

export const Contact = () => {
  return (
    <SectionContainer id={"contact"}>
      <div className="flex flex-col gap-20 overflow-hidden lg:gap-10 lg:flex-row-reverse md:items-center">
        <m.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="md:h-[550px] h-[350px] lg:w-1/2"
        >
          <EarthCanvas />
        </m.div>

        <m.article
          variants={slideIn("left", "tween", 0.2, 1)}
          className="p-8 rounded-2xl bg-tertiary md:w-[600px]"
        >
          <SectionHeader subTitle={"Get in touch"} title={"Contact me."} />
          <ContactForm />
        </m.article>
      </div>
    </SectionContainer>
  );
};
