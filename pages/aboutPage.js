import { NavbarBottom } from '../components';
import { Languages, Librarys } from '../sections/aboutPage';
import Hero from '../sections/aboutPage/Hero';

import '../styles/globals.css';
import '../tailwind.config';

const apis = () => (
  <div className="bg-slate-200 overflow-hidden">
    <NavbarBottom />
    <Hero />
    <div>
      <Languages />
      <Librarys />
    </div>
  </div>
);

export default apis;
