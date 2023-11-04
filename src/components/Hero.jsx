import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

export const Hero = () => {
  return (
    <section className="relative z-0 h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center">
          <span className="w-5 h-5 bg-[#915eff] rounded-full"></span>
          <span className="w-1 h-40 sm:h-80 violet-gradient"></span>
        </div>

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

      <ComputersCanvas />

      <div className="absolute bottom-0 flex items-center justify-center w-full">
        <a
          href="#about"
          className="w-[34px] h-[64px] rounded-3xl border-4 border-secondary p-2 flex justify-center hover:border-[#804dee] transition"
        >
          <motion.div
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

      <div className="absolute inset-0 -z-10 bg-black/25"></div>
    </section>
  );
};
