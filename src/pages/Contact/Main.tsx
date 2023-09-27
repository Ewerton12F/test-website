import Card_Info from './components/Card_Info';
import Contact_Form from './components/Contact_Form';
import Navbar from '@/components/Navbar/Navbar';

export default function Main() {
  return (
    <main
      className={`
                  bg-gradient-to-b from-primary from-50% to-white to-0% 
      `}
    >
      <Navbar />
      <Contact_Form />
      <Card_Info />
    </main>
  );
}
