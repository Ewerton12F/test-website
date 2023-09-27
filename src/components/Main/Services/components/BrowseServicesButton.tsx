import Link from 'next/link';
import React from 'react';

export default function BrowseServicesButton() {
  return (
    <div className="px-4 sm:ml-0 sm:px-6">
      <Link href={`/servicos`}>
        <button
          className="
                  mx-auto mt-6 flex w-full cursor-pointer
                  border border-zinc-300 bg-white font-lexend text-zinc-500
                  underline-offset-2 transition-all duration-300
                  sm:ml-0 sm:max-w-[300px] md:mx-auto
        "
        >
          <p
            className="
                  mx-auto w-full py-4 font-dm font-thin uppercase 
                  tracking-widest text-primary
          "
          >
            Navegue pelos serviços
          </p>
        </button>
      </Link>
    </div>
  );
}
