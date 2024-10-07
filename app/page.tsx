'use client';
import { useState, useEffect } from 'react';
import Slider from './components/Slider';
import { getScreenConfig } from './utils';

export default function Home() {
  const [sliders, setSliders] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const updateSliders = () => {
      const { innerHeight: screenHeight, innerWidth: screenWidth } = window;
      const { sliderHeight } = getScreenConfig(screenWidth);
      const count = Math.ceil(screenHeight / sliderHeight) + 1;

      setSliders(Array.from({ length: count }, (_, index) => (
        <Slider
          key={index}
          direction={index % 2 === 0 ? 'left' : 'right'}
        />
      )));
    };

    updateSliders();
    window.addEventListener('resize', updateSliders);
    return () => window.removeEventListener('resize', updateSliders);
  }, []);

  return (
    <main className="flex flex-col h-screen overflow-hidden bg-[#f8f8f6]">
      {sliders}
    </main>
  );
}
