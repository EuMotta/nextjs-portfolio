'use client';

import { useState } from 'react';
import { GrCodeSandbox } from 'react-icons/gr';
import { HiGlobe } from 'react-icons/hi';
import { IoPlanet } from 'react-icons/io5';
import { Footer, NavbarBottom, PositionBar, Top } from '../components';
import { AboutTest, Cep, Cnpj, Education, Experience, Explore, Feedback, Hero, Insights, Languages, Me, Objectives, Projects, Services, World } from '../sections';

const Page = () => {
  const [src, setSrc] = useState('https://www.shadertoy.com/embed/4t3BWl?gui=true&t=10&paused=false&muted=true&autoplay=1');
  function alterarEnd(endereco) {
    setSrc(endereco);
  }

  return (
    <>
      <iframe
        title="Background"
        className="w-full z-10 fixed min-h-screen"
        src={src}
      />
      <div className="fixed z-50 right-2 gap-x-10 flex top-1">
        <div className="flex text-md items-center rounded-full font-mono">
          <span className="font-bold text-white">Mudar tema:</span>
          <div className="flex ml-2 gap-x-5">
            <button type="button" className="rounded-full bg-green-500 hover:bg-green-800 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/4t3BWl?gui=true&t=10&paused=false&muted=true&autoplay=1')}>
              <GrCodeSandbox />
            </button>
            <button type="button" className="rounded-full bg-red-500 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/XsyGWV?gui=true&t=10&paused=false&muted=true&autoplay=2')}>
              <HiGlobe />
            </button>
            <button type="button" className="rounded-full bg-green-700 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/4ts3z2?gui=true&t=10&paused=false&muted=true&autoplay=2')}>
              <IoPlanet />
            </button>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div className="absolute z-40">
          <Top />
          <PositionBar />
          <NavbarBottom />
        </div>
        <div className="overflow-hidden relative max-w-screen">
          <Hero />
          <div className="grid bg-[rgba(0,0,0,0.8)] z-0 pointer-events-none">
            <AboutTest />
          </div>
        </div>
        <div className="relative">
          <div className="relative z-20">
            <Me />
            <Experience />
          </div>
          <Languages />
          <div className="relative glassmorphism-2 z-20">
            <Education />
            <Objectives />
            <Services />
            <Projects />
            <Explore />
          </div>
          <div className="glassmorphism-2 relative z-20">
            <Cnpj />
            <Cep />
            <World />
            <Insights />
            <Feedback />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
