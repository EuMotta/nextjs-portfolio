'use client';

import { motion } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';
import { TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { personalInformation } from '../constants';
/* const languages = [
  { label: 'HTML', value: 45 },
  { label: 'CSS', value: 51 },
  { label: 'Javascript', value: 44 },
  { label: 'Java', value: 35 },
  { label: 'React', value: 55 },
  { label: 'Nextjs', value: 30 },
];
console.log(languages); */

const Experience = () => (
  <section id="AboutMe" className={`${styles.paddings} z-10`}>
    <div className="">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=" grid gap-y-5"
      >
        <TypingText
          title="Informações pessoais"
          textStyles="text-center text-white font-bold p-10 mb-6 text-3xl"
        />
        <div className="">
          <motion.div
            drag
            dragConstraints={{
              top: -100,
              left: -500,
              right: 500,
              bottom: 100,
            }}
            variants={fadeIn('right', 'tween', 0, 1)} className="flex justify-center"
          >
            <div className="p-3 mb-2 bg-slate-200 rounded-full shadow-sm dark:shadow-slate-500 shadow-slate-800">
              <FaCrown className="text-6xl text-yellow-400" />
            </div>
          </motion.div>
          <TypingText
            title="Não arraste a coroa!"
            textStyles="text-center text-white font-bold p-1 text-lg"
          />
          <div className="col-span-1  text-white sm:flex w-full justify-center">
            <motion.div
              variants={fadeIn('right', 'tween', 0, 1)}
              className="grid gap-y-6 md:grid-cols-2 glassmorphism-2 rounded-xl shadow-lg shadow-slate-900 p-10  sm:gap-x-5"
            >
              <div className="col-span-1 sm:text-lg text-xs  flex flex-col gap-y-10">
                {personalInformation.personalInformation.map((info, index) => (
                  <li
                    className="flex font-mono gap-2 border-b-2 border-slate-50"
                    key={index}
                  >
                    <strong>{info.label}:</strong> {info.value}
                    <p>{info.description}</p>
                  </li>
                ))}
              </div>
              <div className="col-span-1 sm:text-lg text-xs  flex flex-col gap-y-10">
                {personalInformation.contactInformation.map((info, index) => (
                  <li
                    className="flex font-mono gap-2 border-b-2 border-slate-50"
                    key={index}
                  >
                    <strong>{info.label}:</strong> {info.value}
                    <p>{info.description}</p>
                  </li>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="col-span-1 text-white flex justify-center">
            {/* <motion.div
              variants={fadeIn('right', 'tween', 0, 2.5)}
              className="grid grid-cols-2  bg-slate-800 rounded-xl shadow-lg shadow-slate-900 p-2 gap-x-5"
            >
              <div className="col-span-1 text-sm flex flex-col gap-y-10">
                <div className=" flex-col gap-2 border-b-2 border-slate-500 ">
                  <div>
                    <strong>HTML:</strong>
                  </div>
                  <div className="w-64 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-orange-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[45%] rounded-full">
                      45%
                    </div>
                  </div>
                </div>
                <div className=" flex-col gap-2 border-b-2 border-slate-500">
                  <div>
                    <strong>CSS:</strong>
                  </div>
                  <div className="w-64 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[51%] rounded-full">
                      51%
                    </div>
                  </div>
                </div>
                <div className=" flex-col gap-2 border-b-2 border-slate-500">
                  <div>
                    <strong>Javascript:</strong>
                  </div>
                  <div className="w-64 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[44%] rounded-full">
                      44%
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 text-sm flex flex-col gap-y-10">
                <div className=" flex-col gap-2 border-b-2 border-slate-500">
                  <div>
                    <strong>Java:</strong>
                  </div>
                  <div className="w-64 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[35%] rounded-full">
                      35%
                    </div>
                  </div>
                </div>
                <div className=" flex-col gap-2 border-b-2 border-slate-500">
                  <div>
                    <strong>React:</strong>
                  </div>
                  <div className="w-64 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[55%] rounded-full">
                      55%
                    </div>
                  </div>
                </div>
                <div className=" flex-col gap-2 border-b-2 border-slate-500">
                  <div>
                    <strong>Nextjs:</strong>
                  </div>
                  <div className="w-64 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-slate-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[52%] rounded-full">
                      52%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
