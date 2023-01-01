'use client';

import { motion } from 'framer-motion';
import Graphics2 from '../../components/Graphics/Graphics2';
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
      <motion.div
        variants={fadeIn('right', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-2xl">Linhas</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            Valores do euro e do dólar em relação ao real brasileiro
          </h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;Este gráfico mostra os valores do euro e do dólar em relação
            com o real brasileiro ao longo de um período de um mês, de 1º a 31
            de dezembro de 2022. É possível ver todas as alterações nos valores
            dessas moedas nesse período, com os dados sendo atualizados
            diariamente através de um banco de dados. O gráfico exibe os valores
            do euro e do dólar lado a lado, permitindo comparar as alterações
            nas taxas de câmbio em tempo real. Além disso, o gráfico é
            atualizado automaticamente conforme os valores mudam, garantindo que
            os dados sejam sempre precisos e atualizados.
          </p>
        </div>
      </motion.div>
      <div className="col-span-1 my-10">
        <motion.div
          variants={fadeIn('left', 'tween', 0, 1)}
          className="flex justify-center"
        >
          <Graphics2 />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default BirthTax;
