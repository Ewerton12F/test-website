"use client";
import { IconArrowLeft, Icon3dCubeSphere } from "@tabler/icons-react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import Service from "./service";
import getAllServices from "@/lib/getAllServices";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default async function ServiceTable(props: any) {
  const servicesData = getAllServices();
  const services = await servicesData;

  const coners: string[][] = [["br"], ["bl"], ["tr"], ["tl"]];

  let oneservice: any = [];
  const fourservices: any = [];

  const qttslides: number = Math.ceil(services.length / 4);

  let count: number = 0;

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
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{
          // @ts-expect-error
          "--swiper-pagination-color": "#02142E",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-padding": "16px",
          "--swiper-pagination-bottom": "0px",
        }}
      >
        {fourservices.map((services: any) => (
          <SwiperSlide key={services} className="mb-8">
            <ul className={`flex flex-row flex-wrap mx-3`}>
              {services.map((service: any) => (
                <li key={service.id} className={`w-1/2`}>
                  <div
                    className={`
                      m-2 pt-5
                      border border-primary 
                      rounded-${coners[service.id % coners.length]}-none
                      rounded-lg
                    `}
                  >
                    <div
                      className={`
                        flex justify-center items-center
                        w-14 h-14 mx-auto 
                        rounded-xl bg-primary
                      `}
                    >
                      <Icon3dCubeSphere
                        color="#FFC759"
                        size={48}
                        strokeWidth={1}
                      />
                    </div>
                    <div
                      className={`
                        w-auto h-14 
                        flex items-center justify-center
                      `}
                    >
                      <a href="#">
                        <h4
                          className={`
                            mx-auto leading-tight 
                            font-Lexend text-sm text-primary
                          `}
                        >
                          {service.title}
                        </h4>
                        <p
                          className={`
                            mx-5
                            text-sm 
                            font-Lexend font-extralight text-gray-600
                          `}
                        ></p>
                      </a>
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
