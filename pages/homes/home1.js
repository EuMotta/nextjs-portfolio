import Head from '../../app/head';
import { NavbarBottom } from '../../components';
import { Hero } from '../../sections/homes/home1';
import '../../styles/globals.css';
import '../../tailwind.config';

const Home1 = () => (
  <div className="bg-slate-200 overflow-hidden">
    <Head />
    <NavbarBottom />
    <Hero />
  </div>
);

export default Home1;
