import { Navbar } from "../Navbar";
import { PreLoader } from "../PreLoader";
import { StarsCanvas } from "../canvas";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { Tech } from "../sections/Tech";
import { Works } from "../sections/Works";

export default function Layout() {
  return (
    <div className="relative z-0">
      <PreLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </main>
    </div>
  );
}
