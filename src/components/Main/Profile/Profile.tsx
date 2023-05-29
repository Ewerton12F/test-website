import Image from 'next/image';
import Link from 'next/link';

import { IconExternalLink } from '@tabler/icons-react';

export default function Profile() {
  return (
    <div className="mx-5 my-8 md:mt-10 md:mx-auto md:w-3/4 md:max-w-7xl">
      <h2 className="text-2xl md:text-4xl font-serif text-primary">
        Sobre o Psicanalista
      </h2>
      <hr className="w-12 h-px md:h-1 md:w-24 border-secondary md:bg-secondary mt-2 md:mt-3 mb-4 md:mb-5" />
      <div className="md:flex md:gap-10">
        <Image
          className="mx-auto md:mx-0"
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Sigmund_Freud_LIFE.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="my-5 md:my-0 mx-3 md:mx-0">
          <p className="my-3 md:my-0 text-base md:text-xl font-jost text-primary">
            Róbson Batista é psicólogo, psicanalista e doutor em filosofia pela
            Universidade Federal do Rio Grande do Norte. Especialista em
            adultos, atende em Natal-RN.
          </p>
          <ul className="my-5 text-primary">
            <li>
              Graduação em Psicologia - “Freud e a História da Razão Ocidental”.
            </li>
            <li>
              Bacharelado em Filosofia - “A Emergência do Sujeito Ficcional”.
            </li>
            <li>
              Mestrado em Filosofia - “Para uma Metapsicologia Freudiana da
              Experiência Estética”.
            </li>
            <li>
              Doutorado em Filosofia - “O Jogo de Foucault: Experiências do
              Pensamento e Verdade”.
            </li>
          </ul>
          <p className="my-3 md:my-0 text-base md:text-xl font-jost text-primary">
            Estudioso de história do pensamento ocidental, estética filosófica,
            literatura, ética e psicanálise, dedica-se também ao estudo da
            relação entre psicanálise e filosofia, psicanálise e epistemologia,
            psicanálise e filosofia da ciência e psicanálise e arte.
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center md:my-10 text-primary">
        <Link href="/" className="font-jost">
          Curriculo Lattes e mais
        </Link>
        <IconExternalLink />
      </div>
    </div>
  );
}
