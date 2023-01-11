'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TitleText, TypingText } from '../../../../components';
import ServicesCard from '../../../../components/ServicesCard';
import styles from '../../../../styles';
import { staggerContainer } from '../../../../utils/motion';
import { services } from '../constants';

/* function ImpedirArrastar(event) {
  event.preventDefault();
} */
const ServicesPortfolio = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="O universo da programação"
          textStyles="text-center text-white text-3xl"
        />
        <TitleText
          title={(
            <span className="text-white">
              Escolha o mundo que você quer <br className="md:block  hidden" />
              Explorar
            </span>
          )}
          textStyles="text-center text-white"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {services.map((service, index) => (
            <ServicesCard
              key={service.id}
              {...service}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesPortfolio;
