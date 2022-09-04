import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const data = [
  {
    id: 1,
    image: 'typing-speed.png',
    link: 'https://github.com/myoschen/typing-speed',
  },
  {
    id: 2,
    image: 'react-chat-app.png',
    link: 'https://github.com/myoschen/react-chat-app',
  },
];

let count = 0;

export default function Slider() {
  const [index, setIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    count = (count + 1) % data.length;
    setIndex(count);
  };

  const prevSlide = () => {
    count = (count + data.length - 1) % data.length;
    setIndex(count);
  };

  return (
    <div
      ref={slideRef}
      className="relative w-full select-none h-[400px] md:h-[600px]"
    >
      <a href={data[index].link} className="relative block w-full h-full">
        {data.map((item) => (
          <Image
            key={item.id}
            src={'/assets/projects/' + item.image}
            layout="fill"
            alt="project"
            objectFit="cover"
            className={`rounded-md ${
              item.id === index + 1
                ? 'transition-all opacity-100 duration-700 ease-in-out'
                : 'opacity-0'
            }`}
          />
        ))}
      </a>
      <button
        className="absolute btn btn-square top-1/2 left-4"
        onClick={prevSlide}
      >
        <AiOutlineLeft size={24} />
      </button>
      <button
        className="absolute btn btn-square top-1/2 right-4"
        onClick={nextSlide}
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  );
}
