'use client';

import { motion } from 'framer-motion';
import {
  Dashboard1,
  Dashboard2,
  Dashboard3,
} from '../../components/Graphics/Dashboard';
import styles from '../../styles';
import { staggerContainer } from '../../utils/motion';

const RH = () => (
  <section className={`${styles.paddings}  z-10 container`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-2 gap-5"
    >
      <div className="glassmorphism rounded-xl p-5 flex justify-center items-center">
        <Dashboard1 />
      </div>
      <div className="">
        <div className="glassmorphism rounded-xl p-5 flex justify-center items-center">
          <Dashboard2 />
        </div>
      </div>
      <div className="glassmorphism rounded-xl p-5 flex justify-center items-center">
        <Dashboard3 />
      </div>
    </motion.div>
  </section>
);

export default RH;
