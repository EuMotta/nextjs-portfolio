'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { AboutSection } from '../constants';

const About = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      id="About"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-y-24"
    >
      <TypingText
        title="Quem Sou eu?"
        textStyles="text-center text-slate-600 dark:text-secondary-white font-bold p-10 mb-12 text-5xl"
      />
      <div className="grid gap-20 grid-cols-1   sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {AboutSection.map((about) => (
          <motion.div
            id="About"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={about.id}
            className="hover:-translate-y-1 transition-all"
          >
            <motion.div
              variants={fadeIn(`${about.fadeIn}`, 'tween', 0, 1)}
              className="flex flex-col text-white bg-slate-800 shadow-lg shadow-slate-900 rounded-xl p-5"
            >
              <div className="text-center">
                <div className="text-2xl h-10">{about.title}</div>
                <div className="h-14 text-xl flex items-center justify-center">
                  {about.subtitle}
                </div>
              </div>
              <div className="overflow-scroll border flex items-center border-slate-700 rounded-xl h-64 p-3 font-mono">
                {about.description}
              </div>
            </motion.div>
            {/* <div className="bg-slate-900">
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
            </div> */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
