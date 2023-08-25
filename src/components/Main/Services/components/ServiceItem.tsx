import Link from 'next/link';

import { Service } from '../../../../../types';

type ServiceItemProps = {
  service: Service;
};

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div>
      <div
        className={`
                  border border-zinc-300 bg-white px-4 
                  text-center sm:px-8 
        `}
      >
        <div
          className="
                  mx-auto mt-10 h-24 w-24 bg-primary opacity-30 
                  md:mt-14 md:h-28 md:w-28
        "
        ></div>
        <h4
          className={`
                    mt-5 flex h-10 items-center justify-center
                    font-serif text-xl capitalize leading-tight
                    text-graybluedark sm:text-[22px] 
                    md:mt-7 md:h-16 md:text-[26px]
            `}
        >
          {service.title}
        </h4>
        <p
          className={`
                    mb-4 mt-3 flex h-32 items-start justify-center font-jost 
                    text-lg normal-case text-grayblue 
                    sm:h-24 md:h-32 lg:h-40
          `}
        >
          {service.smalldesc}
        </p>
        <div className="pb-14">
          <Link
            href={'/'}
            className="
                    font-dm uppercase tracking-widest
                  text-primary underline underline-offset-8
        "
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}
