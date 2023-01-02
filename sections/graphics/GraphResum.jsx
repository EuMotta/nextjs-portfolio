'use client';

import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const GraphResum = () => (
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
          <h1 className="font-bold mb-5 font-mono text-2xl">
            Desenvolvendo um gráfico com o Recharts
          </h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            Como desenvolvi e montei os gráficos para representar os dados de
            forma eficaz
          </h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;A primeira linha de código cria um array de objetos que
            representam os dados a serem exibidos no gráfico. Cada objeto tem
            três propriedades: name, que é o nome do país; value, que é o valor
            a ser exibido no gráfico; e fill, que é a cor do segmento do
            gráfico.
            <br /><br />
            &nbsp;A segunda linha de código define uma função de componente
            chamada <strong>Graphics3</strong>, que retorna um elemento
            <strong> ResponsiveContainer</strong> do Recharts. O{' '}
            <strong>ResponsiveContainer</strong> é um componente que se adapta à
            largura e à altura do seu contêiner pai. Neste caso, a largura é
            definida como 100% e a altura é definida como 300 pixels.
            <br /><br />
            &nbsp;O componente <strong>Pie</strong> tem propriedades que
            permitem especificar como o tamanho de cada segmento é calculado e
            como o gráfico é animado. A propriedade <strong>dataKey</strong>{' '}
            especifica qual propriedade do objeto de dados será usada para
            calcular o tamanho do segmento. No exemplo, é a propriedade value. A
            propriedade <strong>isAnimationActive</strong> é um booleano que
            indica se a animação deve ser habilitada ou não. Além disso, o
            componente <strong>Pie</strong> tem propriedades adicionais que
            permitem especificar a posição do gráfico, o raio externo e se
            rótulos devem ser exibidos. O componente <strong>Tooltip</strong> é
            um recurso de exibição de dicas que é exibido quando o usuário passa
            o mouse sobre um segmento do gráfico.
          </p>
        </div>
      </motion.div>
      <div className="col-span-1 my-10">
        <motion.div
          variants={fadeIn('left', 'tween', 0, 1)}
          className="flex flex-col gap-y-5"
        >
          <pre className="h-40 overflow-scroll text-[12px] bg-slate-100 shadow-sm shadow-slate-900 rounded-xl px-5 py-2">
            <code className=" h-screen">
              {`
 const population01 = [
  { name: 'China', value: 1439323776, fill: '#eb833f' },
  { name: 'Índia', value: 1380004385, fill: '#3c50c2' },
  { name: 'Estados Unidos', value: 331002651, fill: '#47c23c' },
];
              `}
            </code>
          </pre>
          <pre className="h-72 overflow-scroll text-[12px] bg-slate-100 shadow-sm shadow-slate-900 rounded-xl px-5 py-2">
            <code className=" h-screen">
              {`
  const Graphics3 = () => (
    <ResponsiveContainer width="100%" height={300} className="text-[#4144e0]">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={population01}
          cx="50%"
          cy="50%"
          outerRadius={80}
           label
        />
        <Tooltip />
      </PieChart>
  </ResponsiveContainer>
);
              `}
            </code>
          </pre>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default GraphResum;
