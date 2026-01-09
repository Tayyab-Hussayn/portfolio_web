"use client";

import React from 'react';

export const StackCell = () => {
  const technologies = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'];

  return (
    <div className="h-full min-h-[200px] bg-[#1a1a2e] rounded-lg p-4 border border-blue-500/20">
      <h3 className="text-lg font-bold text-blue-400 mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
