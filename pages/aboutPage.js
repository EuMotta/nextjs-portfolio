import { NavbarBottom } from '../components';
import { Database, Iframe, Images, Languages, Librarys, SearchAPIs } from '../sections/aboutPage';
import Hero from '../sections/aboutPage/Hero';

import '../styles/globals.css';
import '../tailwind.config';

const apis = () => (
  <div title="about" className="bg-slate-200 overflow-hidden">
    <NavbarBottom />
    <div className="container mx-auto">
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
  </div>
);

export default apis;
