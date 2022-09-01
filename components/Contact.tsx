import IonIcon from '@reacticons/ionicons';
import { SiGithub } from 'react-icons/si';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen my-12">
      <div className="px-8 mx-auto max-w-7xl">
        <h2 className="flex items-baseline gap-x-2">
          <IonIcon name="link" className="rotate-45 text-primary" />
          <span className="text-3xl tracking-widest">CONTACT</span>
        </h2>
        <div className="flex items-center my-2 gap-x-2">
          <span className="hidden sm:block w-6 h-[1px] bg-primary"></span>
          <h3 className="my-2 text-sm font-medium tracking-widest text-primary">
            If you are willing to cooperate, please contact me.
          </h3>
        </div>
        <div className="flex flex-col mt-8">
          <ContactForm />
          <div className="my-8 divider">OR</div>
          <ul className="flex items-center justify-center gap-x-8">
            <li>
              <a
                href="https://github.com/Myoschen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-3xl btn-ghost btn btn-square">
                  <SiGithub />
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:willy14620@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-3xl btn-ghost btn btn-square">
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
                <div className="text-3xl btn-ghost btn btn-square">
                  <IonIcon name="logo-twitter" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
