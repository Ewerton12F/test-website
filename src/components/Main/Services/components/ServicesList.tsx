'use client';

import { Service } from '../../../../../types';
import ServiceItem from './ServiceItem';
import ServiceItemSkel from './ServiceItem_skel';

import useFetch from '@/hooks/useFetch';
import { Autoplay, Grid, Navigation, Pagination } from 'swiper';
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
        slidesPerView={'auto'}
        navigation={true}
        spaceBetween={24}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4
          },
          2000: {
            slidesPerView: 5
          },
          2500: {
            slidesPerView: 6
          },
          3000: {
            slidesPerView: 7
          },
          3500: {
            slidesPerView: 8
          },
          4000: {
            slidesPerView: 9
          },
          4500: {
            slidesPerView: 10
          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Grid, Navigation]}
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
