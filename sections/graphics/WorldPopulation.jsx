'use client';

import { motion } from 'framer-motion';
import { Graphics3 } from '../../components/Graphics/Graphics1';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const WorldPopulation = () => (
  <section className={`${styles.paddings}  z-10 container`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-2"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-2xl">Pizza</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            Comparação da população dos principais países do mundo em 2020
          </h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;O gráfico de pizza é uma ótima maneira de visualizar a
            distribuição de uma variável em diferentes categorias. No gráfico
            acima, é possível ver a população de 6 dos países mais populosos do
            mundo em 2020. Cada pedaço da pizza representa um país e o tamanho
            dele indica a porcentagem da população desse país em relação à
            população total dos 6 países. É possível ver, por exemplo, que a
            China é o país mais populoso, seguida pelos Estados Unidos. O
            gráfico de pizza é uma ferramenta útil para comparar rapidamente a
            participação de cada categoria em um conjunto de dados. Além disso,
            o Recharts permite adicionar rótulos e legendas ao gráfico de pizza,
            o que facilita a interpretação dos dados.
          </p>
        </div>
      </motion.div>
      <div className="col-span-1 my-10">
        <motion.div
          variants={fadeIn('left', 'tween', 0, 1)}
          className="flex justify-center"
        >
          <Graphics3 />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default WorldPopulation;
