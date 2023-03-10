'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, navVariants } from '../utils/motion';

const Hero = () => (
  <section id="Hero" className={`${styles.paddings} sm:16 sm:pl-6 `}>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.xPaddings} py-8  z-10 `}
    >
      <div className=" w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth}  flex items-center justify-center gap-8 text-center`}
      >
        <h2 className="font-extrabold mx-auto text-white text-[24px] leading-[30px]">
          Seja bem-vindo!
        </h2>
      </div>
    </motion.nav>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-between items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={`glitch ${styles.heroHeading}`}>
          Motta
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row glitch justify-center items-center"
        >
          <h1 className={`glitch ${styles.heroHeading}`}>Curriculum Vitae</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="w[90%] mx-10 bg-gradient-to-r from-slate-100 to-blue-200 rounded-full h-2 mb-20 z-10" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
