import { motion as m } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { socialLinks } from "../constants";
import { fadeIn, staggerContainer } from "../utils";

export const Hero = () => {
  return (
    <section className="relative z-0 h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
      <div className="paddingX absolute inset-0 pt-[120px] max-w-7xl mx-auto flex gap-5">
        <div className="flex-col items-center justify-between hidden h-full pb-4 sm:flex">
          <div className="h-[100px] w-[1px] bg-secondary/50 rounded"></div>

          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase rotate-180 verticalText text-secondary">
              Nipan Debnath
            </span>
          </div>

          <div className="h-[100px] w-[1px] bg-secondary/50 rounded"></div>
        </div>

        <div className="relative flex w-full h-full sm:justify-center sm:text-center">
          <article>
            <h1 className="gradient-text headText">
              Hi, I&apos;m{" "}
              <span className="gradient-text headText__name">Nipan</span>
            </h1>
            <p className="mt-1 subText gradient-text">
              I bring innovation to life through{" "}
              <br className="hidden sm:block" /> web development and design.
            </p>
          </article>
        </div>

        {/* social links */}
        <m.div
          initial="hidden"
          animate="show"
          variants={staggerContainer()}
          className="relative z-10 flex flex-col items-center justify-between h-full pb-4"
        >
          <m.div
            variants={fadeIn("up", "spring", 4.75)}
            className="h-[100px] w-[1px] bg-secondary/50 rounded"
          ></m.div>

          <ul className="flex flex-col gap-6">
            {socialLinks.map((item, i) => (
              <m.li
                key={item.id}
                variants={fadeIn("up", "spring", i * 0.25 + 5)}
              >
                <a href={item.link} rel="noreferrer" target="_blank">
                  <img
                    src={item.icon}
                    alt={item.id}
                    className="transition duration-300 w-7 h-7 hover:scale-125 hover:brightness-200"
                  />
                </a>
              </m.li>
            ))}
          </ul>

          <m.div
            variants={fadeIn("up", "spring", 5.75)}
            className="h-[100px] w-[1px] bg-secondary/50 rounded rotate-180"
          ></m.div>
        </m.div>
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

      <div className="absolute inset-0 -z-10 bg-black/50"></div>
    </section>
  );
};
