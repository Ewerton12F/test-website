import { NextPage } from "next";
import Head from "next/head";

import Navbar from "@/components/header/navbar";
import Hero from "@/components/main/hero";
import Profile from "@/components/main/profile";
import ServicesCard from "@/components/main/services/services_card";
import ServiceTable from "@/components/main/services/service_table";
import Service from "@/components/main/services/service";

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
      <main className="bg-gradient-to-b from-primary to-white flex justify-center">
        <section className="max-w-xs h-[1300px] ">
          <Hero />
          <ServicesCard>
            <ServiceTable>
              {/* @ts-expect-error Async Server Component */}
              <Service />
            </ServiceTable>
          </ServicesCard>
          <Profile />
        </section>
      </main>
    </>
  );
};

export default Home;
