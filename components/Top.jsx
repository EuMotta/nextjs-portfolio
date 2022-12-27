'use client';

import { motion } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => (
  <motion.nav className=" w-full fixed top-0 bg-[#353230]  z-50">
    <div className="ticker text-end text-mono text-white">
      <span>Olá mundo! Espero que goste do meu portfólio!</span>
    </div>
  </motion.nav>
);

export default Navbar;
