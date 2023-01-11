'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../../../styles';
import Eu from '../../../../public/Me.jpg';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const HeroStart1 = () => (
  <section className="bg-home">
    <div className={`${styles.centerXYContent}  h-[70vh] mx-24`}>
      <div className="hero-content">
        <div className="hero-text">
          <div>
            <h2>Eu sou,</h2>
            <h1>José Antonio</h1>
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
            className="hero-image"
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
              priority
              width={200}
              height={200}
              className="hero-image-Image"
              unoptimized
              onDragStart={ImpedirArrastar}
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroStart1;
