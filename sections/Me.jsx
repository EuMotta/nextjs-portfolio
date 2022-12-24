'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCoffee } from 'react-icons/fi';
import { FaGlobeAsia } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import styles from '../styles';
import Eu from '../public/Me.jpg';
import { TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const Me = () => (
  <section id="Me" className={`${styles.paddings} sm:16 sm:pl-6 `}>
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="col-span-3"
        >
          <motion.div
            variants={fadeIn('right', 'tween', 0, 1)}
            className="flex justify-center md:flex md:justify-center"
          >
            <motion.div
              className="bg-gradient-to-r from-[rgb(86,128,237)] to-[#ed4b15] rounded-full p-2 shadow-md shadow-slate-700"
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [5, -5, 5, -5, 5],
                borderRadius: ['50%', '40%', '50%', '40%', '50%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.8 }}
                className="cursor-pointer"
              >
                <Image
                  src={Eu}
                  alt="Eu"
                  width={300}
                  height={300}
                  className="rounded-full shadow-md  shadow-slate-800"
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="dark:text-white mt-5 text-center font-mono">
            Opa! clica na foto e veja o efeito!
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="col-span-4 lg:mr-36"
        >
          <TypingText
            title="A caminho de me tornar um fullstack"
            textStyles="sm:text-center sm:text-xl md:text-2xl md:text-center lg:text-3xl text-slate-700 dark:text-secondary-white font-bold my-10 "
          />
          <motion.div
            variants={fadeIn('left', 'tween', 0, 1)}
            className="flex flex-col sm:text-center md:text-center lg:text-start lg:justify-start gap-5"
          >
            <div className="flex gap-3 text-center xs:flex-col sm:f lg:text-start sm:justify-center md:justify-center lg:justify-start items-center">
              <FiCoffee className="text-indigo-400 text-3xl" />
              <p className="text-slate-900 dark:text-white font-mono text-lg">
                O café e a música são elementos fundamentais para a minha
                concentração
              </p>
            </div>
            <div className="flex gap-3 text-center sm:text-center lg:text-start  md:justify-center lg:justify-start items-center">
              <FaGlobeAsia className="text-indigo-600 text-3xl" />
              <p className="text-slate-900 dark:text-white font-mono text-lg">
                Brasil, São Paulo, Guaratinguetá
              </p>
            </div>
            <div className="flex gap-3 text-center sm:text-center lg:text-start  md:justify-center lg:justify-start items-center">
              <IoMdSchool className="text-orange-500 text-3xl" />
              <p className="text-slate-900 dark:text-white font-mono text-lg">
                Formação em Analise e Desenvolvimento de Sistemas pela FATEC
              </p>
            </div>
            <div>
              <TypingText
                title="Confira minhas redes sociais"
                textStyles="text-slate-700 dark:text-secondary-white font-bold my-2 text-xl"
              />
              <div className="flex gap-x-5 justify-center lg:justify-start text-5xl">
                <Link target="blank" href="https://github.com/EuMotta">
                  <AiFillGithub className="text-slate-900 dark:text-white hover:text-slate-400 transition-all hover:scale-110" />
                </Link>
                <Link target="blank" href="https://www.instagram.com/callmotta/">
                  <AiFillInstagram className="text-slate-900 dark:text-white hover:text-orange-600 transition-all hover:scale-110" />
                </Link>
                <Link href="/">
                  <AiFillLinkedin className="text-slate-900 dark:text-white hover:text-indigo-400 transition-all hover:scale-110" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Me;
