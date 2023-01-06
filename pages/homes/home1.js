
import { useState } from 'react';
import Head from '../../app/head';
import { NavbarBottom } from '../../components';
import { AboutHome1, Hero } from '../../sections/homes/home1/start';
import '../../styles/globals.css';
import '../../tailwind.config';
import '../../styles/Homes/Home1.css';
import styles from '../../styles';
import { HeroPortfolio, AboutPortfolio } from '../../sections/homes/home1/portfolio';

const Home1 = () => {
  const [bgClass, setBgClass] = useState('bg-start');
  const [text, setText] = useState();
  const [hidden, setHidden] = useState();
  const [remove, setRemove] = useState(true);

  const handleClick = () => {
    setHidden(hidden === 'hidden' ? '' : 'hidden');
    setRemove(false);
  };

  const handleMouseEnter = () => {
    setBgClass(' bg-start2');
    setText('text-white');
  };

  const handleMouseLeave = () => {
    setBgClass('bg-start');
    setText('text-black');
  };
  return (
    <div>
      <div className={`${hidden} bg-home`}>
        <div className="container mx-auto  ">
          <Hero />
        </div>
        <Head />
        <AboutHome1 />
        <div className=" glassmorphism">
          <section className={`${bgClass} transition`}>
            <div className="container mx-auto">
              <div className={`${styles.centerXYContent} h-[80vh] justify-center items-center flex flex-col gap-y-5`}>
                <h1 className={`${text} transition`}>Entre e descubra quem eu sou</h1>
                <button type="button" className="start-button" href="" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Explore meu mundo!</button>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-10 ">
          <NavbarBottom />
        </div>
      </div>
      <div className={`${remove ? 'hidden' : ''}`}>
        <div className="bg-portfolio h-screen">
          <HeroPortfolio />

        </div>
        <div className=" bg-city h-screen">
          <div className="container mx-auto">
            <AboutPortfolio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
