'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HnavbarItems } from '../constants';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [dropupOpen, setDropupOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className=" w-full fixed bottom-0  dark:bg-[#353230c2] z-50"
    >
      <nav className="flex items-center justify-between flex-wrap  p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
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
        <div className=" block gap-x-10 flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow flex justify-center">
            {HnavbarItems.map((item) => (
              <div
                key={item.href}
                href={item.href}
                className="block font-mono mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-white mr-4"
              >
                <button
                  onClick={() => setDropupOpen(!dropupOpen)}
                  type="button"
                >
                  <item.icon className="lg:text-xl" />
                </button>
                {/* <div className="mx-10">
                  {dropupOpen && (
                    <div className="bg-red-200">
                      <ul className={`dropup p-2 bg-[#ec672960] ${dropupOpen ? 'show' : ''}`}>
                        <li>
                          <a href={item.drop1Href}>{item.drop1Title}</a>
                        </li>
                        <li>
                          <a href={item.drop2Href}>{item.drop2Title}</a>
                        </li>
                        <li>
                          <a href={item.drop3Href}>{item.drop3Title}</a>
                        </li>
                        <li>
                          <a href={item.drop4Href}>{item.drop4Title}</a>
                        </li>
                        <li>
                          <a href={item.drop5Href}>{item.drop5Title}</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div> */}
              </div>
            ))}
          </div>
          <div>
            <a
              href="/"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>
    </motion.nav>
  );
};

export default Navbar;
