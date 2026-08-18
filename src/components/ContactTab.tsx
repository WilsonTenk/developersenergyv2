import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';
import { contactFormSchema } from '../lib/validation';
import { sanitizeString, sanitizeEmail, sanitizePhone, sanitizeTextarea } from '../lib/sanitize';
import { AnimatedCounter } from './common/AnimatedCounter';

export const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'Energy Trade Facilitation',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Clean data defensively before parsing
    const cleaned = {
      name: sanitizeString(formData.name),
      email: sanitizeEmail(formData.email),
      subject: sanitizeString(formData.subject),
      message: sanitizeTextarea(formData.message),
    };

    const validation = contactFormSchema.safeParse(cleaned);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: 'Energy Trade Facilitation',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="space-y-20 sm:space-y-24 pb-20 bg-white">
      {/* PAGE HEADER */}
      <section className="bg-white py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Contact Our Executive Desk
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Whether you are seeking physical oil supply facilitation, market research, infrastructure advisory, or executive training, our Accra team is ready to respond.
          </p>
        </div>
      </section>

      {/* DESK SLA STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              &lt;24h
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Commercial Inquiry SLA</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-amber-500 tracking-tight">
              <AnimatedCounter value={100} suffix="%" duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Confidentiality Standard</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={3} duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Regional Focus Desks</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              24/7
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Trade Desk Routing</span>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 space-y-6 shadow-sm">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">Send Us a Direct Message</h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Fill out the inquiry details below. Our trade desk responds within 2 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Message Delivered</h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to The Developers Energy Limited. An officer from our Accra desk will contact you via email/phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 transition-all min-h-[44px] cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kwame Mensah"
                      className={`w-full bg-neutral-50 border ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-amber-500'} text-neutral-900 text-xs rounded-xl px-4 py-3 focus:outline-none min-h-[44px]`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-red-600" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="kwame@company.com"
                      className={`w-full bg-neutral-50 border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-amber-500'} text-neutral-900 text-xs rounded-xl px-4 py-3 focus:outline-none min-h-[44px]`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-red-600" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Energy Ghana"
                      className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: sanitizePhone(e.target.value) })}
                      placeholder="+233 24 000 0000"
                      className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Inquiry Subject *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 min-h-[44px]"
                  >
                    <option value="Energy Trade Facilitation">Energy Trade Facilitation & Cargo</option>
                    <option value="Market Intelligence">Market Intelligence & Advisory Brief</option>
                    <option value="Infrastructure Consultancy">Infrastructure & Engineering Consultancy</option>
                    <option value="Training & Masterclass">Training & Capacity Development</option>
                    <option value="Strategic Partnership">Strategic Partnership & Investment</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-700">Message / Deal Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about product volumes, timelines, or advisory needs..."
                    className={`w-full bg-neutral-50 border ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-amber-500'} text-neutral-900 text-xs rounded-xl px-4 py-3 focus:outline-none resize-none min-h-[100px]`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-red-600" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 transition-all flex items-center justify-center gap-2 shadow-md min-h-[44px] disabled:opacity-60 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-3">
                Head Office & Contact Details
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-neutral-900 block font-semibold">Accra Office</strong>
                    <span className="text-neutral-600">Accra, Ghana &bull; West Africa</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-neutral-900 block font-semibold">Telephone</strong>
                    <span className="text-neutral-900 font-bold">+233 246470010 / +233 244799015</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-neutral-900 block font-semibold">Email Desk</strong>
                    <span className="text-neutral-900 font-bold">thedevelopersenergy@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-neutral-900 block font-semibold">Trading Desk Hours</strong>
                    <span className="text-neutral-600">Monday &ndash; Friday: 08:00 &ndash; 18:00 (GMT)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-amber-500" />
                  Accra Energy Hub Corridor
                </span>
                <span className="text-[10px] text-amber-700 font-mono font-bold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">LIVE HUB</span>
              </div>

              <div className="h-48 rounded-2xl bg-neutral-950 border border-neutral-800 relative overflow-hidden flex flex-col items-center justify-center text-center p-4">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40" />

                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-bold text-white text-xs">Accra HQ & Tema Terminal Axis</div>
                  <p className="text-[11px] text-neutral-400 max-w-xs leading-relaxed">
                    Strategic positioning for Tema Port Tank Farms & Takoradi Energy Basin Access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
