import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

import { navLinks } from "../constants";
import { arrow_right, logo } from "../assets";
import { fadeIn, staggerContainer } from "../utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 z-20 flex items-center w-full py-5 transition paddingX backdrop-blur">
      <div className="flex items-center justify-between flex-1 mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center w-10 h-10 gap-2 overflow-hidden rounded-full opacity-90 hover:opacity-100"
        >
          <img
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="object-contain w-full h-full"
          />
        </Link>
        {/* desktop menu */}
        <m.ul
          initial="hidden"
          animate="show"
          variants={staggerContainer()}
          className="items-center hidden gap-8 sm:flex"
        >
          {navLinks.map((link, i) => (
            <m.li
              key={link.id}
              variants={fadeIn("left", "spring", i * 0.25 + 4, 0.75)}
              className="font-semibold tracking-wider"
            >
              <a
                href={link.id}
                className={`${
                  activeLink === link.id
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                }`}
              >
                {link.title}
              </a>
            </m.li>
          ))}

          <m.li variants={fadeIn("left", "spring", 4.5, 0.75)}>
            <a href="#contact" className="btn btn-cta group">
              <span className="h-[0.815rem] transition-transform duration-300 group-hover:translate-x-2.5">
                Contact
              </span>
              <img
                src={arrow_right}
                alt="right arrow"
                className="transition duration-300 group-hover:translate-x-2 group-hover:opacity-0"
              />
            </a>
          </m.li>
        </m.ul>

        {/* mobile menu */}
        <div className="flex items-center justify-end sm:hidden">
          {/* hamburger */}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`hamburger-menu ${isOpen ? "active" : ""}`}
          >
            <span className="self-end w-1/2"></span>
            <span className="w-5"></span>
            <span className="w-1/2"></span>
          </div>

          {isOpen && (
            <div
              className={`absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              <m.ul
                className="overflow-hidden menu_items_container"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { scale: 0 },
                  show: { scale: 1, transition: { ease: "easeInOut" } },
                }}
                style={{ transformOrigin: "top right" }}
              >
                {navLinks.map((link, i) => (
                  <m.li
                    key={link.id}
                    variants={fadeIn("left", "spring", i * 0.1)}
                    className="text-sm font-semibold tracking-wider"
                  >
                    <a
                      href={link.id}
                      className={`${
                        activeLink === link.id
                          ? "text-blue-400"
                          : "hover:text-blue-400"
                      }`}
                    >
                      {link.title}
                    </a>
                  </m.li>
                ))}
                <m.li variants={fadeIn("left", "spring", 0.3)}>
                  <a href="#contact" className="btn btn-cta">
                    <span className="h-3">Contact</span>
                  </a>
                </m.li>
              </m.ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
