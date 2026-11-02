import React from "react";
import { motion } from "motion/react";
import { Eye, ShieldAlert, Cpu, Sparkles, Wind, Clock } from "lucide-react";
import { PROCESS_STEPS } from "../data";

// Mapping step numbers to Lucide Icons
function StepIcon({ step, className = "h-5 w-5" }: { step: number; className?: string }) {
  switch (step) {
    case 1:
      return <Eye className={className} />;
    case 2:
      return <ShieldAlert className={className} />;
    case 3:
      return <Cpu className={className} />;
    case 4:
      return <Sparkles className={className} />;
    case 5:
      return <Wind className={className} />;
    default:
      return <Wind className={className} />;
  }
}

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      {/* Background soft grids */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.03] bg-[radial-gradient(#08123d_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full self-center">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Our 5-Step Deep Restoration Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We follow strict NADCA guidelines to extract 100% of contaminants. Here is exactly what happens during our comprehensive air purification visit.
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-slate-200 dark:bg-slate-800" />

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble Indicator */}
                  <div className="relative mb-6">
                    {/* Glowing outer circle on hover */}
                    <div className="absolute -inset-2 rounded-full bg-blue-100 dark:bg-blue-900/40 scale-0 group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-350" />
                    
                    {/* Main Circle Bubble */}
                    <div className="relative h-20 w-20 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-md flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-all duration-350">
                      <StepIcon step={step.stepNumber} className="h-8 w-8 group-hover:scale-110 transition-transform duration-350" />
                      
                      {/* Numerical Step Badge */}
                      <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-slate-900 dark:bg-slate-800 text-white border-2 border-white dark:border-slate-700 text-[10px] font-mono font-bold flex items-center justify-center">
                        {step.stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Step Heading & Info */}
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
                    {step.description}
                  </p>

                  {/* Duration marker */}
                  <div className="mt-auto inline-flex items-center gap-1.5 bg-slate-200/50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 text-[10px] font-mono font-bold py-1 px-2.5 rounded-full">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Est: {step.timeEstimate}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
