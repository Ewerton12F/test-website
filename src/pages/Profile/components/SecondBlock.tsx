import React from 'react';

export default function SecondBlock() {
  return (
    <section id="profile">
      <div
        className="
                  flex flex-col gap-12 py-20 sm:gap-16 sm:py-24 md:py-32 
                  lg:gap-4 lg:py-36
        "
      >
        <div
          className="
                    mx-auto w-full px-4 transition-all duration-300 sm:px-6
                    md:text-center lg:grid lg:max-w-7xl lg:grid-cols-2 
                    lg:gap-12 lg:px-6 lg:text-left 
          "
        >
          <div className="mx-auto max-w-3xl">
            <h2
              className="
                      mb-2 font-dm font-bold uppercase tracking-widest 
                      text-secondarydark 
            "
            >
              Minha História
            </h2>
            <h3
              className="
                      mb-4 font-serif text-[22px] leading-8 text-graybluedark 
                      transition-all duration-300 sm:text-[26px] md:text-[32px]
                      lg:text-[38px] lg:leading-[2.75rem]
                      "
            >
              Um Psicanalista dedicado com a missão de ajudar
            </h3>
            <p className="font-jost text-lg leading-8 text-grayblue">
              Se graduou em Psicologia pela Universidade Potiguar em 2012 (com a
              monografia “Freud e a Razão Moderna”) e em Filosofia pela
              Universidade Federal do Rio Grande do Norte em 2013 (com a
              monografia “A emersão do sujeito ficcional”). Obteve título de
              Mestre em Filosofia em 2014 (com a dissertação “Para uma
              metapsicologia freudiana da experiência estética”) e de Doutor em
              Filosofia em 2022 (com a tese “O jogo de Foucault: da verdade do
              desejo à coragem da verdade”) pela Universidade Federal do Rio
              Grande.
            </p>
          </div>
          <div
            className="
                      mt-10 flex h-96 w-full justify-start bg-secondary 
                      md:mt-10 md:justify-center lg:order-first lg:mt-0
            "
          ></div>
        </div>
        <div
          className="
                  mx-auto w-full px-4 transition-all duration-300 sm:px-6 
                  md:text-center lg:grid lg:max-w-7xl 
                  lg:grid-cols-2 lg:items-end lg:gap-12 lg:px-6 lg:text-left
        "
        >
          <div className="order-first mx-auto max-w-3xl">
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
              Formação sólida e 12 anos de experiência clínica
            </h3>
            <p className="font-jost text-lg leading-8 text-grayblue">
              Ademais, se especializou em Avaliação Psicológica e em
              Neuropsicologia em 2023 pela Facuminas (com os respectivos
              artigos: “Uma análise crítica da prática da avaliação psicológica
              no Brasil” e “Uma revisão dos critérios psicodiagnósticos do
              Transtorno de Déficit de Atenção e Hiperatividade”). Sua prática
              clínica como psicólogo consiste no planejamento e execução de
              avaliações psicológicas e neuropsicológicas de baixa, média e alta
              complexidade de adolescentes e adultos. Como psicanalista, conduz
              análises pessoais e diversas psicoterapias de orientação
              psicanalítica, tais como acompanhamento individual, de casal e de
              grupos. Como filósofo, já se dedicou aos seguintes campos:
              história da filosofia, das ideias e dos sistemas de pensamento,
              epistemologia, filosofia da ciência, filosofia da psicanálise,
              estética filosófica, filosofia da literatura, filosofia antiga,
              filosofia contemporânea, dentre outros.
            </p>
          </div>
          <div
            className="
                      order-last mt-10 flex h-96 w-full justify-start 
                      bg-secondary md:mt-10 md:justify-center lg:order-first
                      lg:mb-20 lg:mt-0
            "
          ></div>
        </div>
      </div>
    </section>
  );
}
