import Link from 'next/link';

import { IconBrandGithub, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer>
      <section className="bg-primary">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between mx-5 min-[375px]:mx-10 py-10 md:mx-auto md:w-3/4 md:max-w-7xl">
          <div className="">
            <Link id="navbar-link-home" href="/">
              <h1 className="flex flex-col items-start text-[2.35rem] font-oswald">
                Róbson
                <hr className="w-[6.15rem]" />
                <span className="text-xl font-serif text-secondary">
                  Psicanálise
                </span>
              </h1>
            </Link>
          </div>
          <div>
            <dl>
              <dt>
                <h3 className="text-2xl font-serif text-secondary mb-3">
                  Horários
                </h3>
              </dt>
              <dd>
                <ul className="flex flex-col gap-2">
                  <li>
                    <dt>
                      <h4 className="text-xl font-jost">Seg. - Sex.:</h4>
                    </dt>
                    <dd>
                      <p className="text-sm font-lexend">10h - 20h</p>
                    </dd>
                  </li>
                  <li>
                    <dt>
                      <h4 className="text-xl font-jost">Sáb.:</h4>
                    </dt>
                    <dd>
                      <p className="text-sm font-lexend"> 8h - 12h</p>
                    </dd>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>
                <h3 className="text-2xl font-serif text-secondary mb-3">
                  Contatos
                </h3>
              </dt>
              <dd>
                <ul className="flex flex-col gap-2">
                  <li>
                    <dt>
                      <h4 className="text-xl font-jost">Número:</h4>
                    </dt>
                    <dd>
                      <Link
                        href="/"
                        className="
                                text-sm font-lexend pointer 
                                hover:text-secondary duration-300
                        "
                      >
                        (84)99615-2546
                      </Link>
                    </dd>
                  </li>
                  <li>
                    <dt>
                      <h4 className="text-xl font-jost">Emails de contato:</h4>
                    </dt>
                    <dd>
                      <ul>
                        <li>
                          <Link
                            href="/"
                            className="
                                text-sm font-lexend pointer 
                                hover:text-secondary duration-300
                             "
                          >
                            robsonbatista.contato@gmail.com
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="
                                text-sm font-lexend pointer 
                                hover:text-secondary duration-300
                             "
                          >
                            robsonhenriquebatista.ufrn@gmail.com
                          </Link>
                        </li>
                      </ul>
                    </dd>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>
                <h3 className="text-2xl font-serif text-secondary mb-3">
                  Localização
                </h3>
              </dt>
              <dd>
                <Link
                  href="https://goo.gl/maps/em7M7zXhgEzdMKXa7"
                  target="_blank"
                  className="
                          text-sm font-lexend pointer 
                          hover:text-secondary duration-300
                  "
                >
                  OTC - Office Tower Center, (sala 1513).
                  <br />
                  Rua Promotor Manoel Alves Pessoa Neto, 45
                  <br />
                  Candelária, Natal-RN.
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl py-6">
          <div className="flex flex-col items-center justify-between">
            <span
              className="
                      text-base font-jost text-gray-200 
                      hover:animate-text hover:bg-gradient-to-r 
                      hover:from-teal-500 hover:via-purple-500 
                      hover:to-orange-500 
                      hover:bg-clip-text hover:text-transparent duration-300"
            >
              Designed & Developed by Ewerton
            </span>
            <div className="flex mt-4 space-x-6 justify-center items-center">
              <a
                href="#"
                className="text-gray-200 hover:text-secondary duration-300"
              >
                <IconBrandGithub />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-secondary duration-300"
              >
                <IconBrandWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
