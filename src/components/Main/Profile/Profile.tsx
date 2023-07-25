import Image from 'next/image';
import Link from 'next/link';

import { IconExternalLink } from '@tabler/icons-react';

export default function Profile() {
  return (
    <section
      id="profile"
      className="
                border-y-2 border-zinc-600 
                bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
                from-gray-900 to-gray-600"
    >
      <div className="mx-5 py-10 md:mx-auto md:w-10/12 md:max-w-7xl md:py-14">
        <div className="lg:hidden">
          <h2 className="font-serif text-3xl md:text-4xl">
            Sobre o Psicanalista
          </h2>
          <hr
            className="
          mb-5 h-1 w-[265px] border-2 border-secondary md:mb-5 
          md:mt-3 md:w-[317px]
          "
          />
        </div>
        <div className="grid grid-cols-1 md:gap-10 lg:grid-cols-2">
          <Image
            className="mx-auto shadow-lg lg:mx-0"
            src="/profile-photo.jpeg"
            width={7000}
            height={7000}
            alt="Dr. Róbson Batista - Psicólogo | Psicanalista"
          />
          <div className="mt-5 md:mt-0">
            <div className="hidden lg:block">
              <h2 className="font-serif text-3xl md:text-4xl">
                Sobre o Psicanalista
              </h2>
              <hr
                className="
                  mb-5 h-1 w-[265px] border-2 border-secondary
                  lg:mt-2 lg:w-[315px]
              "
              />
            </div>
            <p className="font-jost text-lg md:my-0 md:text-xl">
              Róbson Batista é psicólogo, psicanalista e doutor em filosofia
              pela Universidade Federal do Rio Grande do Norte. Especialista em
              adultos, atende em Natal-RN.
            </p>
            <ul className="my-5 text-lg md:text-lg">
              <li className="mb-2.5 font-cardo">
                Graduação em Psicologia:
                <br />
                <span className="italic">
                  “Freud e a História da Razão Ocidental”
                </span>
              </li>
              <li className="mb-2.5 font-cardo">
                Bacharelado em Filosofia:
                <br />
                <span className="italic">
                  “A Emergência do Sujeito Ficcional”
                </span>
              </li>
              <li className="mb-2.5 font-cardo">
                Mestrado em Filosofia:
                <br />
                <span className="italic">
                  “Para uma Metapsicologia Freudiana da Experiência Estética”
                </span>
              </li>
              <li className="mb-2.5 font-cardo">
                Doutorado em Filosofia:
                <br />
                <span className="italic">
                  “O Jogo de Foucault: Experiências do Pensamento e Verdade”
                </span>
              </li>
            </ul>
            <p className="font-jost text-lg md:my-0 md:text-xl">
              Estudioso de história do pensamento ocidental, estética
              filosófica, literatura, ética e psicanálise, dedica-se também ao
              estudo da relação entre psicanálise e filosofia, psicanálise e
              epistemologia, psicanálise e filosofia da ciência e psicanálise e
              arte.
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center ">
          <button
            className="
                  flex items-center justify-center gap-4 rounded-xl
                  bg-secondary px-10 py-5 text-primary transition-all 
                  duration-300 hover:bg-pshadow hover:text-white 
          "
          >
            <Link
              href="http://lattes.cnpq.br/1009858417414235"
              className="pt-[0.5px] font-lexend text-lg leading-tight min-[375px]:text-xl"
            >
              Curriculo Lattes
            </Link>
            <IconExternalLink size={32} stroke={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
