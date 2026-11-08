import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/agencyData.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0B0D10] text-[#ECEFF2] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-[#D4FF3A] mb-3">
            Common Inquiries
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
            Everything you need to know about partnering with Madlift Media to build your medical brand.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#14171E] border-[#D4FF3A]/30 shadow-lg shadow-black/50'
                    : 'bg-[#101318]/70 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-white/5 border border-white/10 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4FF3A] text-black border-[#D4FF3A]' : 'text-neutral-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
