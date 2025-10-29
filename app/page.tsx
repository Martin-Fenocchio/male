'use client';

import { useState, useEffect } from 'react';
import ComponentA from './components/a';
import ComponentB from './components/b';
import ComponentC from './components/c';
import ComponentD from './components/d';
import ComponentE from './components/e';

const COMPONENTS = [ComponentA, ComponentB, ComponentC, ComponentD, ComponentE];
const INTERVAL_TIME = 5_000; // 5 seconds

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === COMPONENTS.length - 1) {
          clearInterval(interval)
          return 4;
        }
        return prevIndex + 1;
      });
      setProgress(0);
    }, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + 1;
      });
    }, INTERVAL_TIME / 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex]);

  const CurrentComponent = COMPONENTS[currentIndex];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Progress Bar */}
     {currentIndex < 4 && <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-800">
        <div
          className="h-full bg-blue-500 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>}

      {/* Component Display */}
      <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
        <CurrentComponent />
      </div>
    </div>
  );
}
