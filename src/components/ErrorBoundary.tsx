import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  sectionName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full py-12 px-6 my-6 max-w-xl mx-auto rounded-2xl border border-neutral-200 bg-neutral-50/80 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center mx-auto mb-4 text-amber-700">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-neutral-900 mb-2">
            {this.props.sectionName ? `Unable to load ${this.props.sectionName}` : 'Temporary Display Issue'}
          </h3>
          <p className="text-sm text-neutral-600 mb-5 max-w-md mx-auto">
            This module encountered an unexpected issue while rendering. You can retry loading the section or continue browsing other sections.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-950 text-white hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Section</span>
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
