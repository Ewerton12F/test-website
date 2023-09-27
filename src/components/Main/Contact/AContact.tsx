import Link from 'next/link';
import React from 'react';

export default function AContact() {
  return (
    <Link target="_blank" href={`/agendar`}>
      <button
        className="
                  mx-auto mt-4 flex w-full cursor-pointer border-2 
                  border-secondary bg-secondary py-4 font-lexend
                  text-primary underline-offset-2 transition-all duration-300
                  sm:ml-0 sm:max-w-[300px]
        "
      >
        <p className="mx-auto font-dm font-thin uppercase tracking-widest">
          Entre em contato
        </p>
      </button>
    </Link>
  );
}
