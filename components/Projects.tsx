import IonIcon from '@reacticons/ionicons';
import Slider from './Slider';

const data = [
  {
    id: 1,
    image: 'typing-speed.png',
    link: 'https://github.com/myoschen/typing-speed',
  },
  {
    id: 2,
    image: 'social-media-app.png',
    link: 'https://github.com/Myoschen/social-media-app',
  },
  {
    id: 3,
    image: 'muser-light.png',
    link: 'https://github.com/Myoschen/muser',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen my-12">
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
          <Slider images={data} duration={3000} />
        </div>
      </div>
    </section>
  );
}
