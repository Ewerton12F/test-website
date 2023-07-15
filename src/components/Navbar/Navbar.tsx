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
    <header className="">
      <nav className="mx-5 flex items-center justify-between py-10 md:mx-auto md:w-10/12 md:max-w-7xl">
        <div className="md:hidden">
          <Link id="navbar-link-home" className="flex items-center" href="/">
            <h1 className="flex items-center font-oswald text-xl">Róbson</h1>
            <p className="mx-1 text-xl">|</p>
            <span className="font-serif text-secondary">Psicanálise</span>
          </Link>
        </div>
        <button id="navbar-hamburger-menu" className="md:hidden">
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
        <ul
          className={`
          ${open ? 'block' : 'hidden md:flex'}
          fixed left-0 top-[10svh] z-[2] flex
          h-[90svh] w-full flex-col  
          bg-primary py-10 text-center   
          font-jost transition-all duration-500
          ease-in md:static md:top-0 md:z-auto
          md:h-0 md:w-auto 
          md:flex-row md:items-center md:py-0
        `}
        >
          <li className="mx-5 my-12 md:mx-0 md:my-0 md:mr-10">
            <Link
              id="navbar-menu-link-home"
              href="/"
              className="text-2xl duration-300 hover:text-secondary md:text-xl"
            >
              Home
            </Link>
          </li>
          <li className="mx-5 my-12 md:mx-0 md:my-0 md:mr-10">
            <Link
              id="navbar-menu-link-services"
              href="#services"
              className="text-2xl duration-300 hover:text-secondary md:text-xl"
            >
              Serviços
            </Link>
          </li>
          <li className="mx-5 my-12 md:mx-0 md:my-0 md:mr-10">
            <Link
              id="navbar-menu-link-blog"
              href="#profile"
              className="text-2xl duration-300 hover:text-secondary md:text-xl"
            >
              Perfil
            </Link>
          </li>
          <li className="mx-5 my-12 md:mx-0 md:my-0 md:mr-10">
            <Link
              id="navbar-menu-link-about"
              href="#blog"
              className="text-2xl duration-300 hover:text-secondary md:text-xl"
            >
              Blog
            </Link>
          </li>
        </ul>
        <nav className="hidden md:block">
          <ul className="flex text-xl">
            <li className="mx-3 md:mx-0 md:ml-8">
              <Link
                id="navbar-menu-icon-instagram"
                className="duration-300 hover:text-secondary"
                href="https://www.instagram.com/consultorio_de_psicanalise/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="mx-3 md:mx-0 md:ml-8">
              <Link
                id="navbar-menu-icon-facebook"
                className="duration-300 hover:text-secondary"
                href="https://www.facebook.com/robsonhbatista/"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </li>
            <li className="mx-3 md:mx-0 md:ml-8">
              <Link
                id="navbar-menu-icon-linkedin"
                className="duration-300 hover:text-secondary"
                href="https://www.linkedin.com/in/robsonhbatista/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
}
