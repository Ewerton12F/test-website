import BrowseServicesButton from './components/BrowseServicesButton';
import ServicesList from './components/ServicesList';

export default function Services() {
  return (
    <section id="services">
      <div className="bg-pshadow py-16 md:py-32 lg:py-44 ">
        <div className="px-4 text-left drop-shadow-xl sm:px-6 ">
          <div className="mx-auto lg:max-w-7xl xl:px-6">
            <div className="pb-12 sm:pb-16">
              <h2
                className="
                    mb-2 font-dm text-base font-bold uppercase
                    tracking-widest text-primary
          "
              >
                Serviços
              </h2>
              <h3
                className="
                    font-serif text-[22px] leading-8 text-black  
                    transition-all duration-300 sm:text-[26px] md:text-[32px]
                    lg:max-w-[600px] lg:text-[38px] lg:leading-[2.75rem]
          "
              >
                Experiência em multiplas áreas clínicas
              </h3>
            </div>
          </div>
          <ServicesList />
        </div>
        <BrowseServicesButton />
      </div>
    </section>
  );
}
