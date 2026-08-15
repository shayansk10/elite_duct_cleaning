import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Calendar, MapPin, CheckCircle, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import { COMPANY_INFO } from "../data";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  onOpenEstimateModal: () => void;
}

export default function Navbar({ onOpenEstimateModal }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Process", href: "#process" },
    { name: "Service Areas", href: "#service-areas" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active scroll section
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const offsetTop = (el as HTMLElement).offsetTop;
          const offsetHeight = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-bar for quick contact & credibility */}
      <div className="bg-navy-950 text-white py-2 px-4 border-b border-white/5 text-xs font-medium z-50 relative hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-navy-400" />
              Proudly Serving Customers Nationwide Across the USA
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
              NADCA Certified Technicians
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Emergency service available 24/7</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-white hover:text-navy-300 transition-colors font-bold"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Sticky Header */}
      <header
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-350 ${
          scrolled
            ? "glass-nav py-3 shadow-md"
            : "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-4 border-b border-slate-100 dark:border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#home" className="cursor-pointer" onClick={() => setActiveSection("home")}>
            <Logo light={false} className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation Link Block */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1.5 ${
                  activeSection === link.href.substring(1)
                    ? "text-[#2563EB] dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-blue-400"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] dark:bg-blue-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Call-to-Actions (Phone + Estimator Button) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-[#2563EB] dark:hover:text-blue-400 transition-all bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-bold"
            >
              <div className="w-6 h-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-[#2563EB] dark:text-blue-400 shrink-0">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenEstimateModal}
              className="px-6 py-2.5 bg-[#0F172A] dark:bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-slate-800 dark:hover:bg-blue-500 shadow-xl shadow-slate-200 dark:shadow-none transition-all cursor-pointer"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Mobile menu trigger and quick buttons */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex sm:hidden items-center justify-center h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-amber-400" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-slate-700" />
              )}
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700"
              aria-label="Call Elite Duct Cleaning"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay and Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-45 lg:hidden"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-navy-950 text-white p-6 z-50 flex flex-col justify-between shadow-2xl border-l border-white/5 lg:hidden"
            >
              <div className="flex flex-col gap-8">
                {/* Drawer Header */}
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <Logo light showText={true} className="h-8 w-auto" />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleTheme}
                      className="h-8 w-8 rounded-full flex items-center justify-center bg-white/5 text-slate-300 hover:text-white"
                      aria-label="Toggle theme"
                    >
                      {theme === "dark" ? (
                        <Sun className="h-4 w-4 text-amber-400" />
                      ) : (
                        <Moon className="h-4 w-4 text-slate-300" />
                      )}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8 rounded-full flex items-center justify-center bg-white/5 text-slate-300 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Vertical Navigation Links */}
                <nav className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-slate-200 hover:text-white border-b border-white/5 pb-2 hover:border-navy-400 transition-all flex justify-between items-center"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-navy-400 font-mono">→</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer Call to Actions */}
              <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-white/10">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3 rounded-xl font-bold transition-all"
                >
                  <Phone className="h-4 w-4 text-navy-400 fill-navy-400/20" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenEstimateModal();
                  }}
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl font-bold text-center shadow-lg shadow-blue-900/30 active:scale-98 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Get Free Estimate</span>
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  ✓ Licensed, Bonded & Fully Insured
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
