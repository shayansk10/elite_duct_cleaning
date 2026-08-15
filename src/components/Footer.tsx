import React from "react";
import Logo from "./Logo";
import { COMPANY_INFO } from "../data";
import { ShieldCheck, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 dark:bg-slate-950 text-white pt-16 pb-8 border-t border-white/5 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      <div className="absolute top-0 right-10 w-[300px] h-[300px] rounded-full bg-blue-900/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <Logo light showText={true} className="h-10 w-auto" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Elite Duct Cleaning provides professional air duct and dryer vent cleaning services for homeowners across the USA.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61592229970116" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/elite.duct.cleaning/" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="mailto:eliteductcleaning10@gmail.com" className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Company Link</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home Base</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Restoration Process</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Service Areas</a></li>
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Ventilation Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Air Duct Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dryer Vent Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">HVAC System Sanitization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Vent Inspections</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Ventilation</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Central Support</h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">Dispatch Call Center</p>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-white hover:text-blue-300 transition-colors">{COMPANY_INFO.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">Corporate Email</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-white hover:text-blue-300 transition-colors break-all">{COMPANY_INFO.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">Headquarters Location</p>
                  <span className="font-semibold text-slate-200">{COMPANY_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom micro-bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-xs text-slate-400">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span>© {currentYear} {COMPANY_INFO.name}. All Rights Reserved.</span>
            <div className="flex gap-3">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          {/* Trust approved badges */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-mono font-bold tracking-wider uppercase text-slate-300">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Licensed, Bonded, & Fully Insured in Texas</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
