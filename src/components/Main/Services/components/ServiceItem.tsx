import Image from 'next/image';

import { Service } from '../../../../../types';

type ServiceItemProps = {
  service: Service;
};

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div
      className={`
                group relative h-96 overflow-hidden rounded-xl 
                border border-zinc-500 bg-cover bg-center transition-all 
                duration-300 hover:border-white hover:shadow-xl 
                min-[375px]:h-[500px]
      `}
    >
      <Image
        className="h-full w-full object-cover"
        src={`/services/services_${service.title}.png`}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div
        className={`
                  absolute bottom-[0px] h-[136px] w-full bg-gradient-to-t 
                  from-zinc-900 drop-shadow-lg transition-all 
                  hover:backdrop-blur-lg group-hover:h-full 
                  min-[375px]:h-36
                  min-[425px]:h-40
                  md:h-[144px]
                  md:justify-center lg:h-[160px]
                  lg:gap-2 lg:px-5
        `}
      >
        <h4
          className={`
                    mt-10 flex h-14 items-center px-5 pr-52 text-left 
                    font-jost text-2xl capitalize leading-tight 
                    group-hover:h-fit 
                    min-[375px]:h-16 min-[375px]:text-3xl
                    min-[425px]:h-20 min-[425px]:text-4xl 
                    md:h-16 md:text-3xl 
                    lg:h-20 lg:text-4xl
            `}
        >
          {service.title}
        </h4>
        <p
          className={`
                    mt-5 px-5 text-left font-jost text-sm normal-case 
                    text-zinc-200 opacity-0 transition-all duration-300 
                    group-hover:opacity-100 min-[375px]:text-lg
                    min-[425px]:text-xl min-[525px]:text-2xl md:text-xl lg:text-2xl
          `}
        >
          {service.largedesc}
        </p>
      </div>
    </div>
  );
}
