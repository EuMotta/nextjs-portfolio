'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiLogIn, FiSearch } from 'react-icons/fi';
import { slideIn } from '../utils/motion';
import { navbarItems } from '../constants';

const Nav = () => (
  <motion.div
    variants={slideIn('left', 'tween', 0.5, 2)}
    initial="hidden"
    whileInView="show"
    className="p-2 py-5 z-30 fixed shadow-sm shadow-slate-900 bg-slate-900 rounded-r-lg h-full "
  >
    <div className="flex flex-col gap-2">
      <div
        title="Pesquisar"
        className=" cursor-pointer rounded-md text-xl flex justify-center text-secondary-white hover:text-white hover:shadow-md transition-all p-2"
      >
        <FiSearch />
      </div>
      <div
        title="Pesquisar"
        className=" cursor-pointer rounded-md text-xl flex justify-center text-secondary-white hover:text-white hover:shadow-md transition-all p-2"
      >
        <FiLogIn />
      </div>
      {navbarItems.map((item) => (
        <nav key={item.title}>
          <Link
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.href.substring(1));
              element.scrollIntoView();
            }}
          >
            <div className=" bg-slate-800 rounded-full hover:bg-slate-900 text-secondary-white hover:text-white hover:shadow-md hover:shadow-black transition-all p-2 shadow-sm shadow-slate-900">
              <div
                className={`text-${item.icon}-500 text-2xl `}
                title={`${item.title}`}
              >
                <item.icon />
              </div>
            </div>
          </Link>
        </nav>
      ))}
    </div>
  </motion.div>
);

/* const Icons = document.querySelector('.navigation .icon');
function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}

function navLinks() {
  Icons.forEach((icon) => {
    icon.addEventListener('click', () => {
      changeactive();
      icon.classList.add('active-nav');
    });
  });
}
console.log(navLinks); */

export default Nav;
