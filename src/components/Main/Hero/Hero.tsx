import Image from 'next/image';

import Contact from '../Contact/Contact';

export default function Hero() {
  return (
    <header
      className="
                mb-14 mt-10 px-4 text-left transition-all duration-300 
                sm:mt-14 sm:px-6 md:mt-20 md:text-center 
                lg:mx-auto lg:mb-8 lg:flex lg:max-w-7xl lg:items-center 
                lg:gap-8 lg:pt-28 lg:text-left
      "
    >
      <div>
        <h1
          id="hero-title"
          className="
                  font-dm font-bold uppercase tracking-[0.2rem] text-secondary
        "
        >
          Róbson Batista
        </h1>
        <h2
          id="hero-subtitle"
          className="
                  mt-2 font-serif text-[39px] leading-[44px] 
                  sm:mt-3 sm:text-[47px] sm:leading-[50px] md:mx-auto
                  md:max-w-[620px] md:text-[57px] md:leading-[60px] lg:text-[68px]
                  lg:leading-[70px]
        "
        >
          Psicólogo, Psicanalista e Doutor em Filosofia
        </h2>
        <p
          className="
                  mt-4 pb-4 font-jost text-lg leading-8 opacity-90 md:mx-auto
                  md:mt-8 md:max-w-[620px] 
        "
        >
          Autor da dissertação de mestrado “Para uma metapsicologia freudiana da
          experiência estética” (2014) e da tese de doutorado “O jogo de
          Foucault: da verdade do desejo à coragem da verdade” (2022).
        </p>
        <Contact />
      </div>
      <div className="mt-10 flex justify-start md:mt-16 md:justify-center lg:mt-0">
        <div className="max-w-[600px]">
          <Image
            className="shadow-lg"
            src="/profile-photo.jpeg"
            width={7000}
            height={7000}
            alt="Dr. Róbson Batista - Psicólogo & Psicanalista"
          />
        </div>
      </div>
    </header>
  );
}
