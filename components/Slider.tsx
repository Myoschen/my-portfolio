import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import IonIcon from '@reacticons/ionicons';

const data = [
  {
    image: 'typing-speed.png',
    link: 'https://github.com/myoschen/typing-speed',
  },
  {
    image: 'react-chat-app.png',
    link: 'https://github.com/myoschen/react-chat-app',
  },
];

let count = 0;
let sliderInterval: NodeJS.Timeout;

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLAnchorElement>(null);

  const nextSlide = () => {
    count = (count + 1) % data.length;
    setCurrent(count);
  };

  const prevSlide = () => {
    count = (count + data.length - 1) % data.length;
    setCurrent(count);
  };

  const playSlider = () => {
    sliderInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(sliderInterval);
  };

  useEffect(() => {
    slideRef.current?.addEventListener('mouseenter', pauseSlider);
    slideRef.current?.addEventListener('mouseleave', playSlider);

    playSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  return (
    <div
      ref={slideRef}
      className="relative w-full select-none h-[400px] md:h-[600px]"
    >
      <a
        href={data[current].link}
        target="_blank"
        rel="noreferrer"
        className="aspect-video"
      >
        <Image
          src={'/assets/projects/' + data[current].image}
          layout="fill"
          alt="project"
          objectFit="cover"
          className="rounded-md"
        />
      </a>
      <div className="absolute flex items-center justify-between w-full px-4 transform -translate-y-1/2 pointer-events-none top-1/2">
        <button
          className="pointer-events-auto btn btn-square"
          onClick={prevSlide}
        >
          <IonIcon name="arrow-back" size="large" />
        </button>
        <button
          className="pointer-events-auto btn btn-square"
          onClick={nextSlide}
        >
          <IonIcon name="arrow-forward" size="large" />
        </button>
      </div>
    </div>
  );
}
