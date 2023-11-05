import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { fadeIn, staggerContainer } from "../utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-20 flex items-center w-full py-5 transition paddingX">
      <div className="flex items-center justify-between flex-1 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center gap-2 font-bold uppercase">
          <img src={logo} alt="logo" width={180} />
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
              variants={fadeIn("left", "spring", i * 0.25, 0.75)}
              className="text-xs font-semibold tracking-wider uppercase"
            >
              <NavLink
                to={link.title.toLowerCase()}
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }
              >
                {link.title}
              </NavLink>
            </m.li>
          ))}

          <m.li variants={fadeIn("left", "spring", 0.5, 0.75)}>
            <Link to={"contact"} className="btn btn-cta">
              Contact
            </Link>
          </m.li>
        </m.ul>

        {/* mobile menu */}
        <div className="flex items-center justify-end sm:hidden">
          <img
            src={!isOpen ? menu : close}
            alt="menu icon"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          />
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
                    className="text-xs font-semibold tracking-wider uppercase"
                  >
                    <NavLink
                      to={link.title.toLowerCase()}
                      className="hover:text-blue-400"
                    >
                      {link.title}
                    </NavLink>
                  </m.li>
                ))}

                <m.li variants={fadeIn("left", "spring", 0.3)}>
                  <Link to={"contact"} className="btn btn-cta">
                    Contact
                  </Link>
                </m.li>
              </m.ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
