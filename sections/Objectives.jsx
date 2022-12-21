'use client';

import Link from 'next/link';
import {
  IoCheckmarkCircleSharp,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import styles from '../styles';

const links = [
  { label: 'Aperfeiçoamento', href: '/', icon: IoCheckmarkCircleSharp },
  { label: 'Impacto', href: '/about', icon: IoCheckmarkCircleSharp },
  { label: 'Carreira', href: '/contact', icon: IoCheckmarkCircleOutline },
  { label: 'Colaboração', href: '/contact', icon: IoCheckmarkCircleSharp },
  { label: 'Ensino', href: '/contact', icon: IoCheckmarkCircleSharp },
];
const Objectives = () => (
  <section className={`${styles.yPaddings} sm:16 sm:pl-6 `}>
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <div className="flex flex-col items-center text-white">
          <div className="bg-slate-800 rounded-xl  w-96">
            <div className=" p-5">
              <h1>Meus Objetivos</h1>
            </div>
            <nav>
              {links.map((link, index) => (
                <div className="flex flex-col my-5">
                  <Link key={link.label} href={link.href}>
                    <div className="border-b-2 border-slate-900">
                      <div className="mx-5 flex items-center justify-between">
                        <div className="">{`${index + 1}`}.</div>
                        {` ${link.label}`}
                        <div className={`${link.icon === IoCheckmarkCircleSharp ? 'text-green-600' : 'text-red-600'} text-3xl`}>
                          <link.icon />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Objectives;
