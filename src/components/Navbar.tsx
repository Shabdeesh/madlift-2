import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D10]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white hover:text-[#D4FF3A] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>MADLIFT</span>
              <span className="text-[#D4FF3A]">MEDIA</span>
            </a>

            {/* Zone 2: 4-5 clean single-line nav links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors relative py-1 text-sm tracking-wide whitespace-nowrap shrink-0 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4FF3A] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={onContactClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF3A] rounded-full hover:bg-[#BEED26] active:scale-95 transition-all duration-200 shadow-md shadow-[#D4FF3A]/20 whitespace-nowrap shrink-0"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0D10]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#D4FF3A]/80 mb-4">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-bold tracking-tight text-white hover:text-[#D4FF3A] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26]"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-neutral-400">
              By a Doctor, For Doctors · Medical Creative Agency
            </p>
          </div>
        </div>
      )}
    </>
  );
};
