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
          &quot;A boca fala do que o coração está cheio&quot; - Ditado popular.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Me disseram que esse ditado também está presente na bíblia cristã. Fui
          checar e realmente estava lá em &quot;Mateus 12:34&quot;.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Mas o que entender por isso? Uma analisante me confessou na sessão de
          hoje que possui uma voz interior um tanto questionadora, crítica e
          ditatorial que regula sua conduta, mas que também a distrai.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Essa voz interior, espontânea e rebelde, ecoa quase que
          incessantemente em sua consciência, por vezes intensificando-se e
          multiplicando-se. Nessas ocasiões, se comportar e filtrar essa voz
          exige um considerável esforço. E quando o sujeito não é mais capaz de
          empreender tal esforço de filtragem dos pensamentos, autovigilância e
          autorregularão, ele reproduz verbalmente seu fluxo de pensamentos
          assim que lhe ocorre, quase que sem qualquer retificação.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          É importante reconhecer que de tempos em tempos precisamos nos
          recolher, ficar sozinhos, dar vazão à essa voz interior e deixá-la
          escoar para não nos exaurirmos tentando suprimi-la.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          A voz interior é primordialmente determinada pelo inconsciente, e sua
          verbalização está, portanto, atrelada à noção de associação livre de
          ideias.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Sendo assim, são corriqueiras as situações em que alguém censura e
          critica o outro em decorrência de já ter feito isso consigo mesma. Se
          alguém acusa o outro de &quot;Irresponsável! Inútil! Mesquinho&quot;
          sem que isso se baseie em evidências concretas ou razões plausíveis, é
          muito provável que ela esteja projetando no outro aquilo que ao mesmo
          tempo reconhece e nega em si mesma.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          - Ora, como podemos, sendo maus, dizer genuinamente coisas boas?
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Além disso, não existe negativa no inconsciente, então toda vez que
          alguém repete, espontânea e reiteradamente coisas como &quot;não sou
          ciumento&quot;, &quot;não me importo com dinheiro&quot; ou
          &quot;jamais pedirei sua ajuda&quot;, podemos interpretar isso como um
          sinal de que se trata de alguém com problemas relacionados a ciúmes,
          alguém que se preocupa consideravelmente com dinheiro ou alguém que
          gostaria de contar com sua ajuda.
        </p>
        <p className="mb-5 font-jost text-lg leading-7 text-grayblue">
          Assim como o esbanjador é uma formação reativa que busca suplantar,
          negar e apagar experiências relacionadas à privação e miséria, o
          sujeito de discurso depreciativo, ofensivo e julgador no fundo
          deprecia, ofende e julga a si mesmo, tal como a amargura expressa em
          sua fala reflete a amargura de seu coração naquele momento.
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
