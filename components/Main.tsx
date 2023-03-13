import Link from 'next/link';
import IonIcon from '@reacticons/ionicons';
import { SiGithub } from 'react-icons/si';

export default function Main() {
  return (
    <section className="min-h-screen hero">
      <div className="text-center hero-content">
        <div>
          <h1 className="my-3 text-3xl font-bold tracking-wide select-none md:my-6 md:text-6xl">
            Hello, I&#39;m
            <span className="text-primary">&nbsp;Myos</span>
          </h1>
          <h1 className="flex flex-col my-3 text-3xl font-bold tracking-wide select-none lg:flex-row md:gap-y-4 md:my-6 md:text-6xl">
            A Front-End Web
            <span>&nbsp;Developer</span>
          </h1>
          <ul className="flex justify-center my-8 gap-x-4">
            <li>
              <a
                href="https://github.com/Myoschen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-3xl btn-ghost btn btn-circle">
                  <SiGithub />
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:myos.chen@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-3xl btn-ghost btn btn-circle">
                  <IonIcon name="mail-sharp" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/willy14620"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-3xl btn-ghost btn btn-circle">
                  <IonIcon name="logo-twitter" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
