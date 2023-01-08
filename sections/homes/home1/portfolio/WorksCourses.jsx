'use client';

import { motion } from 'framer-motion';
import { AiFillCalendar, AiTwotoneRightCircle } from 'react-icons/ai';
import { TypingText } from '../../../../components';
import { educationInformation } from '../../../../constants';
import styles from '../../../../styles';
import { fadeIn } from '../../../../utils/motion';

/* function ImpedirArrastar(event) {
  event.preventDefault();
} */
const WorksCourses = () => (
  <section className={`${styles.xPaddings}`}>
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
        <div className="glassmorphism-3 p-5 rounded-xl shadow-lg shadow-slate-900">
          <div className="w-full overflow-scroll h-[450px] border-l-2 flex flex-col border-violet-600 z-10">
            {educationInformation.education.map((education) => (
              <div key={education.id}>
                <span>
                  <AiTwotoneRightCircle className="relative right-[9px] top-5 text-violet-600 z-50" />
                </span>
                <div className="px-5 flex flex-col gap-y-3">
                  <div className=" flex items-center gap-x-2">
                    <AiFillCalendar className="text-xl" /> {education.year}
                  </div>
                  <div className="text-white font-bold text-xl">
                    {education.title}
                  </div>
                  <p className="text-sm">{education.description}</p>
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
        <div className="glassmorphism-3 p-5 rounded-xl shadow-lg shadow-slate-900">
          <div className="w-full overflow-scroll h-[450px] border-l-2 flex flex-col border-violet-600 z-10">
            {educationInformation.experience.map((experience) => (
              <div key={experience.id}>
                <span>
                  <AiTwotoneRightCircle className="relative right-[9px] top-5 text-violet-600 z-50" />
                </span>
                <div className="px-5 flex flex-col gap-y-3">
                  <div className=" flex items-center gap-x-2">
                    <AiFillCalendar className="text-xl" /> {experience.year}
                  </div>
                  <div className="text-white font-bold  text-xl">
                    {experience.title}
                  </div>
                  <p className="text-sm">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WorksCourses;
