'use client';

import { ImSearch } from 'react-icons/im';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Menu from '../public/menu.svg';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative `}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
    >
      <ImSearch className="text-white object-contain text-xl" />
      <h2 className="font-extrabold text-white text-[24px] leading-[30px]">
        Seja bem-vindo!
      </h2>
      <Image
        src={Menu}
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
