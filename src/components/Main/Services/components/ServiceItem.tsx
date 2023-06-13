import { Service } from '../../../../../types';

import { Icon3dCubeSphere } from '@tabler/icons-react';
interface ServiceItemProps {
  service: Service;
  isOpen: boolean;
  setIsOpen: (id: number) => void;
  setSelected: (service: Service) => void;
}

export default function ServiceItem({
  service,
  setIsOpen,
  setSelected
}: ServiceItemProps) {
  return (
    <div
      onClick={() => {
        setSelected(service);
        setIsOpen(service.id);
      }}
      className={`
                m-2 py-4 min-[375px]:px-2 md:px-20 lg:py-5 lg:px-5
                md:flex md:flex-col md:gap-2 lg:gap-4 lg:flex-row
                md:items-center lg:justify-start lg:items-start
                h-36 md:h-40 lg:h-44 
                bg-pshadow hover:bg-secondary hover:text-primary
                rounded-md cursor-pointer overflow-hidden
                hover:shadow-xl transition-all duration-300
        `}
    >
      <div
        className={`
                  flex mx-auto lg:m-0
                  h-14 w-14
                  items-center justify-center 
                  
        `}
      >
        <Icon3dCubeSphere size={48} strokeWidth={1} />
      </div>
      <div
        className={`
                  flex lg:flex-col
                  h-14 md:h-auto
                  items-center lg:items-start
                  justify-center lg:justify-start`}
      >
        <h4
          className={`
                      leading-tight text-base
                      sm:text-lg md:text-2xl lg:text-left
                      font-jost capitalize 
            `}
        >
          {service.title}
        </h4>
        <p
          className={`
                        hidden lg:block 
                        font-Lexend text-left 
                        text-sm normal-case
              `}
        >
          {service.smalldesc}
        </p>
      </div>
    </div>
  );
}
