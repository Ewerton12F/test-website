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
                m-2 flex h-36 cursor-pointer flex-col items-center justify-center
                overflow-hidden rounded-md bg-pshadow px-2 py-4
                transition-all duration-300 hover:bg-secondary hover:text-primary
                hover:shadow-xl min-[375px]:px-10
                md:h-48 md:gap-2 md:px-20
                lg:flex-row lg:items-start lg:justify-start
                lg:gap-4 lg:px-5 lg:py-5
        `}
    >
      <div>
        <div
          className={`
                  flex h-28 flex-col items-center justify-evenly
                  md:h-48
                  md:justify-center md:gap-4
                  lg:mb-3 lg:h-16
                  lg:flex-row lg:justify-start lg:gap-2`}
        >
          <div
            className={`
                  mx-auto
                  flex h-14 w-14
                  flex-none items-center
                  justify-center lg:m-0 
            `}
          >
            <Icon3dCubeSphere size={48} strokeWidth={1} />
          </div>
          <h4
            className={`
                      flex h-10
                      items-center font-jost
                      text-base capitalize
                      leading-tight sm:text-lg md:h-16
                      md:text-2xl lg:pr-10 lg:text-left
            `}
          >
            {service.title}
          </h4>
        </div>
        <p
          className={`
                        hidden px-2 
                        text-left font-lexend 
                        text-sm normal-case
                        lg:block 
          `}
        >
          {service.smalldesc}
        </p>
      </div>
    </div>
  );
}
