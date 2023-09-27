import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp
} from '@tabler/icons-react';

export default function Text() {
  return (
    <div
      className="
                mb-16 md:mx-auto md:max-w-3xl 
                lg:flex lg:max-w-7xl lg:flex-row-reverse
      "
    >
      <div className="px-4 py-12 sm:px-6 ">
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Primeiramente, com a inauguração do novo site visamos informar o
          público sobre a diversidade dos serviços oferecidos pelo Dr. Róbson
          Batista, dentro e fora de seu consultório, bem como reunir informações
          a respeito de sua formação, experiência e prática profissional.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Já com o blog visamos a produção e transmissão de conteúdos de
          Psicanálise, Filosofia, Psicologia Geral, Avaliação Psicológica, bem
          como de outras áreas relacionadas.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Enfim, o objetivo do site como um todo é, a partir da compilação das
          informações profissionais e publicações sobre diversos temas, alcançar
          um público que tanto se alinhe com a proposta de trabalho apresentada
          como que se identifique com os princípios éticos-metodológicos que
          norteiam a prática do referido profissional.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Sendo assim, almejamos também, com o tempo, se aproximar e conhecer
          melhor nosso público para melhor atender às suas necessidades e
          aspirações.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          E aí, o que achou da ideia?
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Cordialmente, Róbson Batista.
        </p>
      </div>
      <div
        className="
                  mx-2 grid max-h-[550px] justify-center bg-pshadow px-10 py-12
                  text-center min-[350px]:mx-4 sm:mx-6 lg:my-12
        "
      >
        <Image
          className="mx-auto shadow-lg"
          src="/3_avaliacao_psicologica.jpeg"
          width={125}
          height={125}
          alt="Dr. Róbson Batista - Psicólogo | Psicanalista"
        />
        <h3 className="my-4 font-serif text-[26px] text-black">Dr. Róbson</h3>
        <p className="font-jost text-lg text-grayblue">
          Estudioso de história do pensamento ocidental, estética filosófica,
          literatura, ética e psicanálise.
        </p>
        <ul className="mt-6 flex justify-center gap-2 md:gap-6">
          <li>
            <Link
              href={`https://wa.me//5584996152546`}
              target="_blank"
              className="
                              flex w-fit items-center justify-center
                              bg-primary p-3 text-white 
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
                              bg-primary p-3 text-white 
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
                              bg-primary p-3 text-white 
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
                              bg-primary p-3 text-white 
                              transition-all duration-300 
                              hover:border-secondary hover:bg-secondary
                              hover:text-primary
                    "
            >
              <IconBrandLinkedin size={30} stroke={1.5} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
