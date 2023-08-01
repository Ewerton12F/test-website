import Contact from '../Contact/Contact';

export default function Hero() {
  return (
    <header className="mt-16 text-center md:my-52">
      <h1
        id="hero-title"
        className="
                  mb-1 font-oswald text-[44px] text-white transition-all 
                  min-[375px]:text-[55px] md:text-[80px]
        "
      >
        Róbson Batista
      </h1>
      <hr
        id="hero-title-pipe"
        className="
                  mx-auto w-60 min-[375px]:w-[300px] md:w-[430px]
        "
      />
      <h3
        id="hero-subtitle"
        className="
                  mt-1 font-serif text-2xl text-secondary min-[375px]:text-3xl 
                  md:mt-3 md:text-4xl
        "
      >
        Psicanálise
      </h3>
      <p
        className="
                  mx-10 mt-12 max-w-[300px] font-jost min-[375px]:mx-auto
                  min-[375px]:mt-16 min-[375px]:text-xl 
                  min-[600px]:max-w-[500px] md:mt-20
                  md:max-w-[600px] md:text-2xl
        "
      >
        Psicólogo, Psicanalista e Doutor em Filosofia pela Universidade Federal
        do RN
      </p>
      <Contact />
    </header>
  );
}
