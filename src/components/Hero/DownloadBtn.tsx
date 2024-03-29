import { useEffect, useState } from 'react';
import { useStore } from '@/context/store';

import { FaRegFilePdf } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const DownloadBtn = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const { engLanguageActive } = useStore();

  //EXPAND AND COLLAPSE THE CV´S OPTIONS
  const changingVisibility = () => {
    const divElement = document.getElementById('hidden-element');

    if (divElement?.classList.contains('hidden')) {
      divElement?.classList.replace('hidden', 'block');
    } else {
      divElement?.classList.replace('block', 'hidden');
    }
  };

  //IF THE USER DOWNLOADS SOME RESUME, THE EVENT CLICK ON THE BUTTON WILL CLEAN UP
  const updatingState = () => {
    const download_button = document.getElementById('download-btn');
    const divElement = document.getElementById('hidden-element');

    if (download_button) {
      divElement?.classList.add('hidden');
      download_button.style.borderColor = '#22c55e';
      download_button.style.pointerEvents = 'none';

      {
        engLanguageActive
          ? (download_button.innerHTML = `<span class='text-[#22c55e] py-[0.15rem]'>Descargado ✔️</span>`)
          : (download_button.innerHTML = `<span class='text-[#22c55e] py-[0.15rem]'>Descargado ✔️</span>`);
      }
    }
  };

  useEffect(() => {
    if (isDownloaded === true) updatingState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDownloaded]);

  return (
    <div className='z-50 flex items-center gap-4'>
      <span className='dark:bg-green-500 cursor-default text-xs bg-green-700 rounded-sm py-3 w-max text-white font-bold px-5'>
        OPEN TO WORK
      </span>

      <div className='relative flex flex-col'>
        <button
          id='download-btn'
          onClick={changingVisibility}
          disabled={isDownloaded}
          aria-label='visibility-switch-btn'
          className='border-light-500 text-light-500 hover:bg-light-500/10 flex items-center gap-1 w-36 justify-center text-xs border-2 dark:border-theme_dark-sup-sky dark:text-theme_dark-sup-sky py-2 rounded-sm font-bold overflow-hidden dark:hover:bg-theme_dark-sup-sky/30 duration-200 hover:duration-200'>
          {engLanguageActive ? 'Download CV' : 'Descargar CV'}
          <MdDownload className='text-xl' />
        </button>
        <span className='sr-only'>
          Choose the language for downloading the CV
        </span>

        <div
          id='hidden-element'
          className='hidden absolute bottom-[-7.5em] left-0'>
          <ul className='flex flex-col gap-5 py-4 px-3 border-2 rounded-md dark:border-slate-700/50 dark:bg-theme_dark-box-second bg-[#ececec]'>
            <li onClick={() => setIsDownloaded(!isDownloaded)}>
              <a
                aria-label='cv-link'
                className='text-light-500/75 dark:text-zinc-300 font-semibold text-base flex items-center gap-2 w-max'
                href='/english.pdf'
                download='english.pdf'>
                english.pdf{' '}
                <FaRegFilePdf className='dark:text-theme_dark-sup-pink text-bg-light-500/text-light-500/75' />
              </a>
            </li>
            <li
              onClick={() => setIsDownloaded(!isDownloaded)}
              className='pt-3 border-t-2 dark:border-slate-700/50 '>
              <a
                aria-label='cv-link'
                className=' text-light-500/75 dark:text-zinc-300 font-semibold text-base flex items-center gap-2 w-max'
                href='/español.pdf'
                download='español.pdf'>
                español.pdf{' '}
                <FaRegFilePdf className='dark:text-theme_dark-sup-pink text-bg-light-500/text-light-500/75' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DownloadBtn;
