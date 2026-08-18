import React, { useState } from 'react';
import { TRAINING_COURSES } from '../data/energyData';
import { TrainingCourse } from '../types';
import { SITE_IMAGES } from '../data/imageData';
import { HorizontalImageBanner } from './HorizontalImageBanner';
import { PaymentGatewayModal } from './PaymentGatewayModal';
import { GoogleFormModal } from './GoogleFormModal';
import { AnimatedCounter } from './common/AnimatedCounter';
import {
  GraduationCap,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  BookOpen,
  CreditCard,
  FileText,
  ShieldCheck,
  X
} from 'lucide-react';

interface TrainingTabProps {
  onOpenQuoteModal: (courseTitle?: string) => void;
}

export const TrainingTab: React.FC<TrainingTabProps> = ({ onOpenQuoteModal }) => {
  const [selectedCourse, setSelectedCourse] = useState<TrainingCourse | null>(null);

  // Payment Gateway Modal state
  const [paymentCourse, setPaymentCourse] = useState<TrainingCourse | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Google Form Modal state
  const [googleFormCourse, setGoogleFormCourse] = useState<TrainingCourse | null>(null);
  const [isGoogleFormModalOpen, setIsGoogleFormModalOpen] = useState(false);

  const handleOpenPayment = (course: TrainingCourse) => {
    setPaymentCourse(course);
    setIsPaymentModalOpen(true);
  };

  const handleOpenGoogleForm = (course: TrainingCourse) => {
    setGoogleFormCourse(course);
    setIsGoogleFormModalOpen(true);
  };

  return (
    <div className="space-y-20 sm:space-y-24 pb-20 bg-white">
      {/* PAGE HEADER */}
      <section className="bg-white py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Executive Training & Masterclasses
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Specialized programs designed to build skilled professionals across physical petroleum trading, HSSE depot safety, risk derivatives, and fuel station management.
          </p>
        </div>
      </section>

      {/* TRAINING IMPACT STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={6} duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Masterclass Modules</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-amber-500 tracking-tight">
              <AnimatedCounter value={100} suffix="%" duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Practical Case Studies</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              1:1
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Executive Mentorship</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={100} suffix="%" duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Trade Standards Aligned</span>
          </div>
        </div>
      </section>

      {/* REGISTRATION MODES CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-neutral-800">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Instant Seat Booking via Payment Gateway or Google Form Registration
            </h3>
            <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed">
              Pay directly using Mobile Money, Visa/Mastercard or Bank Transfer to secure an instant seat & e-ticket, or complete our official Google Form for corporate invoice requests.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2.5 rounded-2xl border border-neutral-700 text-xs font-semibold text-neutral-200">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Paystack Secured</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-800 px-4 py-2.5 rounded-2xl border border-neutral-700 text-xs font-semibold text-white shadow-sm">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Google Form Integrated</span>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE CATALOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 pb-4 gap-2">
          <h2 className="text-2xl font-black text-neutral-900 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-amber-600" />
            Upcoming Executive Masterclasses
          </h2>
          <span className="text-xs text-neutral-500 font-mono">
            Location: Accra Training Facility & Online
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAINING_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 lg:p-8 border border-neutral-200 hover:border-neutral-400 transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-neutral-950 text-white uppercase tracking-wider">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 leading-snug">{course.title}</h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{course.overview}</p>

                <div className="space-y-2 pt-2 border-t border-neutral-200">
                  <div className="flex items-center justify-between text-xs text-neutral-700">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Duration: {course.duration}
                    </span>
                    <span className="font-mono font-bold text-neutral-900">{course.fee}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Next Cohort: {course.upcomingDates[0]}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    Curriculum Highlights:
                  </span>
                  {course.modules.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="text-xs text-neutral-700 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2.5">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-100 transition-colors flex items-center gap-1.5 min-h-[44px] cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Syllabus</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenGoogleForm(course)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors flex items-center gap-1.5 min-h-[44px] cursor-pointer"
                    title="Register via Google Form"
                  >
                    <FileText className="w-3.5 h-3.5 text-neutral-700" />
                    <span>Google Form</span>
                  </button>

                  <button
                    onClick={() => handleOpenPayment(course)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 transition-all flex items-center gap-1.5 shadow-md active:scale-95 min-h-[44px] cursor-pointer"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-white" />
                    <span>Reserve Seat</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HORIZONTAL IMAGE BANNER */}
      <div>
        <HorizontalImageBanner
          imageUrl={SITE_IMAGES.horizontalBanners.trainingMasterclass}
          badgeText="HUMAN CAPITAL & EXECUTIVE EDUCATION"
          title="Custom In-House Petroleum Masterclasses & Certifications"
          subtitle="Designing bespoke training modules for Bulk Distribution Companies (BDCs), Oil Marketing Companies (OMCs), and commodity risk desks in Accra."
          stats={[
            { label: 'Delivery Model', value: 'Hybrid / On-site' },
            { label: 'Curriculum Standards', value: '100% Industry Aligned' },
            { label: 'Corporate Modules', value: 'Custom Designed' },
          ]}
          ctaText="Request In-House Proposal"
          onCtaClick={() => onOpenQuoteModal('Custom In-House Training')}
        />
      </div>

      {/* SYLLABUS MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-neutral-300 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl text-neutral-900">
            <div className="flex items-start justify-between border-b border-neutral-200 pb-4">
              <div>
                <span className="text-xs font-bold text-white bg-neutral-950 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                  {selectedCourse.category}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mt-2">{selectedCourse.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-neutral-500 hover:text-neutral-900 p-1.5 rounded-lg hover:bg-neutral-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed">{selectedCourse.overview}</p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Detailed Module Breakdown:
              </h4>
              <div className="space-y-2">
                {selectedCourse.modules.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-900 flex items-start gap-2.5"
                  >
                    <span className="text-amber-600 font-mono font-bold">{idx + 1}.</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-neutral-500">Investment: </span>
                <span className="font-mono font-bold text-neutral-900">{selectedCourse.fee}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const c = selectedCourse;
                    setSelectedCourse(null);
                    handleOpenGoogleForm(c);
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-neutral-900 bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 transition-colors flex items-center gap-1.5 min-h-[44px] cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Google Form</span>
                </button>

                <button
                  onClick={() => {
                    const c = selectedCourse;
                    setSelectedCourse(null);
                    handleOpenPayment(c);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 transition-colors shadow-md flex items-center gap-1.5 min-h-[44px] cursor-pointer"
                >
                  <CreditCard className="w-3.5 h-3.5 text-white" />
                  <span>Reserve Seat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAYMENT GATEWAY MODAL */}
      <PaymentGatewayModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        course={paymentCourse}
      />

      {/* GOOGLE FORM REGISTRATION MODAL */}
      <GoogleFormModal
        isOpen={isGoogleFormModalOpen}
        onClose={() => setIsGoogleFormModalOpen(false)}
        course={googleFormCourse}
      />
    </div>
  );
};
