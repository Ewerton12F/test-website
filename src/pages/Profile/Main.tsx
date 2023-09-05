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
      bg-gradient-to-b from-primary from-35% to-pshadow to-0% 
                  sm:from-40%
                  md:from-45%
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
