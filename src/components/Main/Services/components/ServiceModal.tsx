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
                  fixed top-0 left-0 right-0 
                  h-[100%] max-h-full z-50 w-full p-2 md:p-8
                  overflow-x-hidden overflow-y-auto inset-0 
                  bg-opacity-0 
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
                      bg-zinc-600 bg-opacity-70 backdrop-blur-md
                      overflow-hidden rounded-3xl
                `}
            >
              <div
                className="
                        fixed top-4 right-4 
                        min-[375px]:top-6 min-[375px]:right-6 
                        md:top-8 md:right-8 lg:top-10 lg:right-10 
                        flex justify-center items-center 
                        h-6 w-6 md:h-8 md:w-8 
                        rounded-full cursor-pointer
                        hover:bg-red-600 duration-300
                        hover:drop-shadow-2xl
                        bg-white bg-opacity-20

                "
                onClick={() => setIsOpen(service.id)}
              >
                <IconX size={18} strokeWidth={1} />
              </div>
              <div
                className={`
                          flex flex-col h-[100%]
                          justify-around
                    `}
              >
                <div className="flex items-center gap-2 min-[375px]:gap-4 w-full">
                  <div
                    className={`
                              flex-none p-2
                              flex items-center justify-center  
                              h-14 w-14 md:h-24 md:w-24 
                              min-w-[56px] md:min-w-[96px] 
                              min-[375px]:h-16
                              min-[375px]:w-16
                              min-[375px]:min-w-[64px]
                              rounded-xl
                              bg-secondary 

                      `}
                  >
                    <Icon3dCubeSphere
                      color="#ffffff"
                      size={900}
                      strokeWidth={1}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <h4
                      className={`
                              self-center text-start leading-tight
                              text-xl min-[425px]:text-2xl md:text-3xl 
                              font-lexend capitalize text-white
                      `}
                    >
                      {service.title}
                    </h4>
                  </div>
                </div>

                <div
                  className="
                            mx-auto 
                            text-sm min-[425px]:text-lg 
                            md:text-xl lg:text-2xl
                            font-jost text-left text-white
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
                            flex gap-2 items-center py-2 px-4 mx-auto
                            font-lexend cursor-pointer
                            text-lg normal-case text-white 
                            hover:bg-zap rounded-xl duration-300
                            bg-white bg-opacity-20

                    "
                  >
                    <IconBrandWhatsapp size={24} strokeWidth={2} />
                    <p>Whatsapp</p>
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
