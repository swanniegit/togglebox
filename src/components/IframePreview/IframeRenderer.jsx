/**
 * IframeRenderer - Renders the iframe element with security features
 * Handles iframe display, loading states, and error handling
 */

import React, { useRef, useEffect, forwardRef } from 'react';

export const IframeRenderer = forwardRef(({
  src,
  className = '',
  height = '600px',
  allowScripts = false,
  onLoad,
  onError,
  loading = false,
  error = null,
  title = 'ToggleBox CSS Preview - Secure Sandbox Environment',
  style = {}
}, ref) => {
  const iframeRef = useRef(null);

  // Use forwarded ref or internal ref
  const actualRef = ref || iframeRef;

  // Handle iframe load and error events
  useEffect(() => {
    const iframe = actualRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      onLoad?.();
    };

    const handleError = (event) => {
      console.warn('IframeRenderer: Failed to load content', event);
      onError?.(event);
    };

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
    };
  }, [onLoad, onError, actualRef]);

  // Default iframe styles
  const defaultStyle = {
    width: '100%',
    height: height,
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    transition: 'opacity 0.2s ease',
    ...style
  };

  // Loading overlay styles
  const loadingOverlayStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '100%'
  };

  const loadingSpinnerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    display: loading ? 'block' : 'none'
  };

  // Error overlay styles
  const errorOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: error ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 20,
    borderRadius: '8px',
    border: '2px dashed #dc2626'
  };

  // Determine sandbox permissions
  const sandboxPermissions = allowScripts 
    ? 'allow-same-origin allow-scripts' 
    : 'allow-same-origin';

  return (
    <div className={`iframe-preview-container ${className}`.trim()} style={loadingOverlayStyle}>
      {/* Loading Spinner */}
      <div style={loadingSpinnerStyle}>
        <div className="loading-spinner">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="text-sm text-gray-500 mt-2">Loading preview...</p>
        </div>
      </div>

      {/* Error Overlay */}
      <div style={errorOverlayStyle}>
        <div className="text-center p-6">
          <div className="text-red-500 text-4xl mb-2">⚠️</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Preview Error</h3>
          <p className="text-sm text-gray-600 mb-3">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Retry
          </button>
        </div>
      </div>

      {/* Main Iframe */}
      <iframe
        ref={actualRef}
        data-testid="preview-iframe"
        title={title}
        src={src}
        sandbox={sandboxPermissions}
        style={{
          ...defaultStyle,
          opacity: (loading || error) ? 0.5 : 1
        }}
        loading="lazy"
        referrerPolicy="no-referrer"
        // Security attributes
        allow=""
        credentialless=""
      />
    </div>
  );
});

IframeRenderer.displayName = 'IframeRenderer';

/**
 * LoadingSpinner Component - Reusable loading indicator
 */
export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };

  return (
    <div className={`loading-spinner ${className}`}>
      <div className={`animate-spin rounded-full border-b-2 border-blue-500 ${sizeClasses[size]}`}></div>
    </div>
  );
};

/**
 * ErrorDisplay Component - Reusable error display
 */
export const ErrorDisplay = ({ 
  error, 
  onRetry, 
  className = '',
  showIcon = true,
  showRetry = true 
}) => {
  return (
    <div className={`error-display text-center p-6 ${className}`}>
      {showIcon && <div className="text-red-500 text-4xl mb-2">⚠️</div>}
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Preview Error</h3>
      <p className="text-sm text-gray-600 mb-3">{error || 'Something went wrong'}</p>
      {showRetry && onRetry && (
        <button 
          onClick={onRetry}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};