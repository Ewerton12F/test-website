import Link from 'next/link';

export default function AllServicesButton() {
  return (
    <div className="">
      <Link href={`/servicos`}>
        <button
          className="
                  mx-auto flex w-full cursor-pointer
                  border border-zinc-300 bg-white font-lexend text-zinc-500
                  underline-offset-2 transition-all duration-300
                  sm:ml-0 sm:max-w-[300px] md:mx-auto
        "
        >
          <p
            className="
                  mx-auto w-full px-8 py-4 font-dm font-thin 
                  uppercase tracking-widest text-primary
          "
          >
            Todos os serviços
          </p>
        </button>
      </Link>
    </div>
  );
}
