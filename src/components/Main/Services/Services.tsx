import BrowseServicesButton from './components/BrowseServicesButton';
import ServicesList from './components/ServicesList';

export default function Services() {
  return (
    <section id="services">
      <div className="bg-pshadow py-16 md:py-32 lg:py-44 ">
        <div className="px-4 text-left drop-shadow-xl sm:px-6 ">
          <div className="mx-auto lg:max-w-7xl xl:px-6">
            <div className="pb-12 sm:pb-16">
              <h2
                className="
                    mb-2 font-dm text-base font-bold uppercase
                    tracking-widest text-primary
          "
              >
                Serviços
              </h2>
              <h3
                className="
                    font-serif text-[22px] leading-8 text-black  
                    transition-all duration-300 sm:text-[26px] md:text-[32px]
                    lg:max-w-[600px] lg:text-[38px] lg:leading-[2.75rem]
          "
              >
                Experiência em multiplas áreas clínicas
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
            <div
              className={`
                          flex flex-col border border-zinc-300 bg-white px-5 
                          text-left sm:px-10 md:flex-row md:gap-8 md:px-16 
                          md:pb-16 md:pt-14 lg:flex-col lg:items-center lg:px-5
                          lg:pb-20 lg:text-center
                `}
            >
              <div
                className="
                            mt-12 h-24 w-24 flex-none bg-primary 
                            opacity-30 sm:mt-14 md:mt-0 md:h-28 md:w-28
                  "
              ></div>
              <div>
                <h4
                  className={`
                            mt-5 flex items-center justify-start font-serif
                            text-xl capitalize leading-tight text-graybluedark
                            sm:text-[22px] md:mt-0 md:text-[26px]
                            lg:mb-8 lg:h-16 lg:justify-center
                  `}
                >
                  Psicanálise
                </h4>
                <p
                  className={`
                            mb-14 mt-2 flex items-start justify-start font-jost 
                            text-lg normal-case text-grayblue md:mb-0
                            lg:leading-8
                  `}
                >
                  A Psicanálise é um método de investigação dos processos
                  mentais e de tratamento dos sofrimentos psíquicos amplamente
                  difundido no Brasil e em grande parte do mundo. Os
                  psicanalistas brasileiros costumam ser também psicólogos,
                  psiquiatras ou filósofos.
                </p>
                {/* <div className="pb-14 sm:pb-16 md:pb-0">
                    <Link
                      href={'/'}
                      className="
                              font-dm font-bold uppercase tracking-widest
                            text-primary underline underline-offset-8
                    "
                    >
                      Saiba mais
                    </Link>
                  </div> */}
              </div>
            </div>
            <div
              className={`
                          flex flex-col border border-zinc-300 bg-white px-5 
                          text-left sm:px-10 md:flex-row md:gap-8 md:px-16 
                          md:pb-16 md:pt-14 lg:flex-col lg:items-center lg:px-5
                          lg:pb-20 lg:text-center
                `}
            >
              <div
                className="
                            mt-12 h-24 w-24 flex-none bg-primary 
                            opacity-30 sm:mt-14 md:mt-0 md:h-28 md:w-28
                  "
              ></div>
              <div>
                <h4
                  className={`
                            mt-5 flex items-center justify-start font-serif
                            text-xl capitalize leading-tight text-graybluedark
                            sm:text-[22px] md:mt-0 md:text-[26px]
                            lg:mb-8 lg:h-16 lg:justify-center
                  `}
                >
                  Avaliação Psicológica
                </h4>
                <p
                  className={`
                            mb-14 mt-2 flex items-start justify-start font-jost 
                            text-lg normal-case text-grayblue md:mb-0
                            lg:leading-8
                  `}
                >
                  Avaliação Psicológica é um procedimento constituído por um
                  conjunto organizado de princípios teóricos, métodos e técnicas
                  de investigação da personalidade e do estado psicológico de
                  uma pessoa.
                </p>
                {/* <div className="pb-14 sm:pb-16 md:pb-0">
                    <Link
                      href={'/'}
                      className="
                              font-dm font-bold uppercase tracking-widest
                            text-primary underline underline-offset-8
                    "
                    >
                      Saiba mais
                    </Link>
                  </div> */}
              </div>
            </div>
            <div
              className={`
                          flex flex-col border border-zinc-300 bg-white px-5 
                          text-left sm:px-10 md:flex-row md:gap-8 md:px-16 
                          md:pb-16 md:pt-14 lg:flex-col lg:items-center lg:px-5
                          lg:pb-20 lg:text-center
                `}
            >
              <div
                className="
                            mt-12 h-24 w-24 flex-none bg-primary 
                            opacity-30 sm:mt-14 md:mt-0 md:h-28 md:w-28
                  "
              ></div>
              <div>
                <h4
                  className={`
                            mt-5 flex items-center justify-start font-serif
                            text-xl capitalize leading-tight text-graybluedark
                            sm:text-[22px] md:mt-0 md:text-[26px]
                            lg:mb-8 lg:h-16 lg:justify-center
                  `}
                >
                  Avaliação Neuropsicológica
                </h4>
                <p
                  className={`
                            mb-14 mt-2 flex items-start justify-start font-jost 
                            text-lg normal-case text-grayblue md:mb-0
                            lg:leading-8
                  `}
                >
                  Avaliação Neuropsicológica é um procedimento através do qual
                  examina-se as funções cognitivas de um sujeito, tais como
                  atenção, memória e linguagem, além de aspectos sociais,
                  emocionais e funcionais.
                </p>
                {/* <div className="pb-14 sm:pb-16 md:pb-0">
                    <Link
                      href={'/'}
                      className="
                              font-dm font-bold uppercase tracking-widest
                            text-primary underline underline-offset-8
                    "
                    >
                      Saiba mais
                    </Link>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <BrowseServicesButton /> */}
      </div>
    </section>
  );
}
