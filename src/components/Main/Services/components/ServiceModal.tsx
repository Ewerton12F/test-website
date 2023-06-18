import Link from 'next/link';

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
                  fixed inset-0 left-0 right-0 
                  top-0 z-50 h-[100%] max-h-full w-full overflow-y-auto
                  overflow-x-hidden bg-opacity-0 p-2 
                  md:p-8 
          `}
        >
          <div
            className="
                    flex
                    h-[90%] max-w-2xl
                    translate-y-[4.5%] min-[375px]:mx-2 md:mx-10 lg:mx-auto
            "
          >
            <div
              className={`
                      m-2 h-[100%] max-h-full overflow-hidden rounded-3xl 
                      bg-black bg-opacity-50 p-4
                      drop-shadow-lg backdrop-blur-md min-[375px]:p-6
                      md:m-0 md:flex md:p-8 lg:p-10


                `}
            >
              <div
                className="
                        fixed right-4 top-4 
                        flex h-6 
                        w-6 cursor-pointer items-center justify-center 
                        rounded-full bg-white bg-opacity-20 
                        duration-300 hover:bg-red-600 hover:drop-shadow-2xl min-[375px]:right-6 
                        min-[375px]:top-6 md:right-8
                        md:top-8 md:h-8
                        md:w-8
                        lg:right-10 lg:top-10

                "
                onClick={() => setIsOpen(service.id)}
              >
                <IconX size={18} strokeWidth={1} />
              </div>
              <div
                className={`
                          flex h-[100%] flex-col
                          justify-around
                    `}
              >
                <div className="flex w-full items-center gap-2 min-[375px]:gap-4">
                  <div
                    className={`
                              flex h-14
                              w-14 min-w-[56px] flex-none  
                              items-center justify-center rounded-xl bg-secondary 
                              p-2 min-[375px]:h-16 
                              min-[375px]:w-16
                              min-[375px]:min-w-[64px]
                              md:h-24
                              md:w-24
                              md:min-w-[96px] 

                      `}
                  >
                    <Icon3dCubeSphere
                      color="#ffffff"
                      size={900}
                      strokeWidth={1}
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <h4
                      className={`
                              self-center text-start font-lexend
                              text-xl capitalize leading-tight 
                              text-white min-[425px]:text-2xl md:text-3xl
                      `}
                    >
                      {service.title}
                    </h4>
                  </div>
                </div>

                <div
                  className="
                            mx-auto 
                            text-left font-jost 
                            text-sm text-white
                            min-[425px]:text-lg md:text-xl lg:text-2xl
                    "
                >
                  {service.largedesc}
                </div>
                <Link
                  target="_blank"
                  href={`https://wa.me//5584996152546?text=Tenho%20interesse%20em%20${service.title}`}
                >
                  <button
                    className="
                            mx-auto flex cursor-pointer items-center gap-2 rounded-xl
                            bg-white bg-opacity-20
                            px-5 py-3 font-lexend 
                            text-lg normal-case text-white
                            duration-300 hover:bg-zap

                    "
                  >
                    <IconBrandWhatsapp size={24} strokeWidth={2} />
                    <p className="leading-tight">Whatsapp</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
