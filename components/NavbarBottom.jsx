'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { bottomBarItems } from '../constants';
import 'react-tooltip/dist/react-tooltip.css';
import Mlogo from '../public/Mlogo.svg';

const link = '';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(title) {
    if (title !== 'Inicio') {
      setIsOpen(false);
    }
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.nav className=" w-full fixed bottom-0 bg-[#000000]  z-50">
      <motion.nav className="flex items-center justify-between  flex-wrap p-2">
        <div className="flex fixed items-center flex-shrink-0 text-white mr-6">
          <div className="font-semibold flex items-center text-xl tracking-tight">
            <motion.div
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [-10, -10, -10, -10, -10],
                borderRadius: ['50%', '40%', '50%', '40%', '50%'],
              }}
              className="font-bold text-2xl text-orange-500"
            >
              <Image src={Mlogo} widtth={30} height={30} unoptimized alt="Logo" className="text-white" />
            </motion.div>
            OTTA
          </div>
        </div>
        <div className=" block  flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm gap-x-10 lg:flex-grow flex justify-center">
            {bottomBarItems.map((item) => (
              <div key={item.id}>
                {/* {isOpen && item.title === 'Inicio' && (
                  <div className="fixed glassmorphism bottom-10">
                    {bottomBarDropUp.map((dropUp) => (
                      <div key={dropUp.id} className="flex my-2 text-center flex-col">
                        <a
                          href={dropUp.href}
                          className="block font-mono mt-4 cursor-pointer lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                        >
                          {dropUp.title}
                        </a>
                      </div>
                    ))}
                  </div>
                )} */}
                <a
                  href={item.href}
                  className="block font-mono mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                  rel="noreferrer"
                  onClick={() => handleClick(item.title)}
                  title="test"
                >
                  <div
                    onClick={toggle}
                    className="flex cursor-pointer justify-center ml-4"
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
