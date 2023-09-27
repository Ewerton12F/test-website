import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <Link href={`/contateme`}>
      <button
        className="
                  mx-auto mt-4 flex w-full cursor-pointer border-2 
                  border-secondary bg-secondary py-4 font-lexend
                  text-primary underline-offset-2 transition-all duration-300
                  sm:ml-0 sm:max-w-[300px] md:mx-auto lg:ml-0
        "
      >
        <p className="mx-auto font-dm font-thin uppercase tracking-widest">
          Entrar em contato
        </p>
      </button>
    </Link>
  );
}
