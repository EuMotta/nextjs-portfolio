import { NavbarBottom } from '../components';
import { } from '../sections/apiConsulta';
import { BirthTax, Hero, RH, WorldPopulation } from '../sections/graphics';
import '../styles/globals.css';
import '../tailwind.config';
import Lines from '../sections/graphics/Lines';

const apis = () => (
  <div className="bg-slate-200 overflow-hidden">
    <NavbarBottom />
    <Hero />
    <div className="bg-slate-300">
      <Lines />
    </div>
    <BirthTax />
    <div className="bg-slate-300">
      <WorldPopulation />
    </div>
    <RH />
  </div>
);

export default apis;
