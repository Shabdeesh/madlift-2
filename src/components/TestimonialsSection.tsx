import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Stethoscope } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData.ts';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#101318] text-[#ECEFF2] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#D4FF3A] mb-3">
              Doctor Voices
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              What Our Clients Say.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {TESTIMONIALS_DATA.map((t, idx) => {
            const isFeatured = idx === activeIndex;
            return (
              <div
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`lg:col-span-4 p-8 sm:p-10 rounded-3xl transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isFeatured
                    ? 'bg-[#161B23] border-[#D4FF3A]/40 shadow-2xl shadow-black ring-1 ring-[#D4FF3A]/20'
                    : 'bg-[#12151B]/60 border-white/10 hover:border-white/20 hover:bg-[#161B23]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-8 h-8 text-[#D4FF3A]/60" />
                    <span className="text-xs font-semibold text-[#D4FF3A] px-2.5 py-1 rounded-md bg-[#D4FF3A]/10 border border-[#D4FF3A]/20">
                      {t.stat}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic font-serif mb-8">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/15 shrink-0 text-[#D4FF3A]">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white tracking-wide">
                      {t.author}
                    </div>
                    <div className="text-xs text-neutral-400">
                      {t.role} · {t.clinic}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
