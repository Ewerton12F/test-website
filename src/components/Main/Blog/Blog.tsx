'use client';

import { useRef } from 'react';

import animationData from '../../../assets/under-maintenance.json';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export default function Blog() {
  const constructRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div id="blog" className="mx-5 my-14 bg-white">
      <div className="">
        <h2 className="pb-3 text-center font-serif text-3xl text-primary md:text-4xl">
          Artigos & Publicações
        </h2>
        <hr className="mx-auto mb-4 h-px w-24 border-secondary md:mb-5 md:h-1 md:bg-secondary" />
      </div>
      <div className="my-10 flex items-center justify-center gap-10 md:gap-32">
        <h3 className="font-jost text-3xl text-primary md:text-5xl md:leading-[4rem]">
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
