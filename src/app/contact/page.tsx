'use client';

import form_data from '@/utils/form-data.json';
import benefits from '@/utils/benefits.json';
import { useStore } from '@/context/store';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormData, IFormData } from './form-data.interface';
import { FaCircleExclamation } from 'react-icons/fa6';
import Image from 'next/image';
import contact from '@/assets/images/contact.svg';
import Footer from '@/components/Footer';
import { BiSolidZap } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Contact = () => {
  const { engLanguageActive } = useStore();
  const [textAreaLength, setTextAreaLength] = useState<number>(0);
  const [formData, setFormData] = useState<IFormData>(FormData);
  const router = useRouter();

  const lengthControl = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaLength(e.target.selectionEnd);
  };

  const captureValues = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === 'name') {
      const updatedValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, [e.target.name]: updatedValue });
    } else if (e.target.name === 'email' || e.target.name === 'message') {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('https://formspree.io/f/mbjnlnlq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  };
  const succesMessage = () => {
    const message = engLanguageActive
      ? 'Your message has been send successfully'
      : 'Tu mensaje fué enviado correctamente';
    toast.success(message, {
      duration: 3000,
      style: {
        fontWeight: '500',
        color: '#333333be',
      },
      position: 'bottom-right',
    });
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  return (
    <>
      <main className='flex flex-col items-center bg-[#e2e2e2] dark:bg-dark-main'>
        <div className='w-full flex justify-evenly gap-14 pb-16 pt-24 flex-wrap'>
          <div className='max-[550px]:px-10 w-[30em] flex flex-col justify-center items-center'>
            <motion.div
              transition={{
                bounce: 0.6,
                duration: 1.5,
                type: 'spring',
              }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className='flex items-center flex-col gap-1'>
              <h1 className='font-bold text-4xl text-[#333333be]] text-[#333333e3] dark:text-white'>
                {engLanguageActive
                  ? 'Bring your brand to life!'
                  : 'Dale vida a tu marca!'}
              </h1>
              <h2 className='font-semibold text-lg text-[#333333be]] text-[#333333be] dark:text-slate-200'>
                {engLanguageActive
                  ? 'Digitize your business now and boost your profits'
                  : 'Digitalizá tu negocio ahora y potencia tus ingresos'}
                🚀
              </h2>
              <ul className='self-start mt-6'>
                <p className='py-2 font-bold border-b-2 border-light-500 text-[#333333e3] dark:text-slate-50 dark:border-dark-sky'>
                  {engLanguageActive ? 'Benefits' : 'Beneficios'}
                </p>
                {benefits.map((element, index) => (
                  <li
                    key={index}
                    className='text-[#333333be] font-semibold flex items-center mt-3 gap-1 dark:text-slate-50'>
                    <BiSolidZap className='text-light-500 dark:text-dark-pink text-2xl' />
                    {engLanguageActive
                      ? element.benefitsEN
                      : element.benefitsES}
                  </li>
                ))}
              </ul>
            </motion.div>
            <Image
              src={contact}
              width={350}
              height={350}
              priority
              alt='contact-img'
              className='w-[350px] h-[350px]'
            />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-6xl text-[#333333be]] text-[#333333e3] dark:text-slate-50 max-[500px]:w-2/3 max-[500px]:m-[0_auto] max-[500px]:text-4xl'>
              {engLanguageActive ? 'Get in Touch' : 'Contáctame'}
            </h1>
            <motion.form
              transition={{
                duration: 0.3,
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              name='contact-form'
              method='POST'
              onSubmit={sendMessage}
              className='max-[500px]:w-[21em] max-[500px]:bg-[#e2e2e2] max-[500px]:shadow-none bg-[#fbfbfb] rounded-md flex flex-col justify-around w-[25em] h-[33em] p-10 dark:bg-dark-tertiary [box-shadow:7px_9px_9px_-3px_rgba(0,0,0,0.16)]'>
              {form_data.map((element, index) => (
                <label
                  key={index}
                  htmlFor={element.htmlFor}
                  className='flex flex-col font-semibold relative text-[#333333be] dark:text-slate-50'>
                  {engLanguageActive ? element.labelEN : element.labelES}
                  {element.inputName === 'email' && (
                    <span className='absolute gap-[2px] text-light-500/60 left-0 -bottom-5 flex items-center text-xs dark:text-dark-sky'>
                      <FaCircleExclamation />
                      {engLanguageActive
                        ? 'optional field / valid email addrress'
                        : 'campo opcional / correo válido'}
                    </span>
                  )}
                  <input
                    id={element.id}
                    name={element.inputName}
                    type='text'
                    autoComplete='off'
                    style={
                      element.inputName === 'name'
                        ? { textTransform: 'capitalize' }
                        : undefined
                    }
                    value={
                      element.inputName === 'name'
                        ? formData.name
                        : formData.email
                    }
                    onChange={(e) => {
                      captureValues(e);
                    }}
                    placeholder={
                      engLanguageActive
                        ? element.placeHolderEN
                        : element.placeHolderES
                    }
                    className='max-[500px]:border-b-light-500 placeholder:opacity-70 placeholder:text-xs placeholder:font-semibold p-2 rounded-sm bg-[#e8e8e8] focus:placeholder:opacity-0 placeholder:duration-300 outline-none focus:bg-[#fbfbfb] duration-300 focus:duration-300 focus:border-b-light-500 border-b-2 caret-light-500 text-sm font-semibold text-[#333333e3] mt-1 dark:caret-dark-pink dark:focus:border-dark-pink focus:dark:bg-dark-tertiary dark:bg-dark-secondary dark:border-dark-secondary dark:text-slate-50'
                  />
                </label>
              ))}
              <div className='relative w-full translate-y-4'>
                <p className='flex flex-col font-semibold relative text-[#333333be] dark:text-slate-50'>
                  {engLanguageActive
                    ? 'How can I help you ?'
                    : 'Como puedo ayudarte ?'}
                </p>
                <textarea
                  name='message'
                  maxLength={200}
                  onChange={(e) => {
                    lengthControl(e);
                    captureValues(e);
                  }}
                  placeholder={
                    engLanguageActive
                      ? 'How can I help you ?'
                      : 'Como puedo ayudarte ?'
                  }
                  className='max-[500px]:border-b-light-500 placeholder:opacity-70 placeholder:text-xs placeholder:font-semibold p-2 rounded-sm bg-[#e8e8e8] focus:placeholder:opacity-0 placeholder:duration-300 outline-none placeholder:pl-1 focus:bg-[#fbfbfb] duration-300 focus:duration-300 focus:border-b-light-500 border-b-2 caret-light-500 text-sm font-semibold text-[#333333e3] resize-none h-[10em] w-full mt-1 dark:caret-dark-pink dark:focus:border-dark-pink focus:dark:bg-dark-tertiary dark:bg-dark-secondary dark:border-dark-secondary dark:text-slate-50 '></textarea>
                <span className='absolute right-4 bottom-5 font-semibold dark:text-zinc-300 opacity-50 text-sm'>
                  {textAreaLength}/200
                </span>
              </div>
              <button
                type='submit'
                onClick={succesMessage}
                style={
                  formData.name && formData.message
                    ? {
                        pointerEvents: 'all',
                        filter: 'grayscale(0)',
                        transition: 'all 300ms',
                      }
                    : {
                        pointerEvents: 'none',
                        filter: 'grayscale(1)',
                        transition: 'all 300ms',
                      }
                }
                className='bg-light-500 py-3 w-full text-slate-50 rounded-md text-xs font-bold hover:bg-light-400 duration-200 hover:duration-200 active:scale-95 dark:bg-dark-sky'>
                {engLanguageActive ? 'Send' : 'Enviar'}
              </button>
            </motion.form>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Contact;
