"use client";

import React, { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Database, FileCode, Layout, Server, Cpu, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- Cells ---

const VisualCell = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.offsetWidth || 300;
    let height = canvas.height = canvas.parentElement?.offsetHeight || 300;

    // Abstract Gradient Blob Logic
    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Create dynamic gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsla(${240 + Math.sin(time) * 40}, 70%, 20%, 1)`);
      gradient.addColorStop(1, `hsla(${280 + Math.cos(time) * 40}, 70%, 15%, 1)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Floating Orbs
      for (let i = 0; i < 3; i++) {
        const x = width / 2 + Math.cos(time * (1 + i * 0.5)) * (width * 0.3);
        const y = height / 2 + Math.sin(time * (1 + i * 0.5)) * (height * 0.3);

        ctx.beginPath();
        ctx.arc(x, y, 100, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${200 + i * 50}, 60%, 50%, 0.1)`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.offsetWidth || 300;
      height = canvas.height = canvas.parentElement?.offsetHeight || 300;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 transition-colors duration-500 group">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-violet-600/20 via-transparent to-transparent opacity-50 blur-2xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white mb-1">UI/UX Design</h3>
        <p className="text-gray-400 text-sm">Pixel-perfect experiences</p>
      </div>
    </div>
  );
};

const LogicCell = () => {
  const codeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(codeRef.current, {
      duration: 4,
      text: {
        value: `const engineer = new FullStackDev();\nawait engineer.deploy();\n// Status: 200 OK`,
        delimiter: ""
      },
      ease: "none",
      repeat: -1,
      repeatDelay: 2,
      yoyo: false
    });
  }, { scope: codeRef });

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden flex flex-col shadow-2xl hover:border-white/20 transition-colors duration-500">
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#252526]/50">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      {/* Code Area */}
      <div className="flex-1 p-6 font-mono text-sm md:text-base text-gray-300">
        <span className="text-purple-400">async function</span> <span className="text-yellow-300">init</span>() {"{"}
        <div ref={codeRef} className="mt-2 pl-4 text-green-400 whitespace-pre-wrap min-h-[4rem]">
                    // Initializing...
        </div>
        {"}"}
        <div className="mt-4 animate-pulse w-2 h-4 bg-gray-500/50" />
      </div>

      <div className="absolute bottom-8 inset-x-0 h-32 bg-gradient-to-t from-[#1e1e1e]/20 to-transparent pointer-events-none" />

      <div className="absolute bottom-12 left-6 z-10">
        <h3 className="text-2xl font-bold text-white mb-1">Backend Logic</h3>
        <p className="text-gray-400 text-sm">Scalable API Architecture</p>
      </div>

      {/* Status Bar */}
      <div className="w-full h-8 bg-white/5 border-t border-white/5 flex items-center px-4 text-[10px] text-gray-500 font-mono gap-4 mt-auto">
        <span>main*</span>
        <span>Ln 42, Col 12</span>
        <span className="ml-auto">TypeScript JSX</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
};

const StackCell = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const icons = gsap.utils.toArray(".stack-icon");
    gsap.to(icons, {
      y: -10,
      stagger: {
        each: 0.1,
        yoyo: true,
        repeat: -1
      },
      duration: 2,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[200px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 transition-colors duration-500 p-6 flex flex-col justify-between overflow-hidden group">
      <div className="flex flex-wrap gap-6 justify-center items-center relative z-10 h-full content-center">
        <div className="stack-icon transition-all duration-300 ease-out text-gray-500 opacity-60 grayscale hover:text-white hover:opacity-100 hover:scale-110 hover:grayscale-0"><Layout className="w-8 h-8" /></div>
        <div className="stack-icon transition-all duration-300 ease-out text-gray-500 opacity-60 grayscale hover:text-white hover:opacity-100 hover:scale-110 hover:grayscale-0"><Server className="w-8 h-8" /></div>
        <div className="stack-icon transition-all duration-300 ease-out text-gray-500 opacity-60 grayscale hover:text-white hover:opacity-100 hover:scale-110 hover:grayscale-0"><Database className="w-8 h-8" /></div>
        <div className="stack-icon transition-all duration-300 ease-out text-gray-500 opacity-60 grayscale hover:text-white hover:opacity-100 hover:scale-110 hover:grayscale-0"><Cpu className="w-8 h-8" /></div>
        <div className="stack-icon transition-all duration-300 ease-out text-gray-500 opacity-60 grayscale hover:text-white hover:opacity-100 hover:scale-110 hover:grayscale-0"><FileCode className="w-8 h-8" /></div>
        <div className="stack-icon transition-all duration-300 ease-out text-gray-500 opacity-60 grayscale hover:text-white hover:opacity-100 hover:scale-110 hover:grayscale-0"><Zap className="w-8 h-8" /></div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">Tech Stack</h3>
        <p className="text-gray-400 text-xs">Modern Tooling</p>
      </div>
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

const PerfCell = () => {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: countRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.fromTo(countRef.current,
          { textContent: "0" },
          {
            textContent: "100",
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 }
          }
        );
      }
    });
  }, { scope: countRef });

  return (
    <div className="relative w-full h-full min-h-[200px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 transition-colors duration-500 p-6 flex flex-col justify-between group overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-colors" />

      <div className="relative z-10">
        <div className="flex items-baseline gap-1">
          <span ref={countRef} className="text-6xl font-bold text-white font-heading">100</span>
          <span className="text-2xl text-green-500 font-bold">%</span>
        </div>
        <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-green-500 w-full animate-[progress_2s_ease-out]" />
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <h3 className="text-xl font-bold text-white">Performance</h3>
        <p className="text-gray-400 text-xs">Lighthouse Score</p>
      </div>
    </div>
  );
};


// --- Main Component ---

export function BentoGrid() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">

      <Container className="max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Full-Stack Ecosystem</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Bridging the gap between creative design and robust engineering.
            A complete toolkit for modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Grid Layout Logic */}

          {/* Visual: Col span 2 */}
          <div className="md:col-span-2 md:row-span-1">
            <VisualCell />
          </div>

          {/* Logic: Tall vertical on the right */}
          <div className="md:col-span-1 md:row-span-2 h-full">
            <LogicCell />
          </div>

          {/* Stack: Single square */}
          <div className="md:col-span-1 md:row-span-1">
            <StackCell />
          </div>

          {/* Perf: Single square */}
          <div className="md:col-span-1 md:row-span-1">
            <PerfCell />
          </div>

        </div>
      </Container>
    </section>
  );
}
