import React, { useEffect } from "react";
import { Shield, ArrowLeft, Mail, Phone, MapPin, Lock, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../data";

interface PrivacyPolicyProps {
  onGoHome: () => void;
}

export default function PrivacyPolicy({ onGoHome }: PrivacyPolicyProps) {
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
              <Shield className="h-3.5 w-3.5 text-blue-400" />
              Legal & Transparency
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Elite Duct Cleaning respects your privacy and is committed to protecting the personal information you share with us through our website and services.
            </p>
          </div>
        </div>

        {/* Policy Document Content Card */}
        <div className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">1</span>
              Privacy Policy Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Elite Duct Cleaning (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects visitors&apos; privacy and is dedicated to protecting the personal information collected through our website. This Privacy Policy outlines how we handle information collected when you visit our website, submit requests, or utilize our customer inquiry features.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">2</span>
              Information We Collect
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We may collect both personal and non-personal information when you interact with our website:
            </p>
            <div className="space-y-2 pt-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Personal Information You Provide:</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
                <li>Full Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>ZIP code</li>
                <li>Service address or location details provided by you</li>
                <li>Specific service requests and project inquiries</li>
                <li>Information submitted through contact, estimate, or questionnaire forms</li>
                <li>Communications voluntarily provided through WhatsApp, email, phone, or social media</li>
              </ul>
            </div>
            <div className="space-y-2 pt-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Automated Technical Information:</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                When visiting our website, non-personal technical data may automatically be logged, including:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
                <li>IP address and general geographical location</li>
                <li>Browser type and version</li>
                <li>Device type and screen resolution</li>
                <li>Operating system</li>
                <li>Pages viewed, referral sources, and website navigation patterns</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">3</span>
              How We Use Information
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Collected information is utilized strictly for legitimate business and service purposes, including to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
              <li>Respond to customer inquiries and service consultation requests</li>
              <li>Provide accurate, free cost estimates for air duct and dryer vent cleaning</li>
              <li>Verify service availability in your specific ZIP code area</li>
              <li>Schedule, coordinate, and perform requested residential or commercial cleaning services</li>
              <li>Communicate updates regarding service appointments and customer support</li>
              <li>Improve our website functionality, accessibility, and user experience</li>
              <li>Maintain website security and prevent unauthorized access or fraud</li>
              <li>Analyze general web traffic and performance metrics</li>
              <li>Send important service-related updates and confirmations</li>
            </ul>
            <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 mt-3 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-blue-950 dark:text-blue-300">
                Elite Duct Cleaning does NOT sell customers&apos; personal information to third parties.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">4</span>
              Cookies & Tracking Technologies
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our website uses standard cookies and browser storage technologies to support website functionality, preserve temporary session settings (such as pre-filling your ZIP code during form navigation), monitor performance, and improve user experience. You can modify your web browser settings to decline or clear cookies at any time, though doing so may affect certain website features.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">5</span>
              Third-Party Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We may utilize trusted third-party providers to facilitate website hosting, infrastructure, communication forms, maps/location assistance, social media linking, and service dispatching. These third parties access personal data only to perform specified tasks on our behalf and are required to maintain privacy according to their respective policies.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">6</span>
              WhatsApp, Email & Social Media
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              When you choose to contact Elite Duct Cleaning through external platforms such as WhatsApp, direct email, Facebook, or Instagram, your communications are subject to the privacy policies and security practices of those respective third-party platforms.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">7</span>
              Data Security
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We maintain reasonable technical, administrative, and organizational safeguards designed to protect your personal information against accidental, unlawful, or unauthorized destruction, loss, alteration, access, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">8</span>
              Data Retention
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We retain personal information only for as long as reasonably necessary to fulfill the purposes outlined in this policy, service ongoing customer relationships, satisfy legal and accounting obligations, maintain security, or resolve disputes.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">9</span>
              Sharing of Information
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We do not sell, rent, or trade your personal information. We may share information when necessary with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
              <li>Operations and technology providers helping operate our website and services</li>
              <li>Certified field technicians or service partners required to complete your requested service</li>
              <li>Legal, regulatory, or government authorities if required by applicable law or valid subpoena</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">10</span>
              Your Privacy Rights
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Depending on your location and applicable law, you may have rights regarding your personal information, including the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or updates to inaccurate personal details</li>
              <li>Request deletion of your personal information where legally applicable</li>
              <li>Ask questions about how your information is collected and processed</li>
              <li>Opt out of marketing communications or non-essential updates</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 pt-2 text-sm">
              To exercise any of these rights, please contact us directly via email at:{" "}
              <a href="mailto:eliteductcleaning10@gmail.com" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                eliteductcleaning10@gmail.com
              </a>.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">11</span>
              Children&apos;s Privacy
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our website is intended for general adult audiences and is not directed toward children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If you believe a child under 13 has provided personal information to us, please contact us immediately.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">12</span>
              External Links
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Our website may contain links to third-party websites, applications, or social media pages. Elite Duct Cleaning is not responsible for the content, security, or privacy policies of those external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">13</span>
              California & U.S. State Privacy Considerations
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Residents of certain U.S. states (including California) may have specific privacy rights under applicable state laws. Elite Duct Cleaning respects these state-level rights and will handle verifiable privacy inquiries or requests in compliance with applicable legal standards.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">14</span>
              Changes to This Privacy Policy
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We may update this Privacy Policy periodically to reflect changes in our services, operational practices, or legal requirements. Updated versions will be posted on this page with a revised &quot;Last Updated&quot; date at the top of the policy.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4 pt-2 border-t border-slate-200/80 dark:border-slate-800">
            <h2 className="text-xl font-display font-bold text-navy-950 dark:text-white flex items-center gap-2.5">
              <span className="flex h-7 w-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 items-center justify-center text-xs font-bold font-mono">15</span>
              Contact Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
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
