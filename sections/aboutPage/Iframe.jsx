'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles';
import iframe from '../../public/aboutPage/iframeSvg.svg';
import { fadeIn, staggerContainer } from '../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Iframe = () => (
  <section className={`${styles.paddings} bg-slate-300 z-10`}>
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
          <h1 className="font-bold mb-5 font-mono text-2xl">iframe</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">Entenda como essa ferramenta pode ser usada em páginas web</h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;Um iframe (inline frame) é um elemento HTML que permite a
            inserção de um documento HTML dentro de outro documento HTML. Ele é
            usado para exibir o conteúdo de um documento em outro lugar, como em
            uma página da web ou em um e-mail. <br />
            &nbsp;É possível interagir com um iframe de várias maneiras,
            dependendo do contexto em que ele é utilizado. Por exemplo, é
            possível usar JavaScript para manipular o conteúdo do iframe,
            alterar o endereço que ele está exibindo ou até mesmo comunicar-se
            com o documento do iframe usando APIs como o window.postMessage. No
            entanto, é importante lembrar que os iframes são geralmente
            considerados como "caixas-pretas" pelos navegadores, o que significa
            que eles têm algumas restrições de segurança que impedem que você
            acesse ou modifique o conteúdo de um iframe de forma arbitrária.
          </p>
        </div>
      </motion.div>
      <div className="col-span-1 my-10">
        <motion.div
          animate={{
            scale: [1.4, 1.4, 1.41, 1.4, 1.4],
            rotate: [0.1, -0.1, 0.1, -0.1, 0.1],
            borderRadius: ['50%', '48%', '50%', '48%', '50%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
          variants={fadeIn('left', 'tween', 0, 1)}
          className="flex justify-center"
          drag
          dragConstraints={{
            top: -0.2,
            left: -0.2,
            right: 0.2,
            bottom: 0.2,
          }}
        >
          <Image
            src={iframe}
            width={400}
            height={400}
            unoptimized
            alt="MongoDB"
            onDragStart={ImpedirArrastar}
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Iframe;
