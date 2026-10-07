import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Flame, ArrowRight, ShieldCheck, Tag, Sparkles } from "lucide-react";

interface OctoberOfferModalProps {
  onClaim: () => void;
}

export const OCTOBER_OFFER_NOTE =
  "Customer is claiming the October Special Offer: Air Duct Cleaning $149 + Dryer Vent Cleaning $29 add-on — Total $178.";

export default function OctoberOfferModal({ onClaim }: OctoberOfferModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    try {
      const dismissed = sessionStorage.getItem("october_offer_popup_dismissed");
      if (dismissed === "true") {
        return;
      }
    } catch {
      // ignore storage errors
    }

    // Delay 2.5 seconds before popping up
    const timer = setTimeout(() => {
      setIsVisible(true);

      // Track GA event for popup impression
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "october_offer_viewed", {
          offer_name: "October Special Offer $178",
          event_category: "Promotions",
          event_label: "Popup Impression",
        });
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem("october_offer_popup_dismissed", "true");
    } catch {
      // ignore
    }
  };

  const handleClaim = () => {
    handleClose();

    // Track GA event for claim
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "october_offer_claimed", {
        offer_name: "October Special Offer $178",
        source: "popup",
        event_category: "Promotions",
      });
    }

    onClaim();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-lg max-h-[calc(100vh-32px)] sm:max-h-none flex flex-col bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-950/20 dark:shadow-black/60 overflow-hidden z-10 text-slate-900 dark:text-white my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="october-offer-title"
          >
            {/* Top decorative accent bar with autumn warm gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-blue-600 shrink-0" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer z-20 shadow-sm"
              aria-label="Close October Offer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-5 sm:p-8 overflow-y-auto overscroll-contain">
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  Limited-Time Special 🍂
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Save $50
                </span>
              </div>

              {/* Main Title */}
              <h3
                id="october-offer-title"
                className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
              >
                October Ventilation Special
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1.5 leading-relaxed">
                Freshen indoor airflow before winter heating season begins. Certified full-system decontamination.
              </p>

              {/* Offer Package Card */}
              <div className="mt-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 p-4 sm:p-5 space-y-3.5">
                {/* Item 1 */}
                <div className="flex items-center justify-between gap-3 text-sm pb-3 border-b border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-5 w-5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">
                        Air Duct Cleaning
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Regular Price: <span className="line-through">$179</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                      $149
                    </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between gap-3 text-sm pb-3 border-b border-slate-200 dark:border-slate-700/60">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-5 w-5 rounded-md bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                      <Tag className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">
                        Dryer Vent Cleaning
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Regular Add-On: <span className="line-through">$49</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[10px] font-bold font-mono uppercase bg-orange-500/10 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded mr-1">
                      Add-on
                    </span>
                    <span className="text-base font-extrabold text-orange-600 dark:text-orange-400 font-mono">
                      $29
                    </span>
                  </div>
                </div>

                {/* Pricing Summary Focus */}
                <div className="pt-1 flex items-center justify-between bg-gradient-to-r from-blue-600/10 via-amber-500/10 to-transparent p-3 rounded-xl border border-blue-500/20">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Regular Total: <span className="line-through text-slate-400 dark:text-slate-500 font-semibold">$228</span>
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      October Offer Total:
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1 justify-end">
                      <span className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400 uppercase">
                        ONLY
                      </span>
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-blue-600 dark:text-blue-400">
                        $178
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      Instant $50 Savings
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  NADCA Certified Equipment
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  100% Guaranteed Pricing
                </span>
              </div>

              {/* CTA Button */}
              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleClaim}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-extrabold text-base tracking-wide shadow-xl shadow-blue-700/25 active:scale-98 transition-all cursor-pointer"
                >
                  <span>CLAIM OCTOBER OFFER</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
                  Locks in $178 special on your booking inquiry. No upfront credit card required.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
