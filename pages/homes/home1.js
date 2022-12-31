import Head from '../../app/head';
import { NavbarBottom } from '../../components';
import { AboutHome1, Hero } from '../../sections/homes/home1';
import '../../styles/globals.css';
import '../../tailwind.config';
import '../../styles/Homes/Home1.css';

const Home1 = () => (
  <div className="bg-slate-200 overflow-hidden">
    <Head />
    <NavbarBottom />
    <Hero />
    <AboutHome1 />
  </div>
);

export default Home1;
