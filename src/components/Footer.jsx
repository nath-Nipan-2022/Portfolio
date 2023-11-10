import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import { SectionContainer } from "./SectionContainer";

export const Footer = () => {
  return (
    <footer>
      <SectionContainer>
        <motion.div className="relative z-10 flex items-center justify-center gap-8 pb-20">
          <div className="w-[100px] h-[1px] bg-secondary/50 rounded"></div>
          <ul className="flex gap-6">
            {socialLinks.map((item) => (
              <li key={item.id}>
                <a href={item.link} rel="noreferrer" target="_blank">
                  <img
                    src={item.icon}
                    alt={item.id}
                    className="transition duration-300 w-7 h-7 hover:scale-125 hover:brightness-200"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="w-[100px] h-[1px] bg-secondary/50 rounded rotate-180"></div>
        </motion.div>
      </SectionContainer>
    </footer>
  );
};
