import { motion as m } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { socialLinks } from "../constants";
import { fadeIn, staggerContainer } from "../utils";

export const Hero = () => {
  return (
    <section className="relative z-0 h-[599px] bg-center bg-no-repeat bg-cover sm:h-screen bg-hero-pattern">
      <div className="paddingX absolute inset-0 pt-[110px] max-w-7xl mx-auto flex gap-5">
        <div className="relative flex w-full h-full sm:justify-center sm:text-center">
          <article>
            <h1 className="headText">Hi, I&apos;m Nipan</h1>
            <p className="mt-1 subText">
              I bring innovation to life through{" "}
              <br className="hidden sm:block" /> web development and design.
            </p>
          </article>
          <m.div
            initial="hidden"
            animate="show"
            variants={staggerContainer()}
            className="absolute top-0 right-0 z-10 flex flex-col items-center h-full pb-4 sm:justify-center"
          >
            <m.ul
              variants={fadeIn("down", "spring", 4.75)}
              className="flex flex-col items-center justify-between gap-5"
            >
              {socialLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <img
                      src={item.icon}
                      alt={item.id}
                      className="w-6 h-6 transition opacity-70 hover:brightness-200 hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </m.ul>
          </m.div>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute bottom-0 flex items-center justify-center w-full">
        <a
          href="#about"
          className="w-[34px] h-[64px] rounded-3xl border-4 border-secondary p-2 flex justify-center hover:border-[#804dee] transition"
        >
          <m.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary"
          />
        </a>
      </div>

      <div className="absolute inset-0 -z-10 bg-black/10"></div>
    </section>
  );
};
