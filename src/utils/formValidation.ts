export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  profession: string;
  services: string[];
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export function sanitizeString(val: string): string {
  return (val || '').trim();
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validatePhoneNumber(phone: string): boolean {
  // Allow international format, min 8 digits, max 16 digits
  const clean = phone.replace(/[\s\-\(\)\+]/g, '');
  return clean.length >= 8 && clean.length <= 16 && /^\d+$/.test(clean);
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const name = sanitizeString(data.fullName);
  if (!name || name.length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const email = sanitizeString(data.email);
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!validateEmail(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  const phone = sanitizeString(data.phone);
  if (phone && !validatePhoneNumber(phone)) {
    errors.phone = 'Please provide a valid phone number (8–15 digits).';
  }

  const profession = sanitizeString(data.profession);
  if (!profession) {
    errors.profession = 'Please select or specify your clinical specialty / practice.';
  }

  if (!data.services || data.services.length === 0) {
    errors.services = 'Please select at least one service you are interested in.';
  }

  const message = sanitizeString(data.message);
  if (!message || message.length < 10) {
    errors.message = 'Please share a brief note about your goals (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface ServiceEstimate {
  turnaroundDays: number;
  roadmapPhase: string;
  recommendedAudit: string;
}

export function calculateServiceEstimates(services: string[]): ServiceEstimate {
  if (!services || services.length === 0) {
    return {
      turnaroundDays: 7,
      roadmapPhase: 'Initial Diagnostic Consultation',
      recommendedAudit: 'Comprehensive Medical Digital Footprint Audit',
    };
  }

  let baseDays = 5;
  if (services.includes('Brand Identity & Positioning')) baseDays += 10;
  if (services.includes('Content Production & Editing')) baseDays += 7;
  if (services.includes('Social Media Management')) baseDays += 4;
  if (services.includes('Automation & AI Chatbots')) baseDays += 6;

  return {
    turnaroundDays: Math.min(baseDays, 21),
    roadmapPhase: services.length > 2 ? 'Full-Scale Creative Transformation' : 'Targeted Growth Deployment',
    recommendedAudit: services.includes('Automation & AI Chatbots') 
      ? 'Patient Inbound & Workflow Friction Analysis'
      : 'Clinical Authority & Audience Engagement Audit',
  };
}
