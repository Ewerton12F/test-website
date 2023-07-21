import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Main/Blog/Blog';
import Main from '@/components/Main/Main';
import Profile from '@/components/Main/Profile/Profile';
import Services from '@/components/Main/Services/Services';

export default function Home() {
  return (
    <>
      <Main />
      <Services />
      <Profile />
      <Blog />
      <Footer />
    </>
  );
}
