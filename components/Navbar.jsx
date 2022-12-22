'use client';

import { ImSearch } from 'react-icons/im';
import { motion } from 'framer-motion';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative `}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
    >
      <ImSearch className="text-slate-900 dark:text-white object-contain text-xl" />
      <h2 className="font-extrabold text-slate-900 dark:text-white text-[24px] leading-[30px]">
        Seja bem-vindo!
      </h2>
      <div className="text-3xl text-slate-900 dark:text-white">
        <AiOutlineMenuUnfold />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
