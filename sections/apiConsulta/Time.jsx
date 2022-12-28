'use client';

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { RiTempColdFill } from 'react-icons/ri';
import { BsGraphDown, BsGraphUp, BsWind } from 'react-icons/bs';
import { IoTime, IoWater } from 'react-icons/io5';
import { staggerContainer } from '../../utils/motion';
import { TypingText } from '../../components';
import styles from '../../styles';

const Time = () => {
  const [campo, setCampo] = useState('');
  const [results, setResults] = useState([]);
  const fetchWeatherData = async () => {
    const res = await fetch(`https://apiprevmet3.inmet.gov.br/previsao/${campo}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    const data = await res.json();
    const days = new Map();
    Object.keys(data).forEach((codigo) => {
      Object.keys(data[codigo]).forEach((day) => {
        if (!days.has(day)) {
          days.set(day, new Map());
        }
        Object.keys(data[codigo][day]).forEach((period) => {
          if (!days.get(day).has(period)) {
            days.get(day).set(period, new Map());
          }
          days.get(day).get(period).set(codigo, {
            dia_semana: data[codigo][day][period].dia_semana,
            resumo: data[codigo][day][period].resumo,
            temp_max: data[codigo][day][period].temp_max,
            temp_min: data[codigo][day][period].temp_min,
            temp_max_tende: data[codigo][day][period].temp_max_tende,
            int_vento: data[codigo][day][period].int_vento,
            umidade_max: data[codigo][day][period].umidade_max,
            umidade_min: data[codigo][day][period].umidade_min,
            hora: data[codigo][day][period].hora,
          });
        });
      });
    });
    setResults(days);
  };
  const dias = Array.from(results).slice(0, 2);
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
                title="Pesquisar Clima"
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
                <button
                  className="text-white px-1"
                  type="button"
                  onClick={fetchWeatherData}
                >
                  <FiSearch className="text-3xl " />
                </button>
              </div>
            </form>
            <div className="">
              <ul className="grid grid-cols-2 p-2 rounded-xl text-white gap-5">
                {dias.map(([dia, periodos]) => (
                  <div key={dia} className="col-span-1 border p-2 rounded-xl border-red-300">
                    <h2 className="text-xl text-center text-slate-900 font-bold">{dia}</h2>
                    {Array.from(periodos).map(([periodo, codigos]) => (
                      <div className="">
                        <div
                          key={periodo}
                          className=" glassmorphism-2 rounded-xl p-2 my-2"
                        >
                          <div className="font-mono text-2xl text-center">{periodo.charAt(0).toUpperCase() + periodo.slice(1)}</div>
                          {Array.from(codigos).map(([codigo, informacoes]) => (
                            <div key={codigo} className="glassmorphism p-2">
                              Resumo:
                              <div className="glassmorphism-2 p-2">
                                <p>{informacoes.resumo}</p>
                              </div>
                              <div className="flex flex-col gap-y-2">
                                <div className="grid grid-cols-2">
                                  <div className="p-2">
                                    Temperatura
                                    <div className="flex items-center gap-x-2">
                                      <RiTempColdFill className="!text-red-500 text-xl" />{' '}
                                      <p>Max: {informacoes.temp_max}</p>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                      <RiTempColdFill className="!text-blue-500 text-xl" />
                                      <p>Min: {informacoes.temp_min}</p>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                      {informacoes.temp_max_tende
                                        === 'Em elevação'
                                      || informacoes.temp_max_tende
                                        === 'Ligeira Elevação' ? (
                                          <>
                                            <BsGraphUp className="text-red-500 text-xl" />
                                            <p>{informacoes.temp_max_tende}</p>
                                          </>
                                        ) : (
                                          <>
                                            <BsGraphDown className="!text-blue-500 text-xl" />
                                            <p>{informacoes.temp_max_tende}</p>
                                          </>
                                        )}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="p-2">
                                      Umidade
                                      <div className="flex items-center">
                                        <IoWater className="text-blue-500" /> <p>Max:  {informacoes.umidade_max}</p>
                                      </div>
                                      <div className="flex items-center">
                                        <IoWater className="text-red-500" /> <p> Min:  {informacoes.umidade_min}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-between p-2">
                                  <div className="flex items-center gap-x-2 ">
                                    <BsWind className="text-xl" /> <p>{informacoes.int_vento}</p>
                                  </div>
                                  <div className="flex items-center gap-x-2 ">
                                    <IoTime /> Hora: <p>{informacoes.hora}h</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Time;
