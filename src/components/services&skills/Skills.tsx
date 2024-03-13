import Icon from '@/components/services&skills/Icon';

interface Skills {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skills: Skills[] = [
    {
      title: 'FRONT-END',
      skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Javascript', 'Sass'],
    },
    {
      title: 'BACK-END',
      skills: ['Node.js', 'Express.js', 'SQLite'],
    },
    {
      title: 'LEARNING',
      skills: ['TypeScript', 'Next.js', 'MongoDB'],
    },
  ];

  return (
    <article className='max-[830px]:gap-16 gap-10 max-[1080px]:flex-wrap w-[90%] flex justify-around'>
      {skills.map((item, index) => (
        <div
          className='min-w-[315px] p-[1.5em_2em] dark:shadow-none flex-wrap dark:bg-theme_dark-box-second border border-slate-500/30 max-[480px]:w-[90%] w-[70%] sm:w-auto bg-white  gap-12 flex flex-col sm:justify-start shadow-[14px_30px_20px_-10px_#0000004f] rounded-md'
          key={index}>
          <h1 className='self-center dark:text-theme_dark-sup-pink py-1 w-full sm:w-max text-[#333333] [letter-spacing:5px] text-2xl font-black text-center'>
            {item.title}
          </h1>
          <ul className='h-[10em] flex-wrap flex flex-col justify-between items-center gap-4'>
            {item.skills.map((skill, index) => (
              <li
                className='dark:bg-slate-400/50 dark:px-2 dark:rounded dark:text-slate-50 text-base cursor-default font-medium text-[#334155] h-[2em] gap-2 flex items-center'
                key={index}>
                {/* Insert dynamically the icon corresponding to the value of item.skill */}
                {Icon(skill)}
                <p>{skill}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
};

export default Skills;