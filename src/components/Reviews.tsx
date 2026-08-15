import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ShieldCheck } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextReview = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Optional: Auto slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentReview = TESTIMONIALS_DATA[currentIdx];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-100 dark:bg-slate-950 relative overflow-hidden transition-colors">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full self-center">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Loved by Thousands of Homeowners
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            See why Dallas-Fort Worth residents rank Elite as their #1 choice for indoor air purification, safety, and energy efficiency.
          </p>
        </div>

        {/* Testimonial Panel Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Trust Scoring Sidebar Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 bg-slate-900 dark:bg-slate-900/90 text-white rounded-3xl p-8 border border-white/5 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-display font-bold text-white">
              Absolute Trust
            </h3>
            <p className="text-slate-300 dark:text-slate-400 text-sm leading-relaxed">
              We collect third-party verified feedback from our service tickets. We maintain transparent quality controls on every single visit.
            </p>

            <div className="space-y-4 w-full border-t border-white/10 dark:border-slate-800 pt-6">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-300 dark:text-slate-400">
                <span>Google Business Rating</span>
                <span className="text-amber-400 font-bold">4.9 / 5.0★</span>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold text-slate-300 dark:text-slate-400">
                <span>Verified Cleanings</span>
                <span className="text-white font-bold">1,200+</span>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold text-slate-300 dark:text-slate-400">
                <span>Recommended Ratio</span>
                <span className="text-emerald-400 font-bold">99.4%</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 dark:border-slate-800 py-2.5 px-4 rounded-xl mt-2 w-full justify-center lg:justify-start">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span className="text-xs font-semibold text-slate-200">NADCA Certified Review Audit</span>
            </div>
          </div>

          {/* Testimonial Slide Area */}
          <div className="lg:col-span-8 flex flex-col gap-6 relative">
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl dark:shadow-none min-h-[380px] sm:min-h-[340px] flex flex-col justify-between relative">
              
              {/* Huge quote mark watermarked */}
              <div className="absolute top-6 right-8 text-slate-100 dark:text-slate-800/40 select-none pointer-events-none">
                <Quote className="h-20 w-20 transform rotate-180 opacity-40 fill-slate-50 dark:fill-slate-800" />
              </div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentReview.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.25 }}
                  className="space-y-6 text-left"
                >
                  {/* Rating Stars & Date */}
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <div className="flex gap-1">
                      {[...Array(currentReview.rating)].map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono font-semibold">{currentReview.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium italic">
                    "{currentReview.review}"
                  </p>

                  {/* Customer details */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 font-display">
                      {currentReview.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-display font-bold text-slate-900 dark:text-white leading-none">
                          {currentReview.name}
                        </h4>
                        {currentReview.verified && (
                          <div className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 py-0.5 px-1.5 rounded text-[9px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                            <CheckCircle className="h-2.5 w-2.5 fill-emerald-100 dark:fill-emerald-900" />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold">{currentReview.location}</p>
                    </div>
                  </div>

                  {/* Tag specifying service completed */}
                  <div className="absolute bottom-6 sm:bottom-12 right-8 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 py-1 px-2.5 rounded-md uppercase tracking-wider">
                    {currentReview.serviceType}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-between items-center">
              {/* Pagination Dots */}
              <div className="flex gap-1.5">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIdx ? 1 : -1);
                      setCurrentIdx(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                      currentIdx === idx ? "w-6 bg-slate-900 dark:bg-blue-500" : "w-2 bg-slate-300 dark:bg-slate-700"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Slider Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevReview}
                  className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white flex items-center justify-center shadow-sm active:scale-90 transition-all cursor-pointer"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white flex items-center justify-center shadow-sm active:scale-90 transition-all cursor-pointer"
                  aria-label="Next Review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
