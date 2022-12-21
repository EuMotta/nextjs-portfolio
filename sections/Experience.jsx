'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { personalInformation, contactInformation } from '../constants';

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
        className=" "
      >
        <TypingText
          title="Contato e linguagens"
          textStyles="text-center text-secondary-white font-bold p-10 mb-24 text-3xl"
        />
        <div className="grid grid-cols-2 ">
          <div className="col-span-1 text-white flex justify-center">
            <motion.div
              variants={fadeIn('right', 'tween', 0, 1)}
              className="grid grid-cols-2   gap-x-10"
            >
              <div className="col-span-1 text-sm  flex flex-col gap-y-10">
                {personalInformation.map((info) => (
                  <li className="flex font-mono gap-2 border-b-2 border-slate-500">
                    <strong>{info.label}:</strong> {info.value}
                    <p>{info.description}</p>
                  </li>
                ))}
              </div>
              <div className="col-span-1 text-sm  flex flex-col gap-y-10">
                {contactInformation.map((info) => (
                  <li className="flex font-mono gap-2 border-b-2 border-slate-500">
                    <strong>{info.label}:</strong> {info.value}
                    <p>{info.description}</p>
                  </li>
                ))}
              </div>
            </motion.div>
          </div>
          {/* <div className="col-span-1 text-white flex justify-center">
            <div className="grid grid-cols-2   gap-x-10">
              <div className="col-span-1 text-sm flex flex-col gap-y-10">
                {languages.map((language, index) => (
                  <div className="flex-col gap-2 border-b-2 border-slate-500">
                    <div>
                      <strong>{language.label}:</strong>
                    </div>
                    <div className="w-72 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className={`bg-${index % 2 === 0 ? 'orange' : 'blue'}-${
                          index + 1
                        }00 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-${
                          language.value
                        } rounded-full`}
                      >
                        {language.value}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="col-span-1 text-white flex justify-center">
            <div className="grid grid-cols-2   gap-x-10">
              <div className="col-span-1 text-sm flex flex-col gap-y-10">
                <motion.div
                  variants={fadeIn('right', 'tween', 0, 1.5)}
                  className=" flex-col gap-2 border-b-2 border-slate-500"
                >
                  <div>
                    <strong>HTML:</strong>
                  </div>
                  <div className="w-72 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-orange-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[45%] rounded-full">
                      45%
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn('left', 'tween', 0, 2)}
                  className=" flex-col gap-2 border-b-2 border-slate-500"
                >
                  <div>
                    <strong>CSS:</strong>
                  </div>
                  <div className="w-72 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[51%] rounded-full">
                      51%
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn('right', 'tween', 0, 2.5)}
                  className=" flex-col gap-2 border-b-2 border-slate-500"
                >
                  <div>
                    <strong>Javascript:</strong>
                  </div>
                  <div className="w-72 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[44%] rounded-full">
                      44%
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-span-1 text-sm flex flex-col gap-y-10">
                <motion.div
                  variants={fadeIn('left', 'tween', 0, 1.5)}
                  className=" flex-col gap-2 border-b-2 border-slate-500"
                >
                  <div>
                    <strong>Java:</strong>
                  </div>
                  <div className="w-72 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[35%] rounded-full">
                      35%
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn('left', 'tween', 0, 2)}
                  className=" flex-col gap-2 border-b-2 border-slate-500"
                >
                  <div>
                    <strong>React:</strong>
                  </div>
                  <div className="w-72 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[55%] rounded-full">
                      55%
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn('left', 'tween', 0, 2.5)}
                  className=" flex-col gap-2 border-b-2 border-slate-500"
                >
                  <div>
                    <strong>Nextjs:</strong>
                  </div>
                  <div className="w-72 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-slate-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none w-[52%] rounded-full">
                      52%
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
