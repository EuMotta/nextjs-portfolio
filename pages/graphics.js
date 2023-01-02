import { NavbarBottom } from '../components';
import { } from '../sections/apiConsulta';
import { Areas, Bars, Composed, GraphResum, Hero, RH, WorldPopulation } from '../sections/graphics';
import '../styles/globals.css';
import '../tailwind.config';
import Lines from '../sections/graphics/Lines';

const graphics = () => (
  <div className="bg-slate-200 overflow-hidden">
    <NavbarBottom />
    <Hero />
    <GraphResum />
    <div className="bg-slate-300">
      <Lines />
    </div>
    <Areas />
    <div className="bg-slate-300">
      <Bars />
    </div>
    <WorldPopulation />
    <div className="bg-slate-300">
      <RH />
    </div>
    <Composed />
  </div>
);

export default graphics;
