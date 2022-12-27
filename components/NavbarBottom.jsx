'use client';

import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';
import { bottomBarDropUp, bottomBarItems } from '../constants';
import 'react-tooltip/dist/react-tooltip.css';

const link = '';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.nav
      className=" w-full fixed bottom-0 bg-[#000000]  z-50"
    >
      <motion.nav
        className="flex items-center justify-between  flex-wrap p-2"
      >
        <div className="flex fixed items-center flex-shrink-0 text-white mr-6">
          <div className="font-semibold flex items-center text-xl tracking-tight">
            <motion.div
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [-10, -10, -10, -10, -10],
                borderRadius: ['50%', '40%', '50%', '40%', '50%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
              }}
              drag
              dragConstraints={{
                top: -5,
                left: -5,
                right: 200,
                bottom: 100,
              }}
              className="font-bold text-2xl text-orange-500"
            >
              M
            </motion.div>
            OTTA
          </div>
        </div>
        <div className=" block  flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm gap-x-10 lg:flex-grow flex justify-center">
            {bottomBarItems.map((item) => (
              <div>
                {isOpen && (
                  <div className="fixed bg-orange-300 bottom-10">
                    {bottomBarDropUp.map((dropUp) => (
                      <div className="flex flex-col">
                        <a
                          key={dropUp.id}
                          href={dropUp.href}
                          className="block font-mono mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                        >
                          {dropUp.title}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
                <a
                  id={item.id}
                  key={item.id}
                  href={item.href}
                  className="block font-mono mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                  rel="noreferrer"
                >
                  <Tooltip
                    place="top"
                    anchorId={item.id}
                    content={item.title}
                    className="!bg-orange-400"
                  />{' '}
                  <div
                    onClick={toggle}
                    className="flex cursor-pointer justify-center"
                  >
                    <item.icon className="lg:text-2xl" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0">
          <a href={link}>
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-700 justify-end text-white font-mono py-2 px-4 rounded"
            >
              Baixar currículo
            </button>
          </a>
        </div>
      </motion.nav>
    </motion.nav>
  );
};

export default Navbar;
