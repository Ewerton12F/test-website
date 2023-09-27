import { IconAward, IconCertificate2, IconSchool } from '@tabler/icons-react';

export default function Values() {
  return (
    <section
      className="
                mx-auto my-16 px-4 transition-all 
                duration-300 sm:px-6 md:pb-20 md:pt-3 
                lg:max-w-7xl lg:py-36 xl:py-28
      "
    >
      <div className="mx-auto mb-8 max-w-3xl sm:mb-10 md:text-center">
        <h2
          className="
                      mb-2 font-dm font-bold uppercase tracking-widest 
                      text-secondarydark 
            "
        >
          Meus valores
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
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-y-10">
        <div className="bg-pshadow shadow-md">
          <div
            className="
                    flex flex-col gap-4 px-5 py-10 sm:px-10 sm:py-12
                    md:flex-col xl:flex-row xl:gap-6
          "
          >
            <div>
              <IconSchool
                className="bg-primary p-2"
                size={70}
                strokeWidth={0.5}
                color={'#fff'}
              />
            </div>
            <div>
              <h2 className="mb-2 font-serif text-[26px] leading-8 text-black">
                Produção acadêmica na área
              </h2>
              <p className="text-grayblue">
                Autor de duas obras sobre Filosofia e Psicanálise.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-pshadow shadow-md">
          <div
            className="
                    flex flex-col gap-4 px-5 py-10 sm:px-10 sm:py-12
                    md:flex-col xl:flex-row xl:gap-6
          "
          >
            <div>
              <IconAward
                className="bg-primary p-2"
                size={70}
                strokeWidth={0.5}
                color={'#fff'}
              />
            </div>
            <div>
              <h2 className="mb-2 font-serif text-[26px] leading-8 text-black">
                12 anos de experiência clínica
              </h2>
              <p className="text-grayblue">
                Prolífico trabalho clínico como psicólogo e psicanalista de
                adolescentes a adultos.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-pshadow shadow-md">
          <div
            className="
                    flex flex-col gap-4 px-5 py-10 sm:px-10 sm:py-12
                    md:flex-col xl:flex-row xl:gap-6
          "
          >
            <div>
              <IconCertificate2
                className="bg-primary p-2"
                size={70}
                strokeWidth={0.5}
                color={'#fff'}
              />
            </div>
            <div>
              <h2 className="mb-2 font-serif text-[26px] leading-8 text-black">
                Alta qualificação
              </h2>
              <p className="text-grayblue">
                Estudou psicanálise em duas graduações, no mestrado e no
                doutorado
              </p>
            </div>
          </div>
        </div>
        <div className="bg-pshadow shadow-md">
          <div
            className="
                    flex flex-col gap-4 px-5 py-10 sm:px-10 sm:py-12
                    md:flex-col xl:flex-row xl:gap-6
          "
          >
            <div>
              <IconCertificate2
                className="bg-primary p-2"
                size={70}
                strokeWidth={0.5}
                color={'#fff'}
              />
            </div>
            <div>
              <h2 className="mb-2 font-serif text-[26px] leading-8 text-black">
                Alta qualificação
              </h2>
              <p className="text-grayblue">
                Estudou psicanálise em duas graduações, no mestrado e no
                doutorado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
