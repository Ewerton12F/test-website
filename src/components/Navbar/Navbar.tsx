'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

import animationData from '../../assets/menu-to-close.json';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<LottieRefCurrentProps>(null);

  return (
    <nav
      className={`
                ${
                  open
                    ? 'bg-zinc-900 bg-opacity-70 transition-all duration-300 lg:bg-opacity-0'
                    : ''
                }
                mx-auto flex items-center
                justify-between overflow-hidden pt-2 md:pt-6 lg:max-w-7xl
      `}
    >
      <div className="">
        <Link
          id="navbar-link-home"
          className="flex items-center gap-3 px-4 transition-all duration-300 sm:px-6"
          href="/"
        >
          <p className="pt-3 font-volk text-[70px] leading-none text-secondary">
            Ψ
          </p>
          <span className="flex items-baseline font-serif text-[39px] text-pshadow">
            <p>Psi</p>
            <p className="text-secondary">.</p>
          </span>
        </Link>
      </div>
      <div className="flex gap-4 lg:hidden">
        <Link href={`/contateme`}>
          <button
            className="
                  hidden w-full cursor-pointer 
                  border-2 border-secondary bg-secondary px-10
                  py-4 font-lexend text-primary underline-offset-2
                  transition-all duration-300 md:block 
                  
            "
          >
            <p className="mx-auto font-dm font-thin uppercase tracking-widest">
              Agende agora
            </p>
          </button>
        </Link>
        <button
          id="navbar-hamburger-menu"
          className="
                    mr-4 bg-white bg-opacity-20 p-2.5 transition-all
                    duration-300 sm:mr-6
          "
        >
          <Lottie
            onClick={() => {
              setOpen(!open);
              menuRef.current?.setDirection(open ? -1 : 1);
              menuRef.current?.play();
            }}
            lottieRef={menuRef}
            loop={false}
            autoplay={false}
            animationData={animationData}
            style={{ height: '35px', width: '35px' }}
          />
        </button>
      </div>
      <div
        className={`
                  ${
                    open
                      ? 'duration-800 absolute transition-all'
                      : 'hidden lg:flex'
                  }
                  right-0 top-[90px] z-[2] flex h-[100vh] w-4/5 flex-col
                  bg-zinc-900 bg-opacity-70 p-6 text-left backdrop-blur-md 
                  sm:static
                  sm:top-0 sm:z-auto sm:mx-auto sm:h-0 sm:w-full sm:flex-row
                  sm:items-center sm:justify-between sm:py-0
        `}
      >
        <ul className="flex flex-col font-lexend sm:flex-row">
          <li className="my-5 sm:mx-0 sm:mr-5">
            <Link
              onClick={() => {
                setOpen(!open);
                menuRef.current?.setDirection(open ? -1 : 1);
                menuRef.current?.play();
              }}
              id="navbar-menu-link-home"
              href="/"
              className="
                      p-5 px-2.5 text-2xl duration-300 hover:text-secondary
                      min-[375px]:text-3xl sm:text-xl lg:text-lg
            "
            >
              Home
            </Link>
          </li>
          <li className="my-5 sm:mx-0 sm:mr-5">
            <Link
              onClick={() => {
                setOpen(!open);
                menuRef.current?.setDirection(open ? -1 : 1);
                menuRef.current?.play();
              }}
              id="navbar-menu-link-services"
              href="/servicos"
              className="
                      p-5 px-2.5 text-2xl duration-300 hover:text-secondary
                      min-[375px]:text-3xl sm:text-xl lg:text-lg
            "
            >
              Serviços
            </Link>
          </li>
          <li className="my-5 sm:mx-0 sm:mr-5">
            <Link
              onClick={() => {
                setOpen(!open);
                menuRef.current?.setDirection(open ? -1 : 1);
                menuRef.current?.play();
              }}
              id="navbar-menu-link-blog"
              href="/perfil"
              className="
                      p-5 px-2.5 text-2xl duration-300 hover:text-secondary
                      min-[375px]:text-3xl sm:text-xl lg:text-lg
            "
            >
              Perfil
            </Link>
          </li>
          <li className="my-5 sm:mx-0 sm:mr-5">
            <Link
              onClick={() => {
                setOpen(!open);
                menuRef.current?.setDirection(open ? -1 : 1);
                menuRef.current?.play();
              }}
              id="navbar-menu-link-about"
              href="/blog"
              className="
                      p-5 px-2.5 text-2xl duration-300 hover:text-secondary
                      min-[375px]:text-3xl sm:text-xl lg:text-lg
            "
            >
              Blog
            </Link>
          </li>
        </ul>
        <div>
          <Link href={`/contateme`}>
            <button
              className="
                  hidden w-full cursor-pointer 
                  border-2 border-secondary bg-secondary px-10
                  py-4 font-lexend text-primary underline-offset-2
                  transition-all duration-300 md:block 
            "
            >
              <p className="mx-auto font-dm font-thin uppercase tracking-widest">
                Agende agora
              </p>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
