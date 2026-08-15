import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

// Dynamic Icon rendering helper matching lucide strings
function ServiceIcon({ name, className = "h-6 w-6 text-blue-600" }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Activity className={className} />;
  return <IconComponent className={className} />;
}

interface ServicesProps {
  onOpenEstimateModal: (serviceId?: string) => void;
}

export default function Services({ onOpenEstimateModal }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full self-center">
            Our Cleaning Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Premium Ventilation & HVAC Cleaning Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From heavy-duty commercial plenums to residential dryer vents, our NADCA-aligned protocols guarantee purified air, maximized appliance lifespans, and reduced utility bills.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-950/80 rounded-3xl p-8 border border-slate-200/60 dark:border-slate-800 shadow-md shadow-slate-200/40 dark:shadow-none hover:shadow-xl dark:hover:border-slate-700 hover:-translate-y-1.5 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block */}
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 group-hover:border-blue-100 dark:group-hover:border-blue-900 transition-all">
                    <ServiceIcon name={service.iconName} className="h-7 w-7 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Text Details */}
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Benefits Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                        <Icons.Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3 border-t border-slate-100 dark:border-slate-800 pt-5 mt-auto">
                  <button
                    onClick={() => onOpenEstimateModal(service.id)}
                    className="flex-1 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-bold py-3 px-4 rounded-xl text-center active:scale-95 transition-all cursor-pointer"
                  >
                    Get Quote
                  </button>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex items-center justify-center h-10 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 text-xs font-semibold transition-all cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detailed Service Modal Drawer */}
        <AnimatePresence>
          {selectedService && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-black/60 z-50"
              />

              {/* Service Detail Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl z-55 overflow-y-auto max-h-[90vh]"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 flex items-center justify-center">
                      <ServiceIcon name={selectedService.iconName} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white leading-none">
                        {selectedService.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">NADCA Standard Compliant</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                  >
                    <Icons.X className="h-4 w-4" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono mb-2">Service Overview</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono mb-3">Key Benefits & Outcomes</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                          <Icons.CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      const id = selectedService.id;
                      setSelectedService(null);
                      onOpenEstimateModal(id);
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-lg shadow-blue-900/20 active:scale-98 transition-all cursor-pointer"
                  >
                    Schedule Service Estimate
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="py-3.5 px-6 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white text-center font-bold cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
