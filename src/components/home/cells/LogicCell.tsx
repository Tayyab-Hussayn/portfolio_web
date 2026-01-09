"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin);

export const LogicCell = () => {
  const container = useRef(null);
  const codeTextRef = useRef(null);

  useGSAP(() => {
    gsap.to(codeTextRef.current, {
      duration: 4,
      text: `// Authenticating API request...\nconst { user } = await db.users.find({ apiKey });\nif (!user) throw new Error('Auth Error');\n// Request successful [200 OK]\n// Latency: 42ms`,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className="h-full min-h-[300px] bg-[#1a1a1a] rounded-lg p-4 border border-white/10">
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre>
        <code ref={codeTextRef} className="text-green-400 font-mono text-xs md:text-sm whitespace-pre-wrap">
          {/* Initial state can be empty or have a blinking cursor */}
        </code>
      </pre>
    </div>
  );
};
