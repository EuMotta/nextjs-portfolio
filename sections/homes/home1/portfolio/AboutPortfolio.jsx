'use client';

import Image from 'next/image';
import { TypingText } from '../../../../components';
import styles from '../../../../styles';
import { aboutPortfolio } from '../constants';

/* function ImpedirArrastar(event) {
  event.preventDefault();
} */
const AboutPortfolio = () => (
  <section className={`${styles.xPaddings}`}>
    <TypingText
      title="Sobre Mim"
      textStyles="text-center text-white font-bold p-10 mb-6 text-5xl"
    />
    <div className="grid grid-cols-3 gap-10">
      {aboutPortfolio.map((port) => (
        <div key={port.title} className="col-span-1">
          <div className="glassmorphism !bg-slate-100 aboutportfolio-card">
            <div
              className={`${styles.centerXYContent} p-2 text-white text-center h-44 ${port.cardBg}`}
            >
              {' '}
              <h2>{port.title}</h2>{' '}
            </div>
            <div className="p-2 flex flex-col gap-y-5">
              <div>
                <Image
                  src={port.icon}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-purple-900 p-1  absolute top-[9.5rem] shadow-sm shadow-slate-700 rounded-full"
                />
              </div>
              <div>
                <div className="h-20 overflow-scroll flex  items-center">
                  <h5 className="">{port.subtitle}</h5>
                </div>
                <div className="overflow-scroll h-48">
                  <p className="text-sm ">{port.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutPortfolio;
