import Link from 'next/link';

import AllServicesButton from './BrowseServicesButton';

export default function Specialities() {
  return (
    <section id="services">
      <div className="bg-white py-16 sm:py-24 md:py-32 lg:py-44">
        <div className="px-4 text-left sm:px-6 ">
          <div className="mx-auto lg:max-w-7xl xl:px-6">
            <div
              className="
                        flex flex-col items-baseline pb-6 sm:pb-10 
                        md:flex-row md:items-end md:justify-between md:pb-12
              "
            >
              <div className="max-w-[420px] pb-4 sm:pb-9 md:pb-0">
                <h2
                  className="
                          mb-2 font-dm text-base font-bold uppercase
                          tracking-widest text-primary
                "
                >
                  Minhas especialidades
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
              <AllServicesButton />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
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
                            mt-5 flex items-center justify-start
                            font-serif text-xl capitalize leading-tight
                            text-graybluedark sm:text-[22px] 
                            md:mt-0 md:text-[26px] lg:justify-center
                  `}
                  >
                    Psia
                  </h4>
                  <p
                    className={`
                            mb-5 mt-2 flex items-start justify-start 
                            font-jost text-lg normal-case text-grayblue
                            lg:leading-8
                  `}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, odit facilis recusandae incidunt natus beatae atque.
                  </p>
                  <div className="pb-14 sm:pb-16 md:pb-0">
                    <Link
                      href={'/'}
                      className="
                              font-dm font-bold uppercase tracking-widest
                            text-primary underline underline-offset-8
                    "
                    >
                      Saiba mais
                    </Link>
                  </div>
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
                            mt-5 flex items-center justify-start
                            font-serif text-xl capitalize leading-tight
                            text-graybluedark sm:text-[22px] 
                            md:mt-0 md:text-[26px] lg:justify-center
                  `}
                  >
                    Psia
                  </h4>
                  <p
                    className={`
                            mb-5 mt-2 flex items-start justify-start 
                            font-jost text-lg normal-case text-grayblue
                            lg:leading-8
                  `}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, odit facilis recusandae incidunt natus beatae atque.
                  </p>
                  <div className="pb-14 sm:pb-16 md:pb-0">
                    <Link
                      href={'/'}
                      className="
                              font-dm font-bold uppercase tracking-widest
                            text-primary underline underline-offset-8
                    "
                    >
                      Saiba mais
                    </Link>
                  </div>
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
                            mt-5 flex items-center justify-start
                            font-serif text-xl capitalize leading-tight
                            text-graybluedark sm:text-[22px] 
                            md:mt-0 md:text-[26px] lg:justify-center
                  `}
                  >
                    Psia
                  </h4>
                  <p
                    className={`
                            mb-5 mt-2 flex items-start justify-start 
                            font-jost text-lg normal-case text-grayblue
                            lg:leading-8
                  `}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, odit facilis recusandae incidunt natus beatae atque.
                  </p>
                  <div className="pb-14 sm:pb-16 md:pb-0">
                    <Link
                      href={'/'}
                      className="
                              font-dm font-bold uppercase tracking-widest
                            text-primary underline underline-offset-8
                    "
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
