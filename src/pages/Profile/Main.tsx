import Experience from './components/Experience';
import Hero from './components/Hero';
import SecondBlock from './components/SecondBlock';
import Specialities from './components/Specialities';
import Values from './components/Values';
import Navbar from '@/components/Navbar/Navbar';

export default function Main() {
  return (
    <>
      <main
        className={`
      bg-gradient-to-b from-primary from-30% to-pshadow to-0% 
                  sm:from-30%
                  md:from-35%
                  lg:from-40%
      `}
      >
        <Navbar />
        <Hero />
        <SecondBlock />
      </main>
      <Values />
      <Experience />
      <Specialities />
    </>
  );
}
