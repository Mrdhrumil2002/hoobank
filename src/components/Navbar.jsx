import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* ......................Logo................... */}
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      {/* .................Desktop mode navbar items............... */}
      <ul className='list-none sm:flex hidden justify-end items-center '>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]  
            ${index === navLinks.legnth - 1 ? "mr-0" : "mr-10"} text-white `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/*/................. Mobile use menu/close icon......................... */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((prev) => !prev)}
          className='w-[28px] h-[28px] object-contain'
        />
      </div>

      <div
        className={`${toggle === false ? "hidden" : "flex"}
      p-6
      bg-black-gradient absolute  top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul
          className='
          list-none flex justify-end items-center
          flex-col
        '
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`
            font-poppins font-normal cursor-pointer text-[16px]  
            ${index === navLinks.legnth - 1 ? "mr-0" : "mb-4"} text-white 
            `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
