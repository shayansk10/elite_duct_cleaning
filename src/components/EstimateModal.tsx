import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, CheckCircle2, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { SERVICES_DATA, COMPANY_INFO } from "../data";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function EstimateModal({ isOpen, onClose, preselectedServiceId = "" }: EstimateModalProps) {
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

  // Sync state if modal is loaded with specific preselection
  React.useEffect(() => {
    if (preselectedServiceId) {
      const match = SERVICES_DATA.find(
        (s) => s.id === preselectedServiceId || s.title.toLowerCase() === preselectedServiceId.toLowerCase()
      );
      setFormData((prev) => ({
        ...prev,
        service_required: match ? match.title : preselectedServiceId,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        service_required: "",
      }));
    }
  }, [preselectedServiceId, isOpen]);

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
      } else {
        throw new Error("Failed to send estimate request. Please try again.");
      }
    } catch (err: any) {
      console.error("EmailJS Modal Error:", err);
      setSubmitting(false);
      setError(
        err?.text || err?.message || "Failed to send estimate request. Please check your connection and try again."
      );
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setError(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      zip_code: "",
      service_address: "",
      service_required: "",
      additional_details: ""
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950 z-50 pointer-events-auto"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-55 flex items-center justify-center p-3 sm:p-4 overflow-y-auto pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="w-full max-w-xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100vh-3rem)] flex flex-col bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative pointer-events-auto text-left"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center z-10 transition-colors cursor-pointer"
                aria-label="Close estimate modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="overflow-y-auto p-5 sm:p-8 overscroll-contain">
                {!success ? (
                  <div className="space-y-5 sm:space-y-6">
                    {/* Title Header */}
                    <div className="border-b border-slate-100 dark:border-slate-800 pb-4 pr-8">
                      <h3 className="text-lg sm:text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>Free Estimate Booking</span>
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                        Please submit your parameters. A service technician will calculate your quote and contact you.
                      </p>
                    </div>

                  {/* Form Block */}
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Full Name *</label>
                        <input
                          type="text"
                          required
                          name="name"
                          placeholder="Benjamin Reynolds"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          placeholder="832-284-0769"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Email *</label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="ben@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        />
                      </div>

                      {/* ZIP Code */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">ZIP Code *</label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          name="zip_code"
                          placeholder="75201"
                          value={formData.zip_code}
                          onChange={(e) => setFormData({ ...formData, zip_code: e.target.value.replace(/\D/g, "") })}
                          className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-mono"
                        />
                      </div>
                    </div>

                    {/* Service Address */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Service Address *</label>
                      <input
                        type="text"
                        required
                        name="service_address"
                        placeholder="Enter the address where service is needed"
                        value={formData.service_address}
                        onChange={(e) => setFormData({ ...formData, service_address: e.target.value })}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </div>

                    {/* Service selection */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Service Required</label>
                      <select
                        name="service_required"
                        value={formData.service_required}
                        onChange={(e) => setFormData({ ...formData, service_required: e.target.value })}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none transition-all"
                      >
                        <option value="">Select a ventilation service...</option>
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">Additional Details</label>
                      <textarea
                        rows={3}
                        name="additional_details"
                        placeholder="Please include any allergen concerns, register count, or last cleaning details..."
                        value={formData.additional_details}
                        onChange={(e) => setFormData({ ...formData, additional_details: e.target.value })}
                        className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 rounded-xl px-4 py-2 text-sm font-semibold outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 rounded-xl text-sm shadow-md active:scale-98 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {submitting ? (
                        <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <span>Send Free Estimate Request</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust footer block */}
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 rounded-2xl justify-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 dark:text-emerald-400" />
                    <span>✓ Certified local technicians • Upfront flat-rate pricing</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                  <div className="h-14 w-14 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-100 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 fill-emerald-50 dark:fill-emerald-950" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white max-w-md leading-tight">
                    Thank you! Your estimate request has been received. We'll contact you shortly.
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
                    A service engineer will contact you shortly at <span className="font-bold text-slate-800 dark:text-slate-200">{formData.phone || COMPANY_INFO.phone}</span> to complete your free estimate.
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl text-xs active:scale-95 transition-all mt-4 cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                </div>
              )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
