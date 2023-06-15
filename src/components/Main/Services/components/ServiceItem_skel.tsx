import { Icon3dCubeSphere } from '@tabler/icons-react';

export default function ServiceItemSkel() {
  return (
    <div
      className={`
                m-2 py-4 px-2 min-[375px]:px-10 md:px-20 lg:py-5 lg:px-5
                flex flex-col md:gap-2 lg:gap-4 lg:flex-row
                items-center justify-center lg:justify-start lg:items-start
                h-36 md:h-48
                bg-pshadow hover:bg-secondary hover:text-primary
                rounded-md cursor-pointer overflow-hidden
                hover:shadow-xl transition-all duration-300
      `}
    >
      <div>
        <div
          className="
                animate-pulse 
                flex flex-col lg:flex-row lg:gap-2 md:gap-4
                lg:mb-3
                h-28 md:h-48
                items-center lg:h-16
                justify-evenly md:justify-center lg:justify-start"
        >
          <div
            className={`
                  flex-none
                  flex mx-auto lg:m-0
                  h-14 w-14
                  items-center justify-center 
        `}
          >
            <Icon3dCubeSphere size={48} strokeWidth={1} />
          </div>
          <div
            className="
                    flex flex-col gap-2.5
                    items-center lg:items-start lg:justify-center
            "
          >
            <h4
              className={`
                      leading-tight text-base
                      sm:text-lg md:text-2xl lg:text-left
                      font-jost capitalize 
                      h-3 w-14 bg-gray-200 rounded-full
                      animate-pulse 
            `}
            ></h4>
            <h4
              className={`
                      leading-tight text-base
                      sm:text-lg md:text-2xl lg:text-left
                      font-jost capitalize 
                      h-3 w-16 bg-gray-200 rounded-full
                      animate-pulse
            `}
            ></h4>
          </div>
        </div>
        <div
          className={`
                  hidden lg:flex lg:flex-col
                  h-14 md:h-auto px-2
                  items-center lg:items-start
                  justify-center lg:justify-start`}
        >
          <p
            className={`
                        font-Lexend text-left 
                        text-sm normal-case
                        h-2 w-56 min-[1152px]:w-56 min-[1280px]:w-64
                        bg-gray-200 rounded-full mb-2.5
                        animate-pulse
              `}
          ></p>
          <p
            className={`
                        font-Lexend text-left 
                        text-sm normal-case
                        h-2 w-60 min-[1152px]:w-64 min-[1280px]:w-72
                        bg-gray-200 rounded-full mb-2.5
                        animate-pulse
              `}
          ></p>
          <p
            className={`
                        font-Lexend text-left 
                        text-sm normal-case
                        h-2 w-64 min-[1152px]:w-72 min-[1280px]:w-80
                        bg-gray-200 rounded-full mb-2.5
                        animate-pulse
              `}
          ></p>
        </div>
      </div>
    </div>
  );
}
