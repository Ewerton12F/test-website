'use client';
// register Swiper custom elements
register();

import getAllServices from '../../../../lib/getAllServices';

import { Icon3dCubeSphere } from '@tabler/icons-react';
import { Pagination, Virtual } from 'swiper';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

export default async function ServiceTable(props: any) {
  const servicesData = getAllServices();
  const services = await servicesData;

  const coners: string[][] = [['br'], ['bl'], ['tr'], ['tl']];

  let oneservice: any = [];
  const fourservices: any = [];

  const qttslides: number = Math.ceil(services.length / 4);

  const count = 0;

  for (let i = 0; i <= services.length; i++) {
    oneservice.push(services[i]);

    if (oneservice.length === 4) {
      fourservices.push(oneservice);
      oneservice = [];
    } else if (services[i] === services[services.length - 1]) {
      fourservices.push(oneservice);
    }
  }

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Virtual]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{
          // @ts-expect-error TODO
          '--swiper-pagination-color': '#02142E',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '8px',
          '--swiper-pagination-bullet-horizontal-gap': '6px',
          '--swiper-padding': '16px',
          '--swiper-pagination-bottom': '0px'
        }}
        virtual
      >
        {fourservices.map((services: any) => (
          <SwiperSlide
            key={services}
            virtualIndex={services.id}
            className="mb-8"
          >
            <ul className={`mx-3 flex flex-row flex-wrap`}>
              {services.map((service: any) => (
                <li key={service.id} className={`w-1/2`}>
                  <div
                    className={`
                      m-2 border md:flex
                      border-primary pt-5 md:p-6
                      rounded-${coners[service.id % coners.length]}-none
                      rounded-lg
                    `}
                  >
                    <div
                      className={`
                        flex mx-auto md:m-0 md:min-w-[96px]
                        h-14 w-14 md:h-24 md:w-24
                        items-center justify-center 
                        rounded-xl bg-primary
                      `}
                    >
                      <Icon3dCubeSphere
                        color="#FFC759"
                        size={48}
                        strokeWidth={1}
                      />
                    </div>
                    <div className="md:ml-5 md:w-100%">
                      <div
                        className={`
                          flex md:flex-col
                          h-14 
                          w-auto 
                          items-center md:items-start
                          justify-center md:justify-start
                        `}
                      >
                        <h4
                          className={`
                              mx-auto md:mx-0
                              text-sm md:text-2xl 
                              font-jost capitalize text-primary
                            `}
                        >
                          {service.title}
                        </h4>
                        <p
                          className={`
                              hidden md:flex flex-wrap
                              font-Lexend text-left 
                              text-sm normal-case text-primary
                            `}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
