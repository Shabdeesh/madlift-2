import { ServiceItem, PortfolioItem, ProcessStep, Testimonial, FaqItem } from '../types/index.ts';

export const AGENCY_INFO = {
  name: 'MADLIFT MEDIA',
  tagline: 'By a Doctor, For Doctors.',
  mission: 'We help medical professionals build a recognizable, credible and powerful digital presence through strategic branding, creative content production, social media management and automation.',
  foundedNote: 'Founded by a medical doctor who bridges clinical depth with high-end digital media direction.',
  email: 'contact@madlift.media',
  phone: '+1 (800) 623-5438',
  location: 'Global Creative Studio & Medical Media Lab',
  carrdUrl: 'https://madlift.carrd.co/',
  behanceUrl: 'https://www.behance.net/madliftmedia',
  calendlyUrl: 'https://calendly.com',
  socials: {
    instagram: 'https://instagram.com/madliftmedia',
    linkedin: 'https://linkedin.com/company/madliftmedia',
    x: 'https://x.com/madliftmedia',
    youtube: 'https://youtube.com/@madliftmedia',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand Identity & Positioning',
    tagline: 'Carve a distinct, unassailable authority in your medical niche.',
    description: 'Transforming clinical credentials into an iconic personal brand. We define your signature narrative, digital positioning, tone of voice, and visual identity so patients and peers recognize you instantly.',
    deliverables: [
      'Personal branding strategy',
      'Messaging and clinical storytelling',
      'Digital positioning for healthcare',
      'Professional brand identity system',
      'Typography, color palettes & guidelines',
      'Authority audit & competitive gap mapping',
    ],
    highlight: 'Built to establish trust before a patient even walks through your clinic door.',
  },
  {
    id: 'content-production',
    number: '02',
    title: 'Content Production & Editing',
    tagline: 'High-retention video craft that commands attention without compromising dignity.',
    description: 'Cinematic video editing and social asset creation crafted specifically for medical accuracy, platform algorithms, and patient education. We turn complex surgical concepts or medical advice into bingeable, clear visual stories.',
    deliverables: [
      'Instagram Reels & TikTok editing',
      'Long-form YouTube video editing',
      'Educational medical content production',
      'High-CTR thumbnail design',
      'Dynamic visual storytelling & motion graphics',
      'Batch content planning & doctor-friendly scripts',
    ],
    highlight: 'Zero fluff, zero cringe. Crisp pacing with doctor-grade medical compliance.',
  },
  {
    id: 'social-management',
    number: '03',
    title: 'Social Media Management',
    tagline: 'Effortless, end-to-end digital growth while you practice medicine.',
    description: 'We handle your calendar, publishing, audience engagement, and platform optimization. You focus 100% on patient care while your digital footprint compounds daily with qualified inbound inquiries.',
    deliverables: [
      'End-to-end Instagram management',
      'Multi-platform optimization & SEO',
      'Monthly strategic content calendars',
      'Organic growth & viral trend adaptation',
      'Community engagement & comment handling',
      'In-depth monthly performance analytics',
    ],
    highlight: 'Save 15+ hours weekly while outperforming local competitors in patient reach.',
  },
  {
    id: 'automation-ai',
    number: '04',
    title: 'Automation & AI Chatbots',
    tagline: 'Never lose a patient inquiry to slow response times.',
    description: 'Intelligent, HIPAA-conscious conversational automation that triages incoming direct messages, answers common clinical FAQs, and routes booked consultations straight to your calendar.',
    deliverables: [
      'Patient-interaction conversational chatbots',
      '24/7 appointment enquiry automation',
      'Frequently asked questions automation',
      'Lead management & triage workflows',
      'CRM integration & instant staff notifications',
      'Patient drop-off prevention sequences',
    ],
    highlight: 'Convert passive social viewers into booked clinical appointments automatically.',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'aethera-health',
    title: 'Aethera Health & Dermatology',
    client: 'Dr. Evelyn Reed, MD, FAAD',
    specialty: 'Aesthetic Dermatology & Longevity',
    category: 'Branding',
    summary: 'Complete luxury brand identity and clinical positioning for a premier dermatology studio. Redefined the visual language from generic sterile blue to an editorial charcoal and muted botanic electric tone.',
    metrics: '+280% Private Consultation Enquiries in 90 Days',
    image: '/src/assets/images/portfolio_branding_identity_1794133365207.jpg',
    deliverables: [
      'Brand Identity & Custom Wordmark',
      'Clinical Stationery & Digital Guidelines',
      'Signature Color & Typography System',
      'Patient Welcome Packet & Treatment Guides',
    ],
    behanceUrl: 'https://www.behance.net/gallery/aethera-medical-branding',
    featuredQuote: 'Madlift understood that as a cosmetic dermatologist, my branding had to feel as refined and intentional as my aesthetic work.',
  },
  {
    id: 'skincare-myths-reels',
    title: 'Skincare Myths Debunked Series',
    client: 'The Skin Clinic MD',
    specialty: 'Dermatology & Cosmetic Medicine',
    category: 'Video Editing',
    summary: 'High-retention 9:16 Instagram Reels campaign debunking viral TikTok skincare misinformation. Dynamic kinetic captions, sound design, and clean clinical pacing that established national authority.',
    metrics: '4.2M Organic Views · 48,000+ New Followers',
    image: '/src/assets/images/portfolio_reels_production_1794133364310.jpg',
    deliverables: [
      '12x High-Retention Short-Form Reels',
      'Kinetic Medical Subtitles & Hook Architecture',
      'B-roll Curation & Motion Accent Graphics',
      'Sound Design & Audio Mastering',
    ],
    behanceUrl: 'https://www.behance.net/gallery/medical-reels-production',
    featuredQuote: 'The retention rate on these reels was 3x higher than anything we had previously produced with standard video editors.',
  },
  {
    id: 'vital-diagnosis-youtube',
    title: 'Vital Diagnosis: Medical Education',
    client: 'Dr. Sarah Chen, MD, FACC',
    specialty: 'Preventive Cardiology & MedEd',
    category: 'Thumbnail Design',
    summary: 'High-CTR YouTube thumbnail architecture and educational visual assets for a clinical masterclass series. Combining high-contrast typography, medical graphics, and compelling facial expressions.',
    metrics: '11.8% Average Click-Through Rate (vs 3.4% Industry Benchmark)',
    image: '/src/assets/images/portfolio_thumbnail_craft_1794133363995.jpg',
    deliverables: [
      'YouTube Master Thumbnail Grid & Templates',
      'A/B Thumbnail Testing Assets',
      'Anatomical 3D Diagram Overlays',
      'Episode Title & Hook Strategy',
    ],
    behanceUrl: 'https://www.behance.net/gallery/medical-youtube-thumbnails',
    featuredQuote: 'Good medical information is useless if nobody clicks on it. Madlift turned our clinical lectures into magnetic content.',
  },
  {
    id: 'orthorehab-growth',
    title: 'Movement & Spine Institute',
    client: 'Dr. Aris Mehta, MS, Ortho',
    specialty: 'Orthopedic Surgery & Sports Rehab',
    category: 'Social Media Content',
    summary: 'Full-funnel social media turnaround for a 3-location orthopedic institute. Repositioned patient recovery stories, exercise form tutorials, and surgical walkthroughs to drive high-value surgical inquiries.',
    metrics: '140+ Qualified Monthly Procedure Inquiries',
    image: '/src/assets/images/hero_medical_studio_1794133362380.jpg',
    deliverables: [
      'Monthly Content Calendar & Strategic Architecture',
      'Patient Recovery Case Video Profiles',
      'Post-Operative Educational Carousels',
      'Direct Message Triage Workflow',
    ],
    behanceUrl: 'https://www.behance.net/gallery/orthopedic-social-management',
    featuredQuote: 'Our calendar for elective joint procedures filled up 4 months in advance within half a year of working together.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Clinical & Audience Diagnosis',
    description: 'We conduct a deep strategic dive into your medical background, target patient demographic, geographic competition, and core clinical philosophy. We uncover your distinct unfair advantage.',
    deliverables: [
      'Doctor & practice brand audit',
      'Ideal patient persona mapping',
      'Competitor whitespace analysis',
      'Compliance & regulatory boundary check',
    ],
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    subtitle: 'Architecting The Creative Blueprint',
    description: 'We develop a bespoke content roadmap and creative direction. We map out content pillars, signature formats, visual tone, distribution cadence, and inbound lead conversion mechanisms.',
    deliverables: [
      '90-Day editorial & content calendar',
      'Script frameworks & camera guides',
      'Visual identity & palette board',
      'Inbound funnel & automation architecture',
    ],
  },
  {
    step: '03',
    title: 'CREATE',
    subtitle: 'Studio-Grade Media Production',
    description: 'Our creative team takes over the heavy lifting. We produce, edit, design, and animate your videos, graphics, thumbnails, and carousels with meticulous attention to medical accuracy and pacing.',
    deliverables: [
      '4K Short-form & long-form video editing',
      'Custom high-converting thumbnail art',
      'Motion graphics & anatomical callouts',
      'Copywriting & medical hook crafting',
    ],
  },
  {
    step: '04',
    title: 'GROW',
    subtitle: 'Distribution, Analysis & Optimization',
    description: 'We publish, monitor, engage, and iterate. Using real retention data, engagement heatmaps, and appointment conversion analytics, we continuously optimize your brand for compounding digital reach.',
    deliverables: [
      'Multi-channel scheduled distribution',
      'Weekly performance metrics & insights',
      'Algorithm adjustments & viral testing',
      'Automated patient appointment routing',
    ],
  },
];

export const WHY_MADLIFT_POINTS = [
  {
    number: '01',
    title: 'We Understand Healthcare',
    description: 'We are founded by a medical doctor. We understand medical ethics, clinical terminology, patient psychology, and the delicate balance between engaging digital content and medical credibility. You will never have to explain basic anatomy or HIPAA considerations to our creative team.',
  },
  {
    number: '02',
    title: 'Strategy Meets Creativity',
    description: 'Posting random trendy videos will not build an enduring medical practice. We marry thoughtful brand positioning with world-class video production, ensuring every piece of content reinforces your status as the premier specialist in your field.',
  },
  {
    number: '03',
    title: 'Built For Busy Professionals',
    description: 'Surgeons, physicians, and clinic owners cannot spend 20 hours a week editing clips or managing direct messages. Our streamlined recording workflows allow you to batch 30 days of high-caliber content in just 90 minutes of recording time.',
  },
  {
    number: '04',
    title: 'Customized Approach',
    description: 'A cosmetic plastic surgeon needs a completely different brand ethos than an orthopedic spine surgeon, an Ayurveda wellness physician, or a dental implant specialist. We reject cookie-cutter agency templates and design tailor-made digital strategies.',
  },
  {
    number: '05',
    title: 'Performance Focused',
    description: 'Vanity likes do not keep clinic lights on. We measure our success on true brand equity: average watch time, inbound patient inquiries, consultation bookings, and elevated reputation in the medical community.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'Before Madlift, I hired two generic marketing agencies. Both produced cringeworthy videos with medical inaccuracies that embarrassed me in front of colleagues. Madlift understood the science immediately and gave my aesthetic practice an ultra-luxurious, respected brand voice.',
    author: 'Dr. Evelyn Reed',
    role: 'Board-Certified Dermatologist',
    clinic: 'Aethera Health & Aesthetics',
    specialty: 'Dermatology & Laser Surgery',
    stat: '+310% Private Patient Inbound',
  },
  {
    id: '2',
    quote: 'The doctor-led perspective makes all the difference. Their script outlines were medically accurate on the first draft. In 6 months, our patient waitlist went from 2 weeks to 4 months, and we regularly have patients traveling interstate specifically because of our educational reels.',
    author: 'Dr. Aris Mehta',
    role: 'Chief Orthopedic Surgeon',
    clinic: 'Movement Institute of Sports Medicine',
    specialty: 'Joint Reconstruction & Sports Surgery',
    stat: '4.8M Video Impressions',
  },
  {
    id: '3',
    quote: 'Madlift built our automated patient triage system and overhauled our entire visual branding. We no longer lose inquiries arriving on weekends, and our cost-per-consultation dropped by 64%. They are true partners in medical practice growth.',
    author: 'Dr. Sameer Joshi',
    role: 'Cosmetic Dentist & Founder',
    clinic: 'Signature Dental Studio',
    specialty: 'Smile Architecture & Implants',
    stat: '64% Reduction in Acquisition Cost',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Who do you work with?',
    answer: 'We partner with doctors, surgeons, healthcare entrepreneurs, medical students with content creator aspirations, private clinics, dental practices, aesthetic dermatologists, and traditional integrative medicine practitioners (including Ayurveda & BAMS). Whether you are an individual physician establishing personal authority or a multi-location clinic expanding patient acquisition, we tailor our systems to your clinical specialty.',
  },
  {
    question: 'What services does Madlift offer?',
    answer: 'Madlift Media provides four core services: (1) Brand Identity & Digital Positioning, (2) High-Retention Medical Content Production & Video Editing (Reels, YouTube, Educational series), (3) Full-Service Social Media Management & Growth Strategy, and (4) Patient Automation & AI Chatbots to triage inquiries and automate consultation bookings.',
  },
  {
    question: 'Do you manage Instagram accounts?',
    answer: 'Yes. Our end-to-end Instagram management handles everything from strategic monthly content calendars and optimal posting schedules to caption copywriting, medical hashtag optimization, community interaction, and monthly performance reviews. You simply approve the batch drafts and review the results.',
  },
  {
    question: 'Do you create YouTube videos?',
    answer: 'Yes. We specialize in both long-form educational medical YouTube videos and short-form YouTube Shorts. Our team handles narrative pacing, visual retention hooks, custom high-CTR thumbnails, medical 2D/3D visual callouts, and audio mastering so your videos compete with top-tier international creators.',
  },
  {
    question: "Can you help build a doctor's personal brand?",
    answer: 'Personal branding for doctors is our cornerstone capability. Because our agency is founded by a medical doctor, we know how to highlight your unique clinical philosophy, academic background, and bedside demeanor while preserving ethical standards, medical compliance, and peer respect.',
  },
  {
    question: 'How does the onboarding process work?',
    answer: 'Our onboarding is frictionless for busy clinicians: (1) We conduct a 45-minute Brand Discovery Call to diagnose your goals; (2) Our creative team delivers your 90-Day Content Roadmap, visual templates, and script prompts within 7 days; (3) You record in a single 60–90 minute batch; (4) We edit, package, and launch your automated growth campaign.',
  },
  {
    question: 'How can someone get started?',
    answer: 'Simply fill out our brief contact form below or click "LET\'S TALK" to schedule a 15-minute Discovery Consultation. We will review your existing digital presence, evaluate your goals, and outline a tailored growth blueprint for your practice.',
  },
];

export const TARGET_AUDIENCES = [
  'Doctors & Surgeons',
  'Medical Students & Residents',
  'Healthcare Entrepreneurs',
  'Private Clinics & Hospitals',
  'Dentists & Orthodontists',
  'Aesthetic Dermatologists',
  'Ayurveda & BAMS Practitioners',
];

export const SPECIALTIES_TICKER = [
  'CARDIOLOGY',
  'AESTHETIC DERMATOLOGY',
  'ORTHOPEDIC SURGERY',
  'DENTAL IMPLANTS',
  'NEUROLOGY',
  'AYURVEDA & INTEGRATIVE HEALTH',
  'SPORTS MEDICINE',
  'PLASTIC SURGERY',
  'PAEDIATRICS',
  'HEALTHCARE STARTUPS',
];
