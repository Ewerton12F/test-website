import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <section id="blog">
      <div className="bg-pshadow">
        <div
          className="
                  mx-auto px-4 py-16 sm:px-6 md:py-32 lg:max-w-7xl 
                  lg:pb-10 lg:pt-44"
        >
          <h2
            className="
                  mb-2 font-dm font-bold uppercase tracking-widest 
                  text-secondarydark md:text-center
        "
          >
            Artigos & Publicações
          </h2>
          <h3
            className="
                  mb-4 font-serif text-[22px] leading-7 text-graybluedark
                  transition-all duration-300 sm:text-[26px]
                  md:text-center md:text-[32px] lg:text-[38px] lg:leading-[2.75rem]
        "
          >
            Saúde mental, psicanálise, filosofia e arte
          </h3>
          <p
            className="
                  mt-4 font-jost text-lg leading-8 text-grayblue md:mx-auto
                  md:mt-6 md:max-w-[620px] md:text-center
        "
          >
            Esse é um espaço reservado para o exercício do pensamento crítico em
            suas formas mais agradáveis, se possível.
          </p>
          <div className="lg:grid lg:grid-cols-2 lg:gap-6">
            <section
              className="
                      relative mt-8 flex flex-col md:mt-10 md:h-[650px] 
                      lg:h-[700px]
            "
            >
              <Image
                src="/publi_02.jpg"
                alt=""
                height={200}
                width={300}
                className="h-52 w-full object-cover sm:h-64 md:h-96 lg:h-80"
              />
              <div
                className="
                      bg-white px-5 py-10 shadow-md sm:px-8 sm:py-12 
                        md:absolute md:top-1/2 md:max-w-[600px] md:py-14 
                        lg:top-1/3 lg:w-11/12
              "
              >
                <div className="flex flex-col gap-[1px] sm:flex-row sm:gap-[4px]">
                  <p
                    className="
                        font-dm text-sm uppercase leading-tight tracking-widest
                        text-primary transition-all duration-300 sm:text-[16px]
              "
                  >
                    Psicanálise <span className="text-grayblue">-</span>
                  </p>
                  <p
                    className="
                        font-dm text-sm uppercase leading-tight tracking-widest 
                        text-grayblue transition-all duration-300 sm:text-[16px]
              "
                  >
                    26 de setembro, 2023
                  </p>
                </div>
                <div>
                  <h3 className="mt-3 font-serif text-[20px] leading-7 text-primary sm:text-[22px]">
                    A voz interior
                  </h3>
                  <p className="mt-2 font-jost text-lg leading-8 text-grayblue">
                    A boca fala do que o coração está cheio - Ditado popular. Me
                    disseram que esse di...
                  </p>
                </div>
                <div className="my-4">
                  <Link
                    href={'/a-voz-interior'}
                    className="
                  font-dm font-medium uppercase tracking-widest
                  text-primary underline underline-offset-8
            "
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            </section>
            <section
              className="
                      relative mt-8 flex flex-col md:mt-10 md:h-[650px]
                      lg:h-[700px]
            "
            >
              <Image
                src="/publi_01.jpg"
                alt=""
                height={200}
                width={300}
                className="h-52 w-full object-cover sm:h-64 md:h-96 lg:h-80"
              />
              <div
                className="
                      bg-white px-5 py-10 shadow-md sm:px-8 sm:py-12 
                        md:absolute md:top-1/2 md:max-w-[600px] md:py-14 
                        lg:top-1/3 lg:w-11/12
              "
              >
                <div className="flex flex-col gap-[1px] sm:flex-row sm:gap-[4px]">
                  <p
                    className="
                        font-dm text-sm uppercase leading-tight tracking-widest
                        text-primary transition-all duration-300 sm:text-[16px]
              "
                  >
                    Divagações <span className="text-grayblue">-</span>
                  </p>
                  <p
                    className="
                        font-dm text-sm uppercase leading-tight tracking-widest 
                        text-grayblue transition-all duration-300 sm:text-[16px]
              "
                  >
                    26 de setembro, 2023
                  </p>
                </div>
                <div>
                  <h3 className="mt-3 font-serif text-[20px] leading-7 text-primary sm:text-[22px]">
                    O que esperar do novo site e blog?
                  </h3>
                  <p className="mt-2 font-jost text-lg leading-8 text-grayblue">
                    Primeiramente, com a inauguração do novo site visamos
                    informar o púb...
                  </p>
                </div>
                <div className="my-4">
                  <Link
                    href={'/o-que-esperar-do-novo-site-e-blog'}
                    className="
                  font-dm font-medium uppercase tracking-widest
                  text-primary underline underline-offset-8
            "
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
            </section>
          </div>
          {/* <Link href={`/blog`}>
            <button
              className="
                      mx-auto mt-6 flex w-full cursor-pointer
                      border border-zinc-300 bg-white py-4
                      font-lexend text-zinc-500
                      underline-offset-2 transition-all duration-300
                      sm:ml-0 sm:max-w-[300px] md:mx-auto md:mt-12
            "
            >
              <p
                className="
                      mx-auto font-dm text-base uppercase tracking-wider 
                      text-primary
            "
              >
                Mais Artigos
              </p>
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
