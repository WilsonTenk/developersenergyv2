import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calculator, AlertCircle } from 'lucide-react';
import { TradeQuoteData } from '../types';
import { quoteFormSchema } from '../lib/validation';
import { sanitizeString, sanitizeEmail, sanitizePhone, sanitizeTextarea } from '../lib/sanitize';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  onOpenCalculator?: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
  onOpenCalculator,
}) => {
  const [formData, setFormData] = useState<TradeQuoteData>({
    dealType: 'Trade Facilitation',
    commodityProduct: 'Gasoil 10ppm (Diesel)',
    estimatedVolume: '5,000 - 10,000 MT',
    incoterm: 'CIF',
    timeframe: 'Immediate Window (15 Days)',
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    notes: prefilledService ? `Inquiry regarding: ${prefilledService}` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ESC key listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        resetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const cleaned = {
      fullName: sanitizeString(formData.fullName),
      email: sanitizeEmail(formData.email),
      company: sanitizeString(formData.companyName),
      phone: sanitizePhone(formData.phone),
      commodityType: formData.commodityProduct,
      volume: formData.estimatedVolume,
      deliveryTerms: formData.incoterm,
      notes: sanitizeTextarea(formData.notes || ''),
    };

    const validation = quoteFormSchema.safeParse(cleaned);
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

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={resetAndClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white border border-neutral-300 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 text-black shadow-2xl my-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-neutral-200 pb-4 sticky top-0 bg-white z-10 pt-1">
          <div>
            <span className="text-xs font-bold text-white bg-black px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
              Trade Desk Consultation
            </span>
            <h2 className="text-2xl font-bold text-black mt-2 font-heading">
              Request Deal Quote / Advisory
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            className="text-neutral-700 hover:text-white hover:bg-black p-2 rounded-full bg-neutral-100 border border-neutral-200 transition-all shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center"
            title="Close Modal"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-black font-heading">Consultation Request Received</h3>
            <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
              Your inquiry has been routed to our Senior Trade Facilitator at The Developers Energy Limited in Accra. We will contact you within 2 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-black hover:bg-neutral-800 min-h-[44px]"
              >
                Close Dialog
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Quick Estimator CTA */}
            {onOpenCalculator && (
              <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-xs">
                <span className="text-neutral-700 flex items-center gap-1.5 font-medium">
                  <Calculator className="w-4 h-4 text-black" />
                  Need cargo volume calculation first?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCalculator();
                  }}
                  className="text-black font-extrabold hover:underline"
                >
                  Launch Trade Estimator &rarr;
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Category of Inquiry</label>
                <select
                  value={formData.dealType}
                  onChange={(e) => setFormData({ ...formData, dealType: e.target.value as any })}
                  className="w-full bg-neutral-50 border border-neutral-300 text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black min-h-[40px]"
                >
                  <option value="Trade Facilitation">Physical Trade Facilitation</option>
                  <option value="Market Intelligence">Market Intelligence Brief</option>
                  <option value="Infrastructure Consultancy">Infrastructure Engineering</option>
                  <option value="Training Program">Training & Capacity Building</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Product / Commodity</label>
                <select
                  value={formData.commodityProduct}
                  onChange={(e) => setFormData({ ...formData, commodityProduct: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-300 text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black min-h-[40px]"
                >
                  <option value="Gasoil 10ppm (Diesel)">Gasoil 10ppm (Diesel)</option>
                  <option value="Unleaded Gasoline 95">Unleaded Gasoline 95</option>
                  <option value="Crude Oil (Brent / WAF)">Crude Oil (Brent / WAF)</option>
                  <option value="Aviation Jet A-1">Aviation Jet A-1</option>
                  <option value="Heavy Fuel Oil (HFO)">Heavy Fuel Oil (HFO)</option>
                  <option value="Engineering Advisory">Engineering Advisory</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Estimated Cargo Volume</label>
                <select
                  value={formData.estimatedVolume}
                  onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-300 text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black min-h-[40px]"
                >
                  <option value="Spot (1,000 - 5,000 MT)">Spot (1,000 - 5,000 MT)</option>
                  <option value="5,000 - 10,000 MT">5,000 - 10,000 MT</option>
                  <option value="10,000 - 25,000 MT">10,000 - 25,000 MT</option>
                  <option value="25,000+ MT Term Contract">25,000+ MT Term Contract</option>
                  <option value="Not Applicable">Not Applicable / Advisory</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Incoterm Terms</label>
                <select
                  value={formData.incoterm}
                  onChange={(e) => setFormData({ ...formData, incoterm: e.target.value as any })}
                  className="w-full bg-neutral-50 border border-neutral-300 text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black min-h-[40px]"
                >
                  <option value="CIF">CIF (Cost, Insurance & Freight - Tema/Takoradi)</option>
                  <option value="FOB">FOB (Free on Board - Load Port)</option>
                  <option value="DAP">DAP (Delivered at Place - Depot)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your Name"
                  className={`w-full bg-neutral-50 border ${errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-neutral-300 focus:border-black'} text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none min-h-[40px]`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className={`w-full bg-neutral-50 border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-neutral-300 focus:border-black'} text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none min-h-[40px]`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Company / Institution"
                  className="w-full bg-neutral-50 border border-neutral-300 text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black min-h-[40px]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: sanitizePhone(e.target.value) })}
                  placeholder="+233..."
                  className="w-full bg-neutral-50 border border-neutral-300 text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black min-h-[40px]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-700">Additional Specifications</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention discharge ports, bank LC issuing details, or technical scope..."
                className="w-full bg-neutral-50 border border-neutral-300 text-black text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-black resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md min-h-[44px] disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Submitting Request...' : 'Transmit Quote Request'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
