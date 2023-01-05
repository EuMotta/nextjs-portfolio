'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import styles from '../../styles';
import aboutPageSvg from '../../public/aboutPage/aboutPageHero.svg';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { sectionButtons } from './constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}

const Hero = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2"
    >
      <div className="col-span-1">
        <motion.div
          animate={{
            scale: [1.1, 1.1, 1.11, 1.1, 1.1],
            rotate: [0.1, -0.1, 0.1, -0.1, 0.1],
            borderRadius: ['50%', '46%', '50%', '46%', '50%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
          variants={fadeIn('right', 'tween', 0, 1)}
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
            src={aboutPageSvg}
            width={400}
            height={400}
            unoptimized
            onDragStart={ImpedirArrastar}
            alt="Hero"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('left', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="mx-5">
          <h1 className="font-bold mb-5 font-mono text-blue-600 text-7xl leading-none">
            Desenvolvimento do projeto
          </h1>
          <div className="text-4xl font-bold mb-2 leading-tight">
            Confira tudo que foi utilizado, como:
            <div className="text-blue-600 my-5 text-3xl">
              <Typewriter
                options={{
                  strings: [
                    'Linguagens',
                    'Bibliotecas',
                    'Imagens',
                    'Banco de dados',
                    'APIs',
                    'e mais!',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-5 gap-5 text-white">
            {sectionButtons.map((button) => (
              <button
                type="button"
                key={button.title}
                className={`sections-button ${button.colorStyle}`}
                href={button.href}
              >
                {button.title}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
