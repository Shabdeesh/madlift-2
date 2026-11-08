import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Mail,
  Phone,
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/agencyData.ts';
import {
  validateContactForm,
  calculateServiceEstimates,
  ContactFormData,
} from '../utils/formValidation.ts';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    services: initialService ? [initialService] : [],
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  // Sync if initialService changes from props
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(initialService)
          ? prev.services
          : [...prev.services, initialService],
      }));
    }
  }, [initialService]);

  const handleToggleService = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceTitle);
      const updated = exists
        ? prev.services.filter((s) => s !== serviceTitle)
        : [...prev.services, serviceTitle];
      return { ...prev, services: updated };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    // Real simulated async turnaround dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      profession: '',
      services: [],
      message: '',
    });
    setErrors({});
  };

  const estimate = calculateServiceEstimates(formData.services);

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0B0D10] text-[#ECEFF2] relative border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4FF3A]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline, Copy, & Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#D4FF3A] mb-4">
                <span>Start Your Transformation</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
                Your Expertise Deserves <br />
                <span className="text-[#D4FF3A]">To Be Seen.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-md">
                Let's build a digital presence that reflects the value of your work. Reach out directly or complete the practice diagnostic form.
              </p>
            </div>

            {/* Direct Connect Hub */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Direct Channels
              </div>

              <a
                href={`mailto:${AGENCY_INFO.email}?subject=Practice%20Branding%20Inquiry%20via%20Madlift%20Media`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4FF3A]/40 hover:bg-white/[0.06] transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-white/5 text-[#D4FF3A] group-hover:bg-[#D4FF3A] group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Direct Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#D4FF3A] transition-colors">
                    {AGENCY_INFO.email}
                  </div>
                </div>
              </a>

              <a
                href={AGENCY_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4FF3A]/40 hover:bg-white/[0.06] transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-white/5 text-[#D4FF3A] group-hover:bg-[#D4FF3A] group-hover:text-black transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Discovery Call</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#D4FF3A] transition-colors flex items-center gap-1.5">
                    <span>Schedule 15-Min Strategy Session</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-3">
                Connect With Us
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={AGENCY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:border-[#D4FF3A] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={AGENCY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:border-[#D4FF3A] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={AGENCY_INFO.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:border-[#D4FF3A] transition-colors"
                >
                  X (Twitter)
                </a>
                <a
                  href={AGENCY_INFO.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#D4FF3A] hover:bg-[#D4FF3A] hover:text-black transition-colors font-bold"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Diagnostic Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#12151B] border border-white/15 shadow-2xl relative">
              {isSubmitted && submittedData ? (
                /* Success Confirmation State */
                <div className="py-8 space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#D4FF3A]/20 text-[#D4FF3A] border border-[#D4FF3A]/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Inquiry Received, {submittedData.fullName}.
                    </h3>
                    <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto">
                      Our doctor-led creative team has received your practice profile. We will review your clinical requirements and follow up within 24 business hours.
                    </p>
                  </div>

                  {/* Summary card */}
                  <div className="text-left p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3 max-w-lg mx-auto">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#D4FF3A]">
                      Your Inbound Diagnostic Profile
                    </div>
                    <div className="text-xs text-neutral-300">
                      <span className="text-neutral-400">Specialty / Practice:</span> {submittedData.profession}
                    </div>
                    <div className="text-xs text-neutral-300">
                      <span className="text-neutral-400">Requested Focus:</span> {submittedData.services.join(', ')}
                    </div>
                    <div className="text-xs text-neutral-300">
                      <span className="text-neutral-400">Projected Turnaround:</span> ~{estimate.turnaroundDays} business days
                    </div>
                    <div className="text-xs text-neutral-300">
                      <span className="text-neutral-400">Strategic Phase:</span> {estimate.roadmapPhase}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                      href={AGENCY_INFO.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26] transition-colors w-full sm:w-auto"
                    >
                      <span>Pick a Call Time on Calendly</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 border border-white/10 transition-colors w-full sm:w-auto"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Diagnostic Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white mb-1">
                      LET'S BUILD SOMETHING GREAT.
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400">
                      Tell us about your medical background and desired digital growth.
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                        Doctor / Contact Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Dr. Evelyn Reed"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#D4FF3A]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1.5">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="doctor@practice.com"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#D4FF3A]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 234-5678"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#D4FF3A]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1.5">{errors.phone}</p>
                      )}
                    </div>

                    {/* Profession / Organization */}
                    <div>
                      <label htmlFor="profession" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                        Profession / Practice *
                      </label>
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        placeholder="e.g. Dermatologist / Orthopedic Clinic"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.profession
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/10 focus:border-[#D4FF3A]'
                        }`}
                      />
                      {errors.profession && (
                        <p className="text-[11px] text-red-400 mt-1.5">{errors.profession}</p>
                      )}
                    </div>
                  </div>

                  {/* Services Required (Interactive Multi-Select) */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2.5">
                      Services Required *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES_DATA.map((service) => {
                        const isSelected = formData.services.includes(service.title);
                        return (
                          <button
                            type="button"
                            key={service.id}
                            onClick={() => handleToggleService(service.title)}
                            className={`p-3 rounded-xl text-left text-xs font-medium transition-all border flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#D4FF3A]/15 border-[#D4FF3A] text-white shadow-sm'
                                : 'bg-black/30 border-white/10 text-neutral-300 hover:border-white/20'
                            }`}
                          >
                            <span>{service.title}</span>
                            <span
                              className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 ${
                                isSelected
                                  ? 'bg-[#D4FF3A] border-[#D4FF3A] text-black'
                                  : 'border-white/20 bg-transparent'
                              }`}
                            >
                              {isSelected && <span className="text-[10px] font-black">✓</span>}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="text-[11px] text-red-400 mt-1.5">{errors.services}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Brief Goals & Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a few lines about your current practice, challenges, or goals..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/10 focus:border-[#D4FF3A]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Dynamic Turnaround Estimate Hint */}
                  {formData.services.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-[#D4FF3A]/[0.05] border border-[#D4FF3A]/20 flex items-center justify-between text-xs text-neutral-300">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#D4FF3A]" />
                        <span>Estimated Creative Phase:</span>
                      </div>
                      <span className="font-bold text-[#D4FF3A]">
                        ~{estimate.turnaroundDays} business days ({estimate.roadmapPhase})
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF3A] hover:bg-[#BEED26] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#D4FF3A]/20"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting Diagnostic...</span>
                      </>
                    ) : (
                      <>
                        <span>LET'S BUILD SOMETHING GREAT</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
