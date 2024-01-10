import { motion as m } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils";
import { ComputerCanvas } from "../canvas";
import { useProgress } from "@react-three/drei";

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const Hero = () => {
  const { loaded, total } = useProgress();
  const isLoaded = loaded === total;

  return (
    <section className="relative z-0 h-[600px] sm:h-[660px] border-secondary/10 border-b">
      <div className="paddingX absolute inset-0 pt-[110px] max-w-7xl mx-auto flex gap-5">
        <div className="relative flex w-full h-full sm:justify-center sm:text-center">
          <m.article
            animate={isLoaded ? "show" : "hidden"}
            variants={staggerContainer(
              { opacity: 1, scale: 0 },
              { opacity: 1, scale: 1 }
            )}
          >
            <div className="overflow-hidden">
              <m.h1
                variants={item}
                className="font-bold text-5xl sm:text-[64px] lg:text-8xl xl:text-[120px] leading-none tracking-wide"
              >
                Hi, I&apos;m{" "}
                <span className="block gradient-text bg-gradient-to-r from-pink-500 to-orange-400 sm:inline">
                  Nipan Debnath
                </span>
              </m.h1>
            </div>
            <div className="overflow-hidden">
              <m.p
                variants={item}
                className="pl-1 mt-2 text-2xl font-light tracking-wider md:text-3xl xl:text-4xl text-white/70"
              >
                I bring innovation to life through{" "}
                <br className="hidden sm:block lg:hidden" />
                <span className="font-medium text-white">
                  web development
                </span>{" "}
                and <span className="font-medium text-white">design</span>.
              </m.p>
            </div>
          </m.article>
        </div>
      </div>
      <ComputerCanvas />

      <div className="absolute bottom-0 flex items-center justify-center w-full translate-y-1/2">
        <m.a
          href="#about"
          initial="hidden"
          animate="show"
          variants={fadeIn("top", "tween")}
          className="w-8 h-16 rounded-3xl border-4 border-secondary p-2 flex justify-center hover:border-[#804dee] hover:bg-[#804dee] transition group"
        >
          <m.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary group-hover:bg-white"
          />
        </m.a>
      </div>
    </section>
  );
};
