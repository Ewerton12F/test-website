import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Main/Blog/Blog';
import Hero from '@/components/Main/Hero/Hero';
import Profile from '@/components/Main/Profile/Profile';
import ServicesCard from '@/components/Main/Services/ServicesCard';
import ServiceTable from '@/components/Main/Services/ServiceTable';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={`
        flex flex-col justify-center
        bg-gradient-to-b 
        from-primary from-25% md:from-35% to-zinc-200 to-0% 
      `}
      >
        <header>
          <Hero />
        </header>
        <section>
          <ServicesCard>
            <ServiceTable />
          </ServicesCard>
        </section>
        <section>
          <Profile />
        </section>
      </main>
      <section>
        <Blog />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
