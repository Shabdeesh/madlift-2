import React from 'react';
import { ArrowDown, ArrowUpRight, Play, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';
import { SPECIALTIES_TICKER } from '../data/agencyData.ts';

interface HeroProps {
  onBuildBrandClick: () => void;
  onExploreWorkClick: () => void;
  onPlayShowreelClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBuildBrandClick,
  onExploreWorkClick,
  onPlayShowreelClick,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0B0D10]">
      {/* Background Media with Dark Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_medical_studio_1794133362380.jpg"
          alt="Madlift Media Medical Creative Studio"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-35 filter brightness-75 contrast-125"
        />
        {/* Measured Scrim Gradients for 100% Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/80 to-[#0B0D10]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-transparent to-[#0B0D10]/70" />
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-12 sm:pt-20 my-auto w-full">
        <div className="max-w-4xl">
          {/* Subtle Tagline Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D4FF3A]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/90">
              By a Doctor, For Doctors
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs text-neutral-400 font-medium">
              Medical Creative & Brand Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance mb-8">
            We Build Medical Brands That <span className="text-[#D4FF3A] italic font-serif">People Remember.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            Your expertise deserves more than just a social media page. We help doctors and healthcare professionals build powerful digital identities through strategic branding, creative content and digital growth.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={onBuildBrandClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26] hover:shadow-lg hover:shadow-[#D4FF3A]/25 active:scale-95 transition-all duration-200"
            >
              <span>Let's Build Your Brand</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreWorkClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 active:scale-95 transition-all duration-200 backdrop-blur-sm"
            >
              <span>Explore Our Work</span>
            </button>

            <button
              onClick={onPlayShowreelClick}
              className="inline-flex items-center gap-2.5 px-4 py-4 text-xs font-semibold text-neutral-300 hover:text-[#D4FF3A] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/15 group-hover:bg-[#D4FF3A] group-hover:text-black group-hover:border-[#D4FF3A] transition-all">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              <span>Watch Reel Breakdown</span>
            </button>
          </div>

          {/* Doctor Trust Markers Strip */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-4 gap-x-8 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#D4FF3A]" />
              <span>Founded by a Medical Doctor</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4FF3A]" />
              <span>Strict Medical Ethics & Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4FF3A]" />
              <span>Zero-Cringe, High-Retention Media</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specialty Marquee Ticker */}
      <div className="relative z-10 border-y border-white/10 bg-black/40 backdrop-blur-md py-3.5 overflow-hidden">
        <div className="flex whitespace-nowrap gap-10 animate-pulse">
          <div className="flex shrink-0 items-center gap-8 text-xs font-bold tracking-widest text-neutral-400">
            {SPECIALTIES_TICKER.concat(SPECIALTIES_TICKER).map((specialty, idx) => (
              <span key={`${specialty}-${idx}`} className="flex items-center gap-8">
                <span className="hover:text-white transition-colors cursor-default">
                  {specialty}
                </span>
                <span className="text-[#D4FF3A]">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
