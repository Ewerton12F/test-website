import { GetStaticProps } from "next";
import Image from "next/image";

interface ServicesProps {
  services: Array<string>;
}

export default async function Service() {
  const res = await fetch(
    "https://teste-server-production.up.railway.app/api/services-list"
  );
  const services = await res.json();

  return (
    <li className="">
      <div className="flex flex-col pb-7">
        {
          <div>
            {services?.map((service) => (
              <div
                key={service.id}
                className="border border-primary rounded-xl mt-4 pt-5"
              >
                <div className="bg-primary h-16 w-16 mx-auto rounded-xl flex justify-center items-center">
                  <Image src={service.icon} width={40} height={40} alt="icon" />
                </div>
                <a href="#">
                  <h4 className="p-5 font-Lexend text-md text-primary">
                    {service.title}
                  </h4>
                  <p className="text-sm mx-5 font-Lexend font-extralight text-gray-600"></p>
                </a>
              </div>
            ))}
          </div>
        }
      </div>
    </li>
  );
}
