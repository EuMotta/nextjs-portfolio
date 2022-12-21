'use client';

import {
  IoCheckmarkCircleSharp,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const links = [
  {
    label: 'Aperfeiçoamento',
    icon: IoCheckmarkCircleSharp,
    description:
      'Focar em aprender novas tecnologias e aperfeiçoar suas habilidades atuais.',
  },
  {
    label: 'Impacto',
    icon: IoCheckmarkCircleSharp,
    description:
      'Encontrar projetos que tenham um significado pessoal para você e que possam ter um impacto positivo na comunidade.',
  },
  {
    label: 'Carreira',
    icon: IoCheckmarkCircleOutline,
    description:
      'Desenvolver uma base sólida de conhecimentos e habilidades e estabelecer uma carreira bem-sucedida como programador.',
  },
  {
    label: 'Colaboração',
    icon: IoCheckmarkCircleSharp,
    description:
      'Trabalhar em equipe com outros programadores pode ser uma ótima maneira de aprender e crescer em sua carreira.',
  },
  {
    label: 'Ensino',
    icon: IoCheckmarkCircleSharp,
    description:
      'Compartilhar meus conhecimentos e experiências com outras pessoas que estão interessadas em aprender a programar.',
  },
];
const Objectives = () => (
  <section className={`${styles.yPaddings} sm:16 sm:pl-6 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-5"
    >
      <motion.div variants={fadeIn('up', 'tween', 0, 1)} className="col-span-2">
        <div className="flex flex-col items-center text-white">
          <div className="bg-slate-800 rounded-xl shadow-lg shadow-slate-900 w-96">
            <div className=" p-5">
              <h1>Meus Objetivos</h1>
            </div>
            <nav>
              {links.map((link, index) => (
                <div className="flex flex-col my-5">
                  <div key={link.label} href={link.href}>
                    <div className="border-b-2 border-slate-900">
                      <div className="mx-5 flex items-center justify-between">
                        <div className="">{`${index + 1}`}.</div>
                        {` ${link.label}`}
                        <div
                          className={`${
                            link.icon === IoCheckmarkCircleSharp
                              ? 'text-green-600'
                              : 'text-red-600'
                          } text-3xl`}
                        >
                          <link.icon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('down', 'tween', 0, 1)}
        className="col-span-3"
      >
        <div className="flex flex-col items-center text-white">
          <div className="bg-slate-800 rounded-xl shadow-lg shadow-slate-900  w-[90%] mr-4">
            <div className=" p-5">
              <h1>Descrição</h1>
            </div>
            <nav>
              {links.map((link, index) => (
                <div className="flex flex-col my-5">
                  <div key={link.label} href={link.href}>
                    <div className="border-b-2 border-slate-900">
                      <div className="mx-5 flex items-center gap-x-5">
                        <div className="">{`${index + 1}`}.</div>
                        <div className="font-mono">{` ${link.description}`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Objectives;
