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
            <ul className={`mx-3 flex flex-row flex-wrap`}>
              {services.map((service: any) => (
                <li key={service.id} className={`w-1/2`}>
                  <div
                    className={`
                      m-2 border
                      border-primary pt-5 
                      rounded-${coners[service.id % coners.length]}-none
                      rounded-lg
                    `}
                  >
                    <div
                      className={`
                        mx-auto flex h-14
                        w-14 items-center justify-center 
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
                        flex h-14 
                        w-auto items-center justify-center
                      `}
                    >
                      <a href="#">
                        <h4
                          className={`
                            mx-auto font-jost 
                            text-sm leading-tight text-primary
                          `}
                        >
                          {service.title}
                        </h4>
                        <p
                          className={`
                            font-Lexend
                            mx-5 
                            text-sm font-extralight text-gray-600
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
