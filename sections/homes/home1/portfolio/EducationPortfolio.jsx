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
    <div className="grid grid-cols-6 gap-10">
      <div className="col-span-1">
        <div className="flex mt-14 justify-center items-center">
          <Image src={Line1} />
        </div>
      </div>
      <div className="col-span-5 flex flex-col gap-y-[6rem]">
        {EducationPortfolioList.map((education) => (
          <div
            key={education.title}
            className=" grid grid-cols-5 ring-1 glassmorphism-3  ring-violet-400 hover:shadow-lg hover:shadow-violet-400 transition-all rounded-lg"
          >
            <div className="col-span-1 p-2">
              <div className="shadow-sm rounded-lg pr-10 ">
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
