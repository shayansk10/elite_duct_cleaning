import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OctoberOfferBanner from "./components/OctoberOfferBanner";
import OctoberOfferModal, { OCTOBER_OFFER_NOTE } from "./components/OctoberOfferModal";
import WhyChooseUs from "./components/WhyChooseUs";
import BeforeAfter from "./components/BeforeAfter";
import Process from "./components/Process";
import ServiceAreas from "./components/ServiceAreas";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import EstimateModal from "./components/EstimateModal";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalServiceId, setModalServiceId] = useState("");
  const [modalInitialDetails, setModalInitialDetails] = useState("");
  const [currentPage, setCurrentPage] = useState<"home" | "privacy" | "terms">("home");
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleHashChange = () => {
      let pageTitle = "Elite Duct Cleaning | Professional Air Duct & HVAC Services";
      if (window.location.hash === "#privacy") {
        setCurrentPage("privacy");
        pageTitle = "Privacy Policy | Elite Duct Cleaning";
        window.scrollTo(0, 0);
      } else if (window.location.hash === "#terms") {
        setCurrentPage("terms");
        pageTitle = "Terms of Service | Elite Duct Cleaning";
        window.scrollTo(0, 0);
      } else {
        setCurrentPage("home");
        if (window.location.hash && window.location.hash !== "#home") {
          setTimeout(() => {
            const el = document.querySelector(window.location.hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }

      // Track SPA pageview navigation with Google Analytics
      if (isFirstRender.current) {
        isFirstRender.current = false;
      } else {
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "page_view", {
            page_title: pageTitle,
            page_location: window.location.href,
            page_path: window.location.pathname + (window.location.hash || ""),
          });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleOpenModal = (serviceId: string = "", initialDetails: string = "") => {
    setModalServiceId(serviceId);
    setModalInitialDetails(initialDetails);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalServiceId("");
    setModalInitialDetails("");
  };

  const handleClaimOctoberOffer = () => {
    handleOpenModal("Air Duct Cleaning", OCTOBER_OFFER_NOTE);
  };

  const handleGoHome = () => {
    setCurrentPage("home");
    window.location.hash = "#home";
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
        {/* 1. Sticky Navigation Header */}
        <Navbar onOpenEstimateModal={() => handleOpenModal("")} />

        {/* 2. Main Content Sections */}
        <main className="flex-grow">
          {currentPage === "privacy" ? (
            <PrivacyPolicy onGoHome={handleGoHome} />
          ) : currentPage === "terms" ? (
            <TermsOfService onGoHome={handleGoHome} />
          ) : (
            <>
              {/* Hero Section */}
              <Hero onOpenEstimateModal={() => handleOpenModal("")} />

              {/* Services Showcase Grid */}
              <Services onOpenEstimateModal={(id) => handleOpenModal(id)} />

              {/* In-Page October Special Offer Banner */}
              <OctoberOfferBanner onClaim={handleClaimOctoberOffer} />

              {/* Why Choose Us Trust Pillars */}
              <WhyChooseUs />

              {/* Interactive Before & After Comparison Slider & Lightbox */}
              <BeforeAfter />

              {/* Step-by-Step Restoration Process */}
              <Process />

              {/* Service Coverage areas & ZIP checker */}
              <ServiceAreas />

              {/* Customer Success Reviews Carousel */}
              <Reviews />

              {/* FAQ accordions */}
              <FAQ />

              {/* Large Premium Contact Module & Business Operations Map */}
              <ContactForm />
            </>
          )}
        </main>

        {/* 3. Global Footer */}
        <Footer />

        {/* 4. Floating Action & Quick-Response CTAs (WhatsApp & Mobile Bar) */}
        <FloatingCTA onOpenEstimateModal={() => handleOpenModal("")} />

        {/* 5. Free Estimate Questionnaire Dialog Popup */}
        <EstimateModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          preselectedServiceId={modalServiceId}
          initialDetails={modalInitialDetails}
        />

        {/* 6. Automatic October Offer Popup */}
        {currentPage === "home" && (
          <OctoberOfferModal onClaim={handleClaimOctoberOffer} />
        )}
      </div>
    </ThemeProvider>
  );
}
