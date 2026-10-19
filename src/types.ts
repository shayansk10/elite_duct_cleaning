export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // To match a Lucide icon
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  serviceType: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceArea {
  title: string;
  description: string;
  status: string;
  popular?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  timeEstimate: string;
}
