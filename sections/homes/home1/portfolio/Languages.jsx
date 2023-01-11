'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../../../../components';
import styles from '../../../../styles';
import { fadeIn } from '../../../../utils/motion';
import { lifeSkillsPortfolio, skillsPortfolio } from '../constants';

const Languages = () => (
  <section className={`${styles.paddings}`}>
    <div className="grid grid-cols-2 gap-x-10">
      <div>
        <TypingText
          title="Language Skills"
          textStyles="text-center text-white font-bold p-2 text-3xl"
        />
        <div className="grid grid-cols-2 gap-2 p-5 glassmorphism-3 rounded-xl shadow-lg shadow-slate-900 ">
          <div className="flex flex-col gap-5 p-3 shadow-md shadow-violet-900 hover:shadow-lg hover:shadow-slate-900 rounded-xl transition-all hover:-translate-y-1">
            <TypingText
              title="Front End"
              textStyles="text-center text-white font-bold p-2 text-xl"
            />
            {skillsPortfolio.frontEnd.map((skill, index) => (
              <motion.div variants={fadeIn('up', 'tween', 0, 2)} key={index}>
                <div className="">
                  <div className="flex justify-between items-center">
                    <skill.icon
                      className="text-2xl text-center"
                      style={{ color: `${skill.color}` }}
                    />
                    <p className="text-md text-white text-center">
                      {skill.name}
                    </p>
                    <p className="text-center text-white font-bold mt-2">
                      {skill.percentage}%
                    </p>
                  </div>
                  <div className="shadow-sm shadow-slate-600 rounded-full">
                    <div
                      className="h-2 bg-slate-900 rounded-full relative overflow-hidden"
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div
                        className="h-full absolute inset-0 rounded-full transition-all duration-300 ease-in-out"
                        style={{ backgroundColor: '#3058ff' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-5 p-3 shadow-md shadow-violet-900 hover:shadow-lg hover:shadow-slate-900 rounded-xl transition-all hover:-translate-y-1">
            <TypingText
              title="Back End"
              textStyles="text-center text-white font-bold p-2 text-xl"
            />
            {skillsPortfolio.backEnd.map((skill, index) => (
              <motion.div variants={fadeIn('up', 'tween', 0, 2)} key={index}>
                <div className="">
                  <div className="flex justify-between items-center">
                    <skill.icon
                      className="text-2xl text-center"
                      style={{ color: `${skill.color}` }}
                    />
                    <p className="text-md text-white text-center">
                      {skill.name}
                    </p>
                    <p className="text-center text-white font-bold mt-2">
                      {skill.percentage}%
                    </p>
                  </div>
                  <div className="shadow-sm shadow-slate-600 rounded-full">
                    <div
                      className="h-2 bg-slate-900 rounded-full relative overflow-hidden"
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div
                        className="h-full absolute inset-0 rounded-full transition-all duration-300 ease-in-out"
                        style={{ backgroundColor: `${skill.color}` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <TypingText
          title="Life Skills"
          textStyles="text-center text-white font-bold p-2 text-3xl"
        />
        <div className="grid grid-cols-2  gap-2 p-5 glassmorphism-3 rounded-xl shadow-lg shadow-slate-900">
          <div className="flex flex-col gap-5 p-3 shadow-md shadow-violet-900 hover:shadow-lg hover:shadow-slate-900 rounded-xl transition-all hover:-translate-y-1">
            <TypingText
              title="Habilidades pessoais"
              textStyles="text-center text-white font-bold p-2 text-xl"
            />
            {lifeSkillsPortfolio.personalSkills.map((skill, index) => (
              <motion.div variants={fadeIn('up', 'tween', 0, 2)} key={index}>
                <div className="">
                  <div className="flex justify-between items-center">
                    <p className="text-md text-white text-center">
                      {skill.name}
                    </p>
                    <p className="text-center text-white font-bold mt-2">
                      {skill.percentage}%
                    </p>
                  </div>
                  <div className="shadow-sm shadow-slate-600 rounded-full">
                    <div
                      className="h-2 bg-slate-900 rounded-full relative overflow-hidden"
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div
                        className="h-full absolute inset-0 rounded-full transition-all duration-300 ease-in-out"
                        style={{ backgroundColor: `${skill.color}` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-5 p-3 shadow-md shadow-violet-900 hover:shadow-lg hover:shadow-slate-900 rounded-xl transition-all hover:-translate-y-1">
            <TypingText
              title="Back End"
              textStyles="text-center text-white font-bold p-2 text-xl"
            />
            {lifeSkillsPortfolio.workSkills.map((skill, index) => (
              <motion.div variants={fadeIn('up', 'tween', 0, 2)} key={index}>
                <div className="">
                  <div className="flex justify-between items-center">
                    <p className="text-md text-white text-center">
                      {skill.name}
                    </p>
                    <p className="text-center text-white font-bold mt-2">
                      {skill.percentage}%
                    </p>
                  </div>
                  <div className="shadow-sm shadow-slate-600 rounded-full">
                    <div
                      className="h-2 bg-slate-900 rounded-full relative overflow-hidden"
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div
                        className="h-full absolute inset-0 rounded-full transition-all duration-300 ease-in-out"
                        style={{ backgroundColor: `${skill.color}` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Languages;
