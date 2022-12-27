'use client';

import { motion } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => (
  <motion.nav className=" w-full py-2 fixed top-0 bg-[#000000]   z-40">
    <div className="ticker text-center text-mono">
      <span className="text-sm text-white sm:text-center">
        © 2022 <a href="/">José Antonio Motta™</a>. All Rights Reserved.
      </span>
    </div>
  </motion.nav>
);

export default Navbar;
