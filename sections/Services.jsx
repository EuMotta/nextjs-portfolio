'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { TypingText, TitleText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { services } from '../constants';

const Services = () => (
  <section id="Services" className={`${styles.yPaddings} mx-24 sm:16 sm:pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-screen-xl mx-auto"
    >
      <TypingText
        title="Serviços"
        textStyles="text-center w-full text-white font-bold  text-3xl"
      />
      <TitleText
        title={<span className="text-white">Qual seu objetivo?</span>}
        textStyles="text-center text-white md:!text-3xl"
      />
      <div className="grid w-full h-full lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 gap-3">
        {services.map((service) => (
          <motion.div
            variants={fadeIn(`${service.fadeIn}`, 'tween', 0, 1)}
            className="col-span-1"
            key={service.id}
          >
            <Link href="/">
              <div className="flex h-60 flex-col glassmorphism-2 rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
                <div className="text-6xl flex justify-center text-orange-600">
                  <service.icon />
                </div>
                <div className="flex flex-col gap-y-5">
                  <h1 className="text-white text-2xl">{service.name}</h1>
                  <p className="text-secondary-white">{service.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Services;
