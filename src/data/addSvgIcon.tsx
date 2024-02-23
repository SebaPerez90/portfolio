// this function insert dynamically the icon corresponding to the value of the skill
// resource : https://svgl.vercel.app/?search=ama

const addSvgIcon = (skill: string) => {
  switch (skill) {
    case 'React.js':
      return (
        <svg
          viewBox='0 0 256 228'
          width='20'
          height='20'
          xmlns='httpwww.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid'>
          <path
            d='M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z'
            fill='#00D8FF'
          />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg
          viewBox='0 0 256 154'
          width='20'
          height='20'
          xmlns='httpwww.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid'>
          <defs>
            <linearGradient x1='-2.778%' y1='32%' x2='100%' y2='67.556%' id='a'>
              <stop stopColor='#2298BD' offset='0%' />
              <stop stopColor='#0ED7B5' offset='100%' />
            </linearGradient>
          </defs>
          <path
            d='M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z'
            fill='url(#a)'
          />
        </svg>
      );
    case 'Javascript':
      return (
        <svg
          xmlns='httpwww.w3.org/2000/svg'
          width='15'
          height='15'
          viewBox='0 0 1052 1052'>
          <path fill='#f0db4f' d='M0 0h1052v1052H0z' />
          <path
            d='M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z'
            fill='#323330'
          />
        </svg>
      );
    case 'Sass':
      return (
        <svg
          viewBox='0 0 512 384'
          xmlns='httpwww.w3.org/2000/svg'
          width='20'
          height='20'>
          <path
            fill='#CF649A'
            d='M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z'
          />
        </svg>
      );
    case 'CSS':
      return (
        <svg
          xmlns='httpwww.w3.org/2000/svg'
          viewBox='0 0 452 520'
          width='15'
          height='15'>
          <path fill='#0c73b8' d='M41 460L0 0h451l-41 460-185 52' />
          <path fill='#30a9dc' d='M226 472l149-41 35-394H226' />
          <path
            fill='#ecedee'
            d='M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z'
          />
          <path
            fill='#fff'
            d='M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z'
          />
        </svg>
      );
    case 'HTML':
      return (
        <svg
          xmlns='httpwww.w3.org/2000/svg'
          viewBox='0 0 452 520'
          width='15'
          height='15'>
          <path fill='#e34f26' d='M41 460L0 0h451l-41 460-185 52' />
          <path fill='#ef652a' d='M226 472l149-41 35-394H226' />
          <path
            fill='#ecedee'
            d='M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z'
          />
          <path
            fill='#fff'
            d='M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z'
          />
        </svg>
      );
    case 'Node.js':
      return (
        <svg
          viewBox='0 0 256 289'
          width='20'
          height='20'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid'>
          <path
            d='M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z'
            fill='#539E43'
          />
        </svg>
      );
    case 'Express.js':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
          width='20'
          height='20'>
          <path
            fill='#333333ac'
            d='M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z'
          />
        </svg>
      );
    case 'SQLite':
      return (
        <svg
          width='20'
          height='20'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid'
          viewBox='0 0 512 228'>
          <defs>
            <linearGradient x1='57.7%' y1='2%' x2='57.7%' y2='94.4%' id='a'>
              <stop stopColor='#97D9F6' offset='0%' />
              <stop stopColor='#0F80CC' offset='92%' />
              <stop stopColor='#0F80CC' offset='100%' />
            </linearGradient>
          </defs>
          <path
            d='M194.5 112c-6.8 0-12.3 2-16.6 6.1-4.3 4-6.4 9.3-6.4 15.8a23.3 23.3 0 0 0 6.5 17c2.2 2.4 6.6 5.6 13.2 9.7 8 5 13.4 9 16 12 2.5 3.2 3.7 6.4 3.7 9.9 0 4.5-1.5 8.2-4.6 11a18 18 0 0 1-12.4 4 20.1 20.1 0 0 1-20.3-20.8h-2.5v22.9h2.5c.8-2.2 1.8-3.3 3.2-3.3.7 0 2.3.4 4.7 1.3 6 2.1 10.9 3.2 14.7 3.2a23 23 0 0 0 17-7 23.2 23.2 0 0 0 2.4-30.8c-3-4-9-8.6-18-14a59.5 59.5 0 0 1-15-11.3c-2.3-3-3.5-6.1-3.5-9.7 0-3.8 1.5-7 4.2-9.2 2.8-2.3 6.5-3.5 11-3.5 5.2 0 9.5 1.5 12.9 4.6 3.3 3 5.3 7.4 5.9 12.8h2.5V113h-2.3a6 6 0 0 1-.8 2c-.3.3-.7.4-1.4.4a17 17 0 0 1-4.3-1 38.6 38.6 0 0 0-12.3-2.3Zm82.4 0a44.6 44.6 0 0 0-39 22.2 43.5 43.5 0 0 0 4.5 50.2c7 8.2 15.3 13.3 25 15.3 2.1 1.1 5.3 4.1 9.4 9 4.7 5.3 8.6 9.3 11.9 11.6A35.6 35.6 0 0 0 311 227c5.3 0 10-.9 14-2.7l-.9-2.3a20.1 20.1 0 0 1-18.7-2.3c-3.6-2.5-8.3-7.1-13.8-14a47.6 47.6 0 0 0-5.4-6.1c10.6-2 19.3-7.2 26-15.4a42.8 42.8 0 0 0 10.2-28 42 42 0 0 0-13.2-31.4 44.8 44.8 0 0 0-32.4-12.9Zm51.4 0 .1 2.7c5.5 0 8.6 1.7 9.3 5 .3 1.1.4 3.3.4 6.4v59.6c0 4.5-.7 7.3-2 8.6-1.1 1.2-3.2 2-6.2 2.3l-.1 2.6h55.1l1.4-13.5h-2.5c-.7 3.7-2.3 6.3-5 7.8a30.5 30.5 0 0 1-14 2.3h-5.2c-6 0-9.5-2.2-10.5-6.6-.2-.9-.2-1.8-.2-2.8l.2-60.3c0-4.4.5-7.4 1.7-8.9 1.2-1.4 3.3-2.3 6.4-2.5l-.2-2.7h-28.7Zm-50.6 3.3a28 28 0 0 1 23 11.2 48 48 0 0 1 8.8 30.5c0 12.3-3 22.1-8.9 29.5a29 29 0 0 1-23.7 11c-9.5 0-17.2-3.8-23-11.4a47.1 47.1 0 0 1-8.9-29.6c0-12.5 3-22.5 9-30 5.9-7.5 13.8-11.2 23.7-11.2Zm126.9 12.8c-1.3 0-2.4.5-3.1 1.4-.8 1-1 2-.8 3.4a6 6 0 0 0 2.2 3.4c1.1 1 2.4 1.4 3.7 1.4 1.3 0 2.3-.5 3-1.4.7-1 1-2.1.7-3.4-.3-1.4-1-2.5-2-3.4a5.6 5.6 0 0 0-3.7-1.4Zm36.4 9.2c-2.3 8.8-7.3 13.5-14.9 14.3l.1 2.5h8.9l-.2 29.8c0 5.1.2 8.5.5 10.2 1 4.2 3.6 6.3 8.1 6.3 6.6 0 13.4-4 20.6-12l-2.2-1.8c-5.2 5.2-9.7 7.8-13.7 7.8-2.5 0-4-1.4-4.6-4.2l-.2-2.4v-33.7h13.7l-.2-4h-13.4v-12.8H441Zm52.4 11.2c-7.6 0-13.7 3.7-18.5 11a31.3 31.3 0 0 0-4.4 24.4 21 21 0 0 0 6.7 12.2 19 19 0 0 0 12.7 4.3c4.7 0 11.4-1.2 14.1-3.7 2.8-2.4 5.4-6.3 7.8-11.7l-2-2a20.6 20.6 0 0 1-17.1 10.5c-8 0-12.8-4.3-14.6-13l-.5-3.5a46 46 0 0 0 21.4-8c4.8-3.8 9.6-7.9 8.7-12.1a9.9 9.9 0 0 0-3.9-6c-2-1.6-7.4-2.4-10.4-2.4Zm-83 .3-16.3 3.8v2.9l5.7-.7c2.7 0 4.3 1.2 4.8 3.7.2.8.3 2 .4 3.4l-.2 26.8c0 3.7-.5 5.8-1.3 6.5-.8.6-3 1-6.6 1v2.5h25.9v-2.5c-3.7 0-6-.3-7-.9-1-.5-1.8-1.5-2.1-3-.2-1.2-.3-3.1-.4-5.7l.1-37.8h-3Zm78.9 5c1.6 0 3 .6 4.6 1.8a7 7 0 0 1 2.8 4c1.4 7-4.9 12-19 14.7a25 25 0 0 1 2.7-14.1c2.3-4.3 5.3-6.4 8.9-6.4Z'
            fill='#003B57'
          />
          <path
            d='M157.9 10H17C7.7 10 0 17.7 0 27v155.2c0 9.4 7.7 17.2 17.1 17.2h92.7c-1-46.2 14.7-135.7 48-189.5Z'
            fill='#0F80CC'
          />
          <path
            d='M152.8 15H17C10.5 15 5 20.4 5 27V171c30.7-11.8 76.8-22 108.7-21.5a989.7 989.7 0 0 1 39-134.5Z'
            fill='url(#a)'
          />
          <path
            d='M190.7 4.9c-9.6-8.6-21.3-5.2-32.8 5a81.4 81.4 0 0 0-5.1 5c-19.7 21-38 59.7-43.7 89.2a81.5 81.5 0 0 1 5.8 17.7l.8 3.5-.9-2.8a173.8 173.8 0 0 0-.8-2 172 172 0 0 0-6.4-12.1l-3.5 11c4.5 8.2 7.3 22.4 7.3 22.4l-1.4-4.1c-1-2.9-6-11.7-7.2-13.7-2 7.5-2.8 12.6-2.1 13.8 1.4 2.4 2.7 6.5 4 11a257.6 257.6 0 0 1 4.6 25c-.3 8.6-.1 17.6.5 25.7a91 91 0 0 0 4.7 24.8l1.5-.8a111 111 0 0 1-3.9-37c.9-22.5 6-49.5 15.6-77.7 16-42.5 38.4-76.6 58.8-93-18.6 17-43.8 71.4-51.4 91.6a365.7 365.7 0 0 0-18 64c6.2-19 26.4-27.2 26.4-27.2s9.8-12.2 21.4-29.6a210 210 0 0 0-22.1 6l-7.1 3s18.1-11 33.7-16C191 73.8 214.2 25.9 190.7 4.9'
            fill='#003B57'
          />
        </svg>
      );
    case 'MongoDB':
      return (
        <svg
          viewBox='0 0 256 549'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          preserveAspectRatio='xMidYMid'>
          <path
            fill='#01EC64'
            d='M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z'
          />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg
          viewBox='0 0 256 256'
          width='20'
          height='20'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid'>
          <path
            d='M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z'
            fill='#3178C6'
          />
          <path
            d='M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z'
            fill='#FFF'
          />
        </svg>
      );
    case 'Next.js':
      return (
        <svg
          viewBox='0 0 256 256'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          preserveAspectRatio='xMidYMid'>
          <defs>
            <linearGradient
              id='c'
              x1='55.633%'
              x2='83.228%'
              y1='56.385%'
              y2='96.08%'>
              <stop offset='0%' stopColor='#FFF' />
              <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
            </linearGradient>
            <linearGradient id='d' x1='50%' x2='49.953%' y1='0%' y2='73.438%'>
              <stop offset='0%' stopColor='#FFF' />
              <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
            </linearGradient>
            <circle id='a' cx='128' cy='128' r='128' />
          </defs>
          <g mask='url(#b)'>
            <circle cx='128' cy='128' r='128' />
            <path
              fill='url(#c)'
              d='M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z'
            />
            <path fill='url(#d)' d='M163.556 76.8h17.067v102.4h-17.067z' />
          </g>
        </svg>
      );
  }
};

export default addSvgIcon;
