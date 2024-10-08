'use client';

import { useStore } from '@/context/store';
import Image from 'next/image';
import freelance_img from '@/assets/images/developer-cartoon.webp';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import Footer from '@/components/Footer';
import NavLinks from '@/components/NavBar/NavLinks';
import DowloadCVButton from '@/components/Landing/DowloadCVButton';

const About = () => {
  const { engLanguageActive } = useStore();
  const [mainView, setMainView] = useState<boolean>(false);
  const main_container_ref = useRef<HTMLDivElement | null>(null);
  const btn_ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (mainView && window.innerWidth > 640) {
      console.log(mainView);

      main_container_ref.current?.classList.replace(
        'before:bg-[#7a7aff]',
        'before:bg-dark-secondary'
      );
      main_container_ref.current?.classList.replace(
        'sm:before:w-[35%]',
        'sm:before:w-[100%]'
      );
      main_container_ref.current?.classList.add(
        'before:[transform:translateX(-34.5%)]'
      );
    } else if (mainView === false && window.innerWidth > 640) {
      main_container_ref.current?.classList.replace(
        'before:bg-dark-secondary',
        'before:bg-[#7a7aff]'
      );
      main_container_ref.current?.classList.replace(
        'sm:before:w-[100%]',
        'sm:before:w-[35%]'
      );
      main_container_ref.current?.classList.remove(
        'before:[transform:translateX(-34.5%)]'
      );
    }

    if (mainView && window.innerWidth < 640) {
      main_container_ref.current?.classList.replace(
        'before:bg-[#7a7aff]',
        'before:bg-dark-secondary'
      );
      main_container_ref.current?.classList.replace(
        'before:w-0',
        'before:w-[100%]'
      );
    } else if (mainView === false && window.innerWidth < 640) {
      main_container_ref.current?.classList.replace(
        'before:bg-dark-secondary',
        'before:bg-[#7a7aff]'
      );
      main_container_ref.current?.classList.replace(
        'before:w-[100%]',
        'before:w-0'
      );
    }
  }, [mainView]);

  const toggleView = () => {
    setMainView(!mainView);
    btn_ref.current?.classList.add('animate-[disappearContent_1.1s_ease]');

    if (mainView && window.innerWidth > 640) {
      btn_ref.current?.classList.replace('bg-dark-secondary', 'bg-[#7a7aff]');
    } else {
      btn_ref.current?.classList.replace('bg-[#7a7aff]', 'bg-dark-secondary');
    }

    if (window.innerWidth < 640) {
      btn_ref.current?.classList.replace('bg-dark-secondary', 'bg-[#7a7aff]');
    }
    setTimeout(() => {
      btn_ref.current?.classList.remove('animate-[disappearContent_1.1s_ease]');
    }, 1100);
  };

  return (
    <>
      <NavLinks />
      <main
        id='about-section'
        ref={main_container_ref}
        className='overflow-hidden about_main_container flex justify-between items-center py-32 mt-[4.7rem] h-auto sm:h-[48em] bg-white relative before:[transition:all_900ms_ease] [transition:all_900ms] before:absolute before:right-0 before:top-0  before:w-0  z-10 before:h-full before:bg-[#7a7aff] before:z-10 dark:bg-dark-main sm:before:w-[35%] sm:before:animate-[transformWidht_400ms_ease-out]'>
        <button
          ref={btn_ref}
          onClick={toggleView}
          className='absolute top-[50%] [z-index:100] right-[-1em]  sm:right-[31.5%] bg-[#7a7aff] text-2xl py-3 text-white hover:text-slate-200 [transition:all_200ms] w-20 about_toggle_btn rounded-full animate-[disappearContent_800ms_ease-out]'
          style={
            mainView ? { paddingLeft: '1.8em' } : { paddingLeft: '0.3em' }
          }>
          {mainView ? (
            <MdArrowForwardIos className='-translate-x-8 sm:translate-x-0' />
          ) : (
            <MdArrowBackIosNew />
          )}
          <span className='absolute text-lg font-medium text-slate-50 right-[31.5%] opacity-0 [text-shadow:0_0_3px_#000] -bottom-16'>
            ☝️<br></br>click
          </span>
        </button>
        {mainView ? (
          <div
            className='z-20 flex px-[7%] lg:px-[10%] flex-col justify-center gap-8 h-full sm:w-[65%] opacity-0 text-slate-300'
            style={
              mainView === true
                ? {
                    animation: 'appearContent 500ms ease-out forwards',
                    animationDelay: '700ms',
                  }
                : undefined
            }>
            <h1 className='xl:text-5xl m-[0_auto] text-4xl font-black text-slate-50'>
              {engLanguageActive ? 'I am Seba' : 'Soy Seba'}
              <br></br>
              <strong className='text-dark-sky dark:text-dark-pink'>
                {engLanguageActive ? 'Freelance' : 'Freelance'}
              </strong>
              <br></br>
              {engLanguageActive ? 'Developer' : 'Desarrollador'}.
            </h1>
            <h2 className='text-xl font-bold text-slate-100'>
              {engLanguageActive
                ? 'Do you have a project in mind and need to make it a reality?'
                : '¿Tenés un proyecto en mente y necesitas hacerlo realidad?'}
            </h2>
            <p>
              {engLanguageActive
                ? 'Imagine having a website or app that not only works perfectly but also boosts your revenue and digital presence. I offer software development and creative design services to transform your ideas into impressive digital products.'
                : 'Imaginate tener un sitio web o una aplicación que no solo funcione a la perfección, sino que también aumente tus ingresos y presencia digital. Ofrezco servicios de desarrollo de software y diseño creativo para transformar tus ideas en productos digitales impresionantes.'}
            </p>
            <ul className='font-bold text-slate-100'>
              <p className='text-lg mb-3 font-bold'>
                {engLanguageActive ? 'Benefits' : 'Beneficios'}
              </p>
              <li>
                ⚡
                {engLanguageActive
                  ? ' Super affordable and personalized prices.'
                  : ' Precios super accesibles y personalizados.'}
              </li>
              <li>
                ⚡
                {engLanguageActive
                  ? ' Free performance test.'
                  : ' Prueba de rendimiento gratuita.'}
              </li>
              <li>
                ⚡
                {engLanguageActive
                  ? ' You can pay monthly, like a subscription service.'
                  : ' Podes pagar mes a mes como un servicio.'}
              </li>
              <li>
                ⚡
                {engLanguageActive
                  ? ' Pay only if it meets your expectations.'
                  : ' Paga solo si cumple con tus expectativas.'}
              </li>
            </ul>
            <p>
              {engLanguageActive
                ? 'Interested? Let´s talk! If you want to turn your idea into reality, don´t hesitate to contact me. Let´s create something amazing together!'
                : '¿Te interesa? ¡Hablemos! Si querés que tu idea se convierta en realidad, no dudes en contactarme. ¡Vamos a crear algo asombroso juntos!'}
              🚀
            </p>

            <Link
              className='block m-[0_auto] mt-5 sm:hidden bg-light-500 py-3 px-8 w-max text-slate-50 rounded-md hover:bg-light-500/75 duration-200 hover:duration-200 active:scale-90 dark:bg-dark-sky hover:dark:bg-dark-sky/75 font-medium opacity-0 animate-[appearContent_400ms_ease-out_forwards] [animation-delay:1s] border border-transparent'
              href={'/contact'}
              aria-label='contact-link'>
              {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
            </Link>
          </div>
        ) : (
          <div
            className='flex px-[7%] lg:px-[10%] flex-col justify-center gap-12 sm:gap-8 h-full sm:w-[65%] opacity-0'
            style={
              mainView === false
                ? {
                    animation: 'disappearContent2 500ms ease-out forwards',
                    animationDelay: '490ms',
                  }
                : undefined
            }>
            <h1 className='z-10 xl:text-5xl m-[0_auto] text-4xl font-black text-slate-600 dark:text-slate-50 text-start'>
              {engLanguageActive ? 'I am Seba' : 'Soy Seba'}
              <br></br>
              <strong className='text-light-500/85 dark:text-dark-pink'>
                Front
              </strong>
              end
              <br></br>
              {engLanguageActive ? 'Developer' : 'Desarrollador'}
            </h1>
            <p className='z-10 font-medium dark:text-slate-300 text-slate-500'>
              {engLanguageActive
                ? 'I worked for over 12 years in the hospitality industry as a waiter. During that time, I grew significantly both professionally and personally.'
                : 'Trabajé por más de 12 años en el sector gastronómico, como mozo de salón. En el transcurso de ese tiempo crecí mucho profesionalmente y como persona.'}
              <br></br>
              {engLanguageActive
                ? 'I am aware of the potential I have to offer, I can handle constant work pressure, and I know how to adapt to any team. This makes me the ideal player.'
                : 'Conozco el potencial que tengo para ofrecer, puedo tolerar la presión laboral constante y sé adaptarme a cualquier equipo de trabajo. Lo que me convierte en el jugador ideal.'}
            </p>
            <p className='z-10 font-extrabold text-slate-600 dark:text-white'>
              {engLanguageActive
                ? 'Currently, I am seeking job opportunities that will boost my career and allow me to continue developing professionally.'
                : 'Actualmente estoy en busqueda oportunidades laborales que impulsen mi carrera y me permitan continuar desarrollandome como profesional.'}
            </p>
            <ul className='z-10 font-medium text-slate-500 dark:text-slate-50 list-disc marker:text-light-500/70 dark:marker:text-dark-pink'>
              <p className='border-b-2 border-b-light-500/40 w-max text-lg mb-3 font-bold  dark:border-b-dark-pink'>
                {engLanguageActive
                  ? 'Personal Information:'
                  : 'Datos Personales:'}
              </p>
              <li>
                {engLanguageActive
                  ? 'Desired Position: '
                  : 'Posición Deseada: '}
                <strong>Frontend Developer | Backend Developer</strong>
              </li>
              <li>
                {engLanguageActive ? 'Ingles: ' : 'English: '}
                <strong>B2 - Uppper Intermediate</strong>
              </li>
              <li>
                {engLanguageActive ? 'Availability: ' : 'Disponibilidad: '}
                <strong>Full-Time</strong>
              </li>
              <li>
                {engLanguageActive ? 'Time Zone: ' : 'Zona Horaria: '}
                <strong>GMT-3</strong>
              </li>
            </ul>
            <div
              className='sm:hidden m-[0_auto] flex items-center gap-2 opacity-0'
              style={
                mainView
                  ? undefined
                  : {
                      animation: 'appearContent 300ms ease-out forwards',
                      animationDelay: '900ms',
                    }
              }>
              <span className='bg-green-600 border border-slate-500 py-3 px-5 text-slate-50 rounded-md font-medium'>
                Open to Work 👨‍💼
              </span>
              <DowloadCVButton />
            </div>
          </div>
        )}
        <div className='hidden sm:flex flex-col items-center justify-start h-full w-[35%] z-20'>
          <div className='h-[22em] xl:h-[30em] w-auto relative before:absolute before:left-12 xl:before:w-[20em] xl:before:left-16 xl:before:bottom-[2em] before:bottom-[1.5em] before:w-[15em] before:h-[8px] before:rounded-[50%] before:bg-black/40 dark:before:bg-black before:[filter:blur(3px)]'>
            <Image
              priority
              src={freelance_img}
              alt='freelance-img'
              className='w-full h-full object-cover [filter:drop-shadow(0_0_0.1em_#0000004e)] animate-[appearContent_300ms_ease-out]'
            />
          </div>
          <div className='flex items-center gap-5 max-[830px]:absolute max-[830px]:bottom-[10em]'>
            {mainView ? (
              <Link
                className='bg-light-500 py-3 px-8 w-max text-slate-50 rounded-md hover:bg-light-500/75 duration-200 hover:duration-200 active:scale-90 dark:bg-dark-sky hover:dark:bg-dark-sky/75 font-medium opacity-0 animate-[appearContent_400ms_ease-out_forwards] [animation-delay:1s] border border-transparent'
                href={'/contact'}
                aria-label='contact-link'>
                {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
              </Link>
            ) : (
              <div
                className='flex flex-col lg:flex-row items-center gap-2 opacity-0'
                style={
                  mainView
                    ? undefined
                    : {
                        animation: 'appearContent 300ms ease-out forwards',
                        animationDelay: '900ms',
                      }
                }>
                <span className='bg-green-600 border border-slate-500 py-3 px-5 text-slate-50 rounded-md font-medium'>
                  Open to Work 👨‍💼
                </span>
                <DowloadCVButton />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
{
}
