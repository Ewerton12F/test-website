import Service from "./service";
import ServiceTable from "./service_table";

export default function ServicesCard(props: any) {
  return (
    <div className="bg-old-paper m-5 text-center pb-4">
      <div className="px-7 pt-7 pb-5">
        <h2 className="text-2xl pb-3 font-DM text-primary">Offered Services</h2>
        <p className="text-[11px] leading-[14px] text-gray-600 px-2">
          Selecione um serviço para saber mais e entrar em contato diretamente
          pelo Whatsapp
        </p>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <ServiceTable />
    </div>
  );
}    
