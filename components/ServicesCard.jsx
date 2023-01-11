'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ServicesCard = ({
  id,
  title,
  description,
  percentage,
  color,
  imgUrl,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } ${
      styles.flexCenter
    } min-w-[20px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
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
          className={`${styles.flexCenter} my-5 h-[80px] rounded-[24px] text-white font-semibold font-mono mb-[16px]`}
        >
          {description}
        </div>
        <h2 className="mt-[24px] font-bold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <div className="shadow-sm shadow-slate-600 rounded-full">
          <p className="text-center text-white font-bold mt-2">
            {percentage}%
          </p>
          <div
            className="h-2 bg-slate-900 rounded-full relative overflow-hidden"
            style={{ width: `${percentage}%` }}
          >
            <div
              className="h-full absolute inset-0 rounded-full transition-all duration-300 ease-in-out"
              style={{ backgroundColor: `${color}` }}
            />
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

export default ServicesCard;
