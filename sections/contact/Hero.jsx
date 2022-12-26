'use client';

import { contactForm } from './constants';

const WhatsNew = () => (
  <section className="text-white body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Contact Us
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="grid grid-cols-2">
          {contactForm.map((item) => (
            <div
              key={item.id}
              className={`p-2 ${
                item.type === 'textarea' ? 'col-span-2' : 'w-full'
              }`}
            >
              <div className="relative">
                <label
                  htmlFor={item.name}
                  className="leading-7 text-sm text-white"
                >
                  {item.name}
                </label>
                {item.type === 'textarea' ? (
                  <textarea
                    id={item.id}
                    name={item.name}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                ) : (
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.name}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <button type="button">Enviar</button>
      </div>
    </div>
  </section>
);

export default WhatsNew;
