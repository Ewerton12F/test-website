import React from 'react';

import { IconAward, IconCertificate2, IconSchool } from '@tabler/icons-react';

export default function Characteristics() {
  return (
    <section
      className="
                mx-auto grid grid-cols-1 gap-5 px-4 pb-16 transition-all 
                duration-300 sm:px-6 md:grid-cols-3 md:pb-20 md:pt-3 
                lg:max-w-7xl lg:py-36 xl:py-28
      "
    >
      <div className="bg-white shadow-md">
        <div
          className="
                    flex flex-col gap-4 px-5 py-6 sm:flex-row sm:px-6 
                    md:flex-col xl:flex-row xl:gap-6
          "
        >
          <div>
            <IconSchool
              className="bg-primary p-2"
              size={60}
              strokeWidth={0.5}
              color={'#fff'}
            />
          </div>
          <div>
            <h2 className="mb-2 font-serif text-[26px] leading-8 text-black">
              16 anos de pesquisa em psicanálise
            </h2>
            <p className="text-grayblue">
              Iniciou sua formação em psicanálise em 2007
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div
          className="
                    flex flex-col gap-4 px-5 py-6 sm:flex-row sm:px-6 
                    md:flex-col xl:flex-row xl:gap-6
          "
        >
          <div>
            <IconAward
              className="bg-primary p-2"
              size={60}
              strokeWidth={0.5}
              color={'#fff'}
            />
          </div>
          <div>
            <h2 className="mb-2 font-serif text-[26px] leading-8 text-black">
              12 anos de experiência clínica
            </h2>
            <p className="text-grayblue">Atua como psicanalista desde 2011</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div
          className="
                    flex flex-col gap-4 px-5 py-6 sm:flex-row sm:px-6 
                    md:flex-col xl:flex-row xl:gap-6
          "
        >
          <div>
            <IconCertificate2
              className="bg-primary p-2"
              size={60}
              strokeWidth={0.5}
              color={'#fff'}
            />
          </div>
          <div>
            <h2 className="mb-2 font-serif text-[26px] leading-8 text-black">
              Alta qualificação
            </h2>
            <p className="text-grayblue">
              Estudou psicanálise em duas graduações, no mestrado e no doutorado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
