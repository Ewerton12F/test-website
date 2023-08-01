import Link from 'next/link';
import React from 'react';

import { IconBrandWhatsapp } from '@tabler/icons-react';

export default function Contact() {
  return (
    <section
      className="
                m-5 my-12 max-w-[350px] min-[375px]:mx-auto 
                min-[375px]:my-14 min-[600px]:max-w-[450px] md:mt-20
                md:max-w-[600px] lg:max-w-[725px]
      "
    >
      <div
        className="
                  grid gap-5 rounded-xl border border-zap py-7 text-center 
                  min-[375px]:gap-7 min-[600px]:gap-5 min-[600px]:px-8
        "
      >
        <h2
          className="
                    font-lexend text-xl text-white min-[375px]:text-2xl 
                    min-[600px]:text-[27px]
          "
        >
          Entre em Contato
        </h2>
        <p
          className="
                    text-md mx-5 font-jost leading-tight
                    text-white 
          "
        >
          Fale diretamente comigo pelo Whatsapp sobre valores e disponibilidade
          de horário
        </p>
        <Link
          className="mx-auto"
          target="_blank"
          href={`https://wa.me//5584996152546`}
        >
          <button
            className="
                      mx-auto flex cursor-pointer items-center gap-3 rounded-md 
                      border-2 border-zap px-7 py-3 font-lexend text-lg 
                      normal-case text-white duration-300 hover:bg-zap
            "
          >
            <IconBrandWhatsapp size={26} strokeWidth={2} />
            <p className="text-xl leading-tight">Whatsapp</p>
          </button>
        </Link>
      </div>
    </section>
  );
}
