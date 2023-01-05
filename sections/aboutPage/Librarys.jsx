'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles';
import LibrarySvg from '../../public/aboutPage/LibrarySvg.svg';
import LibrarySvg2 from '../../public/aboutPage/LibrarySvg2.svg';
import LibrarySvg3 from '../../public/aboutPage/LibrarySvg3.svg';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import { librarysList } from './constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const Librarys = () => (
  <section className={`${styles.paddings} z-10 container mx-auto`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <h1 className="font-bold mb-5 font-mono text-2xl">
              Bibliotecas
            </h1>
            <div>
              {librarysList.slice(0, 3).map((library) => (
                <motion.div
                  variants={textVariant(`${library.time}`)}
                  className="mb-1 mt-5"
                  key={library.title}
                >
                  <Link href={library.href} className="font-semibold underline hover:text-blue-600 transition-all z-50 font-mono text-xl">{library.title}</Link>
                  <p className="text-sm text-justify font-mono">&nbsp;{library.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 my-10">
          <motion.div
            animate={{
              scale: [1.3, 1.3, 1.31, 1.3, 1.3],
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
            <Image src={LibrarySvg} width={400} height={400} unoptimized alt="Librarys" onDragStart={ImpedirArrastar} />
          </motion.div>
        </div>
      </div>
      <div className="grid mt-10 grid-cols-2">
        <div className="col-span-1 my-10">
          <motion.div
            animate={{
              scale: [1.3, 1.3, 1.31, 1.3, 1.3],
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
            className="flex justify-center z-10"
            drag
            dragConstraints={{
              top: -0.2,
              left: -0.2,
              right: 0.2,
              bottom: 0.2,
            }}
          >
            <Image className="pointer-events-none" src={LibrarySvg2} width={400} height={400} unoptimized alt="Librarys" onDragStart={ImpedirArrastar} />
          </motion.div>
        </div>
        <div className="col-span-1">
          <div className="px-5">
            <div className="z-50">
              {librarysList.slice(3, 6).map((library) => (
                <motion.div
                  variants={textVariant(`${library.time}`)}
                  className="mb-1 mt-5"
                  key={library.title}
                >
                  <Link href={library.href} className="font-semibold underline hover:text-blue-600 transition-all font-mono text-xl">{library.title}</Link>
                  <p className="text-sm text-justify font-mono">&nbsp;{library.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid mt-10 grid-cols-2">
        <div className="col-span-1">
          <div className="px-5">
            <div>
              {librarysList.slice(6, 9).map((library) => (
                <motion.div
                  variants={textVariant(`${library.time}`)}
                  className="mb-1 mt-5"
                  key={library.title}
                >
                  <Link href={library.href} className="font-semibold underline hover:text-blue-600 transition-all z-50 font-mono text-xl">{library.title}</Link>
                  <p className="text-sm text-justify font-mono">&nbsp;{library.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 my-10">
          <motion.div
            animate={{
              scale: [1.3, 1.3, 1.31, 1.3, 1.3],
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
            <Image className="z-10" src={LibrarySvg3} width={400} height={400} unoptimized alt="Librarys" onDragStart={ImpedirArrastar} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Librarys;
