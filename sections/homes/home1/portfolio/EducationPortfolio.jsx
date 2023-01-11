'use client';

import Image from 'next/image';
import styles from '../../../../styles';
import { EducationPortfolioList } from '../constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const EducationPortfolio = () => (
  <section className={`${styles.paddings}`}>
    <div className="education-content">
      {/*       <div className="col-span-1">
        <div className="education-line flex text-white text-4xl flex-col gap-y-48">
          <div className=" font-mono">01</div>
          <div className="font-mono">02</div>
          <div className="font-mono">03</div>
        </div>
      </div> */}
      <div className="education-cards">
        {EducationPortfolioList.map((education) => (
          <div key={education.title} className="grid grid-cols-6">
            <div className="col-span-1 flex justify-center items-center text-white font-mono text-4xl">
              {education.number}
            </div>
            <div className="education-card glassmorphism-3 col-span-5">
              <div className="col-span-1 p-2">
                <div className="shadow-sm flex justify-center items-center rounded-lg px-10 ">
                  <Image
                    src={education.image}
                    width={500}
                    height={500}
                    alt="education"
                    onDragStart={ImpedirArrastar}
                  />
                </div>
              </div>
              <div className="col-span-4 text-white p-2 flex flex-col gap-y-2">
                <h3>{education.title}</h3>
                <div className=" ">
                  <p className="text-sm">{education.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationPortfolio;
