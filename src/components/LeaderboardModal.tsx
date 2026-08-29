import React from 'react';
import { LeaderboardExecutive } from '../data/leaderboardData';
import {
  X,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Building2,
  MapPin,
  GraduationCap,
  Briefcase,
  User,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  executive?: LeaderboardExecutive | null;
  onContactExecutive?: (name: string) => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  executive,
  onContactExecutive,
}) => {
  if (!isOpen || !executive) return null;

  const initials = executive.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 text-neutral-900 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
              Executive Profile & Bio Overview
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close overview"
            className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-neutral-700" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Executive Header Identity */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-neutral-100 text-center sm:text-left">
            {/* Avatar / Portrait */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-neutral-200 bg-neutral-900 text-white shadow-md flex items-center justify-center shrink-0">
              {executive.imageUrl ? (
                <img
                  src={executive.imageUrl}
                  alt={executive.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950 text-white p-2">
                  <User className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-bold font-mono tracking-widest">{initials}</span>
                </div>
              )}
            </div>

            <div className="space-y-1.5 flex-1">
              <h2 className="text-2xl font-black text-neutral-900 tracking-tight leading-snug">
                {executive.name}
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                {executive.role}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-neutral-500 pt-1">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                  {executive.division}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  {executive.location}
                </span>
              </div>
            </div>
          </div>

          {/* Professional Biography */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>Professional Overview</span>
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {executive.fullBio}
            </p>
          </div>

          {/* Education & Qualifications */}
          {executive.education && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>Academic & Professional Credentials</span>
              </h3>
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs font-medium text-neutral-800 leading-relaxed">
                {executive.education}
              </div>
            </div>
          )}

          {/* Core Strategic Capabilities */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Core Specialties & Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {executive.specialty.map((spec, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/80"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>


          {/* Connect / Actions */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {executive.linkedinUrl && (
                <a
                  href={executive.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold border border-neutral-200 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-neutral-700" />
                  <span>LinkedIn</span>
                </a>
              )}
              {executive.email && (
                <a
                  href={`mailto:${executive.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold border border-neutral-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Email</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onContactExecutive?.(executive.name);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <span>Connect with Director</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
