'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypingText, TitleText } from '../components/CustomTexts';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';
import map from '../public/map.png';
import people1 from '../public/people-01.png';
import people2 from '../public/people-02.png';
import people3 from '../public/people-03.png';

const World = () => (
  <section className={`${styles.paddings} z-10 relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText
        title="Desenvolvimento de aplicativos para uso global"
        textStyles="text-center w-full text-white font-bold  text-3xl"
      />
      <TitleText title={<span>Destaque-se</span>} textStyles="text-center text-white" />
      <motion.div
        variants={fadeIn('up', 'tween', 0, 1)}
        className="relative flex w-full bg-slate-900 rounded-xl shadow-md shadow-slate-900 p-5 h-[550px]"
      >
        <Image
          src={map}
          width={500}
          height={500}
          alt="mapa"
          className="object-cover w-full h-full"
          unoptimized
        />
        <div className="absolute bottom-20 right-20 w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d5580] shadow-md shadow-slate-900">
          <Image
            width={50}
            height={50}
            src={people1}
            alt="eu"
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
        <div className="absolute top-28 left-40 w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d5580] shadow-md shadow-slate-900">
          <Image
            width={50}
            height={50}
            src={people2}
            alt="eu"
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
        <div className="absolute bottom-32 left-56 w-[50px] h-[50px] p-[6px] rounded-full bg-[#5d5580] shadow-md shadow-slate-900">
          <Image
            width={50}
            height={50}
            src={people3}
            alt="eu"
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
