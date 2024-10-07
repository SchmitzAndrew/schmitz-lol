'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { getScreenConfig, getRandomColor } from '../utils';

interface SliderProps {
  direction?: 'left' | 'right';
  className?: string;
}

export default function Slider({ direction = 'left', className = '' }: SliderProps) {
  const [animationDuration, setAnimationDuration] = useState(20);
  const [textSizeClass, setTextSizeClass] = useState(className);
  const coloredTextRef = useRef<JSX.Element[]>([]);

  const createColoredText = useMemo(() => (text: string, repetitions: number) => {
    if (coloredTextRef.current.length === 0) {
      coloredTextRef.current = Array.from({ length: repetitions }, (_, index) => (
        <span key={index} className={`${getRandomColor()} px-1`}>
          {text}
        </span>
      ));
    }
    return coloredTextRef.current;
  }, []);

  useEffect(() => {
    const updateSlider = () => {
      const { textWidth, baseSpeed, textSizeClass: newTextSizeClass } = getScreenConfig(window.innerWidth);
      const repetitions = Math.max(2, Math.ceil(window.innerWidth / textWidth));
      createColoredText('schmitz.lol ', repetitions);
      setAnimationDuration(baseSpeed * (window.innerWidth / 1000));
      setTextSizeClass(newTextSizeClass);
    };

    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [createColoredText]);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full flex-grow flex items-center">
      <div 
        className={`inline-block slider-${direction}`}
        style={{ 
          '--animation-duration': `${animationDuration}s`,
          animationDuration: `${animationDuration}s`
        } as React.CSSProperties}
      >
        <h1 className={`font-bold whitespace-nowrap inline-block ${textSizeClass}`}>
          {coloredTextRef.current}
        </h1>
      </div>
    </div>
  );
}