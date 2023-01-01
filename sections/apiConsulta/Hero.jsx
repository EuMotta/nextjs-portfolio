'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer } from '../../utils/motion';
import styles from '../../styles';
import img from '../../public/heroApiConsulta.svg';
import { TitleText, TypingText } from '../../components';

const Hero = () => (
  <section id="cep" className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-screen-xl mx-auto"
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <Image alt="img" width={500} height={500} unoptimized src={img} />
        </div>
        <div className="col-span-1">
          <div className="text-black">
            <TitleText
              title={(
                <span className="text-slate-900 font-bold">
                  Api's de consulta de dados públicos
                </span>
              )}
            />
            <TypingText
              title="Consulte dados de empresas e sistemas!"
              textStyles=" text-black text-2xl font-bold z-50"
            />
          </div>
          <div className="flex text-2xl gap-x-5 text-white">
            <button type="button" className="bg-indigo-500 w-20 p-2 rounded-xl shadow-sm hover:bg-indigo-600 hover:shadow-black transition-all shadow-slate-600">
              CNPJ
            </button>
            <button type="button" className="bg-orange-500 w-20 p-2 rounded-xl shadow-sm hover:bg-orange-600 hover:shadow-black transition-all shadow-slate-600">
              CEP
            </button>
            <button type="button" className="bg-violet-500 w-20 p-2 rounded-xl shadow-sm hover:bg-violet-600 hover:shadow-black transition-all shadow-slate-600">
              Taxa
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
