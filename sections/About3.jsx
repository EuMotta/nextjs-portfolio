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
        variants={fadeIn('right', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex font-normal text-center text-secoundary-white`}
      >
        <span className="w-2/4 md:text-xl sm:text-md font-extrabold text-white">
          Apaixonado por criar soluções
        </span>
        <span className="w-3/4 md:text-md text-gray-400 text-justify">
          <span className="flex md:!text-xl sm:!text-md text-white mb-2">
            Pronto para evoluir e encarar novos desafios
          </span>
          Programar é minha paixão e meu hobby. Desde cedo, a informática sempre
          esteve presente em minha vida e, quando descobri a programação, me
          apaixonei ainda mais por essa área. <br /><br />
          Cada linguagem trás um desafio diferente que tenho o prazer de
          enfrentar. Programar é muito mais do que um simples trabalho para mim
          e estou sempre pronto para enfrentar novos desafios e me desenvolver
          na minha carreira.
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About2;
