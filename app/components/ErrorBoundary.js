'use client';

import React from 'react';
import { FiAlertTriangle, FiRefreshCw, FiHome } from 'react-icons/fi';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-6">
          <div className="text-center max-w-md mx-auto">
            <div className="mb-6">
              <FiAlertTriangle className="mx-auto text-6xl text-red-500 mb-4" />
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                We&apos;re sorry for the inconvenience. The page encountered an unexpected error.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <summary className="cursor-pointer text-sm font-medium text-red-700 dark:text-red-400 mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-600 dark:text-red-300 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition w-full justify-center"
              >
                <FiRefreshCw className="text-sm" />
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center gap-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 px-6 py-3 rounded-lg font-semibold transition w-full justify-center"
              >
                <FiHome className="text-sm" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;