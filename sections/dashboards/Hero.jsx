'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import styles from '../../styles';
import heroPageSvg from '../../public/dashboards/Hero.svg';
import { fadeIn, staggerContainer } from '../../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}

const Hero = () => (
  <section className={`${styles.paddings} z-10 container mx-auto`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2"
    >
      <div className="col-span-1 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1.2, 1.2, 1.23, 1.2, 1.2],
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
            src={heroPageSvg}
            width={400}
            height={400}
            unoptimized
            onDragStart={ImpedirArrastar}
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('left', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="mx-5">
          <h1 className="font-bold mb-5 font-mono text-blue-600 text-6xl leading-none">
            Explorando o mundo das dashboards
          </h1>
          <div className="text-4xl font-bold mb-2 leading-tight">
            Descubra o poder da visualização de dados!
            <div className="text-blue-600 flex my-5 text-3xl">
              <Typewriter
                options={{
                  strings: [
                    'Operacionais',
                    'Marketing',
                    'Analises',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
