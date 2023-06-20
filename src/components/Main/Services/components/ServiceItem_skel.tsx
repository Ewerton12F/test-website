import { HiOutlineCubeTransparent } from 'react-icons/hi';

export default function ServiceItemSkel() {
  return (
    <div
      className={`
                m-2 flex h-36 cursor-pointer flex-col items-center justify-center
                overflow-hidden rounded-md bg-pshadow px-2 py-4
                transition-all duration-300 hover:bg-secondary hover:text-primary
                hover:shadow-xl min-[375px]:px-10
                md:h-48 md:gap-2 md:px-20
                lg:flex-row lg:items-start lg:justify-start
                lg:gap-4 lg:px-5 lg:py-5
      `}
    >
      <div>
        <div
          className="
                flex 
                h-28 animate-pulse flex-col items-center justify-evenly
                md:h-48
                md:justify-center md:gap-4
                lg:mb-3 lg:h-16
                lg:flex-row lg:justify-start lg:gap-2"
        >
          <div
            className={`
                  mx-auto
                  flex h-14 w-14
                  flex-none items-center
                  justify-center lg:m-0 
        `}
          >
            <HiOutlineCubeTransparent size={45} />
          </div>
          <div
            className="
                    flex flex-col items-center
                    gap-2.5 lg:items-start lg:justify-center
            "
          >
            <h4
              className={`
                      h-3 w-14
                      animate-pulse rounded-full bg-gray-200
                      font-jost text-base 
                      capitalize leading-tight sm:text-lg md:text-2xl
                      lg:text-left 
            `}
            ></h4>
            <h4
              className={`
                      h-3 w-16
                      animate-pulse rounded-full bg-gray-200
                      font-jost text-base 
                      capitalize leading-tight sm:text-lg md:text-2xl
                      lg:text-left
            `}
            ></h4>
          </div>
        </div>
        <div
          className={`
                  hidden h-14 items-center
                  justify-center px-2 md:h-auto
                  lg:flex lg:flex-col
                  lg:items-start lg:justify-start`}
        >
          <p
            className={`
                        font-Lexend mb-2.5 
                        h-2 w-56
                        animate-pulse rounded-full bg-gray-200 text-left
                        text-sm normal-case min-[1152px]:w-56
                        min-[1280px]:w-64
              `}
          ></p>
          <p
            className={`
                        font-Lexend mb-2.5 
                        h-2 w-60
                        animate-pulse rounded-full bg-gray-200 text-left
                        text-sm normal-case min-[1152px]:w-64
                        min-[1280px]:w-72
              `}
          ></p>
          <p
            className={`
                        font-Lexend mb-2.5 
                        h-2 w-64
                        animate-pulse rounded-full bg-gray-200 text-left
                        text-sm normal-case min-[1152px]:w-72
                        min-[1280px]:w-80
              `}
          ></p>
        </div>
      </div>
    </div>
  );
}
