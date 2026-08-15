import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Search, CheckCircle, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICE_AREAS_DATA, COMPANY_INFO } from "../data";

export default function ServiceAreas() {
  const [zipInput, setZipInput] = useState("");
  const [searchResult, setSearchResult] = useState<{
    status: "success" | "fail" | "idle";
    message: string;
    responseTime?: string;
    city?: string;
  }>({ status: "idle", message: "" });

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) {
      setSearchResult({ status: "idle", message: "" });
      return;
    }

    // Check if it is a valid 5-digit ZIP code
    const isZipValid = /^\d{5}$/.test(cleanZip);

    if (isZipValid) {
      setSearchResult({
        status: "success",
        city: `ZIP Code ${cleanZip}`,
        responseTime: "Same-Day Dispatch",
        message: `✓ Great News! Elite Duct Cleaning serves your area in ZIP Code ${cleanZip}. We have dispatch units ready to serve you!`,
      });

      // Automatically pre-fill the ZIP code in the contact form
      window.dispatchEvent(
        new CustomEvent("prefill-zip", { detail: { zip: cleanZip } })
      );

      // Briefly display the success message, then smoothly scroll to the Contact / Estimate Form
      setTimeout(() => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 1800);
    } else {
      setSearchResult({
        status: "fail",
        message: `Please enter a valid 5-digit ZIP Code to check service availability in your area.`,
      });
    }
  };

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-slate-100 dark:bg-slate-800/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full self-center">
            Service Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Serving Customers Across the USA
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We proudly provide professional Air Duct Cleaning and Dryer Vent Cleaning services to residential and commercial customers across the United States.
          </p>
        </div>

        {/* Dynamic ZIP Checker Block */}
        <div className="max-w-xl mx-auto mb-20">
          <div className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-md">
            <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2 text-center flex items-center justify-center gap-2">
              <Search className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Check Service Availability</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm text-center mb-6">
              Enter your ZIP Code to instantly check service availability in your area.
            </p>

            <form onSubmit={handleZipCheck} className="flex flex-row gap-2 sm:gap-2.5 w-full">
              <input
                type="text"
                pattern="[0-9]*"
                maxLength={5}
                placeholder="e.g. 75201"
                value={zipInput}
                onChange={(e) => {
                  setZipInput(e.target.value.replace(/\D/g, ""));
                  setSearchResult({ status: "idle", message: "" });
                }}
                className="flex-1 min-w-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-3 sm:px-4 py-3 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-mono"
              />
              <button
                type="submit"
                className="shrink-0 whitespace-nowrap bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 active:scale-95 text-white px-5 sm:px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer"
              >
                Check
              </button>
            </form>

            {/* Checker Output Responses */}
            <AnimatePresence mode="wait">
              {searchResult.status !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 text-left"
                >
                  {searchResult.status === "success" ? (
                    <div className="bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800 rounded-2xl p-4 flex gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-emerald-950 dark:text-emerald-200 mb-1">
                          {searchResult.message}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2 border-t border-emerald-100/50 dark:border-emerald-800/50 pt-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                          <span>📍 Service Status: Active</span>
                          <span>⚡ Dispatch Window: {searchResult.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-800 rounded-2xl p-4 flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-amber-950 dark:text-amber-200 leading-relaxed">
                          {searchResult.message}
                        </p>
                        <a
                          href={`tel:${COMPANY_INFO.phoneRaw}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 hover:text-amber-950 dark:hover:text-amber-200 transition-colors mt-2 underline"
                        >
                          <span>Call Dispatch Hotline</span>
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICE_AREAS_DATA.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 text-left hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900/90 hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  {area.popular && (
                    <span className="text-[9px] font-mono font-bold uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 py-0.5 px-2 rounded-full">
                      Primary Service
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {area.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              {/* Card Footer Trust Tag */}
              <div className="flex items-center gap-1.5 border-t border-slate-100 dark:border-slate-800 pt-4 mt-6 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>{area.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
