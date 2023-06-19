import Image from 'next/image';
import Link from 'next/link';

import { IconExternalLink } from '@tabler/icons-react';

export default function Profile() {
  return (
    <div className="mx-5 my-14 md:mx-auto md:my-16 md:w-3/4 md:max-w-7xl">
      <h2 className="font-serif text-3xl text-primary md:text-4xl">
        Sobre o Psicanalista
      </h2>
      <hr className="mb-7 mt-2 h-1 w-20 border-secondary md:mb-5 md:mt-3 md:w-24 md:bg-secondary" />
      <div className="grid grid-cols-1 md:gap-10 lg:grid-cols-2">
        <Image
          className="mx-auto shadow-lg lg:mx-0"
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Sigmund_Freud_LIFE.jpg"
          width={700}
          height={700}
          alt="Picture of the author"
        />
        <div className="my-8 min-[425px]:mx-3 md:mx-0 md:my-0">
          <p className="my-3 font-jost text-base text-primary md:my-0 md:text-xl">
            Róbson Batista é psicólogo, psicanalista e doutor em filosofia pela
            Universidade Federal do Rio Grande do Norte. Especialista em
            adultos, atende em Natal-RN.
          </p>
          <ul className="my-5 text-base text-primary md:text-lg">
            <li className="mb-3 font-cardo">
              Graduação em Psicologia:
              <br />
              <span className="italic">
                “Freud e a História da Razão Ocidental”
              </span>
            </li>
            <li className="mb-3 font-cardo">
              Bacharelado em Filosofia:
              <br />
              <span className="italic">
                “A Emergência do Sujeito Ficcional”
              </span>
            </li>
            <li className="mb-3 font-cardo">
              Mestrado em Filosofia:
              <br />
              <span className="italic">
                “Para uma Metapsicologia Freudiana da Experiência Estética”
              </span>
            </li>
            <li className="mb-3 font-cardo">
              Doutorado em Filosofia:
              <br />
              <span className="italic">
                “O Jogo de Foucault: Experiências do Pensamento e Verdade”
              </span>
            </li>
          </ul>
          <p className="my-3 font-jost text-base text-primary md:my-0 md:text-xl">
            Estudioso de história do pensamento ocidental, estética filosófica,
            literatura, ética e psicanálise, dedica-se também ao estudo da
            relação entre psicanálise e filosofia, psicanálise e epistemologia,
            psicanálise e filosofia da ciência e psicanálise e arte.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center md:my-16">
        <button
          className="
                  flex items-center justify-center gap-4 bg-secondary
                  px-10 py-5 text-primary 
                  transition-all duration-300 hover:bg-pshadow hover:text-white md:px-16
          "
        >
          <Link
            href="/"
            className="pt-[0.5px] font-cardo leading-tight md:text-lg"
          >
            Curriculo Lattes e mais
          </Link>
          <IconExternalLink stroke={1} />
        </button>
      </div>
    </div>
  );
}
