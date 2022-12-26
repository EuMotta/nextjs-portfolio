'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { positionBar } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import 'react-tooltip/dist/react-tooltip.css';

const PositionBar = () => {
  const [active, setActive] = useState('home');

  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="p-2 fixed shadow-sm rounded-r-lg h-full items-center flex  z-50"
    >
      <motion.nav
        variants={fadeIn('right', 'tween', 0, 1)}
        className="flex items-center justify-center flex-wrap  p-2"
      >
        <div className=" block gap-x-10 flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm flex flex-col gap-y-5 justify-center">
            {positionBar.map((item) => (
              <a
                id={item.id}
                href={item.href}
                key={item.href}
                className={`block font-mono mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-white mr-4 ${
                  active === item.href.substring(1) ? 'active' : ''
                }`}
                onClick={() => setActive(item.href.substring(1))} // Atualiza o estado "ativo" com o item clicado
              >
                <Tooltip
                  place="right"
                  anchorId={item.id}
                  content={item.title}
                />
                <button type="button">
                  <item.icon className="lg:text-xl" />
                </button>
              </a>
            ))}
          </div>
        </div>
      </motion.nav>
    </motion.nav>
  );
};

export default PositionBar;
