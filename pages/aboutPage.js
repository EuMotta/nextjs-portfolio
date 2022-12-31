import { NavbarBottom } from '../components';
import { Database, Iframe, Images, Languages, Librarys, SearchAPIs } from '../sections/aboutPage';
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
      <Database />
      <SearchAPIs />
      <Iframe />
      <Images />
    </div>
  </div>
);

export default apis;
