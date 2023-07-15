export default function Hero() {
  return (
    <header className="mb-20 mt-10 text-center md:my-24">
      <h1
        id="hero-title"
        className="
                  mb-1 font-oswald text-[42px] text-white transition-all 
                  min-[375px]:text-[55px] md:text-[70px] 
        "
      >
        Róbson Batista
      </h1>
      <hr
        id="hero-title-pipe"
        className="
                  mx-auto w-56 min-[375px]:w-[300px] md:w-96
        "
      />
      <h3
        id="hero-subtitle"
        className="mt-1 font-serif text-2xl text-secondary min-[375px]:text-3xl md:mt-3"
      >
        Psicanálise
      </h3>
    </header>
  );
}
