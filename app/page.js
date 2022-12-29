'use client';

import { useState } from 'react';
import { BsArrowsMove, BsSun } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { GrCodeSandbox } from 'react-icons/gr';
import { HiGlobe } from 'react-icons/hi';
import { IoPlanet } from 'react-icons/io5';
import { MdGames } from 'react-icons/md';
import { Footer, NavbarBottom, Top } from '../components';
import { AboutTest, Education, Experience, Explore, Feedback, Hero, Languages, Me, Objectives, Projects, Services, World } from '../sections';

const Page = () => {
  const [src, setSrc] = useState('https://www.shadertoy.com/embed/4t3BWl?gui=true&t=10&paused=false&muted=false&autoplay=1');
  function alterarEnd(endereco) {
    setSrc(endereco);
  }

  return (
    <>
      <iframe
        title="Background"
        className="w-full z-10 fixed min-h-screen "
        src={src}
      />
      <div className="fixed z-50 right-2 gap-x-10 flex top-1">
        <div className="flex text-md items-center rounded-full font-mono">
          <span className="font-bold text-white">Mudar tema:</span>
          <div className="flex ml-2 gap-x-5">
            <button type="button" className="rounded-full bg-green-500 hover:bg-green-800 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/4t3BWl?gui=true&t=10&paused=false&muted=false&autoplay=1')}>
              <GrCodeSandbox />
            </button>
            <button type="button" className="rounded-full bg-red-500 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/XsyGWV?gui=true&t=10&paused=false&muted=false&autoplay=2')}>
              <HiGlobe />
            </button>
            <button type="button" className="rounded-full bg-green-700 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/4ts3z2?gui=true&t=10&paused=false&muted=false&autoplay=2')}>
              <IoPlanet />
            </button>
            <button type="button" className="rounded-full bg-yellow-700 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/wt3XDj?gui=true&t=10&paused=false&muted=false&autoplay=2')}>
              <BsSun />
            </button>
            <button type="button" className="rounded-full bg-red-700 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/Xs2fWD?gui=true&t=10&paused=false&muted=false')}>
              <FaGamepad />
            </button>
            <button type="button" className="rounded-full bg-violet-700 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/wtS3W3?gui=true&t=10&paused=false&muted=false')}>
              <MdGames />
            </button>
          </div>
          {src === 'https://www.shadertoy.com/embed/wt3XDj?gui=true&t=10&paused=false&muted=false&autoplay=2' && (
          <div className="fixed text-white glassmorphism-2 right-1 p-2 rounded-xl top-10">
            <div className="text-sm">Clique na tela e aprte espaço para começar</div>
            <div className="font-mono">Atalhos:</div>
            <div className="text-sm">
              <div>
                <span className="font-bold">Espaço: </span>Câmera livre
              </div>
              <div>
                <span className="font-bold">Andar: </span>WASD + Clique do mouse
              </div>
              <div>
                <span className="font-bold">Correr: </span>Shift
              </div>
            </div>
          </div>
          )}
          {src === 'https://www.shadertoy.com/embed/wtS3W3?gui=true&t=10&paused=false&muted=false' && (
          <div className="fixed text-white glassmorphism-2 right-1 p-2 rounded-xl top-10">
            <div className="text-sm">Clique na tela e aprte espaço para começar</div>
            <div className="font-mono">Atalhos:</div>
            <div className="text-sm">
              <div>
                <span className="font-bold">Começar: </span> ← → ou espaço
              </div>
              <div>
                <span className="font-bold">Andar: </span> ← →
              </div>
            </div>
          </div>
          )}
          {src === 'https://www.shadertoy.com/embed/Xs2fWD?gui=true&t=10&paused=false&muted=false' && (
          <div className="fixed text-white glassmorphism-2 right-1 p-2 rounded-xl top-10">
            <div className="text-sm">Clique na tela e aprte espaço para começar</div>
            <div className="font-mono">Atalhos:</div>
            <div className="text-sm">
              <div className="flex items-center gap-x-3">Andar: <BsArrowsMove /></div>
              <div>
                Ataque andando em direção aos inimigos
              </div>
              <div>
                Ande até uma parede para pular a vez
              </div>
              <div>
                Sincronize o movimento para atacar primeiro
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
      <div className=" overflow-hidden">
        <div className="absolute z-40">
          <Top />
          <NavbarBottom />
        </div>
        <div className="overflow-hidden relative max-w-screen">
          <Hero />
          <div className="pointer-events-none z-0 mb-96">
            <World />
          </div>
          <div className="grid bg-[rgba(0,0,0,0.8)] z-0">
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
            <Feedback />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
