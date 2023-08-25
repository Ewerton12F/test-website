export default function Contact_Form() {
  return (
    <header
      className="
                mb-14 mt-10 px-4 text-left transition-all duration-300 
                sm:mt-14 sm:px-6 md:mt-20 md:text-center 
                lg:mx-auto lg:mb-8 lg:max-w-7xl lg:gap-8 lg:pt-8
      "
    >
      <div>
        <h1
          id="hero-title"
          className="
                  font-dm font-bold uppercase tracking-[0.2rem] text-secondary
        "
        >
          Contate-me
        </h1>
        <h2
          id="hero-subtitle"
          className="
                  mt-2 font-serif text-[39px] leading-[44px] 
                  sm:mt-3 sm:text-[47px] sm:leading-[50px] md:mx-auto
                  md:text-[57px] md:leading-[60px] lg:text-[68px]
                  lg:leading-[70px]
        "
        >
          Entre em contato hoje
        </h2>
      </div>
      <div className="my-8 text-left sm:my-10 lg:my-14">
        <div
          className="
                    grid grid-cols-1 gap-12 bg-pshadow px-5 py-10 
                    sm:px-10 sm:py-14 md:px-14 md:py-16 lg:grid-cols-2 lg:px-16
                    lg:py-20
          "
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3
                className="
                          font-serif text-[28px] leading-9 text-black 
                          lg:text-[38px] lg:leading-[50px]
                "
              >
                Tem perguntas? <br />
                Estou aqui para ajudar
              </h3>
              <p
                className="
                          my-4 ml-0 max-w-[400px] font-jost leading-7 
                          text-grayblue md:mb-0
                "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, minima quisquam iusto ducimus id optio sunt quam ad
                fugit?
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4 md:ml-8 lg:ml-0">
              <div className="flex h-10 items-center gap-2">
                <div className="h-10 w-10 bg-primary"></div>
                <p className="font-jost text-grayblue">(84) 99999-9999</p>
              </div>
              <div className="flex h-10 items-center gap-2">
                <div className="h-10 w-10 bg-primary"></div>
                <p className="font-jost text-grayblue">
                  robsonbatista@gmail.com
                </p>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-dm font-bold uppercase tracking-[0.2rem] text-graybluedark">
                Nome
              </label>
              <input
                className="h-14 border border-zinc-300 pl-3 text-black"
                placeholder="SEU NOME"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-dm font-bold uppercase tracking-[0.2rem] text-graybluedark">
                Telefone
              </label>
              <input
                className="h-14 border border-zinc-300 pl-3 text-black"
                placeholder="SEU@EMAIL.COM"
              />
            </div>
            <button
              className="
                        mx-auto mt-4 flex w-full cursor-pointer border-2 
                        border-primary bg-primary py-4 font-lexend
                        underline-offset-2 transition-all duration-300
                        sm:ml-0 sm:max-w-[300px]
              "
            >
              <p className="mx-auto font-dm font-thin uppercase tracking-widest">
                Enviar
              </p>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
