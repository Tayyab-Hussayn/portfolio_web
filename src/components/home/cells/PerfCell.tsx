"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const PerfCell = () => {
  const container = useRef(null);
  const scoreRef = useRef(null);

  useGSAP(() => {
    const score = { value: 0 };
    gsap.fromTo(score, 
      { value: 0 },
      {
        value: 100,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          if (scoreRef.current) {
            scoreRef.current.textContent = Math.round(score.value).toString();
          }
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
        }
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className="h-full bg-[#112211] text-green-300 rounded-lg p-4 flex flex-col justify-center items-center border border-green-500/20">
      <h3 className="text-sm font-light uppercase tracking-widest mb-2">Lighthouse Score</h3>
      <div className="flex items-baseline">
        <span ref={scoreRef} className="text-7xl font-bold">0</span>
        <span className="text-4xl font-bold">%</span>
      </div>
    </div>
  );
};
