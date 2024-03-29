import Appointment from '@/components/Main/Appointment/Appointment';
import Blog from '@/components/Main/Blog/Blog';
import Main from '@/components/Main/Main';
import Profile from '@/components/Main/Profile/Profile';
import Services from '@/components/Main/Services/Services';
import Videos from '@/components/Main/Videos/Videos';

export default function Home() {
  return (
    <>
      <Main />
      <Profile />
      <Services />
      <Appointment />
      {/* <Videos /> */}
      <Blog />
    </>
  );
}
