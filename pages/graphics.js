import { NavbarBottom } from '../components';
import { } from '../sections/apiConsulta';
import { BirthTax, Hero } from '../sections/graphics';
import '../styles/globals.css';
import '../tailwind.config';
import Coin from '../sections/graphics/Coin';

const apis = () => (
  <div className="bg-slate-200 overflow-hidden">
    <NavbarBottom />
    <Hero />
    <div className="bg-slate-300">
      <Coin />
    </div>
    <BirthTax />
  </div>
);

export default apis;
