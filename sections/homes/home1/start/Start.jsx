'use client';

import { useState } from 'react';
import styles from '../../../../styles';

const HeroHome1 = () => {
  const [bgClass, setBgClass] = useState('bg-start');
  const [text, setText] = useState();

  const handleMouseEnter = () => {
    setBgClass(' bg-start2');
    setText('text-white');
  };

  const handleMouseLeave = () => {
    setBgClass('bg-start');
    setText('text-black');
  };

  return (
    <section className={`${bgClass} transition`}>
      <div className="container mx-auto">
        <div className={`${styles.centerXYContent} h-[80vh] justify-center items-center flex flex-col gap-y-5`}>
          <h1 className={`${text}`}>Entre e descubra quem eu sou</h1>
          <button type="button" className="start-button" href="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Explore meu mundo!</button>
        </div>
      </div>
    </section>
  );
};

export default HeroHome1;
