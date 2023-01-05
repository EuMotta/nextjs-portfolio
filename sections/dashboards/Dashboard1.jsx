'use client';

import { motion } from 'framer-motion';
import {
  Dashboard1,
  Dashboard2,
  Dashboard3,
  Dashboard4,
  Dashboard5,
} from '../../components/Graphics/Dashboard';
import styles from '../../styles';
import { staggerContainer } from '../../utils/motion';

const RH = () => (
  <section className={`${styles.paddings}  z-10 container`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-2 gap-5"
    >
      <div className="shadow-slate-900 bg-slate-100  shadow-sm rounded-xl p-5 flex flex-col justify-center items-center">
        <p>Contratações e desligamentos</p>
        <Dashboard1 />
      </div>
      <div className="">
        <div className="shadow-slate-900 bg-slate-100 shadow-sm rounded-xl p-5 flex flex-col justify-center items-center">
          <p>Despesa e lucro mensal</p>
          <Dashboard2 />
        </div>
      </div>
      <div className="shadow-slate-900 bg-slate-100 shadow-sm rounded-xl p-5 flex flex-col justify-center items-center">
        <p>Massa Salarial</p>
        <Dashboard4 />
      </div>
      <div className="grid grid-cols-2 gap-x-5">
        <div className="shadow-slate-900 bg-slate-100 shadow-sm rounded-xl p-5 flex flex-col justify-center items-center">
          <p>Treinamentos e absenteismo</p>
          <Dashboard3 />
        </div>
        <div className="shadow-slate-900 bg-slate-100 shadow-sm rounded-xl p-5 flex flex-col justify-center items-center">
          <p>Quantidade de funcionários</p>
          <Dashboard5 />
        </div>
      </div>
    </motion.div>
  </section>
);

export default RH;
