'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../../../styles';
import Eu from '../../../../public/Me.jpg';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const HeroHome1 = () => (
  <section className="">
    <div className={`${styles.centerXYContent}  h-[70vh] mx-24`}>
      <div className="hero-content">
        <div className="col-span-1 text-white flex flex-col justify-center items-center ">
          <div className="">
            <h2>Eu sou,</h2>
            <h1 className="!text-7xl">José Antonio</h1>
            <br />
            <p>
              Iniciante em programação e desenvolvimento web, apaixonado por
              aprender e crescer.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.8 }}
            className="cursor-pointer flex justify-center items-center"
            drag
            dragConstraints={{
              top: -1,
              left: -2,
              right: 2,
              bottom: 1,
            }}
          >
            <Image
              src={Eu}
              alt="Eu"
              width={400}
              height={400}
              className="rounded-full shadow-md  shadow-slate-800"
              unoptimized
              onDragStart={ImpedirArrastar}
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroHome1;
