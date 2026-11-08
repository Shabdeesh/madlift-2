import React from 'react';
import { X, Play, ShieldCheck, Film, Volume2, Sparkles, ArrowRight } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInquire: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose, onInquire }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#14171E] border border-white/20 rounded-3xl overflow-hidden shadow-2xl my-8 text-[#ECEFF2]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-[#D4FF3A] hover:bg-black/90 transition-all border border-white/20"
          aria-label="Close showreel modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cinematic Visual Header */}
        <div className="relative aspect-video w-full overflow-hidden bg-black max-h-[340px]">
          <img
            src="/src/assets/images/portfolio_reels_production_1794133364310.jpg"
            alt="Medical Video Production Anatomy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14171E] via-[#14171E]/40 to-black/30" />

          {/* Central Play Badge */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-[#D4FF3A] text-black flex items-center justify-center shadow-2xl shadow-[#D4FF3A]/40 animate-pulse">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#D4FF3A] text-xs font-bold uppercase tracking-wider mb-1.5 border border-white/10">
              <span>Medical Content Anatomy</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              How We Turn Medical Advice Into Magnetic Media
            </h3>
          </div>
        </div>

        {/* Breakdown Anatomy */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-neutral-300 leading-relaxed">
            Our medical video production framework combines clinical accuracy with high-retention digital storytelling. Every cut, caption, and audio cue is engineered to preserve doctor dignity while commanding algorithm attention.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4FF3A] uppercase tracking-wider mb-2">
                <Film className="w-4 h-4" />
                <span>The 3s Hook</span>
              </div>
              <p className="text-xs text-neutral-400">
                Posing a patient symptom question or debunking a viral health myth in the first 2.8 seconds.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4FF3A] uppercase tracking-wider mb-2">
                <Volume2 className="w-4 h-4" />
                <span>Pacing & Micro-SFX</span>
              </div>
              <p className="text-xs text-neutral-400">
                Seamless cuts and subtle sound design preventing audience drop-off without cheesy soundboards.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4FF3A] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Clinical Triage CTA</span>
              </div>
              <p className="text-xs text-neutral-400">
                Clear ethical guidance directing viewers to automated DM triage for in-person consultations.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs text-neutral-400">
              90 minutes of doctor recording = 30 days of polished content.
            </span>
            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26] transition-all"
            >
              <span>Get Your Practice Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
