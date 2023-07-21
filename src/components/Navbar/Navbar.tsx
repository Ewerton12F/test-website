'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

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
                    ? 'bg-zinc-900 bg-opacity-70 transition-all duration-300 md:bg-opacity-0'
                    : ''
                }
                flex items-center justify-between overflow-hidden
                py-2.5 md:mx-auto md:my-14 md:w-11/12 md:max-w-7xl
      `}
    >
      <div className="md:hidden ">
        <Link
          id="navbar-link-home"
          className="flex items-baseline p-5"
          href="/"
        >
          <h1 className="font-oswald text-xl min-[600px]:text-2xl">Róbson</h1>
          <p className="mx-1 text-xl min-[600px]:text-2xl">|</p>
          <span className="font-serif text-xl text-secondary min-[600px]:text-2xl">
            Psicanálise
          </span>
        </Link>
      </div>
      <button id="navbar-hamburger-menu" className="p-5 md:hidden">
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
          style={{ height: '25px', width: '25px' }}
        />
      </button>
      <div
        className={`
                  ${
                    open
                      ? 'duration-800 absolute transition-all'
                      : 'hidden md:flex'
                  }
                  right-0 top-[90px] z-[2] flex h-[100vh] w-4/5 flex-col
                  bg-zinc-900 bg-opacity-70 p-5 text-left backdrop-blur-md 
                  min-[375px]:py-10 md:static
                  md:top-0 md:z-auto md:mx-auto md:h-0 md:w-full md:flex-row
                  md:items-center md:justify-between md:py-0
        `}
      >
        <ul className="flex flex-col font-lexend md:flex-row">
          <li className="my-5 md:mx-0 md:mr-5">
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
                      min-[375px]:text-3xl md:text-xl
            "
            >
              Home
            </Link>
          </li>
          <li className="my-5 md:mx-0 md:mr-5">
            <Link
              onClick={() => {
                setOpen(!open);
                menuRef.current?.setDirection(open ? -1 : 1);
                menuRef.current?.play();
              }}
              id="navbar-menu-link-services"
              href="#services"
              className="
                      p-5 px-2.5 text-2xl duration-300 hover:text-secondary
                      min-[375px]:text-3xl md:text-xl
            "
            >
              Serviços
            </Link>
          </li>
          <li className="my-5 md:mx-0 md:mr-5">
            <Link
              onClick={() => {
                setOpen(!open);
                menuRef.current?.setDirection(open ? -1 : 1);
                menuRef.current?.play();
              }}
              id="navbar-menu-link-blog"
              href="#profile"
              className="
                      p-5 px-2.5 text-2xl duration-300 hover:text-secondary
                      min-[375px]:text-3xl md:text-xl
            "
            >
              Perfil
            </Link>
          </li>
          <li className="my-5 md:mx-0 md:mr-5">
            <Link
              onClick={() => {
                setOpen(!open);
                menuRef.current?.setDirection(open ? -1 : 1);
                menuRef.current?.play();
              }}
              id="navbar-menu-link-about"
              href="#blog"
              className="
                      p-5 px-2.5 text-2xl duration-300 hover:text-secondary
                      min-[375px]:text-3xl md:text-xl
            "
            >
              Blog
            </Link>
          </li>
        </ul>
        <ul className="flex min-[375px]:mt-10 md:mt-0">
          <li className="p-5  md:mx-0">
            <Link
              id="navbar-menu-icon-instagram"
              className="duration-300 hover:text-secondary"
              href="https://www.instagram.com/consultorio_de_psicanalise/"
              target="_blank"
            >
              <FaInstagram className="text-2xl min-[375px]:text-4xl md:text-2xl" />
            </Link>
          </li>
          <li className="p-5  md:mx-0">
            <Link
              id="navbar-menu-icon-facebook"
              className="duration-300 hover:text-secondary"
              href="https://www.facebook.com/robsonhbatista/"
              target="_blank"
            >
              <FaFacebook className="text-2xl min-[375px]:text-4xl md:text-2xl" />
            </Link>
          </li>
          <li className="p-5  md:mx-0">
            <Link
              id="navbar-menu-icon-linkedin"
              className="duration-300 hover:text-secondary"
              href="https://www.linkedin.com/in/robsonhbatista/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl min-[375px]:text-4xl md:text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
