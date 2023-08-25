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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              quidem assumenda! Quod illo ab voluptatem magnam. Quisquam
              dignissimos ab culpa excepturi cupiditate nobis. Molestiae,
              mollitia laboriosam dignissimos dolore tenetur quibusdam!
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
              Um Psicanalista dedicado com a missão de ajudar
            </h3>
            <p className="font-jost text-lg leading-8 text-grayblue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              quidem assumenda! Quod illo ab voluptatem magnam. Quisquam
              dignissimos ab culpa excepturi cupiditate nobis. Molestiae,
              mollitia laboriosam dignissimos dolore tenetur quibusdam!
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
