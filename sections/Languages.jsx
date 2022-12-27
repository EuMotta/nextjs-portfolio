'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { skills } from '../constants';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const Languages = () => (
  <section id="AboutMe" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-screen-xl mx-auto"
    >
      <TypingText
        title="Linguagens"
        textStyles="text-center text-white font-bold p-10 mb-5 text-3xl"
      />
      <div className="flex w-full h-full flex-wrap justify-center">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={fadeIn(`${skill.fadeIn}`, 'tween', 0, 2)}
            drag
            dragConstraints={{
              top: -100,
              left: -200,
              right: 200,
              bottom: 100,
            }}
            className="w-64 h-fit grid gap-y-2 m-4 p-4 shadow-slate-700 border border-slate-700 glassmorphism-2 rounded-lg shadow-lg"
          >
            <skill.icon
              className="text-5xl text-center w-full"
              style={{ color: `${skill.color}` }}
            />
            <p className="text-xl text-white text-center w-full">
              {skill.name}
            </p>
            <div>
              <div className="shadow-sm shadow-slate-600 rounded-full">
                <div
                  className="h-4 bg-slate-900  rounded-full relative overflow-hidden"
                  style={{ width: `${skill.percentage}%` }}
                >
                  <div
                    className="h-full absolute inset-0 rounded-full transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: `${skill.color}` }}
                  />
                </div>
              </div>
              <p className="text-center text-white font-bold mt-2">
                {skill.percentage}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Languages;
