import ServicesList from './components/ServicesList';

export default function Services() {
  return (
    <>
      <div className="mt-10 md:mt-0 mx-5 md:mx-auto md:w-3/4 md:max-w-5xl pb-4 px-5 md:p-8 md:px-12 bg-old-paper text-center drop-shadow-xl">
        <div className="px-2 md:px-7 pb-5 pt-7">
          <h2 className="font-serif pb-3 text-2xl md:text-3xl text-primary">
            Serviços Oferecidos
          </h2>
          <p className="font-lexend px-2 text-[12px] md:text-[16px] md:my-2 leading-[14px] text-primary">
            Selecione um serviço para saber mais e entrar em contato diretamente
            pelo Whatsapp
          </p>
        </div>
        <ServicesList />
      </div>
    </>
  );
}
