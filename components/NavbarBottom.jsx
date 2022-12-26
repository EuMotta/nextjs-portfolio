'use client';

import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { bottomBarItems } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => (
  <motion.nav
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className=" w-full fixed bottom-0   z-50"
  >
    <motion.nav
      variants={fadeIn('up', 'tween', 0, 1)}
      className="flex items-center justify-between dark:bg-[#353230c2] flex-wrap p-2"
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
      <div className=" block gap-x-10 flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow flex justify-center">
          {bottomBarItems.map((item) => (
            <a
              id={item.id}
              key={item.href}
              href={item.href}
              className="block font-mono mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-white mr-4"
              rel="noreferrer"
            >
              <Tooltip
                place="top"
                anchorId={item.id}
                content={item.title}
                className="!bg-orange-400"
              />
              <item.icon className="lg:text-xl" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  </motion.nav>
);

export default Navbar;
