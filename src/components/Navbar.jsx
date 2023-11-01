import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../constants";
import { menu, close } from "../assets";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-20 flex items-center w-full py-5 paddingX">
      <div className="flex items-center justify-between flex-1 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center gap-2 font-extrabold">
          Nipan Debnath
        </Link>

        <ul className="items-center hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-xs font-semibold tracking-wider uppercase"
            >
              <NavLink
                to={link.title.toLowerCase()}
                className={({ isActive }) =>
                  isActive ? "p-1 text-blue-700" : "p-1 hover:text-blue-700"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end sm:hidden">
          <img
            src={!isOpen ? menu : close}
            alt="menu icon"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          />
          {isOpen && (
            <div
              className={`absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10${
                isOpen ? "flex" : "hidden"
              }`}
            >
              <ul className="menu_items_container">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="text-xs font-semibold tracking-wider uppercase"
                  >
                    <NavLink
                      to={link.title.toLowerCase()}
                      className={({ isActive }) =>
                        isActive
                          ? "p-1 text-blue-700"
                          : "p-1 hover:text-blue-700"
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
