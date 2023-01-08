'use client';

import Image from 'next/image';
import styles from '../../../../styles';
import Line1 from '../../../../public/home1/line 1.svg';
import { EducationPortfolioList } from '../constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const EducationPortfolio = () => (
  <section className={`${styles.paddings}`}>
    <div className="education-content">
      <div className="col-span-1">
        <div className="education-line">
          <Image src={Line1} />
        </div>
      </div>
      <div className="education-cards">
        {EducationPortfolioList.map((education) => (
          <div
            key={education.title}
            className="education-card glassmorphism-3"
          >
            <div className="col-span-1 p-2">
              <div className="shadow-sm flex justify-center items-center rounded-lg px-10 ">
                <Image
                  src={education.image}
                  width={200}
                  height={200}
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
        ))}
      </div>
    </div>
  </section>
);

export default EducationPortfolio;
