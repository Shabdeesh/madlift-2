import React, { useState } from 'react';
import { ArrowUpRight, Check, Compass, Video, Share2, Bot, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData.ts';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'brand-identity':
        return <Compass className="w-6 h-6 text-[#D4FF3A]" />;
      case 'content-production':
        return <Video className="w-6 h-6 text-[#D4FF3A]" />;
      case 'social-management':
        return <Share2 className="w-6 h-6 text-[#D4FF3A]" />;
      case 'automation-ai':
        return <Bot className="w-6 h-6 text-[#D4FF3A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4FF3A]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0B0D10] text-[#ECEFF2] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#D4FF3A] mb-3">
              Capabilities
            </p>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              What We Do.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-neutral-400 max-w-md">
            Everything your medical brand needs to stand out in the digital world.
          </p>
        </div>

        {/* Large Editorial Services List with Interactive Hover and Expansion */}
        <div className="space-y-6">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeTab === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveTab(service.id)}
                onClick={() => setActiveTab(service.id)}
                className={`group relative rounded-3xl p-8 sm:p-10 transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#14171E] border-[#D4FF3A]/40 shadow-2xl shadow-black/80'
                    : 'bg-[#101318]/60 border-white/10 hover:border-white/20 hover:bg-[#14171E]/50'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Number & Main Info */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-mono font-bold text-[#D4FF3A] px-3 py-1 rounded-md bg-[#D4FF3A]/10 border border-[#D4FF3A]/20">
                        SERVICE {service.number}
                      </span>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                        {getServiceIcon(service.id)}
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#D4FF3A] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Middle: Deliverables Checklist */}
                  <div className="lg:col-span-4 bg-black/30 rounded-2xl p-6 border border-white/5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#D4FF3A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Outcome Highlight & Request CTA */}
                  <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-6 lg:pl-4">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-xs font-bold text-[#D4FF3A] uppercase tracking-wider mb-1">
                        Outcome
                      </div>
                      <p className="text-xs text-neutral-300 italic">
                        "{service.highlight}"
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(service.title);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26] active:scale-95 transition-all shadow-md shadow-[#D4FF3A]/10 w-full"
                    >
                      <span>Inquire About This</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
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
