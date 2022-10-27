import SkillItem from './SkillItem';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiVuedotjs,
  SiDeno,
} from 'react-icons/si';
import IonIcon from '@reacticons/ionicons';

const list = [
  {
    label: 'HTML',
    icon: <SiHtml5 className="text-6xl" />,
  },
  {
    label: 'CSS',
    icon: <SiCss3 className="text-6xl" />,
  },
  {
    label: 'JavaScript',
    icon: <SiJavascript className="text-6xl" />,
  },
  {
    label: 'TypeScript',
    icon: <SiTypescript className="text-6xl" />,
  },
  {
    label: 'Vue',
    icon: <SiVuedotjs className="text-6xl" />,
  },
  {
    label: 'React',
    icon: <SiReact className="text-6xl" />,
  },
  {
    label: 'Next.js',
    icon: <SiNextdotjs className="text-6xl" />,
  },
  {
    label: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-6xl" />,
  },
  {
    label: 'Python',
    icon: <SiPython className="text-6xl" />,
  },
  {
    label: 'Deno',
    icon: <SiDeno className="text-6xl" />,
  },
];

export default function Skills() {
  return (
    <div id="skills" className="min-h-screen my-12">
      <div className="px-8 mx-auto max-w-7xl">
        <h2 className="flex items-baseline gap-x-2">
          <IonIcon name="link" className="rotate-45 text-primary" />
          <span className="text-3xl tracking-widest">SKILLS</span>
        </h2>
        <div className="flex items-center my-2 gap-x-2">
          <span className="hidden sm:block w-6 h-[1px] bg-primary"></span>
          <h3 className="my-2 text-sm font-medium tracking-widest text-primary">
            One must have good tools in order to do a good job.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-3">
          {list.map((item, index) => (
            <SkillItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
