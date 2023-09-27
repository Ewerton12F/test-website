import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <Link target="_blank" href={`https://wa.me//5584996152546`}>
      <button
        className="
                  bg-prborder-primary mx-auto mt-6 flex w-full
                  cursor-pointer border-2 border-primary bg-primary 
                  py-4 font-lexend text-white
                  underline-offset-2 duration-300 hover:bg-zap
        "
      >
        <p className="mx-auto">AGENDE UMA CONSULTA</p>
      </button>
    </Link>
  );
}
