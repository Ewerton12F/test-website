import Link from 'next/link';
import React from 'react';

export default function About_Button() {
  return (
    <button
      className="
                  mx-auto mt-6 flex w-full cursor-pointer
                  border border-zinc-300 font-lexend text-zinc-500
                  underline-offset-2 transition-all duration-300
                  sm:ml-0 sm:max-w-[300px] md:mx-auto lg:ml-0
      "
    >
      <Link
        href={`/perfil`}
        className="
                  mx-auto w-full py-4 font-dm font-thin uppercase 
                  tracking-widest text-primary
        "
      >
        Sobre mim
      </Link>
    </button>
  );
}
