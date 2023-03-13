import { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IonIcon from '@reacticons/ionicons';
import useScrollOver from 'hooks/use-scroll-over';

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  const scrollOver = useCallback(() => {
    if (window.scrollY >= 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }, []);

  useScrollOver(scrollOver);

  return (
    <nav
      className={`${
        shadow && 'shadow-md'
      } navbar py-2 px-4 fixed z-[9999] bg-base-100 transition-all duration-300 ease-in-out`}
    >
      <div className="flex-1">
        <Link href="/">
          <a>
            <Image
              className="btn btn-ghost btn-circle"
              src="/assets/Logo.png"
              alt="Logo"
              width={60}
              height={60}
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="p-0 menu menu-horizontal">
          <li>
            <Link href="/">
              <span className="text-lg font-medium tracking-wide">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <span className="text-lg font-medium tracking-wide">About</span>
            </Link>
          </li>
          <li>
            <Link href="/#skills">
              <span className="text-lg font-medium tracking-wide">Skills</span>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <span className="text-lg font-medium tracking-wide">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <span className="text-lg font-medium tracking-wide">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <IonIcon name="menu" size="large" />
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-8 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <span className="text-lg font-medium tracking-wide">Home</span>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <span className="text-lg font-medium tracking-wide">About</span>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                <span className="text-lg font-medium tracking-wide">
                  Skills
                </span>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <span className="text-lg font-medium tracking-wide">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span className="text-lg font-medium tracking-wide">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
