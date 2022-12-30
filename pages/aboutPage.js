import { NavbarBottom } from '../components';
import { Languages } from '../sections/aboutPage';
import Hero from '../sections/aboutPage/Hero';

import '../styles/globals.css';
import '../tailwind.config';

const apis = () => (
  <div className="bg-slate-200 overflow-hidden">
    <NavbarBottom />
    <Hero />
    <div className="bg-slate-300">
      <Languages />
    </div>
  </div>
);

export default apis;
