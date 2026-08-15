import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Award, Wrench } from "lucide-react";
import emailjs from "@emailjs/browser";
import { COMPANY_INFO, SERVICES_DATA } from "../data";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip_code: "",
    service_address: "",
    service_required: "",
    additional_details: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const handlePrefillZip = (e: Event) => {
      const customEvent = e as CustomEvent<{ zip: string }>;
      if (customEvent.detail && customEvent.detail.zip) {
        setFormData((prev) => ({ ...prev, zip_code: customEvent.detail.zip }));
      }
    };

    window.addEventListener("prefill-zip", handlePrefillZip);
    return () => {
      window.removeEventListener("prefill-zip", handlePrefillZip);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.phone || !formData.email || !formData.zip_code || !formData.service_address) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!formRef.current) return;

    setSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_axoldvw",
        "template_ctv2l5i",
        formRef.current,
        {
          publicKey: "VRk5m6Nn8EkoY-UNX",
        }
      );

      if (result.status === 200 || result.text === "OK") {
        setSubmitting(false);
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          zip_code: "",
          service_address: "",
          service_required: "",
          additional_details: ""
        });
      } else {
        throw new Error("Failed to send estimate request. Please try again.");
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setSubmitting(false);
      setError(
        err?.text || err?.message || "Failed to send estimate request. Please check your connection and try again."
      );
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-100 dark:bg-slate-900 relative overflow-hidden transition-colors">
      {/* Background soft lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details & Hours (Left Column) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full self-start">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-tight mt-4">
                Let’s Purify Your Space
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-4">
                Have an inquiry or need immediate ventilation servicing? Fill out our form or message our central dispatch office.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="bg-white dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-5 flex items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-none transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5 fill-blue-500/15 group-hover:fill-white/15" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono uppercase text-slate-400 dark:text-slate-500">Phone Support</h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">{COMPANY_INFO.phone}</p>
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Call Dispatch Now</span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="bg-white dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-5 flex items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-none transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono uppercase text-slate-400 dark:text-slate-500">Email Address</h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-1 break-all">{COMPANY_INFO.email}</p>
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">24-Hr Email Response</span>
                </div>
              </a>
            </div>

            {/* Our Service Promise Section */}
            <div className="bg-white dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Our Service Promise
              </h3>
              <div className="space-y-4">
                {/* Point 1 */}
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-100/80 dark:border-slate-800 hover:border-blue-200 dark:hover:border-slate-700 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60 dark:border-blue-900/40">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        NADCA Certified Technicians
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Trained professionals following industry-standard air duct cleaning practices.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-100/80 dark:border-slate-800 hover:border-blue-200 dark:hover:border-slate-700 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60 dark:border-blue-900/40">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Professional Equipment
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        Powerful professional-grade equipment for a thorough and effective cleaning.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-100/80 dark:border-slate-800 hover:border-blue-200 dark:hover:border-slate-700 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60 dark:border-blue-900/40">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        100% Satisfaction Guaranteed
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        We’re committed to delivering reliable service and cleaner, healthier indoor air.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Container (Right Column) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-950/90 border border-slate-200/80 dark:border-slate-800 rounded-[2rem] p-6 sm:p-10 shadow-xl dark:shadow-none relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      Free Online Quotation
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                      Fill out this quick form. A ventilation engineer will calculate an estimate.
                    </p>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-xl text-xs font-semibold flex items-center justify-between">
                        <span>{error}</span>
                        <button
                          type="button"
                          onClick={() => setError(null)}
                          className="text-[10px] font-bold text-red-800 dark:text-red-300 underline shrink-0 ml-2 cursor-pointer"
                        >
                          Dismiss
                        </button>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Full Name *</label>
                        <input
                          type="text"
                          required
                          name="name"
                          placeholder="Benjamin Reynolds"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          placeholder="832-284-0769"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Email Input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Email Address *</label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="ben@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                      </div>

                      {/* Zip Code Input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">ZIP Code *</label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          name="zip_code"
                          placeholder="75201"
                          value={formData.zip_code}
                          onChange={(e) => setFormData({ ...formData, zip_code: e.target.value.replace(/\D/g, "") })}
                          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-mono"
                        />
                      </div>
                    </div>

                    {/* Service Address Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">SERVICE ADDRESS *</label>
                      <input
                        type="text"
                        required
                        name="service_address"
                        placeholder="Enter the address where service is needed"
                        value={formData.service_address}
                        onChange={(e) => setFormData({ ...formData, service_address: e.target.value })}
                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </div>

                    {/* Services Dropdown */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Service Required</label>
                      <select
                        name="service_required"
                        value={formData.service_required}
                        onChange={(e) => setFormData({ ...formData, service_required: e.target.value })}
                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all"
                      >
                        <option value="">Select a ventilation service...</option>
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Additional Details</label>
                      <textarea
                        rows={4}
                        name="additional_details"
                        placeholder="Please tell us about your system issues, mold concerns, register count, or last cleaning date..."
                        value={formData.additional_details}
                        onChange={(e) => setFormData({ ...formData, additional_details: e.target.value })}
                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl text-base shadow-lg shadow-blue-900/20 active:scale-98 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {submitting ? (
                        <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <span>Calculate Free Estimate</span>
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 font-medium">
                      ✓ No credit card required. Estimates are 100% free with zero commitment.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-100 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 fill-emerald-50 dark:fill-emerald-950" />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white max-w-md leading-tight">
                    Thank you! Your estimate request has been received. We'll contact you shortly.
                  </h3>
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 mt-6 text-xs text-left max-w-sm space-y-1.5 font-medium text-slate-500 dark:text-slate-400">
                    <p className="font-bold text-slate-700 dark:text-slate-300">Next Steps:</p>
                    <p>✓ 1. We will verify local dispatch availability for your ZIP.</p>
                    <p>✓ 2. You will receive a call within 10-15 minutes.</p>
                    <p>✓ 3. We confirm appointment date & diagnostic photos.</p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-8 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline cursor-pointer"
                  >
                    Submit Another Estimate Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
