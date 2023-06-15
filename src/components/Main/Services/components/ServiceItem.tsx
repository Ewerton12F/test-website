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
                m-2 py-4 px-2 min-[375px]:px-10 md:px-20 lg:py-5 lg:px-5
                flex flex-col md:gap-2 lg:gap-4 lg:flex-row
                items-center justify-center lg:justify-start lg:items-start
                h-36 md:h-48
                bg-pshadow hover:bg-secondary hover:text-primary
                rounded-md cursor-pointer overflow-hidden
                hover:shadow-xl transition-all duration-300
        `}
    >
      <div>
        <div
          className={`
                  flex flex-col lg:flex-row lg:gap-2 md:gap-4
                  lg:mb-3
                  h-28 md:h-48
                  items-center lg:h-16
                  justify-evenly md:justify-center lg:justify-start`}
        >
          <div
            className={`
                  flex-none
                  flex mx-auto lg:m-0
                  h-14 w-14
                  items-center justify-center 
            `}
          >
            <Icon3dCubeSphere size={48} strokeWidth={1} />
          </div>
          <h4
            className={`
                      flex items-center
                      h-10 md:h-16
                      leading-tight text-base
                      sm:text-lg md:text-2xl lg:text-left
                      font-jost capitalize lg:pr-10
            `}
          >
            {service.title}
          </h4>
        </div>
        <p
          className={`
                        hidden lg:block 
                        font-lexend text-left 
                        text-sm normal-case
                        px-2 
          `}
        >
          {service.smalldesc}
        </p>
      </div>
    </div>
  );
}
