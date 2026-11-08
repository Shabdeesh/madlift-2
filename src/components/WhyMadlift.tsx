import React from 'react';
import { WHY_MADLIFT_POINTS } from '../data/agencyData.ts';
import { ArrowUpRight, Stethoscope, Compass, Clock, Sliders, Target } from 'lucide-react';

interface WhyMadliftProps {
  onTalkClick: () => void;
}

export const WhyMadlift: React.FC<WhyMadliftProps> = ({ onTalkClick }) => {
  const getDifferentiatorIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Stethoscope className="w-5 h-5 text-black" />;
      case 1:
        return <Compass className="w-5 h-5 text-black" />;
      case 2:
        return <Clock className="w-5 h-5 text-black" />;
      case 3:
        return <Sliders className="w-5 h-5 text-black" />;
      case 4:
        return <Target className="w-5 h-5 text-black" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F6F6F2] text-[#12151B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-bold uppercase tracking-wider text-neutral-800 mb-4">
              <span>The Agency Difference</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-none">
              Why Madlift?
            </h2>
          </div>
          <p className="text-base sm:text-lg text-neutral-600 max-w-md font-medium">
            Bridging clinical credibility with creative agency fire power.
          </p>
        </div>

        {/* 5 Differentiator Editorial Blocks */}
        <div className="space-y-6">
          {WHY_MADLIFT_POINTS.map((point, index) => (
            <div
              key={point.number}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-black/5 hover:border-black/15 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Number and Icon */}
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-neutral-300">
                  {point.number}
                </span>
                <div className="p-3 rounded-2xl bg-[#D4FF3A] border border-black/10">
                  {getDifferentiatorIcon(index)}
                </div>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                  {point.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout in Light Section */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#0B0D10] text-white flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl">
            <div className="text-xs font-mono font-bold text-[#D4FF3A] uppercase tracking-wider mb-2">
              Ready to elevate your medical practice?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Let's diagnose your current digital presence.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2">
              Receive a comprehensive brand review and strategic content roadmap with no obligations.
            </p>
          </div>

          <button
            onClick={onTalkClick}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26] active:scale-95 transition-all shrink-0"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
