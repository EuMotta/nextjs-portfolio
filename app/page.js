'use client';

import { useState } from 'react';
import { GiUfo } from 'react-icons/gi';
import { GrCodeSandbox } from 'react-icons/gr';
import { Footer, NavbarBottom, PositionBar, Top } from '../components';
import { AboutTest, Cep, Cnpj, Education, Experience, Explore, Feedback, GetStarted, Hero, Insights, Languages, Me, Objectives, Projects, Services, WhatsNew, World } from '../sections';

const Page = () => {
  const [src, setSrc] = useState('https://www.shadertoy.com/embed/4t3BWl?gui=true&t=10&paused=false&muted=true&autoplay=1');
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
      <div className="fixed z-50 right-2 gap-x-10 flex top-1">
        <div className="flex text-md items-center rounded-full font-mono">
          <span className="font-bold text-white">Mudar tema:</span>
          <div className="flex ml-2 gap-x-5">
            <button type="button" className="rounded-full bg-green-500 hover:bg-green-800 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/4t3BWl?gui=true&t=10&paused=false&muted=true&autoplay=1')}>
              <GrCodeSandbox />
            </button>
            <button type="button" className="rounded-full bg-violet-500 hover:bg-violet-800 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/XsyGWV?gui=true&t=10&paused=false&muted=true&autoplay=2')}>
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
