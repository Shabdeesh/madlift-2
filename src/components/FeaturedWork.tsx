import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Play, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, AGENCY_INFO } from '../data/agencyData.ts';
import { PortfolioItem, PortfolioCategory } from '../types/index.ts';
import { ProjectModal } from './ProjectModal.tsx';

interface FeaturedWorkProps {
  onInquireService: (serviceName: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onInquireService }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories: PortfolioCategory[] = [
    'All',
    'Video Editing',
    'Thumbnail Design',
    'Branding',
    'Social Media Content',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#101318] text-[#ECEFF2] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-bold text-[#D4FF3A] mb-3">
              Selected Projects
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Don't Take Our Word For It. <br />
              <span className="text-neutral-400">See The Work.</span>
            </h2>
          </div>

          <a
            href={AGENCY_INFO.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4FF3A] hover:underline pb-2 group"
          >
            <span>View Full Behance Portfolio</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#D4FF3A] text-black shadow-lg shadow-[#D4FF3A]/20'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden bg-[#14171E] border border-white/10 hover:border-[#D4FF3A]/40 transition-all duration-300 flex flex-col cursor-pointer shadow-xl"
            >
              {/* Media Thumbnail Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14171E] via-transparent to-transparent opacity-80" />

                {/* Category kicker */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#D4FF3A] border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold flex items-center gap-2 shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-neutral-400 font-medium mb-1">
                    {project.client} · {project.specialty}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#D4FF3A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2 line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics Callout Strip */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs font-semibold text-[#D4FF3A]">
                    {project.metrics}
                  </div>
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#D4FF3A] group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Banner to Carrd/Behance */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#14171E] to-[#12151B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Looking for our complete archive of healthcare campaigns?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Explore our full portfolio on Behance and original case summaries on Carrd.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={AGENCY_INFO.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26] transition-colors"
            >
              <span>Behance Archive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={AGENCY_INFO.carrdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
            >
              <span>Original Carrd</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onInquireService}
      />
    </section>
  );
};
