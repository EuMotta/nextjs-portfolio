'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      id="About"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <TypingText
        title="Quem Sou eu?"
        textStyles="text-center text-secondary-white font-bold p-10 mb-24 text-7xl"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex font-normal sm:text-2xl text-xl text-center text-secoundary-white`}
      >
        <span className="w-2/4 font-extrabold text-white">
          Experiência de vida:
        </span>
        <span className="w-3/4 text-sm !text-gray-400 text-justify">
          <span className="flex text-white mb-2">
            Enfrentando desafios e me tornando mais forte
          </span>
          Já passei por momentos difíceis que me deixaram no chão, mas consegui
          superá-los com determinação e força de vontade. Isso me deu muita
          confiança e me inspirou a lutar pelos meus objetivos.
          <br />
          <br />
          Acredito que essas dificuldades superadas me tornam mais forte e
          experiente para qualquer oportunidade de trabalho. Estou pronto para
          enfrentar novos desafios e continuar crescendo como pessoa e
          profissional.
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About;
