import { Service, Testimonial, FAQItem, ServiceArea, BeforeAfterItem, ProcessStep } from "./types";

export const COMPANY_INFO = {
  name: "Elite Duct Cleaning",
  phone: "832-284-0769",
  phoneRaw: "+18322840769",
  email: "eliteductcleaning10@gmail.com",
  address: "100 Airflow Parkway, Suite A, Dallas, TX 75201",
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { days: "Saturday", time: "8:00 AM – 5:00 PM" },
    { days: "Sunday", time: "Emergency Calls Only (8:00 AM – 3:00 PM)" },
  ],
  whatsappLink: "https://wa.me/18322840769",
};

export const SERVICES_DATA: Service[] = [
  {
    id: "air-duct-cleaning",
    title: "Air Duct Cleaning",
    description: "Full-source cleaning of supply, return, and intake ducts, clearing deep-seated allergens, mold, and dust.",
    longDescription: "Our comprehensive air duct cleaning targets your entire heating and cooling system. Using industrial-grade HEPA negative air machines and mechanical agitation brushes, we extract embedded dust, construction debris, pet dander, and mold spores. This ensures every register is thoroughly sanitized, providing immediately noticeable breathing relief.",
    iconName: "Wind",
    benefits: [
      "Removes up to 99.9% of trapped airborne allergens",
      "Eliminate musty, persistent odors from HVAC registers",
      "Increases system-wide HVAC airflow by up to 15%",
      "Reduces dust buildup on household furniture"
    ]
  },
  {
    id: "dryer-vent-cleaning",
    title: "Dryer Vent Cleaning",
    description: "Clearing compressed lint and nesting blockages to eliminate fire hazards and maximize drying efficiency.",
    longDescription: "Over 15,000 dryer fires occur annually due to lint buildup. We brush and vacuum your entire dryer exhaust line, from the dryer connection to the external terminal vent. This critical fire-prevention service not only safeguards your home but also cuts dryer cycle times in half, extending the operational life of your appliance.",
    iconName: "Flame",
    benefits: [
      "Drastically reduces dryer fire hazards",
      "Cuts clothes drying times in half",
      "Saves an average of $25/month on electricity bills",
      "Reduces wear and tear on your clothes dryer"
    ]
  },
  {
    id: "hvac-system-cleaning",
    title: "HVAC System Cleaning",
    description: "Restoring the internal components of your furnace and AC coils to optimal performance and sanitation.",
    longDescription: "Ducts are only part of the air quality equation. Our HVAC sanitization includes cleaning evaporator coils, blower motor assemblies, drain pans, and the furnace heat exchanger. Eliminating biofilm and microbial growth on HVAC coils prevents recirculating spores and improves heat transfer efficiency.",
    iconName: "Settings",
    benefits: [
      "Improves HVAC energy efficiency by up to 21%",
      "Extends system lifespan by reducing motor strain",
      "Prevents costly premature heating or cooling breakdowns",
      "Combats mold and bacteria growth inside primary coils"
    ]
  },
  {
    id: "vent-inspection",
    title: "Vent Inspection & Diagnostics",
    description: "CCTV video scope inspection to analyze structural leaks, mold colonization, and insulation issues.",
    longDescription: "Using specialized high-definition remote inspection cameras, we travel deep inside your ventilation system to spot hidden visual issues. This non-invasive diagnostic checks for duct structural separation, pest infestation nesting, insulation breaches, and localized moisture accumulation before performing cleaning.",
    iconName: "Eye",
    benefits: [
      "Provides crystal-clear visual proof of duct condition",
      "Identifies expensive conditioned air leaks behind walls",
      "Detects early structural rust or collapsing duct boards",
      "Includes a comprehensive diagnostic photo report"
    ]
  },
  {
    id: "commercial-duct-cleaning",
    title: "Commercial Duct Cleaning",
    description: "Heavy-duty ventilation cleaning compliant with NADCA standards for retail, medical, and office buildings.",
    longDescription: "We specialize in commercial and institutional duct cleaning tailored to minimize corporate downtime. Certified under NADCA ACR standards, we restore office campuses, manufacturing centers, healthcare units, and retail zones. Our crew ensures pristine IAQ (Indoor Air Quality) that lowers workplace absenteeism and supports building code compliance.",
    iconName: "ShieldCheck",
    benefits: [
      "Ensures full compliance with OSHA and local health codes",
      "Reduces workplace absenteeism by improving employee IAQ",
      "Cleans high-volume multi-zone distribution plenums",
      "Scheduled after-hours to ensure zero business disruption"
    ]
  },
  {
    id: "residential-duct-cleaning",
    title: "Residential Duct Cleaning",
    description: "Full-home duct scrubbing designed to protect families, pets, and modern high-efficiency HVAC networks.",
    longDescription: "Your home is your sanctuary. Our residential process is highly customized to match the sensitive ecosystem of your family. We protect your interior finishes with heavy-duty drop cloths, corner guards, and plastic register seals. Our negative-pressure systems keep all dislodged dust vacuumed directly to our service trucks.",
    iconName: "Home",
    benefits: [
      "Creates a pristine breathing space for asthma sufferers",
      "Captures thick pet hair and dander from deep registers",
      "Completely sanitizes newly purchased or renovated homes",
      "100% white-glove, mess-free service guarantee"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Visual HD Video Inspection",
    description: "We use robotic cameras to visually inspect your entire duct layout, pinpointing heavy dust pockets, structural leaks, and microbial growth.",
    timeEstimate: "15 - 20 Mins"
  },
  {
    stepNumber: 2,
    title: "Negative Air HEPA Hookup",
    description: "Your system is placed under powerful vacuum pressure using 5,000+ CFM industrial HEPA negative air collectors, ensuring no dust escapes into your rooms.",
    timeEstimate: "20 - 30 Mins"
  },
  {
    stepNumber: 3,
    title: "Pneumatic Whipping & Brushing",
    description: "Certified technicians sweep every line using specialized air whips and high-speed rotary brushes, scraping away decades of baked-on dust and allergens.",
    timeEstimate: "60 - 90 Mins"
  },
  {
    stepNumber: 4,
    title: "HEPA Sanitization & Deodorizing",
    description: "We apply an EPA-approved, botanical, non-toxic disinfectant throughout the system to destroy mold, yeast, and viruses, leaving a clean, odorless breeze.",
    timeEstimate: "15 - 20 Mins"
  },
  {
    stepNumber: 5,
    title: "Final Flow & Testing",
    description: "We switch on your HVAC, perform a final airflow test to document the increased velocity, and show you your pristine Before/After video comparisons.",
    timeEstimate: "10 - 15 Mins"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Benjamin Reynolds",
    location: "Preston Hollow, TX",
    rating: 5,
    date: "May 12, 2026",
    review: "Elite Duct Cleaning was absolutely phenomenal. They took their time, laid down protective drop cloths everywhere, and showed me the before and after video of our main ducts. I couldn't believe how much drywall dust was in there from our recent remodel. The airflow is literally twice as strong now, and my son's morning allergies have vanished.",
    serviceType: "Residential Air Duct & Vent Cleaning",
    verified: true
  },
  {
    id: "test-2",
    name: "Sarah Lindqvist",
    location: "Frisco, TX",
    rating: 5,
    date: "June 28, 2026",
    review: "We called them because our dryer was taking two full cycles to dry a single load of towels. The technician arrived right on time, explained the entire process, and pulled out a massive blockage of lint that was completely choking the pipe. The dryer is working like brand new again, drying everything in 35 minutes flat. Professional, polite, and clean!",
    serviceType: "Dryer Vent & Exhaust Cleaning",
    verified: true
  },
  {
    id: "test-3",
    name: "Marcus Sterling",
    location: "University Park, TX",
    rating: 5,
    date: "April 05, 2026",
    review: "As an office building manager, maintaining air quality is key to holding lease agreements. Elite handled our multi-floor HVAC system over the weekend. They completed the work NADCA-compliant, left the facility in spotless shape, and provided a comprehensive video inspection report. Outstanding corporate service.",
    serviceType: "Commercial Duct Cleaning",
    verified: true
  },
  {
    id: "test-4",
    name: "Eleanor Vance",
    location: "Southlake, TX",
    rating: 5,
    date: "July 01, 2026",
    review: "The level of customer care is premium. The technicians were wearing clean uniforms, shoe covers, and used soft corner protectors on my walls so their vacuum lines wouldn't cause any scratches. The air feels crisp and doesn't have that musty smell when the AC first kicks on. Will absolutely use Elite for our annual maintenance.",
    serviceType: "Full HVAC & Duct Sanitization",
    verified: true
  }
];

export const SERVICE_AREAS_DATA: ServiceArea[] = [
  {
    title: "Nationwide Residential Services",
    description: "Professional air duct and dryer vent cleaning for homes across the USA.",
    status: "Available Nationwide",
    popular: true
  },
  {
    title: "Nationwide Commercial Services",
    description: "Certified, large-scale ventilation cleaning and indoor air quality management.",
    status: "Available Nationwide",
    popular: true
  },
  {
    title: "Air Duct Cleaning",
    description: "Full-system sanitization removing dust, allergens, and micro-particles.",
    status: "Available Nationwide",
    popular: false
  },
  {
    title: "Dryer Vent Cleaning",
    description: "Professional lint removal preventing fire hazards and improving efficiency.",
    status: "Available Nationwide",
    popular: false
  },
  {
    title: "Apartment & HOA Services",
    description: "Multi-unit contracts with specialized equipment and clean safety records.",
    status: "Available Nationwide",
    popular: false
  },
  {
    title: "Office & Retail Buildings",
    description: "Commercial-grade HEPA vacuuming to protect workers, guests, and tenants.",
    status: "Available Nationwide",
    popular: false
  },
  {
    title: "Same-Day Availability",
    description: "Fast technician dispatch for urgent requests and scheduled maintenance.",
    status: "Available Nationwide",
    popular: false
  },
  {
    title: "Emergency Service Available",
    description: "24/7 hotline for clogged vents, airflow blockages, and critical issues.",
    status: "Available Nationwide",
    popular: false
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: "slide-1",
    title: "Main Return Plenum",
    description: "Thick, compacted dust and construction debris clogging a primary HVAC return line vs. pristine, polished steel after rotary brushing and negative vacuum extraction.",
    beforeUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", // Dusty grid/cavity representation
    afterUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"  // Gleaming clean metallic structure representation
  },
  {
    id: "slide-2",
    title: "Residential Register Box",
    description: "A close-up of a home vent with pet dander and lint build-up vs. a fully sanitized register coated with a botanical disinfectant.",
    beforeUrl: "https://images.unsplash.com/photo-1527515637462-cff94fc4727e?auto=format&fit=crop&q=80&w=800", // Dirty representation
    afterUrl: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=800"  // Pristine white vent grid representation
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How often should air ducts be cleaned in a typical home?",
    answer: "The National Air Duct Cleaners Association (NADCA) recommends professional duct cleaning every 3 to 5 years. However, homes with indoor pets, family members suffering from severe allergies or asthma, smokers, or those that have recently undergone a major remodeling project should have their air ducts cleaned every 1 to 2 years.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How long does a professional air duct cleaning take?",
    answer: "For a standard single-family home (typically 1 to 2 HVAC systems), a comprehensive, source-removal cleaning takes between 2 to 4 hours. Commercial systems or homes with multiple furnaces may take longer. We never rush our process, ensuring each register is individually treated.",
    category: "Service"
  },
  {
    id: "faq-3",
    question: "Will the cleaning process create a mess inside my home?",
    answer: "Absolutely not. We guarantee a white-glove, 100% mess-free service. By connecting our truck-mounted vacuum collector or high-efficiency portable collectors to your main plenum, your system is held under continuous negative air pressure. This pulls all dislodged particulates directly to our filtration units. Furthermore, we use soft protective booties, drop cloths, and wall-corner guards.",
    category: "Safety"
  },
  {
    id: "faq-4",
    question: "What is the difference between air duct cleaning and dryer vent cleaning?",
    answer: "Air duct cleaning restores the air supply and return registers that heat and cool your house. Dryer vent cleaning targets the entirely separate exhaust pipe that carries hot, humid air and lint from your clothes dryer to the outside of your home. Dryer vents should be cleaned annually to prevent lint ignition fire hazards and maintain high energy efficiency.",
    category: "Service"
  },
  {
    id: "faq-5",
    question: "Are the sanitizing solutions safe for pets and young children?",
    answer: "Yes, our priority is your health. We use Benefect, a leading commercial-grade botanical disinfectant. Its primary active ingredient is Thymol, which is naturally derived from thyme oil. It is EPA-registered, non-corrosive, non-toxic, and requires no warning labels or evacuation. It leaves a light, temporary herbal scent and destroys 99.99% of bacteria, mold spores, and viruses.",
    category: "Safety"
  },
  {
    id: "faq-6",
    question: "How can I tell if my air ducts actually need to be cleaned?",
    answer: "Signs of dirty ducts include: persistent thin layers of dust forming on furniture shortly after cleaning, dark carbon rings or dust accumulation around supply vents, musty odors when your heating or AC starts running, visible dust blowing out of vents, or unexplained spikes in utility bills indicating restricted HVAC airflow.",
    category: "General"
  }
];

export const TRUST_STATS = [
  { number: "15,000+", label: "Homes Restored" },
  { number: "100%", label: "NADCA Compliant" },
  { number: "4.9/5★", label: "Google Business Rating" },
  { number: "25+", label: "Service Cities" },
];
