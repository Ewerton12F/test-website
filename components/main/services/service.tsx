"use client";

import { IconArrowLeft, Icon3dCubeSphere } from "@tabler/icons-react";
import { motion } from "framer-motion";

import getAllServices from "@/lib/getAllServices";

export default async function Service() {
  const servicesData = getAllServices();
  const services = await servicesData;
  const coners: string[][] = [["br"], ["bl"], ["tr"], ["tl"]];

  return (
    <>
      {services.map((service) => (
        <li
          key={service.id}
          className={`w-1/2`}
        >
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
              <Icon3dCubeSphere color="#FFC759" size={48} strokeWidth={1} />
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
    </>
  );
}
