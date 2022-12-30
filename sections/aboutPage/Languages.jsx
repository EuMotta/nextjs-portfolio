'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles';
import Nextjs from '../../public/aboutPage/NextJs.svg';
import { fadeIn } from '../../utils/motion';

const Languages = () => (
  <section className={`${styles.paddings} bg-slate-300 z-10`}>
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-2xl">Base de desenvolvimento</h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">NEXTjs</h3>
          <p className="text-sm text-justify font-mono">&nbsp;No desenvolvimento deste projeto, utilizei o NEXTjs como plataforma principal. Trata-se de uma extensão do React que auxilia no desenvolvimento de projetos web, permitindo uma rápida criação de aplicações de alta performance. Além disso, o NEXTjs é baseado em JavaScript, o que me permitiu aproveitar ao máximo meus conhecimentos atuais na linguagem tanto para o frontend quanto para o backend. <br />&nbsp;Durante o processo de desenvolvimento, busquei criar uma interface atrativa e intuitiva para o usuário. Utilizei as minhas habilidades em JavaScript para garantir uma experiência de usuário otimizada e fluida. Além disso, me esforcei para maximizar a eficiência e a funcionalidade do projeto, a fim de oferecer uma solução de qualidade aos usuários.</p>
        </div>
      </div>
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
          <Image src={Nextjs} width={400} height={400} unoptimized alt="NEXTjs" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Languages;
