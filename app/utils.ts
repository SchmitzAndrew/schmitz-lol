export const getScreenConfig = (width: number) => {
  if (width >= 1536) return { textWidth: 350, baseSpeed: 32, textSizeClass: 'text-9xl', sliderHeight: 180 };
  if (width >= 1280) return { textWidth: 325, baseSpeed: 31, textSizeClass: 'text-8xl', sliderHeight: 170 };
  if (width >= 1024) return { textWidth: 300, baseSpeed: 30, textSizeClass: 'text-8xl', sliderHeight: 160 };
  if (width >= 896) return { textWidth: 275, baseSpeed: 29, textSizeClass: 'text-7xl', sliderHeight: 150 };
  if (width >= 768) return { textWidth: 250, baseSpeed: 28, textSizeClass: 'text-7xl', sliderHeight: 140 };
  if (width >= 640) return { textWidth: 200, baseSpeed: 26, textSizeClass: 'text-6xl', sliderHeight: 120 };
  if (width >= 480) return { textWidth: 175, baseSpeed: 25, textSizeClass: 'text-5xl', sliderHeight: 110 };
  return { textWidth: 150, baseSpeed: 24, textSizeClass: 'text-4xl', sliderHeight: 100 };
};

export const colors = [
  'text-red-500',
  'text-blue-500',
  'text-green-500',
  'text-yellow-500',
  'text-purple-500',
  'text-pink-500',
  'text-indigo-500',
  'text-teal-500',
  'text-orange-500',
  'text-cyan-500',
];

export const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];