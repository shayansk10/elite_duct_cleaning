import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, ChevronLeft, ChevronRight, Maximize2, ShieldAlert, Sparkles, X } from "lucide-react";
import { BEFORE_AFTER_DATA } from "../data";
// @ts-ignore
import plenumBefore from "../assets/images/plenum_before_1783775047512.jpg";
// @ts-ignore
import plenumAfter from "../assets/images/plenum_after_1783775069985.jpg";
// @ts-ignore
import registerBefore from "../assets/images/register_before_1783775537136.jpg";
// @ts-ignore
import registerAfter from "../assets/images/register_after_1783775561833.jpg";

export default function BeforeAfter() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Map data to use local assets for Main Return Plenum and Residential Register Box
  const mappedData = BEFORE_AFTER_DATA.map((item) => {
    if (item.id === "slide-1") {
      return {
        ...item,
        beforeUrl: plenumBefore,
        afterUrl: plenumAfter,
      };
    }
    if (item.id === "slide-2") {
      return {
        ...item,
        beforeUrl: registerBefore,
        afterUrl: registerAfter,
      };
    }
    return item;
  });

  const currentItem = mappedData[activeIdx];

  // Handle slider drag interaction
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  // Click on comparison track to shift slider directly
  const handleTrackClick = (e: React.MouseEvent) => {
    if (isDragging) return;
    handleMove(e.clientX);
  };

  // Keyboard listener to close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    if (lightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-navy-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full self-center">
            Pristine Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            See the Elite Difference Firsthand
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Drag the handle below left and right to inspect raw before and after results from our residential and commercial sanitization visits.
          </p>
        </div>

        {/* Gallery Selector Buttons */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {mappedData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIdx(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all border ${
                activeIdx === idx
                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/30"
                  : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Frame */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Slider Left Description */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left order-2 lg:order-1">
            <h3 className="text-2xl font-display font-bold text-white leading-tight">
              {currentItem.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentItem.description}
            </p>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                  <ShieldAlert className="h-4 w-4 text-rose-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 font-mono uppercase">Before Cleaning</h4>
                  <p className="text-sm text-slate-200">Heavy allergen caking, mold colonies, airflow restrictions.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 font-mono uppercase">After Elite Restoration</h4>
                  <p className="text-sm text-slate-200">Pristine NADCA certified air channels and germicidal finish.</p>
                </div>
              </div>
            </div>

            {/* Lightbox Trigger Button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-2 self-start bg-white/5 border border-white/15 hover:bg-white/10 text-xs font-bold py-3 px-5 rounded-xl text-slate-300 hover:text-white transition-all mt-2"
            >
              <Maximize2 className="h-4 w-4" />
              <span>Zoom Visuals Full Screen</span>
            </button>
          </div>

          {/* Slider Container on the Right */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div
              ref={containerRef}
              onClick={handleTrackClick}
              className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden select-none border border-white/10 shadow-2xl bg-slate-950 cursor-ew-resize"
            >
              {/* After Image (Background layer) */}
              <img
                src={currentItem.afterUrl}
                alt="After Elite Air Duct Cleaning Restoration"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-emerald-600/95 text-white px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase shadow-md pointer-events-none">
                AFTER ELITE
              </div>

              {/* Before Image (Clipping Foreground layer) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                {/* We maintain a fixed width so that image doesn't squash during clipping */}
                <div className="absolute inset-0 w-full h-full aspect-[16/10]">
                  <img
                    src={currentItem.beforeUrl}
                    alt="Before Elite Air Duct Cleaning Dusty Grime"
                    className="w-full h-full object-cover pointer-events-none"
                    style={{ width: containerRef.current?.getBoundingClientRect().width || "100%", height: "100%" }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div
                className="absolute bottom-4 left-4 bg-rose-700/95 text-white px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase shadow-md pointer-events-none"
                style={{ opacity: sliderPos > 12 ? 1 : 0, transition: "opacity 0.2s" }}
              >
                BEFORE
              </div>

              {/* Drag Handle Bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white hover:bg-blue-400 cursor-ew-resize z-20 flex items-center justify-center transition-colors"
                style={{ left: `${sliderPos}%` }}
                onMouseDown={startDrag}
                onTouchStart={startDrag}
              >
                <div className="absolute h-10 w-10 rounded-full bg-white border-2 border-blue-600 text-blue-600 shadow-xl flex items-center justify-center scale-90 hover:scale-100 transition-transform active:scale-110">
                  <div className="flex gap-0.5">
                    <ChevronLeft className="h-4 w-4 shrink-0 -mr-1" />
                    <ChevronRight className="h-4 w-4 shrink-0 -ml-1" />
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-4 italic">
              ✦ Swipe or drag the central handle to inspect restoration work.
            </p>
          </div>

        </div>
      </div>

      {/* Full-Screen Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-55 flex flex-col justify-center items-center p-4 sm:p-8 cursor-zoom-out overflow-y-auto"
          >
            {/* Prominent Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              aria-label="Close Fullscreen View"
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-60 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 border border-white/20 text-white flex items-center justify-center shadow-2xl transition-all cursor-pointer"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {/* Lightbox Image Area (Prevent backdrop click when clicking inside content) */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center my-auto py-8 cursor-default"
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
                {/* Before side */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-slate-900 shadow-2xl">
                  <img
                    src={currentItem.beforeUrl}
                    alt="Before closeup"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600/95 text-white px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider shadow-lg">
                    BEFORE (DUSTY DUCT)
                  </div>
                </div>

                {/* After side */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-slate-900 shadow-2xl">
                  <img
                    src={currentItem.afterUrl}
                    alt="After closeup"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600/95 text-white px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider shadow-lg">
                    AFTER ELITE RESTORATION
                  </div>
                </div>
              </div>

              {/* Caption details */}
              <div className="text-center mt-6 max-w-2xl mx-auto space-y-2">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-white">{currentItem.title}</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{currentItem.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
