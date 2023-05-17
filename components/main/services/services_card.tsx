import Service from "./service";
import ServiceTable from "./service_table";

export default function ServicesCard(props: any) {
  return (
    <div className="m-5 bg-old-paper pb-4 text-center">
      <div className="px-7 pb-5 pt-7">
        <h2 className="font-serif pb-3 text-2xl text-primary">Offered Services</h2>
        <p className="font-lexend px-2 text-[11px] leading-[14px] text-gray-600">
          Selecione um serviço para saber mais e entrar em contato diretamente
          pelo Whatsapp
        </p>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <ServiceTable />
    </div>
  );
}
