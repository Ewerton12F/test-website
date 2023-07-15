import Link from 'next/link';
import React from 'react';

import { IconBrandWhatsapp } from '@tabler/icons-react';

export default function Contact() {
  return (
    <section className="mx-5 my-10 md:mx-auto md:w-10/12 md:max-w-7xl">
      <h2 className="font-serif text-3xl text-primary md:text-4xl">
        Entre em Contato
      </h2>
      <hr
        className="
                  mb-5 h-1 w-[233px] border-2 border-secondary md:mb-5 
                  md:mt-2 md:w-[278px] lg:mb-10
        "
      />
      <div
        className="
                  grid gap-10 rounded-xl border border-zap 
                  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
                  from-green-300 via-green-500 to-green-800 py-10 
                  text-center 
        "
      >
        <p className="mx-5 font-jost text-lg text-white md:mx-10 md:text-2xl">
          Fale diretamente comigo pelo Whatsapp sobre valores e disponibilidade
          de horário.
        </p>
        <Link
          className="mx-auto"
          target="_blank"
          href={`https://wa.me//5584996152546`}
        >
          <button
            className="
                      mx-auto flex cursor-pointer items-center gap-2 rounded-xl 
                      border-2 border-white bg-zap px-10 py-5 font-lexend 
                      text-lg normal-case text-white duration-300
                     hover:bg-[#075E54]
            "
          >
            <IconBrandWhatsapp size={32} strokeWidth={2} />
            <p className="text-xl leading-tight md:text-2xl">Whatsapp</p>
          </button>
        </Link>
      </div>
    </section>
  );
}
