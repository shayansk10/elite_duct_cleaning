import React from "react";
import { Flame, ArrowRight, ShieldCheck, Tag, Sparkles, CheckCircle2 } from "lucide-react";

interface OctoberOfferBannerProps {
  onClaim: () => void;
}

export default function OctoberOfferBanner({ onClaim }: OctoberOfferBannerProps) {
  const handleClaim = () => {
    // Track GA event for banner claim
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "october_offer_claimed", {
        offer_name: "October Special Offer $178",
        source: "banner",
        event_category: "Promotions",
      });
    }

    onClaim();
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-100 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-900 relative overflow-hidden transition-colors">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/10 dark:bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-amber-500/30 dark:border-amber-500/30 shadow-2xl shadow-blue-950/10 dark:shadow-black/50 overflow-hidden">
          {/* Top banner accent ribbon */}
          <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-blue-600" />

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Offer Details */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-mono bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                    <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    🔥 OCTOBER SPECIAL
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    SAVE $50
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    Limited Autumn Allocation
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Complete Duct & Dryer Vent Revitalization
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Deep vacuum extraction and sanitization for your main HVAC supply & return runs, plus full dryer vent exhaust lint clearing for complete home fire safety.
                </p>

                {/* Service Breakdown Tags */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Air Duct Cleaning
                        </div>
                        <div className="text-[11px] text-slate-400 line-through">
                          Reg. $179
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold font-mono text-blue-600 dark:text-blue-400">
                      $149
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                        <Tag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Dryer Vent Add-On
                        </div>
                        <div className="text-[11px] text-slate-400 line-through">
                          Reg. $49
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold font-mono text-orange-600 dark:text-orange-400">
                      $29
                    </span>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Zero Hidden Fees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Certified Techs
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                    100% Satisfaction Guarantee
                  </span>
                </div>
              </div>

              {/* Right Column: Prominent Pricing Card & CTA */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden text-center sm:text-left">
                  {/* Subtle decorative glow */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Regular Package Total:
                    </span>
                    <span className="text-base font-mono font-semibold text-slate-400 line-through">
                      $228
                    </span>
                  </div>

                  <div className="py-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                      OCTOBER OFFER TOTAL
                    </span>
                    <div className="flex items-baseline justify-center sm:justify-start gap-2">
                      <span className="text-sm font-bold font-mono text-blue-400 uppercase">
                        ONLY
                      </span>
                      <span className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white drop-shadow-sm">
                        $178
                      </span>
                    </div>
                    <p className="text-xs text-emerald-400 font-mono font-bold mt-2">
                      ✓ Instant $50 Savings applied automatically
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={handleClaim}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-blue-600/30 active:scale-98 transition-all cursor-pointer"
                  >
                    <span>CLAIM OCTOBER OFFER</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-[11px] text-slate-400 mt-3">
                    Instantly opens booking form with promotional rate pre-filled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
