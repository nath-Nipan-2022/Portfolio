export const Hero = () => {
  return (
    <section className="relative z-0 h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mt-5">
          <span className="w-5 h-5 bg-[#915eff] rounded-full"></span>
          <span className="w-1 h-40 sm:h-80 violet-gradient"></span>
        </div>

        <article>
          <h1 className="gradient-text headText">
            Hi, I&apos;m{" "}
            <span className="gradient-text headText__name">Nipan</span>
          </h1>
          <p className="mt-2 subText gradient-text">
            I bring innovation to life <br className="hidden sm:block" />
            through web development and design.
          </p>
        </article>
      </div>
      <div className="absolute inset-0 -z-10 bg-black/25"></div>
    </section>
  );
};
