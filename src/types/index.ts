export type ServiceCategory =
  | 'Brand Identity & Positioning'
  | 'Content Production & Editing'
  | 'Social Media Management'
  | 'Automation & AI Chatbots';

export type PortfolioCategory =
  | 'All'
  | 'Video Editing'
  | 'Thumbnail Design'
  | 'Branding'
  | 'Social Media Content';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  highlight: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  specialty: string;
  category: 'Video Editing' | 'Thumbnail Design' | 'Branding' | 'Social Media Content';
  summary: string;
  metrics: string;
  image: string;
  deliverables: string[];
  behanceUrl?: string;
  videoPreviewUrl?: string;
  featuredQuote?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  clinic: string;
  specialty: string;
  stat: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
