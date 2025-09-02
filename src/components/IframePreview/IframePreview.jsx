/**
 * IframePreview - Refactored secure iframe component for real-time CSS preview
 * 
 * This is the new modular version that uses composition and focused components.
 * Features:
 * - Secure sandboxing with ContentSanitizer
 * - Modular architecture with separated concerns
 * - Enhanced error handling and loading states
 * - Improved performance with optimized re-renders
 */

import React from 'react';
import { useIframeContent, useIframeValidation } from './hooks/useIframeContent.js';
import { IframeRenderer, ErrorDisplay } from './IframeRenderer.jsx';
import { ContentSanitizer } from './ContentSanitizer.js';

export const IframePreview = ({
  htmlContent = '',
  cssContent = '',
  className = '',
  height = '600px',
  onLoad,
  onError,
  allowScripts = false,
  showLoadingState = true,
  showErrorState = true,
  customSanitizer = ContentSanitizer
}) => {
  // Use custom hook for content management
  const { 
    iframeSrc, 
    isLoading, 
    error, 
    refreshContent, 
    getSecurityInfo 
  } = useIframeContent({
    htmlContent,
    cssContent,
    sanitizer: customSanitizer
  });

  // Content validation utilities
  const { validateContent } = useIframeValidation();

  // Handle iframe load events
  const handleLoad = () => {
    const securityInfo = getSecurityInfo();
    if (securityInfo.totalViolations > 0) {
      console.warn('Security violations detected in preview content:', securityInfo);
    }
    onLoad?.();
  };

  // Handle iframe errors
  const handleError = (event) => {
    console.error('IframePreview error:', event);
    onError?.(event);
  };

  // Handle retry functionality
  const handleRetry = () => {
    refreshContent();
  };

  // If there's a critical error and error display is disabled, show fallback
  if (error && !showErrorState) {
    console.error('IframePreview: Critical error occurred but error display is disabled:', error);
  }

  return (
    <div className="iframe-preview-wrapper">
      <IframeRenderer
        src={iframeSrc}
        height={height}
        allowScripts={allowScripts}
        onLoad={handleLoad}
        onError={handleError}
        loading={showLoadingState && isLoading}
        error={showErrorState ? error : null}
        className={className}
      />
      
      {/* Development-only security info */}
      {process.env.NODE_ENV === 'development' && (
        <SecurityInfo getSecurityInfo={getSecurityInfo} />
      )}
    </div>
  );
};

/**
 * SecurityInfo Component - Development-only security information display
 * Shows security validation results in development mode
 */
const SecurityInfo = ({ getSecurityInfo }) => {
  const securityInfo = getSecurityInfo();
  
  if (securityInfo.totalViolations === 0) {
    return null;
  }

  return (
    <div className="security-info mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
      <div className="font-medium text-yellow-800 mb-1">
        ⚠️ Security Violations Detected ({securityInfo.totalViolations})
      </div>
      {securityInfo.htmlViolations.length > 0 && (
        <div className="text-yellow-700">
          HTML: {securityInfo.htmlViolations.join(', ')}
        </div>
      )}
      {securityInfo.cssViolations.length > 0 && (
        <div className="text-yellow-700">
          CSS: {securityInfo.cssViolations.join(', ')}
        </div>
      )}
      <div className="text-xs text-yellow-600 mt-1">
        Content has been automatically sanitized for security.
      </div>
    </div>
  );
};

/**
 * useIframePreview Hook - Backwards compatibility with original hook
 * Provides utilities for working with the IframePreview component
 */
export const useIframePreview = () => {
  const { validateContent, updateCss } = useIframeValidation();

  return {
    updateCss,
    validateContent
  };
};

// Export components and utilities
export { ContentSanitizer } from './ContentSanitizer.js';
export { IframeRenderer, LoadingSpinner, ErrorDisplay } from './IframeRenderer.jsx';
export { useIframeContent, useIframeValidation } from './hooks/useIframeContent.js';