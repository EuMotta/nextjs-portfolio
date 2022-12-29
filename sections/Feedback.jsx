'use client';

import { motion } from 'framer-motion';
import data from '../utils/data';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TypingText } from '../components';
import styles from '../styles';

const Feedback = () => (
  <section id="feedback" className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="max-w-screen-xl mx-auto"
    >
      <TypingText
        title="Feedbacks"
        textStyles="text-center text-white font-bold p-10 mb-5 text-3xl"
      />
      <div className="grid lg:grid-cols-4 w-full h-full md:grid-cols-2 sm:grid-cols-1 sm:gap-y-5 md:gap-y-5 gap-x-5 ">
        {data.feedbacks.map((feedback, index) => (
          <motion.ul
            variants={fadeIn(`${feedback.fadeIn}`, 'tween', 0, 1.5)}
            key={index}
            className="text-white p-5 glassmorphism-2 rounded-xl shadow-lg shadow-slate-900"
          >
            <li>
              <div className="flex justify-center">
                <div className="grid gap-y-3">
                  <div className="flex justify-center">
                    {/* <Image
              src={feedback.image}
              width={70}
              height={70}
              alt={`Foto de: ${feedback.name}`}
              unoptimized
              className="rounded-full shadow-sm shadow-slate-900"
            /> */}
                  </div>
                  <div className="text-md">
                    <h2>{feedback.name}</h2>
                  </div>
                </div>
              </div>
              <div className="text-center border px-1 text-sm border-slate-700 rounded-md overflow-scroll h-24">
                <p className="font-mono">{feedback.comment}</p>
              </div>
            </li>
          </motion.ul>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Feedback;
