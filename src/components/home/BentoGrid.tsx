import React from 'react';
import { VisualCell } from './cells/VisualCell';
import { LogicCell } from './cells/LogicCell';
import { StackCell } from './cells/StackCell';
import { PerfCell } from './cells/PerfCell';

export const BentoGrid = () => {
  return (
    <section className="p-4 md:p-8 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {/*
          This is where the blueprint becomes reality.
          We use arbitrary values in Tailwind to define the grid areas.
          The names MUST match the JSON blueprint.
        */}
        <div 
          style={{ gridArea: 'visual' }} 
          className="md:col-span-2 md:row-span-1"
        >
          <VisualCell />
        </div>
        <div 
          style={{ gridArea: 'logic' }} 
          className="md:col-span-1 md:row-span-2"
        >
          <LogicCell />
        </div>
        <div style={{ gridArea: 'stack' }}>
          <StackCell />
        </div>
        <div style={{ gridArea: 'perf' }}>
          <PerfCell />
        </div>
      </div>
    </section>
  );
};

