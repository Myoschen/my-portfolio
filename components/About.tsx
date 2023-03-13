import Image from 'next/image';
import IonIcon from '@reacticons/ionicons';

export default function About() {
  return (
    <section id="about" className="min-h-screen my-12">
      <div className="px-8 mx-auto max-w-7xl">
        <h2 className="flex items-baseline gap-x-2">
          <IonIcon name="link" className="rotate-45 text-primary" />
          <span className="text-3xl tracking-widest">ABOUT</span>
        </h2>
        <div className="flex items-center my-2 gap-x-2">
          <span className="hidden sm:block w-6 h-[1px] bg-primary"></span>
          <h3 className="text-sm font-medium tracking-widest text-primary">
            Practice makes perfect.
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-8 prose md:prose-lg lg:prose-xl">
            <p>
              I graduated from Tamkang University in the Department of Computer
              Science and Information Engineering.
            </p>
            <p>
              I am passionate about programming, so I tried a lot of different
              Programming languages such as JavaScript, Java, Python, etc.
            </p>
            <p>
              However, due to university courses, I was exposed to web front-end
              development. Until now, I still love web front-end development.
            </p>
            <p>
              Now, I am still improving my skills, such as learning React
              framework, Vue framework, CSS typography, etc.
            </p>
            <p>
              In addition, I am also very interested in back-end technology.
              Like Deno, Node.js, etc.
            </p>
            <p>
              So in the future, I will focus on the front-end. If I have spare
              time, I will learn more about the back-end technology.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-md shadow w-[320px] h-[480px] hidden lg:block">
            <Image
              src="/assets/programming.svg"
              alt="Hal Gatewood's Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
