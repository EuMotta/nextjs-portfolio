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
      className="flex flex-col gap-y-28"
    >
      <TypingText
        title="Quem Sou eu?"
        textStyles="text-center text-secondary-white font-bold p-10 mb-24 text-5xl"
      />
      {AboutSection.map((about) => (
        <motion.div
          id="About"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={fadeIn(`${about.fadeIn}`, 'tween', 0, 1)}
            className={`${styles.xPaddings} mt-2 flex font-normal text-center text-secoundary-white`}
            key={about.id}
          >
            <span className="w-2/4 md:text-xl sm:text-md font-extrabold text-white">
              {about.title}
            </span>
            <span className="w-3/4 md:text-md !text-gray-400 text-justify">
              <span className="flex md:!text-xl sm:!text-md text-white mb-2">
                {about.subtitle}
              </span>
              {about.description}
            </span>
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default About;
