import { NavbarBottom } from '../components';
import { Cep, Cnpj, Hero, Time } from '../sections/apiConsulta';
import '../styles/globals.css';
import '../tailwind.config';

const apis = () => (
  <div className="bg-slate-200 overflow-hidden">
    <NavbarBottom />
    <Hero />
    <div className="bg-slate-300">
      <Cnpj />
      <Cep />
      <Time />
    </div>
  </div>
);

export default apis;