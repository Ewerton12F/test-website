'use client';
// register Swiper custom elements
register();

import React, { useEffect, useState } from 'react';

import { Service } from '../../../../types';

import useFetch from '@/hooks/useFetch';
import { Icon3dCubeSphere } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Grid, Navigation, Pagination } from 'swiper';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ServiceTable(props: any) {
  const [services, setServices] = useState<Service[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch('https://teste-server.vercel.app/api/services-list')
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Swiper
      id="swiper"
      slidesPerView={2}
      spaceBetween={0}
      grid={{
        rows: 2,
        fill: 'row'
      }}
      pagination={{
        clickable: true
      }}
      modules={[Grid, Pagination]}
      style={{
        // @ts-expect-error TODO
        '--swiper-pagination-color': '#02142E',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '8px',
        '--swiper-pagination-bullet-horizontal-gap': '6px'
      }}
    >
      {services.map((service) => {
        return (
          <SwiperSlide
            onClick={() => setIsOpen(!isOpen)}
            key={service.id}
            className=""
          >
            <motion.div
              className={`
                      m-2 border md:border-2 md:flex
                      border-pshadow pt-5 md:p-6
                      rounded-lg cursor-pointer
                    `}
            >
              <motion.div
                className={`
                        flex mx-auto md:m-0 md:min-w-[96px]
                        h-14 w-14 md:h-24 md:w-24
                        items-center justify-center 
                        rounded-xl bg-pshadow 
                      `}
              >
                <Icon3dCubeSphere color="#FFC759" size={48} strokeWidth={1} />
              </motion.div>
              <motion.div className="md:ml-5 md:w-100%">
                <motion.div
                  className={`
                          flex md:flex-col
                          h-14 
                          w-auto 
                          items-center md:items-start
                          justify-center md:justify-start
                        `}
                >
                  <motion.h4
                    className={`
                              mx-auto md:mx-0
                              text-sm md:text-2xl 
                              font-jost capitalize text-pshadow
                            `}
                  >
                    {service.title}
                  </motion.h4>
                  {!isOpen && (
                    <motion.p
                      className={`
                              hidden md:flex flex-wrap
                              font-Lexend text-left 
                              text-sm normal-case text-pshadow
                            `}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </motion.p>
                  )}
                  {isOpen && (
                    <motion.p className="text-pshadow">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perferendis accusamus nobis ullam eligendi incidunt. Quis
                      dolor impedit maxime sunt officia.
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
