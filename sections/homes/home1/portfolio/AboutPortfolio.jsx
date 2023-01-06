'use client';

import Image from 'next/image';
import styles from '../../../../styles';
import { aboutPortfolio } from '../constants';

/* function ImpedirArrastar(event) {
  event.preventDefault();
} */
const AboutPortfolio = () => (
  <section className={`${styles.xPaddings}`}>
    <div className="grid grid-cols-3 gap-10">
      {aboutPortfolio.map((port) => (
        <div key={port.title} className="col-span-1">
          <div className="glassmorphism !bg-slate-100 aboutportfolio-card">
            <div
              className={`${styles.centerXYContent} p-2 text-white h-44 aboutportfolio-card-bg`}
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
                <h5>{port.subtitle}</h5>
                <div className="overflow-scroll">
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
