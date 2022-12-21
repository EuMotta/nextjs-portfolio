'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About2 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.p
        variants={fadeIn('left', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex font-normal text-center text-secoundary-white`}
      >
        <span className="w-2/4 md:text-xl sm:text-md font-extrabold text-white">
          Procurando novos desafios:
        </span>
        <span className="w-3/4 md:text-md text-gray-400 text-justify">
          <span className="flex md:!text-xl sm:!text-md text-white mb-2">
            Determinado e comprometido com a excelência
          </span>
          Sempre dei o meu melhor para alcançar meus objetivos e acredito que,
          com determinação e esforço, é possível superar qualquer obstáculo. Na
          programação, trabalho com afinco para atingir esses objetivos e me
          sinto realizado quando consigo atingir os resultados esperados. Além
          disso, busco me atualizar constantemente e estou sempre pronto para
          enfrentar novos desafios. Sou um profissional comprometido e dedicado,
          que busca sempre se superar e atingir seus objetivos.
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About2;
