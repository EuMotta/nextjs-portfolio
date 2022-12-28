'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { TypingText } from '../../components';
import { Fipe } from './constants';
import styles from '../../styles';

const TabelaFipe = () => {
  const { handleSubmit, register, setValue } = useForm();
  const [campo, setCampo] = useState('');

  const checkCEP = () => {
    fetch(`https://brasilapi.com.br/api/registrobr/v1/${campo}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue('valor', data.valor);
        setValue('neighborhood', data.neighborhood);
        setValue('city', data.city);
        setValue('state', data.state);
        setValue('service', data.service);
      });
  };

  return (
    <section id="cep" className={`${styles.paddings} z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-screen-xl mx-auto"
      >
        <div className="grid w-full h-full gap-5">
          <div className=" rounded-lg p-10">
            <span className="text-center my-2">
              <TypingText
                title="Pesquisar CEP"
                textStyles="sm:text-center sm:text-xl md:text-2xl md:text-center lg:text-3xl text-white font-bold my-10 "
              />
            </span>
            <form className=" rounded-xl flex justify-center text-xl p-5">
              <div className="rounded-xl flex items-center">
                <input
                  type="text"
                  id="cep"
                  onChange={(e) => setCampo(e.target.value)}
                  className="rounded-xl px-2"
                />
                <button className="text-white px-1" type="button" onClick={checkCEP}>
                  <FiSearch className="text-3xl " />
                </button>
              </div>
            </form>
            <div>
              <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="mt-4 pb-5 grid gap-y-3  rounded-xl  p-2">
                  <div className="text-center text-md mb-2 text-white ">
                    Informações abaixo
                  </div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {Fipe.fipe01.map((cep) => (
                      <motion.div
                        key={cep.id}
                        variants={fadeIn(`${cep.fadeIn}`, 'tween', 0, 1)}
                        className="text-md  grid gap-y-3 col-span-1 w-full p-5  rounded-xl text-center shadow glassmorphism-2  shadow-slate-600 "
                      >
                        <label
                          className="text-md text-white font-mono"
                          htmlFor="razao_social"
                        >
                          {cep.name}
                        </label>
                        <input
                          {...register(cep.type)}
                          placeholder="Não encontrado"
                          readOnly
                          className="rounded-full whitespace-normal overflow-auto py-[8px] h-auto font-bold px-5 text-sm  block text-center text-slate-900 bg-slate-50 "
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TabelaFipe;
