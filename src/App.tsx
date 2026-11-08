import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BrandIntro } from './components/BrandIntro.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { FeaturedWork } from './components/FeaturedWork.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { WhyMadlift } from './components/WhyMadlift.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ShowreelModal } from './components/ShowreelModal.tsx';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    scrollToSection('contact');
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleExploreWorkClick = () => {
    scrollToSection('work');
  };

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#ECEFF2] flex flex-col selection:bg-[#D4FF3A] selection:text-black">
      {/* 01. Minimalist Top Bar Contract */}
      <Navbar onContactClick={handleContactClick} />

      <main className="flex-1">
        {/* 02. High-Impact Hero */}
        <Hero
          onBuildBrandClick={handleContactClick}
          onExploreWorkClick={handleExploreWorkClick}
          onPlayShowreelClick={() => setIsShowreelOpen(true)}
        />

        {/* 03. Brand Introduction & Founder Thesis */}
        <BrandIntro />

        {/* 04. Capabilities & Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 05. Featured Work Portfolio */}
        <FeaturedWork onInquireService={handleSelectService} />

        {/* 06. The 4-Step Process */}
        <ProcessSection />

        {/* 07. Why Madlift (Alternating Warm Cream Visual Rhythm) */}
        <WhyMadlift onTalkClick={handleContactClick} />

        {/* 08. Testimonials & Client Voices */}
        <TestimonialsSection />

        {/* 09. FAQ Accordion */}
        <FaqSection />

        {/* 10. Contact Diagnostic & Final CTA */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* 11. Agency Footer */}
      <Footer />

      {/* Interactive Showreel Breakdown Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        onInquire={() => {
          setIsShowreelOpen(false);
          scrollToSection('contact');
        }}
      />
    </div>
  );
}
