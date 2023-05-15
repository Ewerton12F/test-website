import { NextPage } from "next";
import Head from "next/head";

import Navbar from "@/components/header/navbar";
import Hero from "@/components/main/hero";
import Profile from "@/components/main/profile";
import ServicesCard from "@/components/main/services/services_card";
import ServiceTable from "@/components/main/services/service_table";
import Footer from "@/components/main/footer";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Freud | Psychoanalisys </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-primary px-5">
        <Navbar />
      </header>
      <main className={`
        flex justify-center
        bg-gradient-to-b 
        from-primary from-35% 
        to-zinc-100 to-0% 
      `}>
        <section className="max-w-xs">
          <Hero />
          <ServicesCard>
              {/* @ts-expect-error Async Server Component */}
            <ServiceTable/>
          </ServicesCard>
          <Profile />
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
