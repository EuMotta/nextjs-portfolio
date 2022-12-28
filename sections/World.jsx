'use client';

import { motion } from 'framer-motion';
import { BsArrowsMove } from 'react-icons/bs';
import { TitleText } from '../components/CustomTexts';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} z-10 relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TitleText
        title={<span className="text-white">Fundo interativo!</span>}
        textStyles="text-center text-white"
      />
      <div className="flex justify-center">
        <div className=" p-3 rounded-full">
          <motion.div
            variants={fadeIn('up', 'tween', 0, 1)}
            className="glassmorphism p-3  rounded-full"
          >
            <BsArrowsMove className="text-3xl " />
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default World;
