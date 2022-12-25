'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { AboutSection } from '../constants';

const About = () => (
  <section className={`${styles.paddings} z-10 container`}>
    <motion.div
      id="About"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-y-24"
    >
      <TypingText
        title="Quem Sou eu2?"
        textStyles="text-center text-slate-600 dark:text-secondary-white font-bold p-10 mb-12 text-sm md:text-5xl"
      />
      <div className="grid gap-y-20 grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {AboutSection.map((about) => (
          <motion.div
            id="About"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={about.id}
          >
            <motion.p
              variants={fadeIn(`${about.fadeIn}`, 'tween', 0, 1)}
              className={`${styles.xPaddings} mt-2 gap-x-2 lg:flex font-normal text-center text-secoundary-white`}
            >
              <span className="lg:w-2/4 md:text-xl lg:text-lg grid sm:text-md font-extrabold text-slate-900 dark:text-white">
                {about.title}
              </span>
              <span className="lg:w-3/4 md:text-md lg:text-base text-slate-700 dark:!text-secondary-white text-justify">
                <span className="flex md:!text-md sm:!text-md   text-slate-900 dark:text-white mb-2">
                  <strong>{about.subtitle}</strong>
                </span>
                {about.description}
              </span>
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
