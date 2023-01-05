import Head from '../../app/head';
import { NavbarBottom } from '../../components';
import { AboutHome1, Hero, Start } from '../../sections/homes/home1/start';
import '../../styles/globals.css';
import '../../tailwind.config';
import '../../styles/Homes/Home1.css';

const Home1 = () => (
  <div className="bg-home">
    <div className="container mx-auto ">
      <Hero />
    </div>
    <Head />
    <AboutHome1 />
    <div className=" glassmorphism">
      <Start />
    </div>
    <div className="mt-10 ">
      <NavbarBottom />
    </div>
  </div>
);

export default Home1;
