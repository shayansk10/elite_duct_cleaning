import React, { useEffect } from "react";
import { FileText, ArrowLeft, Mail, Phone, MapPin, CheckCircle2, ShieldAlert } from "lucide-react";
import { COMPANY_INFO } from "../data";

interface TermsOfServiceProps {
  onGoHome: () => void;
}

export default function TermsOfService({ onGoHome }: TermsOfServiceProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation Breadcrumb / Back Button */}
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onGoHome();
              window.location.hash = "#home";
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-4 py-2 rounded-full shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
          <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-900 px-3 py-1 rounded-full">
            Last Updated: August 13, 2026
          </span>
        </div>

        {/* Page Header Banner */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/20 text-xs font-mono font-bold uppercase tracking-wider">
              <FileText className="h-3.5 w-3.5 text-blue-400" />
              Service Agreement & Policies
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Please review these Terms of Service governing your use of the Elite Duct Cleaning website and service requests.
            </p>
          </div>
        </div>

        {/* Policy Document Content Card */}
        <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">1</span>
              Terms of Service Agreement
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Elite Duct Cleaning website, forms, estimate features, and services requested through our platform. By accessing our website, submitting an inquiry, requesting an estimate, or scheduling a service, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">2</span>
              Company & Service Information
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Elite Duct Cleaning provides residential and commercial ventilation cleaning solutions, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
              <li>Air Duct System Cleaning & Decontamination</li>
              <li>Dryer Vent Lint Clearing & Exhaust Optimization</li>
              <li>HVAC Coil, Blower, & Plenum Maintenance</li>
              <li>Sanitization and Air Quality Consultation Services</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm pt-1">
              Depending on the customer&apos;s geographical location, services may be fulfilled directly by our team or coordinated with qualified, licensed local service partners.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">3</span>
              Website Use Rules
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              By using our website, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
              <li>Provide true, accurate, current, and complete contact and property details</li>
              <li>Use the website strictly for lawful, personal, or business service-related purposes</li>
              <li>Refrain from attempting to disrupt, overload, or compromise website functionality or security</li>
              <li>Avoid submitting fraudulent inquiries or automated spam submissions</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">4</span>
              Service Availability
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Service availability is subject to customer location (ZIP code), dispatch capacity, weather conditions, property accessibility, and scheduling availability. Checking your ZIP code on our website serves as an initial coverage lookup and does not automatically guarantee a finalized service appointment until confirmed by our dispatch team.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">5</span>
              Estimates & Pricing
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Online prices, promotional offers, and preliminary estimates provided via website forms are subject to verification based on actual property size, HVAC system count, vent accessibility, system condition, and requested add-ons. The final agreed price will be communicated to and confirmed with the customer prior to performing the service.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">6</span>
              Scheduling & Appointments
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Appointment requests submitted online are subject to dispatch confirmation. While we make every effort to arrive within scheduled service windows, appointment times may occasionally shift due to unforeseen traffic, severe weather, equipment maintenance, or emergency field service demands. Customers will be notified promptly if scheduling adjustments are required.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">7</span>
              Customer Responsibilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              To ensure safe and effective cleaning operations, customers are responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
              <li>Providing safe, unobstructed physical access to air vents, registers, furnaces, and dryer vents</li>
              <li>Securing household pets and valuable items prior to technician arrival</li>
              <li>Informing technicians of known pre-existing HVAC issues, structural vulnerabilities, or fragile materials</li>
              <li>Ensuring an adult (18+) is present on site during the appointment</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">8</span>
              Service Conditions & Limitations
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Cleaning outcomes may vary depending on system age, prior maintenance history, ductwork material (e.g., flex duct vs. rigid metal), buildup severity, and mechanical layout. Duct cleaning removes loose debris and buildup but does not repair defective, broken, or improperly installed mechanical equipment.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">9</span>
              Property Damage & Pre-Existing Conditions
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We are not liable for damage arising from pre-existing system flaws, deteriorated or fragile duct materials, improper prior installations, or hidden structural defects that could not reasonably be detected prior to service. Nothing in these Terms limits liability for damage directly resulting from our gross negligence or willful misconduct where prohibited by law.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">10</span>
              Payments
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Payment is due upon service completion or as agreed upon during booking. Payments processed through authorized third-party transaction providers are subject to those providers&apos; respective security and operational terms.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">11</span>
              Cancellations & Rescheduling
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Customers may request appointment rescheduling or cancellation by contacting us as soon as possible prior to the scheduled time. Any applicable fees or deposit policies will only apply if communicated in writing prior to booking confirmation.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">12</span>
              Customer Communications
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              By providing your contact details, you consent to receive service-related communications including appointment confirmations, technician ETA updates, estimate details, and customer support via phone call, email, or messaging.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">13</span>
              Third-Party Links & Integrations
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our website may contain links to external third-party websites, map services, or social media platforms. Elite Duct Cleaning is not responsible for the privacy practices, content, or terms of third-party platforms.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">14</span>
              Intellectual Property
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              All website content—including logos, design elements, text copy, graphic artwork, icons, and software components—is the property of Elite Duct Cleaning or its content suppliers and is protected by intellectual property laws. Unauthorized reproduction or redistribution is strictly prohibited.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">15</span>
              Website Disclaimer
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Website content and estimate tools are provided for general information and customer booking convenience. We do not guarantee uninterrupted, error-free website operation at all times.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">16</span>
              Limitation of Liability
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              To the fullest extent permitted by law, Elite Duct Cleaning shall not be liable for indirect, incidental, special, or consequential damages resulting from website usage or service scheduling. Mandatory consumer protection rights remain unaffected.
            </p>
          </section>

          {/* Section 17 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">17</span>
              Indemnification
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              You agree to indemnify and hold harmless Elite Duct Cleaning from claims, damages, or costs arising from your unlawful use of the website or violation of these Terms.
            </p>
          </section>

          {/* Section 18 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">18</span>
              Governing Law
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              These Terms are governed by applicable federal and state laws governing commercial home-service agreements, subject to statutory consumer protections that cannot legally be excluded.
            </p>
          </section>

          {/* Section 19 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">19</span>
              Changes to These Terms
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We reserve the right to revise these Terms periodically. Updated terms will be published directly on this page with an updated &quot;Last Updated&quot; timestamp. Continued website use constitutes acceptance of revised terms.
            </p>
          </section>

          {/* Section 20 */}
          <section className="space-y-4 pt-2 border-t border-slate-200/80 dark:border-slate-800">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">20</span>
              Contact Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              For questions regarding these Terms of Service or service inquiries, please contact us:
            </p>

            <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="font-display font-bold text-slate-900 dark:text-white text-base">Elite Duct Cleaning</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span><strong>Email:</strong> <a href="mailto:eliteductcleaning10@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">eliteductcleaning10@gmail.com</a></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span><strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:underline">{COMPANY_INFO.phone}</a></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span><strong>Service Area:</strong> Nationwide across the USA</span>
                </li>
              </ul>
            </div>
          </section>

        </div>

        {/* Bottom Back Button */}
        <div className="text-center pt-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onGoHome();
              window.location.hash = "#home";
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-navy-950 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 px-6 py-3 rounded-full shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Elite Duct Cleaning Homepage
          </a>
        </div>

      </div>
    </div>
  );
}
