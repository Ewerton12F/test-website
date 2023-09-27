import Image from 'next/image';

import About_Button from './About_button';

export default function Profile() {
  return (
    <section id="profile">
      <div
        className="
                  mx-auto px-4 py-16 transition-all 
                  duration-300 
                  sm:px-6 md:max-w-[620px] md:py-32 md:text-center
                  lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-center lg:gap-12
                  lg:px-6 lg:py-44 lg:text-left
        "
      >
        <div className="">
          <h2
            className="
                      mb-2 font-dm font-bold uppercase tracking-widest 
                      text-secondarydark 
            "
          >
            Sobre mim
          </h2>
          <h3
            className="
                      mb-4 font-serif text-[22px] leading-8 text-graybluedark 
                      transition-all duration-300 sm:text-[26px] md:text-[32px]
                      lg:text-[38px] lg:leading-[2.75rem]
                      "
          >
            Sou fascinado por singularidades
          </h3>
          <p className="font-jost text-lg leading-8 text-grayblue">
            Onde situar a psicanálise senão entre as ciências, as filosofias e
            as artes sem que, não obstante, com elas confundi-la?
          </p>
          <About_Button />
        </div>
        <div
          className="
                    mt-10 flex justify-start md:mt-16 md:justify-center 
                    lg:order-first lg:mt-0
          "
        >
          <div className="max-w-[600px]">
            <Image
              className="shadow-lg"
              src="/3_avaliacao_psicologica.jpeg"
              width={7000}
              height={7000}
              alt="Dr. Róbson Batista - Psicólogo | Psicanalista"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
