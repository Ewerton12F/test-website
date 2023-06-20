import Link from 'next/link';

import { IconBrandGithub, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer>
      <section className="bg-primary">
        <div className="mx-5 grid grid-cols-1 gap-10 py-10 md:mx-auto md:w-3/4 md:max-w-7xl md:grid-cols-2 lg:flex lg:justify-between">
          <div className="">
            <Link id="navbar-link-home" href="/">
              <h1 className="flex flex-col items-start font-oswald text-[2.35rem]">
                Róbson
                <hr className="w-[6.15rem]" />
                <span className="font-serif text-xl text-secondary">
                  Psicanálise
                </span>
              </h1>
            </Link>
          </div>
          <div>
            <dl>
              <dt>
                <h3 className="mb-3 font-serif text-2xl text-secondary">
                  Horários
                </h3>
              </dt>
              <dd>
                <ul className="flex flex-col gap-2">
                  <li>
                    <dt>
                      <h4 className="font-jost text-xl">Seg. - Sex.:</h4>
                    </dt>
                    <dd>
                      <p className="font-lexend text-sm">10h - 20h</p>
                    </dd>
                  </li>
                  <li>
                    <dt>
                      <h4 className="font-jost text-xl">Sáb.:</h4>
                    </dt>
                    <dd>
                      <p className="font-lexend text-sm"> 8h - 12h</p>
                    </dd>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt>
                <h3 className="mb-3 font-serif text-2xl text-secondary">
                  Contatos
                </h3>
              </dt>
              <dd>
                <ul className="flex flex-col gap-2">
                  <li>
                    <dt>
                      <h4 className="font-jost text-xl">Número:</h4>
                    </dt>
                    <dd>
                      <Link
                        href={`https://wa.me//5584996152546`}
                        className="
                                pointer font-lexend text-sm 
                                duration-300 hover:text-secondary
                        "
                      >
                        (84)99615-2546
                      </Link>
                    </dd>
                  </li>
                  <li>
                    <dt>
                      <h4 className="font-jost text-xl">Emails de contato:</h4>
                    </dt>
                    <dd>
                      <ul>
                        <li>
                          <Link
                            href="mailto:robsonbatista.contato@gmail.com"
                            className="
                                pointer font-lexend text-sm 
                                duration-300 hover:text-secondary
                             "
                          >
                            robsonbatista.contato@gmail.com
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="mailto:robsonhenriquebatista.ufrn@gmail.com"
                            className="
                                pointer font-lexend text-sm 
                                duration-300 hover:text-secondary
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
                <h3 className="mb-3 font-serif text-2xl text-secondary">
                  Localização
                </h3>
              </dt>
              <dd>
                <Link
                  href="https://goo.gl/maps/em7M7zXhgEzdMKXa7"
                  target="_blank"
                  className="
                          pointer font-lexend text-sm 
                          duration-300 hover:text-secondary
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
                      font-jost text-base text-gray-200 
                      duration-300 hover:animate-text 
                      hover:bg-gradient-to-r hover:from-teal-500 
                      hover:via-purple-500 
                      hover:to-orange-500 hover:bg-clip-text hover:text-transparent"
            >
              Designed & Developed by Ewerton
            </span>
            <div className="mt-4 flex items-center justify-center space-x-6">
              <a
                href="#"
                className="text-gray-200 duration-300 hover:text-secondary"
              >
                <IconBrandGithub />
              </a>
              <a
                href="#"
                className="text-gray-200 duration-300 hover:text-secondary"
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
