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
                md:flex md:gap-4 md:justify-start md:items-center
                m-2 pt-5 md:py-8 md:px-6
                border border-pshadow overflow-hidden
                rounded-lg cursor-pointer
                bg-white bg-opacity-20 backdrop-blur-lg 
                hover:shadow-lg transition-all duration-200
        `}
    >
      <div
        className={`
                  flex mx-auto md:m-0 md:min-w-[96px]
                  h-14 w-14 md:h-24 md:w-24
                  items-center justify-center 
                  rounded-xl bg-pshadow 
        `}
      >
        <Icon3dCubeSphere color="#FFC759" size={48} strokeWidth={1} />
      </div>
      <div
        className={`
                  flex lg:flex-col
                  h-14 md:h-auto
                  items-center md:items-start
                  justify-center md:justify-start`}
      >
        <h4
          className={`
                      leading-tight text-base 
                      sm:text-lg md:text-2xl md:text-left
                      font-jost capitalize text-pshadow
            `}
        >
          {service.title}
        </h4>
        <p
          className={`
                        hidden xl:block
                        font-Lexend text-left 
                        text-sm normal-case text-pshadow
              `}
        >
          {service.smalldesc}
        </p>
      </div>
    </div>
  );
}
