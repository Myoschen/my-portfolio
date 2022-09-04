import Image from 'next/image';
import IonIcon from '@reacticons/ionicons';

export default function About() {
  return (
    <div id="about" className="min-h-screen my-12">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-8 lg:flex-row">
          <div>
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
            <div className="mt-8 prose md:prose-lg lg:prose-xl">
              <p>
                I graduated from Tamkang University in the Department of
                Computer Science and Information Engineering.
              </p>
              <p>
                I am passionate about programming, so I tried a lot of different
                Programming languages such as JavaScript, Java, Python, etc.
              </p>
              <p>
                However, I was exposed to web design because of the university
                courses. So far I love web design.
              </p>
              <p>
                Now, I am still improving my skills, such as learning React
                framework, CSS typography, etc.
              </p>
              <p>
                In addition, I am also very interested in back-end technology.
                Like I built my own API before using the Express framework and
                the Heroku platform.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md shadow w-[320px] h-[480px] hidden lg:block">
            <Image
              src="/assets/web-design.jpg"
              alt="Hal Gatewood's Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
