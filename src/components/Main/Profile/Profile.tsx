import Image from 'next/image';
import Link from 'next/link';

import { IconExternalLink } from '@tabler/icons-react';

export default function Profile() {
  return (
    <div className="mx-5 my-14 md:my-16 md:mx-auto md:w-3/4 md:max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-serif text-primary">
        Sobre o Psicanalista
      </h2>
      <hr className="w-20 md:w-24 h-1 border-secondary md:bg-secondary mt-2 md:mt-3 mb-7 md:mb-5" />
      <div className="grid md:gap-10 grid-cols-1 lg:grid-cols-2">
        <Image
          className="mx-auto lg:mx-0 shadow-lg"
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Sigmund_Freud_LIFE.jpg"
          width={700}
          height={700}
          alt="Picture of the author"
        />
        <div className="my-8 md:my-0 min-[425px]:mx-3 md:mx-0">
          <p className="my-3 md:my-0 text-base md:text-xl font-jost text-primary">
            Róbson Batista é psicólogo, psicanalista e doutor em filosofia pela
            Universidade Federal do Rio Grande do Norte. Especialista em
            adultos, atende em Natal-RN.
          </p>
          <ul className="my-5 text-base md:text-lg text-primary list-disc ml-5">
            <li className="mb-3">
              Graduação em Psicologia:
              <br />
              <span className="italic">
                “Freud e a História da Razão Ocidental”
              </span>
            </li>
            <li className="mb-3">
              Bacharelado em Filosofia:
              <br />
              <span className="italic">
                “A Emergência do Sujeito Ficcional”
              </span>
            </li>
            <li className="mb-3">
              Mestrado em Filosofia:
              <br />
              <span className="italic">
                “Para uma Metapsicologia Freudiana da Experiência Estética”
              </span>
            </li>
            <li className="mb-3">
              Doutorado em Filosofia:
              <br />
              <span className="italic">
                “O Jogo de Foucault: Experiências do Pensamento e Verdade”
              </span>
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
      <div className="flex gap-3 items-center justify-center md:my-16 text-primary">
        <Link href="/" className="font-jost">
          Curriculo Lattes e mais
        </Link>
        <IconExternalLink />
      </div>
    </div>
  );
}
