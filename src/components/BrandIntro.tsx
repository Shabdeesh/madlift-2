import React from 'react';
import { CheckCircle2, ShieldAlert, HeartPulse, Sparkles, Award } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#101318] text-[#ECEFF2] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4FF3A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-widest font-bold text-[#D4FF3A] mb-3">
            MORE THAN JUST A MARKETING AGENCY
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Healthcare Expertise Meets Creative Excellence.
          </h2>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl text-neutral-200 font-medium leading-relaxed">
              At Madlift Media, we understand that building a medical brand requires more than posting content. It requires trust, positioning, consistency and a clear strategy.
            </p>

            <p className="text-base text-neutral-400 leading-relaxed">
              Most creative agencies treat a cardiac surgeon or aesthetic clinic like a sneaker brand or a fast-food chain. They use generic buzzwords, trendy soundbites, and embarrassing editing tropes that sacrifice clinical authority for cheap views.
            </p>

            <p className="text-base text-neutral-400 leading-relaxed">
              Founded by a medical doctor, Madlift was built to solve this exact problem. We understand medical oath ethics, patient confidentiality, evidence-based communication, and clinical nuances—while possessing the cutting-edge creative tools of a world-class production studio.
            </p>

            {/* Comparison Differentiators Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <ShieldAlert className="w-5 h-5 text-red-400/90" />
                  <span className="text-sm font-bold text-neutral-200">The Generic Agency Trap</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Superficial viral hacks, medically inaccurate scripts, robotic stock clips, and compliance risks that damage peer respect.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#D4FF3A]/[0.06] border border-[#D4FF3A]/25 hover:border-[#D4FF3A]/40 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <Award className="w-5 h-5 text-[#D4FF3A]" />
                  <span className="text-sm font-bold text-white">The Madlift Standard</span>
                </div>
                <p className="text-xs text-neutral-300 leading-normal">
                  Clinically vetted narratives, cinematic color grading, elevated typography, and automated patient booking pipelines.
                </p>
              </div>
            </div>

            {/* Quick Stats or Bullet Points */}
            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4FF3A]" />
                <span>100% Doctor-Led Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4FF3A]" />
                <span>Medical Ethics Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4FF3A]" />
                <span>Turnkey Recording Workflows</span>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
              <img
                src="/src/assets/images/doctor_creative_founder_1794133363397.jpg"
                alt="Madlift Media Doctor Creative Direction"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-auto hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-90" />

              {/* Floating Editorial Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4FF3A] mb-2">
                  <HeartPulse className="w-4 h-4 text-[#D4FF3A]" />
                  <span>The Founder's Thesis</span>
                </div>
                <p className="text-sm italic font-serif text-neutral-200 leading-snug">
                  "If people can find pseudoscience so easily online, doctors have an obligation to make accurate medical science engaging, beautiful, and unmistakable."
                </p>
              </div>
            </div>

            {/* Floating Decorative Label */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#0B0D10] border border-white/15 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#D4FF3A] animate-pulse" />
              <div className="text-xs">
                <div className="font-bold text-white tracking-wide">By a Doctor</div>
                <div className="text-neutral-400">For Medical Innovators</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
