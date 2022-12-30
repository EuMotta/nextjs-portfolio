'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles';
import MongoDB from '../../public/aboutPage/MongoDB.svg';
import { fadeIn } from '../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Database = () => (
  <section className={`${styles.paddings} bg-slate-300 z-10`}>
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-2xl">
            Banco de Dados
          </h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">MongoDB</h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;O MongoDB é um sistema de gerenciamento de banco de dados
            orientado a documentos. Isso significa que, em vez de armazenar
            dados em tabelas como em um banco de dados relacional, o MongoDB
            armazena os dados em documentos semelhantes a registros JSON
            (JavaScript Object Notation). Esses documentos podem conter campos
            aninhados, o que permite uma maior flexibilidade e escalabilidade em
            comparação com os sistemas de banco de dados relacionais
            tradicionais. <br />
            &nbsp;Ele é compatível com a maioria dos sistemas operacionais
            e pode ser executado em uma variedade de plataformas, incluindo
            Windows, macOS e Linux. Ele é amplamente utilizado em aplicações da
            web, como sites de comércio eletrônico, plataformas de gerenciamento
            de conteúdo e sistemas de gerenciamento de relacionamento com
            clientes.
          </p>
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
          <Image
            src={MongoDB}
            width={400}
            height={400}
            unoptimized
            alt="MongoDB"
            onDragStart={ImpedirArrastar}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Database;
