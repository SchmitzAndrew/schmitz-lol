'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { getScreenConfig, getRandomColor } from '../utils';

interface SliderProps {
  direction?: 'left' | 'right';
  className?: string;
}

const getTwoRandomColors = () => {
  return [getRandomColor(), getRandomColor()];
};

export default function Slider({ direction = 'left', className = '' }: SliderProps) {
  const [animationDuration, setAnimationDuration] = useState(20);
  const [textSizeClass, setTextSizeClass] = useState(className);
  const coloredTextRef = useRef<JSX.Element[]>([]);

  const createColoredText = useMemo(() => (repetitions: number) => {
    if (coloredTextRef.current.length === 0) {
      coloredTextRef.current = Array.from({ length: repetitions }, (_, index) => {
        const wordRandom = Math.random();
        const gradientRandom = Math.random();
        const useGradient = gradientRandom < 0.33; 

        let style: React.CSSProperties;
        if (useGradient) { 
          const [color1, color2] = getTwoRandomColors();
          style = {
            background: `linear-gradient(to right, ${color1}, ${color2})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          };
        } else {
          style = {
            color: getRandomColor(),
            display: 'inline-block',
          };
        }

        if (wordRandom < 0.1) { 
          return (
            <Link key={index} href="https://github.com/SchmitzAndrew/schmitz-lol" target="_blank" rel="noopener noreferrer" className="px-1 hover:underline" style={style}>
              code&nbsp;
            </Link>
          );
        } else if (wordRandom > 0.1 && wordRandom < 0.2) { 
          return (
            <Link key={index} href="https://www.instagram.com/p/C94nztYRHOB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="px-1 hover:underline" style={style}>
              painting&nbsp;
            </Link>
          );
        } else { 
          return (
            <span key={index} className="px-1" style={style}>
              schmitz.lol&nbsp;
            </span>
          );
        }
      });
    }
    return coloredTextRef.current;
  }, []);

  useEffect(() => {
    const updateSlider = () => {
      const { textWidth, baseSpeed, textSizeClass: newTextSizeClass } = getScreenConfig(window.innerWidth);
      const repetitions = Math.max(2, Math.ceil(window.innerWidth / textWidth));
      createColoredText(repetitions);
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