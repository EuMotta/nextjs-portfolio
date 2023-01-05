'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';
import SearchAPI from '../../public/aboutPage/SearchAPISvg.svg';
import SearchAPI2 from '../../public/aboutPage/SearchAPISvg2.svg';
import { APIList } from './constants';

function ImpedirArrastar(event) {
  event.preventDefault();
}
const SearchAPIs = () => (
  <section className={`${styles.paddings}  z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2"
    >
      <div className="col-span-1 my-10">
        <motion.div
          animate={{
            scale: [1.3, 1.3, 1.31, 1.3, 1.3],
            rotate: [0.1, -0.1, 0.1, -0.1, 0.1],
            borderRadius: ['50%', '48%', '50%', '48%', '50%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
          variants={fadeIn('left', 'tween', 0, 1)}
          className="flex justify-center"
          drag
          dragConstraints={{
            top: -0.2,
            left: -0.2,
            right: 0.2,
            bottom: 0.2,
          }}
        >
          <Image
            src={SearchAPI}
            width={400}
            height={400}
            unoptimized
            alt="NEXTjs"
            onDragStart={ImpedirArrastar}
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('right', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="px-5">
          <h1 className="font-bold mb-5 font-mono text-2xl">
            APIs de Consulta de Dados
          </h1>
          <h3 className="font-semibold mb-5 font-mono text-xl">Resumo</h3>
          <p className="text-sm text-justify font-mono">
            &nbsp;APIs de consulta são interfaces de programação de aplicações
            que permitem que você acesse e utilizar dados e funcionalidades de
            outros sistemas de maneira automatizada. Elas são muito úteis quando
            você precisa integrar sua aplicação com outros serviços ou recursos
            externos, mas não quer ou não pode lidar diretamente com os detalhes
            técnicos dessa integração. <br />
            &nbsp;Exemplos de APIs de consulta incluem APIs de CEP (código de
            endereçamento postal), que permitem que você pesquise o endereço de
            um determinado CEP; APIs de CNPJ (cadastro nacional de pessoas
            jurídicas), que permitem que você pesquise informações sobre
            empresas com base em seu número de CNPJ; e APIs de clima, que
            permitem que você obtenha informações sobre o tempo em uma
            determinada localidade. técnicos dessa integração. <br />
            &nbsp;Para utilizar uma API de consulta, você precisa enviar uma
            solicitação HTTP (como uma requisição GET) para o endereço da API,
            incluindo os parâmetros necessários para especificar o que você quer
            pesquisar. A API então retorna os resultados da pesquisa em formato
            de dados, como JSON ou XML, que você pode processar e exibir em sua
            aplicação. Algumas APIs de consulta podem exigir que você se
            autentique ou pague por seu uso, dependendo da política de uso da
            API.
          </p>
        </div>
      </motion.div>
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="grid grid-cols-2 mt-10"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0, 1)}
        className="col-span-1"
      >
        <div className="px-5">
          <div>
            {APIList.map((API) => (
              <div
                className="mb-1 mt-5"
                key={API.title}
              >
                <h3 className="font-semibold font-mono text-xl">{API.title}</h3>
                <p className="text-sm text-justify font-mono">&nbsp;{API.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="col-span-1 my-10">
        <motion.div
          animate={{
            scale: [1.3, 1.3, 1.31, 1.3, 1.3],
            rotate: [0.1, -0.1, 0.1, -0.1, 0.1],
            borderRadius: ['50%', '48%', '50%', '48%', '50%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
          variants={fadeIn('left', 'tween', 0, 1)}
          className="flex justify-center"
          drag
          dragConstraints={{
            top: -0.2,
            left: -0.2,
            right: 0.2,
            bottom: 0.2,
          }}
        >
          <Image
            src={SearchAPI2}
            width={400}
            height={400}
            unoptimized
            alt="NEXTjs"
            onDragStart={ImpedirArrastar}
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default SearchAPIs;
