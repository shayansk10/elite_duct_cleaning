import React from "react";
import { motion } from "motion/react";
import { Phone, Calendar, ShieldCheck, Award, Star, ArrowRight } from "lucide-react";
import { COMPANY_INFO, TRUST_STATS } from "../data";
// @ts-ignore
import heroImg from "../assets/images/hero_hvac_tech_1783774159850.jpg";

interface HeroProps {
  onOpenEstimateModal: () => void;
}

export default function Hero({ onOpenEstimateModal }: HeroProps) {
  // Container variants for staggered entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="home" className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden transition-colors">
      {/* Background decoration circles & light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-100/40 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-slate-200/40 dark:bg-slate-800/20 blur-[100px] pointer-events-none" />
      
      {/* HVAC vent grille wireframe background overlay */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/60 px-4 py-1.5 rounded-full shadow-sm">
              <Award className="h-4 w-4 text-[#2563EB] dark:text-blue-400" />
              <span className="text-xs font-bold tracking-wider text-[#2563EB] dark:text-blue-400 uppercase font-mono">
                NADCA Certified Air Duct Specialists
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              Breathe Cleaner Air with <span className="text-[#2563EB] dark:text-blue-400">Elite Duct Cleaning</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed"
            >
              Professional Air Duct & Dryer Vent Cleaning Services for Healthier Homes, Enhanced Efficiency, and Exceptional Indoor Air Quality.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
              <button
                onClick={onOpenEstimateModal}
                className="flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-blue-200/50 dark:shadow-none active:scale-98 transition-all cursor-pointer"
              >
                <Calendar className="h-5 w-5" />
                <span>Get Free Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl text-base font-bold shadow-sm active:scale-98 transition-all"
              >
                <Phone className="h-5 w-5 text-[#2563EB] dark:text-blue-400" />
                <span>Call Now: {COMPANY_INFO.phone}</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mt-4 text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200/60 dark:border-slate-800 pt-6">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-slate-900 dark:text-slate-200 font-bold">Over 1,200+ 5-Star Reviews</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative frame simulating premium modern agency visuals */}
            <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br from-blue-100 to-slate-200 dark:from-blue-900/30 dark:to-slate-800/40 opacity-40 blur-lg pointer-events-none" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 aspect-[4/3] lg:aspect-square">
              {/* Premium HVAC Engineer Imagery of elite certified technician at work */}
              <img
                src={heroImg}
                alt="Elite Duct Cleaning certified HVAC ventilation technician inspecting air ducts with premium machinery"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Float Glass trust badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-left flex items-center gap-4 border border-slate-100 dark:border-slate-800 shadow-lg">
                <div className="h-12 w-12 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shrink-0 font-extrabold text-lg shadow-md shadow-blue-200 dark:shadow-none">
                  99%
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm">Pollen & Allergen Removal</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">Cleaned using professional grade negative pressure HEPA vacuums.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating statistics cards across the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 lg:mt-24 border-t border-slate-200/60 dark:border-slate-800 pt-12"
        >
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/90 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center flex flex-col gap-1 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-md hover:bg-slate-50/50 dark:hover:bg-slate-800/80 transition-all group"
            >
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-blue-400 group-hover:scale-105 transition-all duration-300 block">
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
