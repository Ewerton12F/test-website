import ServicesList from './components/ServicesList';

export default function Services() {
  return (
    <>
      <div
        id="services"
        className="mx-5 mt-10 bg-paper px-5 pb-4 text-center drop-shadow-xl md:mx-auto md:mt-0 md:w-3/4 md:max-w-5xl md:p-8 md:px-12"
      >
        <div className="px-2 pb-5 pt-7 md:px-7">
          <h2 className="pb-3 font-serif text-2xl text-primary md:text-3xl">
            Serviços Oferecidos
          </h2>
          <p className="px-2 font-lexend text-[12px] leading-[14px] text-primary md:my-2 md:text-[16px] md:leading-tight">
            Selecione um serviço para saber mais e entrar em contato diretamente
            pelo Whatsapp
          </p>
        </div>
        <ServicesList />
      </div>
    </>
  );
}
