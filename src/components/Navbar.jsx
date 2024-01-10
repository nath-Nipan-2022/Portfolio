import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";
import { navLinks } from "../constants";
import { useProgress } from "@react-three/drei";
import { staggerContainer } from "../utils";

// framer-motion variants
const logoVariants = {
  hidden: { transition: { delay: 0 } },
  show: { rotate: 360, scale: 1, transition: { delay: 2 } },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};
const item = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const { loaded, total } = useProgress();

  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(() => `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll("section")
      .forEach((section) => observerRef.current.observe(section));

    return () => observerRef.current.disconnect();
  }, []);

  const renderedNavLinks = (
    <>
      {navLinks.map((link) => (
        <m.li key={link.id} variants={item}>
          <a
            href={link.id}
            className={`font-medium transition-all ${
              activeLink === link.id
                ? "text-blue-400 tracking-[2px] uppercase"
                : "hover:text-blue-400 tracking-wider"
            }`}
          >
            {link.title}
          </a>
        </m.li>
      ))}

      <m.li variants={item}>
        <a href="#contact" className="transition btn-cta group active:scale-90">
          Contact
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 group-hover:translate-x-1 duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            ></path>
          </svg>
        </a>
      </m.li>
    </>
  );

  const isLoaded = loaded === total;

  return (
    <nav className="fixed top-0 z-20 flex items-center w-full py-2 paddingX backdrop-blur-md">
      <div className="flex items-center justify-between flex-1 mx-auto max-w-7xl">
        <m.div animate={isLoaded ? "show" : "hidden"} variants={logoVariants}>
          <Link to="/" className="rounded-full">
            <img
              src={logo}
              alt="logo"
              width={56}
              height={56}
              className="object-contain transition scale-150 hover:rotate-[1turn]"
            />
          </Link>
        </m.div>
        {/* desktop menu */}
        <m.ul
          animate={isLoaded ? "show" : "hidden"}
          variants={staggerContainer({}, {}, { delay: 2 })}
          className="items-center hidden gap-8 sm:flex"
        >
          {renderedNavLinks}
        </m.ul>

        {/* mobile menu */}
        <div className="flex items-center justify-end sm:hidden">
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`hamburger-menu ${isOpen ? "active" : ""}`}
          >
            <span className="self-end w-1/2"></span>
            <span className="w-5"></span>
            <span className="w-1/2"></span>
          </div>

          <div className="absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 flex">
            <AnimatePresence>
              {isOpen && (
                <m.ul
                  initial="hidden"
                  animate="show"
                  variants={staggerContainer(
                    { opacity: 0, scale: 0 },
                    { opacity: 1, scale: 1 }
                  )}
                  exit={{ opacity: 0, scale: 0 }}
                  style={{ transformOrigin: "top right" }}
                  className="overflow-hidden nav-links-container"
                >
                  {renderedNavLinks}
                </m.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};
