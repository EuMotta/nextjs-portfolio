'use client';

import { useState } from 'react';
import { GiJellyfish, GiUfo } from 'react-icons/gi';
import { Footer, NavbarBottom, PositionBar, Top } from '../components';
import { AboutTest, Cep, Cnpj, Education, Experience, Explore, Feedback, GetStarted, Hero, Insights, Languages, Me, Objectives, Projects, Services, WhatsNew, World } from '../sections';

const Page = () => {
  const [src, setSrc] = useState('https://www.shadertoy.com/embed/4sXBRn?gui=true&t=10&paused=false&muted=true&autoplay=1');
  function alterarEnd(endereco) {
    setSrc(endereco);
  }

  return (
    <>
      <iframe
        title="title"
        className="w-full -z-10  fixed min-h-screen"
        src={src}
      />
      <div className="relative ml-10 gap-x-10 flex top-10">
        <div className="flex text-xl items-center glassmorphism rounded-full font-mono p-2">
          <span className="font-bold">Mudar tema:</span>
          <div className="flex ml-2 gap-x-5">
            <button type="button" className="rounded-full bg-blue-500 hover:bg-blue-800 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/4sXBRn?gui=true&t=10&paused=false&muted=true&autoplay=1')}>
              <GiJellyfish />
            </button>
            <button type="button" className="rounded-full bg-violet-500 hover:bg-violet-800 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/7dyyRy?gui=true&t=10&paused=false&muted=true&autoplay=2')}>
              <GiUfo />
            </button>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <Top />
        <PositionBar />
        <NavbarBottom />
        <Hero />
        <AboutTest />
        <Me />
        <Experience />
        <Languages />
        <Education />
        <Objectives />
        <Services />
        <Projects />
        <Explore />
        <Cnpj />
        <Cep />
        <GetStarted />
        <WhatsNew />
        <World />
        <Insights />
        <Feedback />
        <Footer />
      </div>
    </>
  );
};

export default Page;
