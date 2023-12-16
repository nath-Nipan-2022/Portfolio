import { motion as m } from "framer-motion";
import { ComputersCanvas } from "./canvas";

export const Hero = () => {
  return (
    <section className="relative z-0 h-[600px] sm:h-[660px] bg-center bg-no-repeat bg-cover bg-hero-pattern">
      <div className="paddingX absolute inset-0 pt-[110px] max-w-7xl mx-auto flex gap-5">
        <div className="relative flex w-full h-full sm:justify-center sm:text-center">
          <article>
            <h1 className="headText">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                Nipan
              </span>
            </h1>
            <p className="mt-1 subText">
              I bring innovation to life through <br className="block" /> web
              development and design.
            </p>
          </article>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute bottom-0 flex items-center justify-center w-full translate-y-1/2 sm:translate-y-0">
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

      <div className="absolute inset-0 -z-10 bg-black/40"></div>
    </section>
  );
};
