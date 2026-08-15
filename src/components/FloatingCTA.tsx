import React from "react";
import { Phone, Calendar } from "lucide-react";
import { COMPANY_INFO } from "../data";

interface FloatingCTAProps {
  onOpenEstimateModal: () => void;
}

export default function FloatingCTA({ onOpenEstimateModal }: FloatingCTAProps) {
  return (
    <>
      {/* 1. Desktop, Tablet & Mobile Floating WhatsApp Button (Truly Fixed to Viewport) */}
      <div 
        className="fixed bottom-24 sm:bottom-6 md:bottom-6 lg:bottom-6 right-4 sm:right-6 md:right-6 lg:right-8 z-50 flex flex-col items-end gap-3 pointer-events-auto"
        style={{ position: "fixed" }}
      >
        {/* Hover-reveal speech bubble */}
        <div className="hidden lg:block bg-slate-900 border border-white/10 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-lg opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity whitespace-nowrap mb-1">
          Chat Live via WhatsApp
        </div>

        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] active:scale-90 transition-all group animate-bounce"
          aria-label="Contact Elite Duct Cleaning on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
          {/* SVG WhatsApp custom outline path inside */}
          <svg className="h-7 w-7 fill-white" viewBox="0 0 24 24">
            <path d="M12.004 2c-5.518 0-10 4.482-10 10 0 1.767.461 3.427 1.265 4.892l-1.347 4.915 5.038-1.321c1.408.766 3.003 1.201 4.7 1.201 5.518 0 10-4.482 10-10s-4.482-10-10-10zm.04 17.291c-1.545 0-3.053-.416-4.364-1.203l-.313-.188-3.243.85 1.019-3.14-.207-.33c-.859-1.37-1.312-2.956-1.312-4.593 0-4.721 3.84-8.56 8.561-8.56 4.721 0 8.56 3.839 8.56 8.56-1.002 4.721-3.84 8.56-8.561 8.56z" />
          </svg>
        </a>
      </div>

      {/* 2. Mobile Bottom Sticky Navigation CTA Bar (Viewport < sm) */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-navy-950/95 backdrop-blur-md border-t border-white/10 p-3 flex sm:hidden gap-3 z-40 shadow-xl shadow-black"
        style={{ position: "fixed" }}
      >
        {/* Call button */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white py-3.5 px-4 rounded-xl text-sm font-bold active:scale-95 transition-all"
        >
          <Phone className="h-4.5 w-4.5 text-blue-400 fill-blue-400/10" />
          <span>Call Now</span>
        </a>

        {/* Estimate trigger */}
        <button
          onClick={onOpenEstimateModal}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-4 rounded-xl text-sm font-extrabold active:scale-95 transition-all shadow-md shadow-blue-900/30"
        >
          <Calendar className="h-4.5 w-4.5" />
          <span>Get Estimate</span>
        </button>
      </div>
    </>
  );
}
