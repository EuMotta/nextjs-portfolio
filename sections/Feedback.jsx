'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText } from '../components';
import { feedbacks } from '../constants';
import styles from '../styles';

const Feedback = () => (
  <section id="feedback" className={`${styles.paddings} relative z-10 `}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show">
      <TypingText
        title="Feedbacks"
        textStyles="text-center text-slate-700 dark:text-secondary-white font-bold p-10 mb-5 text-3xl"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-y-5 md:gap-y-5 gap-x-5 ">
        {feedbacks.messages.map((messages, index) => (
          <motion.ul
            variants={fadeIn(`${messages.fadeIn}`, 'tween', 0, 1.5)}
            key={index}
            className="text-white p-5 bg-slate-800 rounded-xl shadow-lg shadow-slate-900"
          >
            <li>
              <div className="flex justify-center">
                <div className="grid gap-y-3">
                  <div className="flex justify-center">
                    <Image
                      src={messages.image}
                      width={70}
                      height={70}
                      alt={`Foto de: ${messages.name}`}
                      unoptimized
                      className="rounded-full shadow-sm shadow-slate-900"
                    />
                  </div>
                  <div className="text-md">
                    <h2>{messages.name}</h2>
                  </div>
                </div>
              </div>
              <div className="text-center border px-1 text-sm border-slate-700 rounded-md overflow-scroll h-24">
                <p className="font-mono">{messages.message}</p>
              </div>
            </li>
          </motion.ul>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Feedback;
