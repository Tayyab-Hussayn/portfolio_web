MASTER DIRECTIVE: SECTION 5 - THE "UNDER-LAYER" REVEAL
TO: Vibe Coding Agent
FROM: Lead Architect
PRIORITY: VISUAL OVERHAUL
OBJECTIVE: Build a "Sticky Reveal" footer with massive typography and high-density data.
1. THE ARCHITECTURAL MECHANIC (THE CURTAIN)
Agent Instruction: You must use the "Fixed Layer" technique.
Z-Index Logic: The Footer has z-index: 0 and position: fixed at bottom: 0.
Main Content Logic: The rest of the website (Hero, Bento, Projects, Process) must be wrapped in a main div with z-index: 10, position: relative, and background-color: black (to cover the footer until the end).
The Reveal: As the user scrolls past the last section, the main div slides up, revealing the fixed footer underneath.
2. THE VISUAL LAYOUT (GRID + TYPOGRAPHY)
The footer is no longer just a "Contact Us" section. It is a Dashboard.
Top Layer: The Call to Action
Text: "LET'S WORK TOGETHER" (or "START A PROJECT").
Style:
Font Size: text-[10vw] (Responsive massive text).
Font Weight: font-black.
Interaction: The text changes color (White -> Brand Color) on hover. The cursor turns into a massive "Email" icon.
Bottom Layer: The "Data Grid"
A clean, 1px border grid at the very bottom (height: 200px).
Col 1: Identity
Your Name.
"Full Stack Engineer".[1][2]
"Based in Pakistan (GMT+5)".
Add a live JS clock here.
Col 2: Socials
Github / LinkedIn / Twitter.
Style: Magnetic buttons (clean text, no background).
Col 3: Navigation
Home / Work / Process / About.[3]
Col 4: Action
A massive "Back to Top" arrow button that scrolls the page to 0.
3. THE "MAGIC" DETAILS
Grain: Add a bg-noise texture to the footer background so it's not a flat color.
Video Mask: (Optional) If you want to go crazy, clip a subtle video inside the "LET'S WORK" text. For now, a gradient hover is enough.
4. DETAILED CSS/TAILWIND INSTRUCTIONS
Agent Code Structure:
code
Tsx
// 1. The Footer Component (Fixed behind everything)
<footer 
  className="fixed bottom-0 left-0 w-full h-screen bg-[#050505] text-white z-0 flex flex-col justify-between p-10"
  style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
>
  {/* TOP: MASSIVE TEXT */}
  <div className="flex-grow flex items-center justify-center">
    <h1 className="text-[12vw] leading-none font-black uppercase tracking-tighter hover:text-blue-600 transition-colors duration-500 cursor-pointer">
      Let's Talk
    </h1>
  </div>

  {/* BOTTOM: THE DATA GRID */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
    <div className="flex flex-col gap-2">
      <span className="text-gray-500 uppercase text-xs tracking-widest">Local Time</span>
      <span className="text-xl font-mono">{time} GMT+5</span> {/* Use JS to get time */}
    </div>
    
    <div className="flex flex-col gap-2">
      <span className="text-gray-500 uppercase text-xs tracking-widest">Socials</span>
      <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
      <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
      <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
    </div>
    {/* ... other columns */}
  </div>
</footer>

// 2. The Main Content Wrapper (Must be added to Layout.tsx or Page.tsx)
<main className="relative z-10 bg-black mb-[100vh]"> 
  {/* The mb-[100vh] is CRITICAL. It creates the "transparent" scrolling space for the footer to show through. */}
  {children}
</main>
Instruction to Agent:
Refactor the page layout.[4] Wrap all previous sections (Hero, Bento, Showcase, Process) in a div with relative z-10 bg-black shadow-2xl.
Add margin-bottom: 100vh to that wrapper to allow scrolling past the content.
Place the Footer component outside that wrapper (fixed at bottom).
Implement the Live Clock logic (new Date().toLocaleTimeString()).
GO.

