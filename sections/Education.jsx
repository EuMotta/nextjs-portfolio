'use client';

import { motion } from 'framer-motion';
import { AiFillCalendar, AiTwotoneRightCircle } from 'react-icons/ai';
import { TypingText } from '../components';
import { educationInformation } from '../constants';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const Education = () => (
  <section className={`${styles.paddings} `}>
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-screen-xl mx-auto"
      >
        <div className="grid w-full gap-x-10 h-full lg:grid-cols-2 ">
          <motion.div
            variants={fadeIn('right', 'tween', 0, 1.5)}
            className="col-span-1  text-white flex flex-col justify-center"
          >
            <div className="z-50">
              <TypingText
                title="Cursos e formações"
                textStyles="text-center text-white font-bold mb-5 text-3xl"
              />
            </div>
            <div className="glassmorphism-2 p-5 rounded-xl shadow-lg shadow-slate-900">
              <div className="w-full overflow-scroll h-[450px] border-l-2 flex flex-col border-orange-600 z-10">
                {educationInformation.education.map((education) => (
                  <div key={education.id}>
                    <span>
                      <AiTwotoneRightCircle className="relative right-[9px] top-5 text-orange-600 z-50" />
                    </span>
                    <div className="px-5 flex flex-col gap-y-3">
                      <div className=" flex items-center gap-x-2">
                        <AiFillCalendar className="text-xl" /> {education.year}
                      </div>
                      <div className="text-white font-bold text-xl">
                        {education.title}
                      </div>
                      <p>
                        {education.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0, 1.5)}
            className="col-span-1  text-white flex flex-col justify-center"
          >
            <div className="z-50">
              <TypingText
                title="Experiências"
                textStyles="text-center text-white font-bold mb-5 text-3xl"
              />
            </div>
            <div className="glassmorphism-2 p-5 rounded-xl shadow-lg shadow-slate-900">
              <div className="w-full overflow-scroll h-[450px] border-l-2 flex flex-col border-orange-600 z-10">
                {educationInformation.experience.map((experience) => (
                  <div key={experience.id}>
                    <span>
                      <AiTwotoneRightCircle className="relative right-[9px] top-5 text-orange-600 z-50" />
                    </span>
                    <div className="px-5 flex flex-col gap-y-3">
                      <div className=" flex items-center gap-x-2">
                        <AiFillCalendar className="text-xl" /> {experience.year}
                      </div>
                      <div className="text-white font-bold  text-xl">
                        {experience.title}
                      </div>
                      <p>
                        {experience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
