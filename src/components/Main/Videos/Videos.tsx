import Image from 'next/image';

export default function Videos() {
  return (
    <section id="profile">
      <div
        className="
                  mx-auto px-4 py-16 sm:px-6 md:py-32 md:text-center 
                  lg:max-w-7xl lg:py-44
        "
      >
        <div className="">
          <h2
            className="
                      mb-2 font-dm font-bold uppercase tracking-widest 
                      text-secondarydark
            "
          >
            Conheça o Dr. Róbson Batista
          </h2>
          <h3
            className="mb-4 font-serif text-[22px] leading-7 text-black
                      transition-all duration-300 sm:text-[26px] 
                      md:mx-auto md:max-w-[600px] md:text-[32px] md:leading-10
                      lg:text-[38px] lg:leading-[2.75rem]
            "
          >
            Assita ao Dr. Róbson para saber o porquê ele é o psicanalista certo
            para você
          </h3>
        </div>
        <div className="mt-8 shadow-md">
          <Image
            className="mx-auto shadow-lg"
            src="/profile-photo.jpeg"
            width={7000}
            height={7000}
            alt="Dr. Róbson Batista - Psicólogo | Psicanalista"
          />
          <div className="bg-pshadow px-5 py-8 sm:px-7 sm:py-10 md:px-10 md:py-14">
            <h2
              className="
                        font-serif text-[20px] leading-7 text-black 
                        sm:text-[22px] md:text-left md:text-[26px]
              "
            >
              Porquê o Dr. Róbson Batista?
            </h2>
            <p
              className="
                        mt-4 font-jost text-lg leading-8 text-zinc-500
                        md:text-left
              "
            >
              Róbson Batista é Psicólogo, Psicanalista e Doutor em Filosofia
              pela Universidade Federal do Rio Grande do Norte. Especialista em
              adultos, atende em Natal-RN.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
