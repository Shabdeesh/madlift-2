import React from 'react';
import { X, ExternalLink, CheckCircle, ArrowRight, Play, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types/index.ts';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onInquire: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#12151B] border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-black my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-[#D4FF3A] hover:bg-black/90 transition-all border border-white/20"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-black max-h-[380px]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12151B] via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4FF3A] text-black text-xs font-bold uppercase tracking-wider mb-2">
                <span>{project.category}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Client / Doctor
              </div>
              <div className="text-sm font-bold text-white">{project.client}</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Clinical Specialty
              </div>
              <div className="text-sm font-bold text-white">{project.specialty}</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D4FF3A] mb-1">
                Key Performance Impact
              </div>
              <div className="text-sm font-bold text-[#D4FF3A]">{project.metrics}</div>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h3 className="text-base font-bold text-white mb-2">Project Overview</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-base font-bold text-white mb-3">Deliverables Provided</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-[#D4FF3A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Quote if available */}
          {project.featuredQuote && (
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-xs uppercase font-semibold text-[#D4FF3A] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Doctor's Feedback</span>
              </div>
              <p className="text-sm italic font-serif text-neutral-200">
                "{project.featuredQuote}"
              </p>
            </div>
          )}

          {/* Modal Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                <span>View Full Case on Behance</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onInquire(project.category);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26] transition-all ml-auto"
            >
              <span>Build Similar For Your Practice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
