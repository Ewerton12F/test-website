import ServicesList from './components/ServicesList';

export default function Services() {
  return (
    <section
      id="services"
      className="
                mx-5 rounded-xl border border-zinc-600 
                bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
                from-gray-900 to-gray-600 px-5 pb-10 text-center
                drop-shadow-xl md:mx-auto md:mt-0 md:w-10/12
                md:px-10 lg:max-w-7xl
      "
    >
      <div className="my-10">
        <h2
          className="
                    pb-2.5 font-serif text-2xl text-white 
                    min-[375px]:text-3xl
          "
        >
          Serviços Oferecidos
        </h2>
        <p
          className="
                    font-jost text-[14px] text-white 
                    min-[375px]:text-[14px] md:my-2 md:text-lg md:leading-tight
          "
        >
          Arraste para o lado para ver mais
        </p>
      </div>
      <ServicesList />
    </section>
  );
}
