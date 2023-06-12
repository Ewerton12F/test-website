import { Service } from '../../../../../types';

import {
  Icon3dCubeSphere,
  IconBrandWhatsapp,
  IconX
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  setIsOpen: (id: number) => void;
}

export default function ServiceModal({
  service,
  isOpen,
  setIsOpen
}: ServiceModalProps) {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`
                  fixed top-0 left-0 right-0 
                  h-[100%] max-h-full z-50 w-full p-2 md:p-8
                  overflow-x-hidden overflow-y-auto inset-0 
                  bg-gray-700 bg-opacity-20 backdrop-blur-lg
          `}
        >
          <div
            className="
                    flex
                    h-[90%] translate-y-[4.5%]
                    max-w-2xl min-[375px]:mx-2 md:mx-10 lg:mx-auto
            "
          >
            <div
              className={`
                      md:flex h-[100%] m-2 md:m-0 max-h-full 
                      p-4 min-[375px]:p-6 md:p-8 lg:p-10
                      bg-primary bg-opacity-70 backdrop-blur-lg
                      border border-pshadow rounded-lg
                      overflow-hidden
                `}
            >
              <div
                className="
                        fixed top-4 right-4 
                        min-[375px]:top-6 min-[375px]:right-6 
                        md:top-8 md:right-8 lg:top-10 lg:right-10 
                        flex justify-center items-center 
                        h-6 w-6 md:h-10 md:w-10 
                        border rounded-full cursor-pointer
                "
                onClick={() => setIsOpen(service.id)}
              >
                <IconX size={20} strokeWidth={1} />
              </div>
              <div
                className={`
                          flex flex-col h-[100%]
                          justify-around
                    `}
              >
                <div className="flex gap-2 min-[375px]:gap-4 md:gap-8 w-full">
                  <div
                    className={`
                              self-end flex-none
                              flex items-center justify-center  
                              h-14 w-14 md:h-24 md:w-24 
                              min-w-[56px] md:min-w-[96px] rounded-xl bg-secondary
                              min-[375px]:h-16
                              min-[375px]:w-16
                              min-[375px]:min-w-[64px]
                      `}
                  >
                    <Icon3dCubeSphere
                      color="#02142E"
                      size={48}
                      strokeWidth={1}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <h4
                      className={`
                              self-end min-[425px]:self-center
                              text-start text-xl md:text-4xl leading-tight
                              font-lexend capitalize text-white
                      `}
                    >
                      {service.title}
                    </h4>
                  </div>
                </div>

                <div
                  className="
                            mx-auto text-sm md:text-lg 
                            font-jost text-left text-white
                    "
                >
                  {service.largedesc}
                </div>
                <button
                  className="
                            flex gap-2 items-center py-2 px-4 mx-auto
                            font-lexend cursor-pointer
                            text-lg normal-case text-zap
                            border border-zap rounded-lg
                    "
                >
                  <IconBrandWhatsapp size={24} strokeWidth={2} />
                  <p>Whatsapp</p>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
