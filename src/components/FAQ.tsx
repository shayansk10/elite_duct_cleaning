import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Plus, Minus } from "lucide-react";
import { FAQS_DATA, COMPANY_INFO } from "../data";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const categories = ["All", "General", "Service", "Safety"];

  const filteredFaqs = activeCategory === "All"
    ? FAQS_DATA
    : FAQS_DATA.filter(faq => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full self-center">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have questions about duct cleaning, processes, or safety? We have compiled detailed answers here to keep you informed.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenFaqId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all uppercase cursor-pointer ${
                activeCategory === category
                  ? "bg-slate-900 dark:bg-blue-600 text-white shadow-md shadow-slate-900/10"
                  : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List of Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 text-left ${
                  isOpen
                    ? "bg-slate-50 dark:bg-slate-900/90 border-slate-300 dark:border-slate-700 shadow-md shadow-slate-200/50 dark:shadow-none"
                    : "bg-white dark:bg-slate-950/80 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/50 dark:hover:bg-slate-900/60"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 flex justify-between items-center gap-4 text-left font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="h-6 w-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4 transform rotate-180 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                    )}
                  </span>
                </button>

                {/* Answer Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-6 pl-14 border-t border-slate-200/60 dark:border-slate-800 pt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call to action at bottom of FAQ */}
        <div className="text-center mt-12 bg-blue-50/50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 rounded-2xl p-6">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Still have an unanswered question about our professional ventilation systems? 
            <a href="#contact" className="text-blue-600 dark:text-blue-400 font-bold ml-1 hover:underline">
              Submit your inquiry to our experts
            </a> or message us directly at <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-slate-900 dark:text-white font-bold hover:underline">{COMPANY_INFO.phone}</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
