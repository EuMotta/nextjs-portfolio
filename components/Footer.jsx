'use client';

import Image from 'next/image';
import Link from 'next/link';
import rocket from '../public/rocket.svg';

const Footer = () => (
  <footer className="glassmorphism-2 max-w-screen-xl mx-auto dark:bg-gray-900">
    <div className="grid grid-cols-5 w-full h-full gap-8 py-5 px-5 md:grid-cols-5 ml-10">
      <div className="col-span-3">
        <div className="shadow-slate-900 shadow-md glassmorphism rounded-xl p-5 text-white text-sm font-mono">
          <h2 className="mb-6 text-sm font-semibold text-white">
            About Me
          </h2>
          Sou um programador dedicado e focado em meus objetivos, sempre
          preparado para novos desafios e acima de tudo, me divertir na
          programação. Com uma formação sólida e experiência em diversas
          linguagens de programação, estou sempre pronto para atender às
          necessidades de meus clientes de maneira eficiente e eficaz. Se você
          está procurando por um profissional confiável e qualificado, não
          hesite em entrar em contato.
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="grid justify-center text-center">
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                Redes sociais
              </h2>
              <ul className="text-gray-100">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    GitHub
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    LinkedIn
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="mb-2 text-xl text-center font-semibold text-gray-100">
              Decole com suas idéias!
            </h2>
            <div className="flex justify-center">
              <div>
                <Image
                  src={rocket}
                  width={160}
                  height={160}
                  alt=""
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
