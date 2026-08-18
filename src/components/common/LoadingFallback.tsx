import React from 'react';

interface LoadingFallbackProps {
  type?: 'tab' | 'modal' | 'card';
  label?: string;
}

export const LoadingFallback: React.FC<LoadingFallbackProps> = ({ type = 'tab', label = 'Loading section content...' }) => {
  if (type === 'modal') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-150">
        <div className="w-full max-w-lg bg-white rounded-2xl p-6 border border-neutral-200 shadow-2xl flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-8 h-8 rounded-full border-2 border-neutral-300 border-t-neutral-950 animate-spin" />
          <p className="text-xs font-medium text-neutral-600">Preparing interface...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 animate-pulse">
      {/* Header skeleton */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
        <div className="h-4 w-32 bg-neutral-200 rounded-full mx-auto" />
        <div className="h-8 w-3/4 bg-neutral-200 rounded-lg mx-auto" />
        <div className="h-4 w-full bg-neutral-100 rounded-md mx-auto" />
      </div>

      {/* Content grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-64 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-200" />
              <div className="h-5 w-2/3 bg-neutral-200 rounded" />
              <div className="h-3.5 w-full bg-neutral-100 rounded" />
              <div className="h-3.5 w-4/5 bg-neutral-100 rounded" />
            </div>
            <div className="h-8 w-28 bg-neutral-200 rounded-lg" />
          </div>
        ))}
      </div>
      <div className="text-center pt-8">
        <span className="text-xs text-neutral-600 font-mono">{label}</span>
      </div>
    </div>
  );
};
