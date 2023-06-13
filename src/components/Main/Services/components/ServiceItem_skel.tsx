import { Icon3dCubeSphere } from '@tabler/icons-react';

export default function ServiceItemSkel() {
  return (
    <div
      className={`
                m-2 py-4 px-2 min-[375px]:px-10 md:px-20 lg:py-5 lg:px-5
                md:flex md:flex-col md:gap-2 lg:gap-4 lg:flex-row
                md:items-center lg:justify-start lg:items-start
                h-36 md:h-44 lg:h-44 
                bg-pshadow hover:bg-secondary hover:text-primary
                rounded-md cursor-pointer overflow-hidden
                hover:shadow-xl transition-all duration-300
        `}
    >
      <div className="animate-pulse">
        <div
          className={`
        flex mx-auto lg:m-0
        h-14 w-14
        items-center justify-center 
        `}
        >
          <Icon3dCubeSphere size={48} strokeWidth={1} />
        </div>
      </div>
      <div
        className={`
                  flex lg:flex-col
                  h-14 md:h-auto
                  items-center lg:items-start
                  justify-center lg:justify-start`}
      >
        <div className="flex flex-col items-center lg:items-start">
          <h4
            className={`
                      leading-tight text-base
                      sm:text-lg md:text-2xl lg:text-left
                      font-jost capitalize 
                      h-2 w-14 bg-gray-200 rounded-full mb-2.5
                      animate-pulse
            `}
          ></h4>
          <h4
            className={`
                      leading-tight text-base
                      sm:text-lg md:text-2xl lg:text-left
                      font-jost capitalize 
                      h-2 w-16 bg-gray-200 rounded-full mb-2.5
                      animate-pulse
            `}
          ></h4>
        </div>
        <p
          className={`
                        hidden lg:block 
                        font-Lexend text-left 
                        text-sm normal-case
                        h-2 w-36 bg-gray-200 rounded-full mb-2.5
                        animate-pulse
              `}
        ></p>
        <p
          className={`
                        hidden lg:block 
                        font-Lexend text-left 
                        text-sm normal-case
                        h-2 w-40 bg-gray-200 rounded-full mb-2.5
                        animate-pulse
              `}
        ></p>
        <p
          className={`
                        hidden lg:block 
                        font-Lexend text-left 
                        text-sm normal-case
                        h-2 w-44 bg-gray-200 rounded-full mb-2.5
                        animate-pulse
              `}
        ></p>
      </div>
    </div>
  );
}
