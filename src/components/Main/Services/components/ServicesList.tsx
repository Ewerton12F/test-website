'use client';

import { Service } from '../../../../../types';
import ServiceItem from './ServiceItem';
import ServiceItemSkel from './ServiceItem_skel';

import useFetch from '@/hooks/useFetch';
import { Grid, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ServicesList() {
  const { data: services, isFetching } = useFetch<Service[]>(
    'https://teste-server-2.vercel.app/api/services-list'
  );

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={false}
        spaceBetween={10}
        grid={{ rows: 1 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: { rows: 2, fill: 'row' },
            spaceBetween: 40
          }
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        modules={[Grid, Navigation, Pagination]}
        style={{
          // @ts-expect-error TODO
          '--swiper-pagination-color': '#FFCA42',
          '--swiper-pagination-bullet-inactive-color': '#fff',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '12px',
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
            <ServiceItem service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
