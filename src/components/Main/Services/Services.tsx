import ServicesList from './components/ServicesList';

export default function Services() {
  return (
    <section
      id="services"
      className="
                bg-black px-5 pb-14 text-center
                drop-shadow-xl md:mx-auto md:px-10 md:pb-16
      "
    >
      <div className="py-12 md:py-16">
        <h2
          className="
                    font-serif text-3xl text-white 
                    min-[600px]:text-4xl
          "
        >
          Serviços Oferecidos
        </h2>
        <hr
          className="
                    mx-auto mb-2.5 h-1 w-[265px] border-2 border-secondary
                    min-[600px]:mt-1 min-[600px]:w-[315px] md:mb-5 md:mt-3
        "
        />
        <p
          className="
                    font-jost text-[14px] text-white 
                    min-[600px]:text-lg md:my-2 md:text-lg
          "
        >
          Arraste para o lado para ver mais
        </p>
      </div>
      <div className="md:mx-auto md:max-w-7xl">
        <ServicesList />
      </div>
    </section>
  );
}
