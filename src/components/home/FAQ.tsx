"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqData = [
  {
    id: "01",
    question: "Do you work with existing engineering teams?",
    answer: "Absolutely. I am comfortable jumping into existing codebases (Legacy or Modern), adhering to your Git workflows, and collaborating via Jira/Linear. I can lead or support."
  },
  {
    id: "02",
    question: "What is your approach to performance?",
    answer: "I don't just patch speed issues. I architect for performance from Day 1 using Server-Side Rendering (Next.js), efficient Caching strategies (Redis), and lightweight frontend bundles."
  },
  {
    id: "03",
    question: "How do you handle project handovers?",
    answer: "You own the code. I provide comprehensive documentation, Dockerized setup instructions, and a recorded walkthrough of the architecture so your team can take over immediately."
  },
  {
    id: "04",
    question: "What is your tech stack flexibility?",
    answer: "While I specialize in the Next.js/Node ecosystem, I am language-agnostic when it comes to solving problems. I can adapt to Python, Go, or Rust backends if the project demands it."
  }
];

export const FAQ = () => {
  // Track which card is active
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#050505] py-32 px-6 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20 text-left">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">
            SYSTEM <span className="text-zinc-600">PROTOCOLS</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg">
            Common queries regarding development workflows, architecture standards, and collaboration models.
          </p>
        </div>

        {/* THE GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${activeIndex === index
                  ? "bg-zinc-900 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                  : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                }`}
            >

              {/* Header Row */}
              <div className="flex items-start justify-between gap-4">

                {/* Question with Index */}
                <div className="flex gap-4">
                  <span className={`font-mono text-lg transition-colors ${activeIndex === index ? "text-blue-400" : "text-zinc-500 group-hover:text-blue-400"
                    }`}>
                    0{index + 1}.
                  </span>
                  <h3 className={`font-bold text-lg leading-snug transition-colors ${activeIndex === index ? "text-white" : "text-zinc-200"
                    }`}>
                    {item.question}
                  </h3>
                </div>

                {/* Icon */}
                <div className={`shrink-0 mt-1 transition-transform duration-300 ${activeIndex === index ? "rotate-45 text-blue-500" : "text-zinc-500 rotate-0 group-hover:text-white"
                  }`}>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Answer Section */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-400 text-sm leading-relaxed pl-10 border-l border-white/10">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
