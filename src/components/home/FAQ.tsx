"use client"

import { Container } from "@/components/ui/Container"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "What is SEO, and why does my business need it?",
    answer:
      "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It's essential for increasing organic visibility, driving qualified traffic, and building long-term credibility for your business online.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy that typically shows initial results within 3-6 months, with significant improvements visible after 6-12 months. The timeline depends on factors like competition, current website status, and the comprehensiveness of the SEO strategy.",
  },
  {
    question: "Does Techspirex follow Google's SEO guidelines?",
    answer:
      "Yes, we strictly adhere to Google's SEO guidelines and best practices. We focus on white-hat SEO techniques that ensure sustainable, long-term results while avoiding any practices that could result in penalties.",
  },
  {
    question: "What types of SEO services does Techspirex offer?",
    answer:
      "We offer comprehensive SEO services including technical SEO audits, on-page optimization, content strategy, link building, local SEO, keyword research, and ongoing performance monitoring to ensure your website achieves maximum search visibility.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - FAQ Items */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#453478] mb-8 font-['Poppins']">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-gray rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4.5 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-base font-medium text-gray-900 pr-4 font-['Inter']">{faq.question}</span>
                    <motion.span
                      className="text-gray-500 flex-shrink-0"
                      animate={{ rotate: openIndex === idx ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={24} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed font-['Inter']">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Question Mark Image */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="https://techspirex.com/wp-content/uploads/2025/11/faq-img1.webp"
                  alt="Frequently Asked Questions"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

