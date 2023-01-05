'use client';

import { BiCodeBlock } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';

const AboutHome1 = () => (
  <section className="my-20 container mx-auto">
    <div className="container glassmorphism !bg-[#f1f1fffa] rounded-xl">
      <div className="grid grid-cols-2 gap-x-10 p-5">
        <div className="col-span-1 p-5">
          <div className="flex mb-10">
            <div className="bg-slate-50 text-blue-600 p-2 text-5xl shadow-xl shadow-slate-300 rounded-full">
              <BiCodeBlock />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <h2>UI/UX</h2>
            <p>Iniciante em UI/UX design, apaixonado por criar experiências de usuário intuitivas e atraentes. Busco novos conhecimentos e oportunidades para aprimorar minhas habilidades e contribuir para projetos inovadores. Atenção aos detalhes e colaboração são fundamentais para designs de sucesso, ansioso por fazer parte de uma equipe dinâmica e criativa.</p>
          </div>
        </div>
        <div className="col-span-1 p-5">
          <div className="flex mb-10">
            <div className="bg-slate-50 text-orange-600 p-2 text-5xl shadow-xl shadow-slate-300 rounded-full">
              <CgWebsite />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <h2>Web Developer</h2>
            <p>Web developer iniciante, apaixonado por criar soluções inovadoras para a web. Busco novos conhecimentos e oportunidades para aprimorar minhas habilidades e contribuir para projetos ambiciosos. Dedicação e trabalho duro são fundamentais para o sucesso no desenvolvimento de software, ansioso por fazer parte de uma equipe dinâmica e colaborativa.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHome1;
