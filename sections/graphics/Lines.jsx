'use client';

import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { LinesGraphs } from './constants';

const Lines = () => (
  <section className={`${styles.paddings}  z-10 container`}>
    {LinesGraphs.slice(0, 1).map((line) => (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-2"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0, 1)}
          className="col-span-1"
        >
          <div className="px-5">
            <h1 className="font-bold mb-5 font-mono text-2xl">{line.title}</h1>
            <h3 className="font-semibold mb-5 font-mono text-xl">
              {line.subtitle}
            </h3>
            <p className="text-sm text-justify font-mono">
              &nbsp;{line.description}

            </p>
          </div>
        </motion.div>
        <div className="col-span-1 my-10">
          <motion.div
            variants={fadeIn('left', 'tween', 0, 1)}
            className="flex justify-center"
          >
            {line.graph}
          </motion.div>
        </div>
      </motion.div>
    ))}
    {LinesGraphs.slice(1, 2).map((line) => (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-2"
      >
        <div className="col-span-1 my-10">
          <motion.div
            variants={fadeIn('left', 'tween', 0, 1)}
            className="flex justify-center"
          >
            {line.graph}
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('right', 'tween', 0, 1)}
          className="col-span-1"
        >
          <div className="px-5">
            <h1 className="font-bold mb-5 font-mono text-2xl">{line.title}</h1>
            <h3 className="font-semibold mb-5 font-mono text-xl">
              {line.subtitle}
            </h3>
            <p className="text-sm text-justify font-mono">
              &nbsp;{line.description}

            </p>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </section>
);

export default Lines;
