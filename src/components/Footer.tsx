import React from 'react';
import { ArrowUp, Heart, ExternalLink } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] text-[#ECEFF2] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tighter text-white inline-flex items-center gap-1.5"
            >
              <span>MADLIFT</span>
              <span className="text-[#D4FF3A]">MEDIA</span>
            </a>
            <p className="text-sm font-semibold text-[#D4FF3A] tracking-wider uppercase">
              {AGENCY_INFO.tagline}
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              We help medical professionals build a recognizable, credible and powerful digital presence through strategic branding, creative content production, social media management and automation.
            </p>
            <div className="pt-2 text-xs text-neutral-500">
              {AGENCY_INFO.location}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-300">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">The 4-Step Process</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4FF3A] transition-colors font-semibold">Contact / Diagnostic</a>
              </li>
            </ul>
          </div>

          {/* Agency Portals & Socials */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-300">
              Portfolio & Networks
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a
                  href={AGENCY_INFO.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FF3A] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>Behance Creative Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.carrdUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Original Carrd Website (Reference)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram (@madliftmedia)
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} MADLIFT MEDIA. All rights reserved. Built for Healthcare Innovators.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">
              Medical Ethics & Accuracy First
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
