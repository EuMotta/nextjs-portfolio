'use client';

/* import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsFillCircleFill } from 'react-icons/bs';
import { GrFacebookOption, GrInstagram, GrLinkedin, GrLinkedinOption } from 'react-icons/gr';
import eu from '../../../public/home1/Hero2.svg';
import Me from '../../../public/home1/Me1.svg';
import { staggerContainer } from '../../../utils/motion'; */

/* function ImpedirArrastar(event) {
  event.preventDefault();
} */
const HeroHome1 = () => (
  <section className="body-font relative">
    {/* <div className="grid grid-cols-2 py-2">
    <motion.div className="cursor-pointer">
          </motion.div>
      <div className="col-span-1">
        <div className="p-5 bg-blue-600">
          <div className="flex gap-x-5 text-white">
            <BsFillCircleFill />
            <BsFillCircleFill />
            <BsFillCircleFill />
          </div>
        </div>
        <div className="bg-blue-200 grid grid-cols-2  p-5 ">
          <div className="py-14">
            <h1 className="font-mono text-4xl">OLÁ MUNDO</h1>
            <div className="bg-black py-[2px] w-[60%]" />
            <div>
              Eu sou
              <div className="text-4xl font-mono">José Antonio Motta</div>
            </div>
            <div className="bg-black mt-5 py-[3px] w-[60%]" />
            <div className="flex my-3 text-3xl gap-x-4">
              <div className="bg-slate-50 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer p-2">
                <GrFacebookOption />
              </div>
              <div className="bg-slate-50 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer p-2">
                <GrInstagram />
              </div>
              <div className="bg-slate-50 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer p-2">
                <GrLinkedinOption />
              </div>
            </div>
          </div>
          <div className="p-2">
            <Image
              src={Me}
              alt="Eu"
              width={250}
              height={250}
              className="rounded-xl"
              unoptimized
              onDragStart={ImpedirArrastar}
            />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex justify-center md:flex md:justify-center"
        >
        </motion.div>
      </div>
    </div> */}
  </section>
);

export default HeroHome1;
