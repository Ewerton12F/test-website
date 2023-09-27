import Image from 'next/image';

export default function Hero() {
  return (
    <header
      className="
                mt-12 px-4 text-left transition-all duration-300 
                sm:mt-14 sm:px-6 md:mt-20 md:text-center 
                lg:mx-auto lg:mb-8 lg:max-w-7xl lg:items-center 
                lg:gap-8 lg:pt-28 lg:text-left
      "
    >
      <div>
        <h3
          id="hero-title"
          className="
                  font-dm text-sm font-bold uppercase tracking-[0.2rem] text-secondary
          "
        >
          Psicanálise <span className="opacity-80">-</span>
        </h3>
        <p
          className="
                        font-dm text-sm uppercase leading-tight tracking-widest 
                        opacity-80 transition-all duration-300 sm:text-[16px]
              "
        >
          26 de setembro, 2023
        </p>
        <h2
          id="hero-subtitle"
          className="
                  mt-2 font-serif text-[39px] leading-[44px] 
                  sm:mt-3 sm:text-[47px] sm:leading-[50px] md:mx-auto
                  md:max-w-[620px] md:text-[57px] md:leading-[60px] lg:max-w-full lg:text-[68px]
                  lg:leading-[70px]
        "
        >
          A voz interior
        </h2>
        <p
          className="
                  mt-4 pb-4 font-jost text-lg leading-8 opacity-80 md:mx-auto
                  md:mt-8 md:max-w-[620px] lg:mb-8 lg:max-w-full
        "
        >
          &quot;A boca fala do que o coração está cheio&quot; - Ditado popular.
          Me disseram que esse ditado também está presente na bíblia cristã. Fui
          checar e realmente estava lá em &quot;Mateus 12:34&quot;.
        </p>
      </div>
      <div className="mt-5 flex justify-start md:mt-16 md:justify-center lg:mt-0">
        <div className="">
          <Image
            className="shadow-lg"
            src="/publi_02.jpg"
            width={7000}
            height={7000}
            alt="Banner"
          />
        </div>
      </div>
    </header>
  );
}
