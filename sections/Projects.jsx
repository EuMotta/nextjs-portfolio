'use client';

import Image from 'next/image';
import { TypingText } from '../components';
import styles from '../styles';
import { projects } from '../constants';

const Projects = () => (
  <section className={`${styles.paddings} z-10`}>
    <div>
      <TypingText
        title="Projetos Desenvolvidos"
        textStyles="text-center text-secondary-white font-bold p-10 mb-24 text-3xl"
      />
      <div className="grid gap-5 grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="col-span-1">
            <div className="bg-slate-800 hover:-translate-y-3 transition-all flex flex-col justify-center rounded-xl shadow-lg shadow-slate-900 p-5">
              <div className="rounded-xl shadow-md  shadow-black overflow-hidden">
                <Image
                  src={project.imgUrl}
                  width={800}
                  height={600}
                  alt="Projetos desenvolvidos"
                  className=" rounded-xl hover:scale-105 transition-all"
                />
              </div>
              <div className="text-center ">
                <div className="text-xl py-2 text-secondary-white">
                  {project.title}
                </div>
                <div className="text-white font-mono h-28 overflow-scroll">
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
