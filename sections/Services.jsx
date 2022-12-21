'use client';

import { motion } from 'framer-motion';
import { RiCodeSSlashFill } from 'react-icons/ri';
import Link from 'next/link';
import styles from '../styles';
import { TypingText, TitleText } from '../components';
// import { staggerContainer, fadeIn } from '../utils/motion';

const Services = () => (
  <section className={`${styles.yPaddings} mx-24 sm:16 sm:pl-6 min-h-screen`}>
    <div>
      <TypingText
        title="Serviços"
        textStyles="text-center w-full text-secondary-white font-bold  text-3xl"
      />
      <TitleText
        title={<span>Qual seu objetivo?</span>}
        textStyles="text-center "
      />
      <div className="grid grid-cols-3 mt-10 gap-3">
        <motion.div className="col-span-1">
          <Link href="/">
            <div className="flex h-60 flex-col bg-slate-800 rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="text-6xl flex justify-center text-orange-600">
                <RiCodeSSlashFill />
              </div>
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-2xl">Desenvolvedor Web</h1>
                <p className="text-secondary-white">
                  Desenvolvimento web em HTML, CSS, React, Nextjs e javascript.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div className="col-span-1">
          <Link href="/">
            <div className="flex h-60 flex-col bg-slate-800 rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="text-6xl flex justify-center text-orange-600">
                <RiCodeSSlashFill />
              </div>
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-2xl">Desenvolvedor Web</h1>
                <p className="text-secondary-white">
                  Desenvolvimento web em HTML, CSS, React, Nextjs e javascript.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div className="col-span-1">
          <Link href="/">
            <div className="flex h-60 flex-col bg-slate-800 rounded-lg text-center p-5 justify-center border border-orange-600 shadow-lg transition-all hover:-translate-y-2 shadow-slate-900">
              <div className="text-6xl flex justify-center text-orange-600">
                <RiCodeSSlashFill />
              </div>
              <div className="flex flex-col gap-y-5">
                <h1 className="text-white text-2xl">Desenvolvedor Web</h1>
                <p className="text-secondary-white">
                  Desenvolvimento web em HTML, CSS, React, Nextjs e javascript.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Services;
