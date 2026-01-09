MASTER DIRECTIVE: SECTION 4 - "THE ENGINEERING PIPELINE"
TO: Vibe Coding Agent
FROM: Lead Architect
OBJECTIVE: Build a high-trust "Workflow Timeline" that proves systemic thinking.
THEME: Industrial Minimalism. Think "Git Commit Log" meets "High-End Manufacturing."
1. INTELLIGENCE GATHERING
Agent Instruction: Search for "GSAP ScrollTrigger vertical timeline animation" or "Linear.app changelog design" to understand the aesthetic.
Key Visuals:
A continuous vertical line connecting distinct phases.
The line "lights up" (fills with color) exactly as the user scrolls past it.
Cards should start "dimmed" and "glow" when the active line hits them.
2. ARCHITECTURAL BLUEPRINT (JSON)
Agent Instruction: Use this content structure.
code
JSON
{
  "component": "WorkflowTimeline",
  "layout": "Vertical_Left_Aligned",
  "interaction": "Scroll_Fill_Animation",
  "steps": [
    {
      "id": "01",
      "phase": "Discovery",
      "title": "Requirement Analysis",
      "desc": "I don't start coding until I understand the business goal. We define technical specs, user flows, and edge cases upfront.",
      "icon": "Search"
    },
    {
      "id": "02",
      "phase": "Architecture",
      "title": "System Design",
      "desc": "Designing scalable schemas and API contracts. I treat infrastructure as code to ensure stability from Day 1.",
      "icon": "Layout"
    },
    {
      "id": "03",
      "phase": "Development",
      "title": "The Build",
      "desc": "Type-safe code with rigorous testing. I work in short sprints with transparent progress updates.",
      "icon": "Code"
    },
    {
      "id": "04",
      "phase": "Launch",
      "title": "Deployment & Scale",
      "desc": "Zero-downtime CI/CD pipelines. I handle the SSL, DNS, and server optimization so you don't have to.",
      "icon": "Rocket"
    }
  ]
}
3. TECHNICAL IMPLEMENTATION (THE "LIQUID LINE")
The Layout Structure
Container: max-w-4xl mx-auto relative.
The Line (The Track): A div absolute positioned to the left (e.g., left-8 or left-0 depending on mobile/desktop).
w-0.5 h-full bg-neutral-800 (The empty track).
The Line (The Fill): A second div inside the track.
w-full bg-gradient-to-b from-blue-500 to-purple-500 origin-top.
GSAP Logic: scaleY: 0 initially. As the user scrolls through the container, scaleY goes from 0 to 1.
The Steps (Nodes)
Layout: Grid or Flex. The "Icon Node" sits on top of the line. The "Card" sits to the right.
The Node (Circle): A circle with the icon inside.
Default: bg-neutral-900 border border-neutral-700 text-neutral-500.
Active State: When the "Liquid Line" passes it, it turns bg-blue-500 text-white shadow-glow.
4. DETAILED CSS/TAILWIND INSTRUCTIONS
The "Card" Design
We want these to look like System Logs.
Background: bg-transparent (Clean).
Border: border-l-2 border-transparent (Initially).
Active State: When active, the border turns border-blue-500 and background becomes bg-white/5.
Typography:
Phase Label: text-xs font-mono text-blue-400 mb-2 uppercase tracking-widest.
Title: text-2xl font-bold text-white.
Desc: text-gray-400 mt-2 leading-relaxed.
5. EXECUTION PLAN
Scaffold: Create the vertical list layout first.
The Line: Create the gray static line behind the icons.
The Magic: Create the absolute positioned "Colored Line" on top of the gray line.
GSAP Integration:
Use ScrollTrigger pinned to the container.
Animate the "Colored Line" height to match scroll progress.
(Advanced): Use stagger to light up the icons as the line hits them.
