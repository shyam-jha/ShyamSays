// components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { navLists } from '../src/constant/constants';
import { RiMenu3Line, RiCloseLine, RiGithubFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <nav className='w-full py-5 px-5 flex justify-between items-center sm:px-10'>
        <h2 className='text-lg cursor-pointer text-white'>Shyam.Says</h2>

        <div className='flex justify-center items-center gap-5 max-sm:hidden'>
          {navLists.map((nav) => (
            <Link key={nav.id} href={nav.link}>
              <p className='text-lg cursor-pointer text-gray-400 hover:text-white transition-all'>{nav.text}</p>
            </Link>
          ))}
        </div>

        <div className='flex items-baseline gap-4 max-sm:justify-end max-sm:hidden'>
          <div id="github">
            <a href="https://github.com/shyam-jha"><RiGithubFill color="#fff" size={18} /></a>
          </div>
          <div id="linkedin">
            <a href="https://www.linkedin.com/in/shyam-jha-0642ab258"><RiLinkedinFill color="#fff" size={18} /></a>
          </div>
          <div id="instagram">
            <a href="https://www.instagram.com/_shyam_jha__?igsh=MWNneGZ1cjh0ajlqeg=="><RiInstagramFill color="#fff" size={18} /></a>
          </div>
        </div>

        <div className="mx-4 relative md:hidden ">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={20} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={20} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="flex flex-col justify-center items-center text-center absolute right-0 top-[50px] mt-[10px] min-w-[210px] rounded-[5px] bg-white z-50 p-4 shadow-lg">
              <div className='flex flex-col justify-center items-center gap-5'>
                {navLists.map((nav) => (
                  <Link key={nav.id} href={nav.link}>
                    <p className='text-sm cursor-pointer text-gray-800 hover:text-gray-600'>{nav.text}</p>
                  </Link>
                ))}
              </div>

              <div className="flex flex-1 gap-4 mt-4">
                <div><a href="https://github.com/shyam-jha"><RiGithubFill color="#000" size={22} /></a></div>
                <div><a href="https://www.linkedin.com/in/shyam-jha-0642ab258"><RiLinkedinFill color="#0077b5" size={22} /></a></div>
                <div><a href="https://www.instagram.com/_shyam_jha__?igsh=MWNneGZ1cjh0ajlqeg=="><RiInstagramFill color="#E4405F" size={22} /></a></div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
