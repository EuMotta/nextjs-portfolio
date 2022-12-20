'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import headset from '../public/headset.svg';

const ExploreCard = ({ id, title, imgUrl, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } ${
      styles.flexCenter
    } min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
      width={50}
      height={50}
      unoptimized
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] z-0 text-white absolute lg:bottom-20 lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] overflow-hidden rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image
            src={headset}
            width={10}
            height={10}
            alt="headset"
            unoptimized
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <h2 className="mt-[24px] font-bold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          Clique para visualizar
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
