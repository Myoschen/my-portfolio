import IonIcon from '@reacticons/ionicons';
import Slider from './Slider';

const list = [
  {
    name: 'react-chat-app',
    image: undefined,
    demo: undefined,
    link: 'https://github.com/Myoschen/react-chat-app',
  },
  {
    name: 'typing-speed',
    image: '',
    demo: 'https://typing-speed-seven.vercel.app',
    link: 'https://github.com/Myoschen/typing-speed',
  },
];

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen my-12">
      <div className="px-8 mx-auto max-w-7xl">
        <h2 className="flex items-baseline gap-x-2">
          <IonIcon name="link" className="rotate-45 text-primary" />
          <span className="text-3xl tracking-widest">PROJECTS</span>
        </h2>
        <div className="flex items-center my-2 gap-x-2">
          <span className="hidden sm:block w-6 h-[1px] bg-primary"></span>
          <h3 className="my-2 text-sm font-medium tracking-widest text-primary">
            Some projects I&#39;ve done.
          </h3>
        </div>
        <div className="mt-8">
          <Slider duration={3000} />
        </div>
      </div>
    </div>
  );
}
