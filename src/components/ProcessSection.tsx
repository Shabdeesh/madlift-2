import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData.ts';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0B0D10] text-[#ECEFF2] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-[#D4FF3A] mb-3">
            How We Work
          </p>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            From Idea To <span className="text-[#D4FF3A]">Digital Impact.</span>
          </h2>
          <p className="text-base text-neutral-400 mt-4">
            A battle-tested 4-step framework designed around the demanding schedules of clinical specialists.
          </p>
        </div>

        {/* Desktop Horizontal Process Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-12">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStepIndex === index;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border relative ${
                  isActive
                    ? 'bg-[#14171E] border-[#D4FF3A] shadow-xl shadow-black'
                    : 'bg-[#101318]/60 border-white/10 hover:border-white/25 hover:bg-[#14171E]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-2xl font-mono font-extrabold ${
                      isActive ? 'text-[#D4FF3A]' : 'text-neutral-500'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      isActive ? 'bg-[#D4FF3A]' : 'bg-white/10'
                    }`}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-neutral-400 font-medium">{step.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Active Step Feature Box (Desktop) */}
        <div className="hidden lg:block p-10 rounded-3xl bg-[#14171E] border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4FF3A] uppercase tracking-wider">
                <span>Phase {PROCESS_STEPS[activeStepIndex].step}</span>
                <span>·</span>
                <span>{PROCESS_STEPS[activeStepIndex].subtitle}</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                {PROCESS_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>
            </div>

            <div className="col-span-5 bg-black/40 rounded-2xl p-6 border border-white/5">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                What Happens In This Phase
              </div>
              <div className="space-y-3">
                {PROCESS_STEPS[activeStepIndex].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                    <Check className="w-4 h-4 text-[#D4FF3A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-[#14171E] border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-mono font-extrabold text-[#D4FF3A]">
                  {step.step}
                </span>
                <span className="text-xs text-neutral-400 uppercase tracking-wider">
                  {step.subtitle}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {step.description}
              </p>
              <div className="pt-3 border-t border-white/5 space-y-2">
                {step.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                    <Check className="w-3.5 h-3.5 text-[#D4FF3A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
