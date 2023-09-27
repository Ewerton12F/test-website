import AContact from '../Contact/AContact';

export default function Appointment() {
  return (
    <section id="appointment">
      <div className="lg:grid lg:grid-cols-2">
        <div
          className="
                  bg-primary px-4 pb-16 pt-16 sm:px-6 md:pt-32 
                  lg:flex lg:justify-end 
                  lg:pb-48 lg:pr-10 lg:pt-44 xl:pl-0
          "
        >
          <div className="max-w-[640px] lg:max-w-xl">
            <div className="">
              <h2
                className="
                          mb-2 font-dm font-bold uppercase tracking-widest 
                          text-secondary
                "
              >
                Contato e agendamentos
              </h2>
              <h3
                className="
                          mb-4 font-serif text-[22px] leading-7 text-white
                          transition-all duration-300 sm:text-[26px] md:text-[32px]
                          md:leading-10 lg:text-[38px] lg:leading-[2.75rem]
                "
              >
                Agende hoje uma consulta virtual ou presencial
              </h3>
              <p className="mb-8 font-jost text-lg leading-8 opacity-90">
                As entrevistas preliminares e sessões ocorrem de modo
                presencial, virtual ou híbrido. Para mais informações, consultar
                disponibilidade de horários e agendar, entre em contato.
              </p>
              <AContact />
            </div>
          </div>
        </div>
        <div
          className="
                    h-96 bg-[url('/services_Avaliação_Clínica.png')] 
                    bg-cover bg-center lg:h-full
          "
        ></div>
      </div>
    </section>
  );
}
