'use client';

import { motion } from 'framer-motion';
import { AiFillCalendar, AiTwotoneRightCircle } from 'react-icons/ai';
import { TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const Experience = () => (
  <section id="CursesExp" className={`${styles.paddings} z-10`}>
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=""
      >
        <TypingText
          title="Cursos e Experiências"
          textStyles="text-center text-secondary-white font-bold p-10 mb-24 text-3xl"
        />
        <div className="grid grid-cols-2 ">
          <motion.div
            variants={fadeIn('right', 'tween', 0, 1.5)}
            className="col-span-1 ml-20   text-white flex flex-col justify-center"
          >
            <TypingText
              title="Cursos e formações"
              textStyles="text-center text-secondary-white font-bold mb-5 text-3xl"
            />
            <div className="bg-slate-800 p-5 rounded-xl shadow-lg shadow-slate-900">
              <div className="w-full   border-l-2 flex flex-col border-orange-600 z-10">
                <div>
                  <span>
                    <AiTwotoneRightCircle className="relative right-[9px] top-5 text-orange-600 z-30" />
                  </span>
                  <div className="px-5 flex flex-col gap-y-3">
                    <div className=" flex items-center gap-x-2">
                      <AiFillCalendar className="text-xl" /> 2022 - 2025
                    </div>
                    <div className="text-secondary-white text-xl">
                      Tecnologo pela FATEC Guaratinguetá
                    </div>
                    <p>
                      Formei-me em Análise e Desenvolvimento de Sistemas pela
                      FATEC Guaratinguetá, o que marcou o início de minha
                      carreira como programador. Durante o curso, consegui unir
                      minhas paixões pela tecnologia e pelo desenvolvimento de
                      software com a possibilidade de fazer desta atividade meu
                      trabalho.
                    </p>
                  </div>
                </div>
                <div>
                  <span>
                    <AiTwotoneRightCircle className="relative right-[9px] top-5 text-orange-600 z-30" />
                  </span>
                  <div className="px-5 flex flex-col gap-y-3">
                    <div className=" flex items-center gap-x-2">
                      <AiFillCalendar className="text-xl" /> 2022 - 2025
                    </div>
                    <div className="text-secondary-white text-xl">
                      Tecnologo pela FATEC Guaratinguetá
                    </div>
                    <p>
                      Formei-me em Análise e Desenvolvimento de Sistemas pela
                      FATEC Guaratinguetá, o que marcou o início de minha
                      carreira como programador. Durante o curso, consegui unir
                      minhas paixões pela tecnologia e pelo desenvolvimento de
                      software com a possibilidade de fazer desta atividade meu
                      trabalho.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0, 1.5)}
            className="col-span-1 ml-20   text-white flex flex-col justify-center"
          >
            <TypingText
              title="Experiências"
              textStyles="text-center text-secondary-white font-bold mb-5 text-3xl"
            />
            <div className="bg-slate-800 p-5 rounded-xl shadow-lg shadow-slate-900">
              <div className="w-full   border-l-2 flex flex-col border-orange-600 z-10">
                <div>
                  <span>
                    <AiTwotoneRightCircle className="relative right-[9px] top-5 text-orange-600 z-30" />
                  </span>
                  <div className="px-5 flex flex-col gap-y-3">
                    <div className=" flex items-center gap-x-2">
                      <AiFillCalendar className="text-xl" /> 2022 - 2025
                    </div>
                    <div className="text-secondary-white text-xl">
                      Tecnologo pela FATEC Guaratinguetá
                    </div>
                    <p>
                      Formei-me em Análise e Desenvolvimento de Sistemas pela
                      FATEC Guaratinguetá, o que marcou o início de minha
                      carreira como programador. Durante o curso, consegui unir
                      minhas paixões pela tecnologia e pelo desenvolvimento de
                      software com a possibilidade de fazer desta atividade meu
                      trabalho.
                    </p>
                  </div>
                </div>
                <div>
                  <span>
                    <AiTwotoneRightCircle className="relative right-[9px] top-5 text-orange-600 z-30" />
                  </span>
                  <div className="px-5 flex flex-col gap-y-3">
                    <div className=" flex items-center gap-x-2">
                      <AiFillCalendar className="text-xl" /> 2022 - 2025
                    </div>
                    <div className="text-secondary-white text-xl">
                      Tecnologo pela FATEC Guaratinguetá
                    </div>
                    <p>
                      Formei-me em Análise e Desenvolvimento de Sistemas pela
                      FATEC Guaratinguetá, o que marcou o início de minha
                      carreira como programador. Durante o curso, consegui unir
                      minhas paixões pela tecnologia e pelo desenvolvimento de
                      software com a possibilidade de fazer desta atividade meu
                      trabalho.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
