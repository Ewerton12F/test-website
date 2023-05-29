import Link from 'next/link';

import { IconBrandGithub, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer>
      <section className="bg-primary">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mx-5 py-10 md:mx-auto md:w-3/4 md:max-w-7xl">
          <div className="">
            <Link id="navbar-link-home" href="/">
              <h1 className="flex flex-col items-start text-2xl font-oswald">
                Róbson
                <hr className="w-14" />
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
                      <p className="text-sm font-lexend">(84)99615-2546</p>
                    </dd>
                  </li>
                  <li>
                    <dt>
                      <h4 className="text-xl font-jost">Emails de contato:</h4>
                    </dt>
                    <dd>
                      <ul>
                        <li>
                          <p className="text-sm font-lexend">
                            robsonbatista.contato@gmail.com
                          </p>
                        </li>
                        <li>
                          <p className="text-sm font-lexend">
                            robsonhenriquebatista.ufrn@gmail.com
                          </p>
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
                <p className="text-sm font-lexend">
                  OTC - Office Tower Center, 45 (sala 1513).
                  <br />
                  Rua Promotor Manoel Alves Pessoa Neto,
                  <br />
                  Candelária, Natal-RN.
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl py-6">
          <div className="flex flex-col items-center justify-between">
            <span className="text-base font-jost text-gray-200">
              Designed & Developed by Ewerton
            </span>
            <div className="flex mt-4 space-x-6 justify-center items-center">
              <a href="#" className="text-gray-200 hover:text-gray-900">
                <IconBrandGithub />
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-200 hover:text-gray-500">
                <IconBrandWhatsapp />
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
