'use client';

import { motion } from 'framer-motion';
import { Graphics4 } from '../../components/Graphics/Graphics1';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const RH = () => (
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
          <Graphics4 />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('right', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-2xl">Radar</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            Análise dos Indicadores de Desempenho(RH) das Empresas A e B
          </h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;Este gráfico de radar compara o desempenho das empresas A e B
            em relação a vários indicadores de desempenho. Os radares mostram
            como cada empresa se compara em relação a indicadores como
            satisfação do cliente, taxa de retenção de funcionários, crescimento
            do negócio e rentabilidade. As pontas dos gráficos indicam os níveis
            mais altos de desempenho, enquanto as áreas mais centrais indicam
            níveis mais baixos. As empresas com gráficos mais longos têm um
            desempenho mais forte em todos os indicadores, enquanto aquelas com
            gráficos mais curtos têm um desempenho mais fraco. A cor dos
            gráficos também pode ser usada para destacar diferenças de
            desempenho entre as empresas.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default RH;
