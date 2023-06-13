'use client';
import { useState } from 'react';

import { Service } from '../../../../../types';
import ServiceItem from './ServiceItem';
import ServiceItemSkel from './ServiceItem_skel';
import ServiceModal from './ServiceModal';

import useFetch from '@/hooks/useFetch';
import { Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const serv: Service = {
  id: 1,
  title: 'test1',
  smalldesc: 'TEST DESC L 1',
  largedesc: 'TEST DESC S 1',
  icon: 'https://teste-server.vercel.app/media/services/test-svg_uDrELFh.svg'
};

export default function ServicesList() {
  const { data: services, isFetching } = useFetch<Service[]>(
    'https://teste-server.vercel.app/api/services-list'
  );
  const [service, setSelectedService] = useState<Service>(serv);
  const [open, setOpen] = useState<number>(0);

  function setServiceModal(serv: Service) {
    setSelectedService(serv);
  }

  function setIsOpen(id: number) {
    if (id === open) {
      setOpen(-1);
    } else {
      setOpen(id);
    }
  }

  return (
    <>
      <ServiceModal
        service={service}
        isOpen={open === service.id}
        setIsOpen={setIsOpen}
      />

      <Swiper
        className="md:mt-5"
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
        {isFetching &&
          [1, 2, 3, 4].map((skel) => (
            <SwiperSlide key={skel}>
              <ServiceItemSkel />
            </SwiperSlide>
          ))}
        {services?.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceItem
              service={service}
              isOpen={open === service.id}
              setIsOpen={setIsOpen}
              setSelected={setServiceModal}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
