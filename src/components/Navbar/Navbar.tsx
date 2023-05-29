'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

import animationData from '../../assets/menu-to-close.json';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin
} from '@tabler/icons-react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<LottieRefCurrentProps>(null);

  return (
    <header className="bg-primary">
      <nav className="mx-5 md:mx-auto md:w-3/4 md:max-w-7xl py-10 flex justify-between items-center">
        <div className="md:hidden">
          <Link id="navbar-link-home" href="/">
            <h1 className="flex items-center text-xl font-oswald">
              Róbson
              <p className="mx-1 font-sans">|</p>
              <span className="font-serif text-secondary">Psicanálise</span>
            </h1>
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
          flex flex-col md:flex-row md:items-center z-[2]
          md:z-auto md:static fixed  
          bg-primary w-full left-0   
          md:w-auto md:py-0 py-10
          top-[10svh] md:top-0 h-[90svh] md:h-0
          text-center font-jost 
          transition-all ease-in duration-500
        `}
        >
          <li className="mx-5 md:mx-0 md:mr-10 my-12 md:my-0">
            <Link
              id="navbar-menu-link-home"
              href="/"
              className="text-2xl md:text-xl hover:text-cyan-500 duration-500"
            >
              Home
            </Link>
          </li>
          <li className="mx-5 md:mx-0 md:mr-10 my-12 md:my-0">
            <Link
              id="navbar-menu-link-services"
              href="/"
              className="text-2xl md:text-xl hover:text-cyan-500 duration-500"
            >
              Serviços
            </Link>
          </li>
          <li className="mx-5 md:mx-0 md:mr-10 my-12 md:my-0">
            <Link
              id="navbar-menu-link-blog"
              href="/"
              className="text-2xl md:text-xl hover:text-cyan-500 duration-500"
            >
              Blog
            </Link>
          </li>
          <li className="mx-5 md:mx-0 md:mr-10 my-12 md:my-0">
            <Link
              id="navbar-menu-link-about"
              href="/"
              className="text-2xl md:text-xl hover:text-cyan-500 duration-500"
            >
              Sobre
            </Link>
          </li>
        </ul>
        <nav className="hidden md:block">
          <ul className="flex text-xl">
            <li className="mx-3 md:mx-0 md:ml-8">
              <Link id="navbar-menu-icon-instagram" href="/">
                <IconBrandInstagram stroke={1.5} />
              </Link>
            </li>
            <li className="mx-3 md:mx-0 md:ml-8">
              <Link id="navbar-menu-icon-facebook" href="/">
                <IconBrandFacebook stroke={1.5} />
              </Link>
            </li>
            <li className="mx-3 md:mx-0 md:ml-8">
              <Link id="navbar-menu-icon-twitter" href="/">
                <IconBrandTwitter stroke={1.5} />
              </Link>
            </li>
            <li className="mx-3 md:mx-0 md:ml-8">
              <Link id="navbar-menu-icon-linkedin" href="/">
                <IconBrandLinkedin stroke={1.5} />
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
}
