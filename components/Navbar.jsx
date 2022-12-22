'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 absolute z-10 `}
  >
    {/*     <div className=" w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth}  flex items-center justify-center gap-8 text-center`}
    >
      <h2 className="font-extrabold mx-auto text-slate-900 dark:text-white text-[24px] leading-[30px]">
        Seja bem-vindo!
      </h2>
    </div> */}
  </motion.nav>
);

export default Navbar;
