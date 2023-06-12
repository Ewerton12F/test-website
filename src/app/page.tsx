import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Main/Blog/Blog';
import Hero from '@/components/Main/Hero/Hero';
import Profile from '@/components/Main/Profile/Profile';
import Services from '@/components/Main/Services/Services';
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
          <Services />
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
