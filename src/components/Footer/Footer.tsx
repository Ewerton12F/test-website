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
    <footer className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-600 to-primary">
      <section>
        <div className="mx-5 grid grid-cols-1 gap-10 py-10 md:mx-auto md:w-10/12 md:max-w-7xl md:grid-cols-2 xl:flex xl:justify-between xl:gap-0">
          <div className="">
            <Link id="navbar-link-home" href="/">
              <h2 className="mb-5 flex flex-col items-start font-oswald text-[2.35rem]">
                Róbson
                <hr className="w-[6.15rem]" />
                <span className="font-serif text-xl text-secondary">
                  Psicanálise
                </span>
              </h2>
            </Link>
            <ul className="flex gap-1 xl:mb-10">
              <li>
                <Link
                  href={`https://wa.me//5584996152546`}
                  target="_blank"
                  className="
                                flex w-fit items-center justify-center
                                rounded-md border border-white p-5 text-white 
                                transition-all duration-300 
                                hover:border-secondary hover:bg-secondary
                                hover:text-primary
                            "
                >
                  <IconBrandWhatsapp size={26} stroke={2} />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://www.instagram.com/consultorio_de_psicanalise/`}
                  target="_blank"
                  className="
                                flex w-fit items-center justify-center
                                rounded-md border border-white p-5 text-white 
                                transition-all duration-300 
                                hover:border-secondary hover:bg-secondary
                                hover:text-primary
                             "
                >
                  <IconBrandInstagram size={26} stroke={2} />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://www.facebook.com/robsonhbatista/`}
                  target="_blank"
                  className="
                                flex w-fit items-center justify-center
                                rounded-md border border-white p-5 text-white 
                                transition-all duration-300 
                                hover:border-secondary hover:bg-secondary
                                hover:text-primary
                             "
                >
                  <IconBrandFacebook size={26} stroke={2} />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://www.linkedin.com/in/robsonhbatista/`}
                  target="_blank"
                  className="
                                flex w-fit items-center justify-center
                                rounded-md border border-white p-5 text-white 
                                transition-all duration-300 
                                hover:border-secondary hover:bg-secondary
                                hover:text-primary
                             "
                >
                  <IconBrandLinkedin size={26} stroke={2} />
                </Link>
              </li>
            </ul>
            <dl className="hidden xl:block">
              <dt>
                <h3 className="mb-5 font-serif text-3xl text-secondary">
                  Horários
                </h3>
              </dt>
              <dd>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-1.5 align-bottom">
                    <dt>
                      <h4 className="font-jost text-xl">Seg. à Sex.:</h4>
                    </dt>
                    <dd>
                      <p className="font-jost text-lg">10h / 20h</p>
                    </dd>
                  </li>
                  <li className="flex gap-1.5">
                    <dt>
                      <h4 className="font-jost text-xl">Sáb.:</h4>
                    </dt>
                    <dd>
                      <p className="font-jost text-lg"> 8h / 12h</p>
                    </dd>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div>
            <dl className="xl:hidden">
              <dt>
                <h3 className="mb-5 font-serif text-3xl text-secondary">
                  Horários
                </h3>
              </dt>
              <dd>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-1.5 align-bottom">
                    <dt>
                      <h4 className="font-jost text-xl">Seg. à Sex.:</h4>
                    </dt>
                    <dd>
                      <p className="font-jost text-lg">10h / 20h</p>
                    </dd>
                  </li>
                  <li className="flex gap-1.5">
                    <dt>
                      <h4 className="font-jost text-xl">Sáb.:</h4>
                    </dt>
                    <dd>
                      <p className="font-jost text-lg"> 8h / 12h</p>
                    </dd>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div className="xl:mx-10">
            <dl>
              <dt>
                <h3 className="mb-5 font-serif text-3xl text-secondary">
                  Contatos
                </h3>
              </dt>
              <dd>
                <ul className="flex flex-col gap-4">
                  <li className="flex flex-col gap-1">
                    <Link
                      href={`https://wa.me//5584996152546`}
                      className="
                                flex items-center justify-center gap-4 
                                rounded-md border border-white px-5 py-5 font-lexend
                                text-white transition-all duration-300 hover:border-secondary
                                hover:bg-secondary hover:text-primary
                             "
                    >
                      (84) 9 9615-2546
                    </Link>
                    <button
                      onClick={handleClickNumber}
                      className="
                    flex items-center justify-center gap-4 
                    rounded-md border border-white px-5 py-5 font-lexend
                    text-white transition-all duration-300 hover:border-secondary
                    hover:bg-secondary hover:text-primary
                             "
                    >
                      {buttonTextNumber ? (
                        <>
                          <IconClipboardCheck />
                          <p>Copiado!</p>
                        </>
                      ) : (
                        <>
                          <IconClipboard />
                          <p>Copiar número</p>
                        </>
                      )}
                    </button>
                  </li>
                  <hr></hr>
                  <li className="flex flex-col gap-1">
                    <Link
                      href="mailto:robsonbatista.contato@gmail.com"
                      className="
                                flex items-center justify-center gap-4 
                                rounded-md border border-white px-5 py-5 
                                font-lexend text-white transition-all 
                                duration-300 hover:border-secondary
                                hover:bg-secondary hover:text-primary 
                                lg:px-10 
                      "
                    >
                      robsonbatista.contato@gmail.com
                    </Link>
                    <button
                      onClick={handleClickEmail}
                      className="
                    flex items-center justify-center gap-4 
                    rounded-md border border-white px-5 py-5 font-lexend
                    text-white transition-all duration-300 hover:border-secondary
                    hover:bg-secondary hover:text-primary 
                             "
                    >
                      {buttonTextEmail ? (
                        <>
                          <IconClipboardCheck />
                          <p>Copiado!</p>
                        </>
                      ) : (
                        <>
                          <IconClipboard />
                          <p>Copiar email</p>
                        </>
                      )}
                    </button>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>
                <h3 className="mb-5 font-serif text-3xl text-secondary">
                  Localização
                </h3>
              </dt>
              <dd>
                <li className="flex flex-col gap-1">
                  <Link
                    href="https://goo.gl/maps/em7M7zXhgEzdMKXa7"
                    target="_blank"
                    className="
                              flex items-center justify-center gap-4 rounded-md
                              border border-white px-5 py-5 font-lexend text-white transition-all
                              duration-300 hover:border-secondary hover:bg-secondary 
                              hover:text-primary lg:px-10 
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
                    flex items-center justify-center gap-4 rounded-md
                    border border-white px-5 py-5 font-lexend text-white
                    transition-all duration-300 hover:border-secondary 
                    hover:bg-secondary hover:text-primary 
                             "
                  >
                    {buttonTextAdress ? (
                      <>
                        <IconClipboardCheck />
                        <p>Copiado!</p>
                      </>
                    ) : (
                      <>
                        <IconClipboard />
                        <p>Copiar endereço</p>
                      </>
                    )}
                  </button>
                </li>
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <hr
        className="mx-5 animate-text bg-gradient-to-r from-teal-500
        via-purple-500 to-orange-500 
                      bg-clip-text font-jost 
                      text-base text-transparent 
                      duration-300 md:mx-auto
                      md:w-10/12 md:max-w-7xl"
      ></hr>
      <section>
        <div className="mx-auto w-full max-w-screen-xl py-10">
          <div className="flex flex-col items-center justify-between">
            <Link
              href="https://www.devton.tech/"
              target="_blank"
              className="
                      animate-text bg-gradient-to-r 
                      from-teal-300 
                      via-purple-300 
                      to-green-300
                      bg-clip-text font-jost text-base
                      text-transparent transition-all duration-300
                      hover:text-white 
              "
            >
              Designed & Developed by Ewerton
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
