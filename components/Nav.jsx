'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Nav = () => (
  <motion.div
    variants={slideIn('left', 'tween', 0.5, 1)}
    initial="hidden"
    whileInView="show"
    className="p-2 z-30 fixed shadow-sm shadow-slate-500 bg-slate-800 left-[20px] rounded-xl"
  >
    <div>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col text-3xl text-[rgb(233, 243, 252)] text-secondary-white justify-between gap-y-4"
      >
        <motion.li
          variants={textVariant(0.75)}
          className="bg-primary-black hover:bg-slate-600 hover:shadow-sm hover:shadow-slate-700 transition-all hover:scale-105 p-2 rounded-xl"
        >
          <Link href="#Hero">
            <AiOutlineHome className="active-icon" />
          </Link>
        </motion.li>
        <motion.li
          variants={textVariant(0.25)}
          className="bg-primary-black hover:bg-slate-600 hover:shadow-sm hover:shadow-slate-700 transition-all hover:scale-105 p-2 rounded-xl"
        >
          <Link href="/">
            <AiOutlineUser className="icon" />
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  </motion.div>
);

const Icons = document.querySelector('.navigation .icon');
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
console.log(navLinks);

export default Nav;
