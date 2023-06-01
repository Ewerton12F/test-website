'use client';

import { useRef } from 'react';

import animationData from '../../../assets/under-maintenance.json';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export default function Blog() {
  const constructRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="bg-white mx-5 my-14">
      <div className="">
        <h2 className="text-center font-serif pb-3 text-3xl md:text-4xl text-primary">
          Artigos & Publicações
        </h2>
        <hr className="mx-auto w-24 h-px md:h-1 border-secondary md:bg-secondary mb-4 md:mb-5" />
      </div>
      <div className="flex gap-10 md:gap-32 my-10 items-center justify-center">
        <h3 className="text-3xl md:text-5xl md:leading-[4rem] text-primary font-jost">
          Em
          <br></br>
          breve
        </h3>
        <div className="md:hidden">
          <Lottie
            lottieRef={constructRef}
            animationData={animationData}
            style={{ height: '100px', width: '100px' }}
          />
        </div>
        <div className="hidden md:block">
          <Lottie
            lottieRef={constructRef}
            animationData={animationData}
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      </div>
    </div>
  );
}
