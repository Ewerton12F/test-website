import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Main/Blog/Blog';
import Contact from '@/components/Main/Contact/Contact';
import Hero from '@/components/Main/Hero/Hero';
import Profile from '@/components/Main/Profile/Profile';
import Services from '@/components/Main/Services/Services';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <main
        className={`
        flex flex-col justify-center
        bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary to-sky-600
        pb-10 md:from-55%
        `}
      >
        <Navbar />
        <Hero />
        <Services />
      </main>
      <Contact />
      <div className="bg-[#F4F8FF]">
        <Profile />
      </div>
      <section>
        <Blog />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
