import { useState } from "react";
import { navLinks } from "../constants";
import { logo, close, menu } from "../assets";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="DalionDev" className="w-[200px] h-[50px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-bold cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img src={menu} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
