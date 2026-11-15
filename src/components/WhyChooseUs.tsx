import React from "react";
import { motion } from "motion/react";
import { Award, Zap, DollarSign, Cpu, Leaf, HeartHandshake, Check } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Our crew is fully certified by the National Air Duct Cleaners Association (NADCA). We undergo continuous rigorous safety and technical training.",
      badge: "NADCA Certified",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Fast Local Response",
      description: "With dispatch units stationed across the Dallas-Fort Worth metroplex, we guarantee same-day emergency venting dispatch and punctual service windows.",
      badge: "Same-Day Dispatch",
      color: "from-amber-500/10 to-amber-600/10",
      iconColor: "text-amber-500"
    },
    {
      icon: DollarSign,
      title: "Transparent, Upfront Pricing",
      description: "We provide detailed flat-rate quotes before any brush touches your ducts. No hidden travel fees, no register-count bait-and-switches.",
      badge: "No Hidden Fees",
      color: "from-emerald-500/10 to-emerald-600/10",
      iconColor: "text-emerald-500"
    },
    {
      icon: Cpu,
      title: "Next-Gen HEPA Equipment",
      description: "We utilize industrial 5,000 CFM negative-pressure vacuum trucks, custom pneumatic whip scrapers, and HD camera scopes to treat your systems.",
      badge: "Military Grade",
      color: "from-purple-500/10 to-purple-600/10",
      iconColor: "text-purple-600"
    },
    {
      icon: Leaf,
      title: "Purified Indoor Air Quality",
      description: "Our dual brushing and botanical disinfection cycle removes up to 99.9% of microbial spores, pollen, pet dander, and deep-seated dust mites.",
      badge: "Thymol Sanitized",
      color: "from-teal-500/10 to-teal-600/10",
      iconColor: "text-teal-600"
    },
    {
      icon: HeartHandshake,
      title: "100% Satisfaction Guarantee",
      description: "If your air registers aren't pristine, we will re-clean your ducts completely free of charge. We don't pack up until you sign off on the results.",
      badge: "White Glove Seal",
      color: "from-rose-500/10 to-rose-600/10",
      iconColor: "text-rose-500"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white dark:bg-slate-950 overflow-hidden relative transition-colors">
      {/* Background soft glow lines */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-navy-500/5 dark:bg-slate-800/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
          <div className="lg:col-span-6 flex flex-col gap-4 text-left">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full self-start">
              Why Elite Duct Cleaning
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Setting the Gold Standard in Indoor Air Restoration
            </h2>
          </div>
          <div className="lg:col-span-6 text-left">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We aren't handymen with a vacuum. We are licensed, NADCA-certified technical specialists with commercial-grade equipment and an absolute obsession with breathing wellness. Here is why homeowners across the USA trust us.
            </p>
          </div>
        </div>

        {/* Bento-Inspired Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-slate-50 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  {/* Pillar Header with Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shrink-0`}>
                      <IconComponent className={`h-6 w-6 ${pillar.iconColor} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 group-hover:text-blue-600 dark:group-hover:text-blue-400 py-1 px-2.5 rounded-md transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Pillar Title & Copy */}
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Micro-Benefit Check Tag */}
                <div className="flex items-center gap-2 border-t border-slate-200/50 dark:border-slate-800 pt-4 mt-auto">
                  <span className="h-5 w-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Elite Standards Approved</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
