import Hero from './components/Hero';
import Latest from './components/Latest';
import Text from './components/Text';
import Navbar from '@/components/Navbar/Navbar';

export default function Main() {
  return (
    <>
      <main
        className={`
      bg-gradient-to-b from-primary from-85% to-white to-0% 
                  sm:from-85%
                  md:from-85%
      `}
      >
        <Navbar />
        <Hero />
      </main>
      <Text />
      <Latest />
    </>
  );
}
