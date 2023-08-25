import Navbar from '../Navbar/Navbar';
import Characteristics from './Characteristics/Characteristics';
import Hero from './Hero/Hero';

export default function Main() {
  return (
    <main
      className={`
                  bg-gradient-to-b from-primary from-50% to-pshadow to-0% 
                  sm:from-60%
                  md:from-70%
                  lg:from-65%
      `}
    >
      <Navbar />
      <Hero />
      <Characteristics />
    </main>
  );
}
