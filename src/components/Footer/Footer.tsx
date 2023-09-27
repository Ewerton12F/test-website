'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconClipboard,
  IconClipboardCheck
} from '@tabler/icons-react';

export default function Footer() {
  const initialTextAdress =
    'Rua Promotor Manoel Alves Pessoa Neto, 45 - Candelária, Natal - RN, 59065-555';
  const initialTextEmail = 'robsonbatista.contato@gmail.com';
  const initialTextNumber = '84996152546';
  const [buttonTextAdress, setButtonTextAdress] = useState(false);
  const [buttonTextEmail, setButtonTextEmail] = useState(false);
  const [buttonTextNumber, setButtonTextNumber] = useState(false);

  function handleClickAdress() {
    navigator.clipboard.writeText(initialTextAdress);
    setButtonTextAdress(true);

    setTimeout(() => {
      setButtonTextAdress(false);
    }, 2000); // 👈️ change text back after 1 second
  }
  function handleClickEmail() {
    navigator.clipboard.writeText(initialTextEmail);
    setButtonTextEmail(true);

    setTimeout(() => {
      setButtonTextEmail(false);
    }, 2000); // 👈️ change text back after 1 second
  }
  function handleClickNumber() {
    navigator.clipboard.writeText(initialTextNumber);
    setButtonTextNumber(true);

    setTimeout(() => {
      setButtonTextNumber(false);
    }, 2000); // 👈️ change text back after 1 second
  }

  return (
    <footer className="bg-graybluedark">
      <div
        className="
                  mx-auto grid grid-cols-1 gap-10 px-4 pb-6 pt-14
                  sm:px-6 md:pb-10 lg:max-w-7xl lg:gap-16 lg:pb-16
        "
      >
        <div className="">
          <div
            className="
                      mb-6 grid grid-cols-1 
                      md:mb-10 md:grid-cols-2 md:items-center 
                      lg:mb-14
            "
          >
            <Link id="navbar-link-home" href="/">
              <div className="flex gap-4 md:mt-4">
                <div>
                  <h2
                    className="
                            mb-1.5 flex flex-col items-start font-dm font-bold 
                            uppercase tracking-[0.1em]
                  "
                  >
                    Róbson Batista
                  </h2>
                  <hr className="w-48" />
                  <span className="font-serif text-lg text-secondary">
                    Psicologia & Psicanálise
                  </span>
                </div>
              </div>
            </Link>
            <p
              className="
                        my-2 text-left font-jost leading-8 opacity-90  
                        sm:max-w-[420px] lg:max-w-full lg:pl-3
                        "
            >
              Estudioso de história do pensamento ocidental, estética
              filosófica, literatura, ética e psicanálise, dedica-se também ao
              estudo da relação entre psicanálise e filosofia, epistemologia,
              filosofia da ciência e arte.
            </p>
          </div>
          <hr className="opacity-50 transition-all duration-300 sm:mb-4 sm:mt-10"></hr>
        </div>
        <div
          className="
                    grid grid-cols-1 gap-y-12 
                    md:grid-cols-2 
                    lg:grid-cols-3 lg:gap-x-4
          "
        >
          <div className="md:order-1">
            <div>
              <dl>
                <dt>
                  <h3
                    className="
                            mb-6 font-serif text-xl text-secondary 
                            sm:text-2xl
                  "
                  >
                    Horários
                  </h3>
                </dt>
                <dd>
                  <ul className="flex flex-col gap-6">
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
              </dl>
            </div>
            <div className="mt-20 hidden md:order-2 lg:block">
              <dl>
                <dt>
                  <h3
                    className="
                          mb-6 font-serif text-xl text-secondary 
                          sm:text-2xl
                "
                  >
                    Siga-me
                  </h3>
                </dt>
                <dd>
                  <ul className="flex justify-start gap-2 md:gap-6">
                    <li>
                      <Link
                        href={`https://wa.me//5584996152546`}
                        target="_blank"
                        className="
                              flex w-fit items-center justify-center
                              bg-white bg-opacity-10 p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
                      >
                        <IconBrandWhatsapp size={30} stroke={1.5} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`https://www.instagram.com/consultorio_de_psicanalise/`}
                        target="_blank"
                        className="
                              flex w-fit items-center justify-center
                              bg-white bg-opacity-10 p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
                      >
                        <IconBrandInstagram size={30} stroke={1.5} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`https://www.facebook.com/robsonhbatista/`}
                        target="_blank"
                        className="
                              flex w-fit items-center justify-center
                              bg-white bg-opacity-10 p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
                      >
                        <IconBrandFacebook size={30} stroke={1.5} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`https://www.linkedin.com/in/robsonhbatista/`}
                        target="_blank"
                        className="
                              flex w-fit items-center justify-center
                              bg-white bg-opacity-10 p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
                      >
                        <IconBrandLinkedin size={30} stroke={1.5} />
                      </Link>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <div className="md:order-3">
            <dl>
              <dt>
                <h3
                  className="
                          mb-6 font-serif text-xl text-secondary 
                          sm:text-2xl
                "
                >
                  Contatos
                </h3>
              </dt>
              <dd>
                <ul className="flex flex-col gap-6 sm:max-w-[300px]">
                  <li className="flex flex-col gap-6">
                    <Link
                      href={`https://wa.me//5584996152546`}
                      className="
                              flex justify-center gap-4 bg-white 
                              bg-opacity-10 px-5 py-4 font-lexend text-sm 
                              text-white opacity-90 transition-all 
                              duration-300
                    "
                    >
                      (84) 9 9615-2546
                    </Link>
                    <button
                      onClick={handleClickNumber}
                      className="
                              flex justify-center gap-4 bg-white 
                              bg-opacity-10 px-5 py-4 font-lexend text-sm 
                              text-white opacity-90 transition-all 
                              duration-300
                    "
                    >
                      {buttonTextNumber ? (
                        <>
                          <IconClipboardCheck size={20} />
                          <p>Copiado!</p>
                        </>
                      ) : (
                        <>
                          <IconClipboard size={20} />
                          <p>Copiar número</p>
                        </>
                      )}
                    </button>
                  </li>
                  <hr className="mx-4 opacity-50"></hr>
                  <li className="flex flex-col gap-6">
                    <Link
                      href="mailto:robsonbatista.contato@gmail.com"
                      className="
                              flex justify-center gap-4 bg-white 
                              bg-opacity-10 px-5 py-4 font-lexend text-sm 
                              text-white opacity-90 transition-all 
                              duration-300
                    "
                    >
                      robsonbatista.contato@gmail.com
                    </Link>
                    <button
                      onClick={handleClickEmail}
                      className="
                              flex justify-center gap-4 bg-white 
                              bg-opacity-10 px-5 py-4 font-lexend text-sm 
                              text-white transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary 
                    "
                    >
                      {buttonTextEmail ? (
                        <>
                          <IconClipboardCheck size={20} />
                          <p>Copiado!</p>
                        </>
                      ) : (
                        <>
                          <IconClipboard size={20} />
                          <p>Copiar email</p>
                        </>
                      )}
                    </button>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div className="md:order-4">
            <dl>
              <dt>
                <h3
                  className="
                          mb-6 font-serif text-xl text-secondary 
                          sm:text-2xl
                "
                >
                  Localização
                </h3>
              </dt>
              <dd>
                <li className="flex flex-col gap-6 sm:max-w-[300px]">
                  <Link
                    href="https://goo.gl/maps/em7M7zXhgEzdMKXa7"
                    target="_blank"
                    className="
                              flex justify-center bg-white 
                              bg-opacity-10 px-5 py-6 font-lexend text-sm 
                              text-white opacity-90 transition-all 
                              duration-300
                    "
                  >
                    OTC - Office Tower Center, (sala 1513).
                    <br />
                    Rua Promotor Manoel Alves Pessoa Neto, 45
                    <br />
                    Candelária, Natal - RN, 59065-555
                  </Link>
                  <button
                    onClick={handleClickAdress}
                    className="
                              flex justify-center gap-4 bg-white 
                              bg-opacity-10 px-5 py-4 font-lexend text-sm 
                              text-white opacity-90 transition-all 
                              duration-300
                    "
                  >
                    {buttonTextAdress ? (
                      <>
                        <IconClipboardCheck size={20} />
                        <p>Copiado!</p>
                      </>
                    ) : (
                      <>
                        <IconClipboard size={20} />
                        <p>Copiar endereço</p>
                      </>
                    )}
                  </button>
                </li>
              </dd>
            </dl>
          </div>
          <div className="md:order-2 lg:hidden">
            <dl>
              <dt>
                <h3
                  className="
                          mb-6 font-serif text-xl text-secondary 
                          sm:text-2xl
                "
                >
                  Siga-me
                </h3>
              </dt>
              <dd>
                <ul className="flex justify-start gap-2 md:gap-6">
                  <li>
                    <Link
                      href={`https://wa.me//5584996152546`}
                      target="_blank"
                      className="
                              flex w-fit items-center justify-center
                              bg-white bg-opacity-10 p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
                    >
                      <IconBrandWhatsapp size={30} stroke={1.5} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://www.instagram.com/consultorio_de_psicanalise/`}
                      target="_blank"
                      className="
                              flex w-fit items-center justify-center
                              bg-white bg-opacity-10 p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
                    >
                      <IconBrandInstagram size={30} stroke={1.5} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://www.facebook.com/robsonhbatista/`}
                      target="_blank"
                      className="
                              flex w-fit items-center justify-center
                              bg-white bg-opacity-10 p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
                    >
                      <IconBrandFacebook size={30} stroke={1.5} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://www.linkedin.com/in/robsonhbatista/`}
                      target="_blank"
                      className="
                              flex w-fit items-center justify-center
                              bg-white bg-opacity-10 p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
                    >
                      <IconBrandLinkedin size={30} stroke={1.5} />
                    </Link>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <hr className="mt-8 opacity-50"></hr>
      <div className="mx-auto px-4 py-6 sm:px-6 md:py-8 lg:md:py-10 lg:max-w-7xl">
        <Link
          href="https://www.devton.tech/"
          target="_blank"
          className="
                    animate-text bg-gradient-to-r from-teal-300 
                    via-purple-300 to-green-300 bg-clip-text font-jost 
                    font-light opacity-50 transition-all 
                    duration-300
                    hover:font-medium
                    hover:text-transparent
                    hover:opacity-100
          "
        >
          Designed & Developed by Ewerton
        </Link>
      </div>
    </footer>
  );
}
