import Service from "./service";
import ServiceTable from "./service_table";

export default function ServicesCard() {
    return (
      <div className="bg-old-paper m-5 text-center">
        <div className="px-7 pt-7 pb-5">
          <h2 className="text-2xl pb-3 font-DM text-primary">
            Offered Services
          </h2>
          <p className="text-[11px] leading-[14px] text-gray-600 px-2">
            Selecione um serviço para saber mais e entrar em contato diretamente
            pelo Whatsapp
          </p>
        </div>

        <ServiceTable />
      </div>
    );
}    

/* export async function getStaticProps() {

    return {
        props: {
            services: [
                {
                    "id": 1,
                    "title": "Serviço 1",
                    "smalldesc": "Descrição curta: 1",
                    "largedesc": "Descrição longa: 1",
                    "icon": "http://127.0.0.1:8000/media/services/minimal-svgrepo-com.svg"
                }
            ]
        },
    }
} */
/* 
export default Home */