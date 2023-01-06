'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../../../styles';
import Eu from '../../../../public/Me.jpg';
import Rocket1 from '../../../../public/home1/rocket1.svg';
import Globe from '../../../../public/home1/globe.svg';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const HeroPortfolio = () => (
  <section className="">
    <div className={`${styles.centerXYContent}  h-[70vh] mx-24`}>
      <div className="heroportfolio-content">
        <div className="heroportfolio-text">
          <div className="text-white z-10">
            <Image
              src={Rocket1}
              alt="Eu"
              width={100}
              height={100}
              className="rounded-full absolute top-0 left-36 z-0  shadow-slate-800"
              unoptimized
              onDragStart={ImpedirArrastar}
            />
            <h1>Eu sou,</h1>
            <h1 className="!text-8xl ">José Antonio</h1>
            <br />
            <p>
              Iniciante em programação e desenvolvimento web, apaixonado por
              aprender e crescer.
            </p>
          </div>
        </div>
        <div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.8 }}
            className="heroportfolio-image"
            drag
            dragConstraints={{
              top: -1,
              left: -2,
              right: 2,
              bottom: 1,
            }}
          >
            <Image
              src={Globe}
              alt="Eu"
              width={100}
              height={100}
              className="rounded-full rotate shadow-slate-800"
              unoptimized
              onDragStart={ImpedirArrastar}
              style={{ transform: 'scale(1)' }}
            />
            <Image
              src={Eu}
              alt="Eu"
              width={200}
              height={200}
              className="rounded-full shadow-md  shadow-slate-800"
              unoptimized
              onDragStart={ImpedirArrastar}
              style={{ transform: 'scale(1)' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroPortfolio;
