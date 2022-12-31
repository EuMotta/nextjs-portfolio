'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles';
import ImageSvg from '../../public/aboutPage/ImagesSvg.svg';
import { fadeIn, staggerContainer } from '../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Images = () => (
  <section className={`${styles.paddings}  z-10`}>
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
          <h1 className="font-bold mb-5 font-mono text-2xl">Imagens</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">
            O que é o formato de imagem SVG
          </h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;O Scalable Vector Graphics (SVG) é um formato de imagem
            vetorial baseado em Extensible Markup Language (XML), utilizado para
            exibir gráficos e imagens na web. As imagens em formato SVG são
            escaláveis, ou seja, podem ser redimensionadas sem perda de
            qualidade, o que as torna ideais para uso em dispositivos de tela de
            alta resolução. Além disso, o SVG é um formato de arquivo aberto e
            pode ser editado e manipulado por qualquer software de desenho
            vetorial. <br />
            &nbsp;Quando aplicado em um website, o uso de imagens SVG permite
            que a qualidade da imagem se mantenha inalterada, independentemente
            do nível de zoom da página. Isso ocorre devido à natureza vetorial
            das imagens SVG, que são formadas por linhas e curvas ao invés de
            pixels. Dessa forma, ao redimensionar uma imagem SVG, o software
            simplesmente recalcula as coordenadas das linhas e curvas, mantendo
            a imagem sempre nítida e precisa. Por essa razão, o formato SVG é
            especialmente útil para imagens que precisam manter alta qualidade
            em diferentes tamanhos, como ícones, gráficos e logotipos.
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
            src={ImageSvg}
            width={400}
            height={400}
            unoptimized
            alt="Image"
            onDragStart={ImpedirArrastar}
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Images;
