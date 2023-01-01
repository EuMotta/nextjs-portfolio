'use client';

import { motion } from 'framer-motion';
import { Graphics2 } from '../../components/Graphics/Graphics1';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const BirthTax = () => (
  <section className={`${styles.paddings}  z-10 container`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-2"
    >
      <div className="col-span-1 my-10">
        <motion.div
          variants={fadeIn('left', 'tween', 0, 1)}
          className="flex justify-center"
        >
          <Graphics2 />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('right', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-2xl">Barras</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            Gráfico de Barras da Taxa de Natalidade no Brasil de 2012 a 2022
          </h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;O gráfico de barras é uma ótima maneira de visualizar a
            evolução de um dado ao longo do tempo. No gráfico ao lado, é possível
            ver a taxa de natalidade no Brasil de 2012 a 2022. Cada barra
            representa um ano e a sua altura indica o valor da taxa de
            natalidade nesse ano. É possível ver, por exemplo, que a taxa de
            natalidade teve um aumento significativo entre 2015 e 2016, mas
            depois se estabilizou até 2022. Além disso, o gráfico de barras
            permite comparar facilmente os valores de cada ano, o que pode nos
            ajudar a entender melhor a tendência da taxa de natalidade no
            Brasil.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default BirthTax;
