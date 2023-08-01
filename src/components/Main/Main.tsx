import Navbar from '../Navbar/Navbar';
import Hero from './Hero/Hero';

export default function Main() {
  return (
    <main
      className={`
                  flex h-[770px] w-full flex-col justify-center
                  min-[375px]:h-[830px] min-[600px]:h-[800px] md:h-[1050px]
      `}
    >
      <video
        autoPlay
        loop
        muted
        className="
                  h-[770px] w-full object-cover min-[375px]:h-[830px] 
                  min-[600px]:h-[800px] md:h-[1050px]
        "
      >
        <source src="videobg.mp4" type="video/mp4" />
      </video>
      <div
        className="
                  absolute h-[770px] w-full backdrop-blur-xl
                  backdrop-brightness-50 min-[375px]:h-[830px] 
                  min-[600px]:h-[800px] md:h-[1050px]
        "
      >
        <Navbar />
        <Hero />
        <div
          className="
                    absolute bottom-[0px] z-0 h-[40px] w-full bg-gradient-to-t 
                  from-black drop-shadow-lg md:h-[80px]
          "
        ></div>
      </div>
    </main>
  );
}
