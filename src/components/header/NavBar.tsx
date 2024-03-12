'use client';

import { useStore } from '@/store';
import Link from 'next/link';
import ThemeButtons from '@/components/header/ThemeButtons';

interface NavLinks {
  titleES: string;
  titleEN: string;
  label: string;
  url: string;
}

const NavBar = () => {
  const { engLanguageActive } = useStore();

  const navLinks: NavLinks[] = [
    {
      titleES: 'sobre mi',
      titleEN: 'about',
      label: 'about-link',
      url: '#about-section',
    },
    {
      titleES: 'experiencia',
      titleEN: 'experience',
      label: 'experience-link',
      url: '#experience-section',
    },
    {
      titleES: 'proyectos',
      titleEN: 'projects',
      label: 'projects-link',
      url: '#projects-section',
    },
    {
      titleES: 'servicios',
      titleEN: 'services',
      label: 'services-link',
      url: '#services-section',
    },
    {
      titleES: 'contáctame',
      titleEN: 'contact me',
      label: 'contact-link',
      url: '#contact-section',
    },
  ];

  const handleScroll = () => {
    document.addEventListener('scroll', () => {
      const nav_bar = document.getElementById('nav-bar');

      if (window.scrollY !== 0) {
        nav_bar?.classList.add('sticky-navbar');
      } else {
        nav_bar?.classList.remove('sticky-navbar');
      }
    });
  };

  handleScroll();

  return (
    <header className='duration-300 dark:bg-theme_dark-main-bg m-[0_auto]'>
      <nav
        id='nav-bar'
        className='max-[500px]:translate-x-[-4.5em] max-[580px]:scale-[0.85] sm:scale-100 min-w-max fixed z-50 top-2  translate-x-[-17.5em] sm:translate-x-[-20.5em] border border-slate-500/10 rounded-full bg-[#eeeeee81] dark:bg-[#0000004a] p-2 px-3 duration-300 flex justify-end md:gap-2 dark:border dark:border-slate-500/30'>
        {navLinks.map((item, index) => (
          <Link
            className='max-[500px]:hidden dark:hover:text-theme_dark-sup-pink duration-500 hover:text-light-900 text-sm p-2 sm:text-base dark:text-white sm:p-3 text-[#5c6673] font-medium '
            aria-label={item.label}
            href={item.url}
            key={index}>
            {engLanguageActive ? item.titleEN : item.titleES}
          </Link>
        ))}
        <ThemeButtons />
      </nav>
    </header>
  );
};

export default NavBar;
