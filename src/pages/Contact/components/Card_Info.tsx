import React from 'react';

import Google_Maps from '@/components/Google_Maps/Google_Maps';

export default function Card_Info() {
  return (
    <>
      <div className="relative mx-auto my-14 max-w-7xl px-4 sm:px-6">
        <div
          className="
                    mx-auto flex max-w-2xl flex-col gap-8 bg-primary 
                    px-6 py-10 text-left sm:px-10 sm:py-14 md:gap-10 
                    md:px-14 lg:max-w-5xl lg:flex-row lg:gap-16
          "
        >
          <div className="">
            <dl className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6 md:gap-8 lg:gap-6">
              <div className="h-14 w-14 flex-none bg-white sm:h-16 sm:w-16 md:h-20 md:w-20"></div>
              <div className="">
                <dt>
                  <h3
                    className="
                              mb-2 font-serif text-xl text-white 
                              sm:text-2xl
                    "
                  >
                    Localização
                  </h3>
                </dt>
                <dd>
                  <li className="flex flex-col gap-6">
                    <p
                      className="
                                flex justify-start font-lexend text-sm 
                                leading-6 text-white opacity-90 
                                transition-all duration-300
                      "
                    >
                      OTC - Office Tower Center, (sala 1513).
                      <br />
                      Rua Promotor Manoel Alves Pessoa Neto, 45
                      <br />
                      Candelária, Natal - RN, 59065-555
                    </p>
                  </li>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <dl className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6 md:gap-8 lg:gap-6">
              <div className="h-14 w-14 flex-none bg-white sm:h-16 sm:w-16 md:h-20 md:w-20"></div>
              <div>
                <dt>
                  <h3
                    className="
                              mb-2 font-serif text-xl text-white 
                              sm:text-2xl
                    "
                  >
                    Horários
                  </h3>
                </dt>
                <dd>
                  <ul className="flex flex-col gap-4">
                    <li className="flex gap-2 align-bottom">
                      <dt>
                        <h4 className="text-md font-jost opacity-90">
                          Segunda - Sexta
                        </h4>
                      </dt>
                      <hr className="w-10 self-center border-dashed opacity-50" />
                      <dd>
                        <p className="text-md font-jost opacity-90">
                          10h / 20h
                        </p>
                      </dd>
                    </li>
                    <li className="flex gap-2">
                      <dt>
                        <h4 className="text-md font-jost opacity-90">Sábado</h4>
                      </dt>
                      <hr className="w-24 self-center border-dashed opacity-50" />
                      <dd>
                        <p className="text-md font-jost opacity-90">8h / 12h</p>
                      </dd>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div>
          <Google_Maps />
        </div>
      </div>
    </>
  );
}
