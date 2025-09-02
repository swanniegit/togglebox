/**
 * useIframeContent Hook - Manages iframe content generation and security
 * Handles content sanitization, data URL generation, and error states
 */

import { useMemo, useState, useCallback } from 'react';
import { ContentSanitizer } from '../ContentSanitizer.js';

export const useIframeContent = ({ 
  htmlContent, 
  cssContent, 
  sanitizer = ContentSanitizer 
}) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Generate secure HTML document
  const secureContent = useMemo(() => {
    try {
      setError(null);
      setIsLoading(true);
      
      if (!htmlContent && !cssContent) {
        return sanitizer.createErrorDocument('No content to display');
      }

      // Validate content security
      const htmlValidation = sanitizer.validateHtmlSecurity(htmlContent || '');
      const cssValidation = sanitizer.validateCssSecurity(cssContent || '');

      // Log security violations for development
      if (!htmlValidation.isSecure) {
        console.warn('HTML security violations detected:', htmlValidation.violations);
      }
      if (!cssValidation.isSecure) {
        console.warn('CSS security violations detected:', cssValidation.violations);
      }

      // Create secure document
      const document = sanitizer.createSecureDocument(
        htmlValidation.sanitizedContent, 
        cssValidation.sanitizedContent
      );

      setIsLoading(false);
      return document;
      
    } catch (err) {
      console.error('Error generating iframe content:', err);
      setError(err.message);
      setIsLoading(false);
      return sanitizer.createErrorDocument('Failed to generate content');
    }
  }, [htmlContent, cssContent, sanitizer]);

  // Generate data URL for iframe src
  const iframeSrc = useMemo(() => {
    try {
      const encodedContent = encodeURIComponent(secureContent);
      return `data:text/html;charset=utf-8,${encodedContent}`;
    } catch (err) {
      console.error('Error encoding iframe content:', err);
      setError('Failed to encode content');
      return 'data:text/html;charset=utf-8,' + encodeURIComponent(
        ContentSanitizer.createErrorDocument('Failed to encode content')
      );
    }
  }, [secureContent]);

  // Refresh content (useful for retrying after errors)
  const refreshContent = useCallback(() => {
    setError(null);
    setIsLoading(true);
    // The useMemo will automatically recalculate
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  // Get content security information
  const getSecurityInfo = useCallback(() => {
    const htmlValidation = sanitizer.validateHtmlSecurity(htmlContent || '');
    const cssValidation = sanitizer.validateCssSecurity(cssContent || '');
    
    return {
      isSecure: htmlValidation.isSecure && cssValidation.isSecure,
      htmlViolations: htmlValidation.violations,
      cssViolations: cssValidation.violations,
      totalViolations: htmlValidation.violations.length + cssValidation.violations.length
    };
  }, [htmlContent, cssContent, sanitizer]);

  return {
    iframeSrc,
    isLoading,
    error,
    refreshContent,
    getSecurityInfo,
    secureContent // For debugging purposes
  };
};

/**
 * useIframeValidation Hook - Content validation utilities
 * Provides validation functions for iframe content
 */
export const useIframeValidation = () => {
  const validateContent = useCallback((htmlContent) => {
    if (!htmlContent || typeof htmlContent !== 'string') {
      return { isValid: false, error: 'HTML content must be a non-empty string' };
    }

    // Check for potentially dangerous patterns
    const dangerousPatterns = [
      /<script/i,
      /on\w+\s*=/i,
      /javascript:/i,
      /<iframe/i,
      /<embed/i,
      /<object/i
    ];

    for (const pattern of dangerousPatterns) {
      if (pattern.test(htmlContent)) {
        return { 
          isValid: false, 
          error: `Content contains potentially unsafe patterns: ${pattern}` 
        };
      }
    }

    return { isValid: true, error: null };
  }, []);

  const updateCss = useCallback((cssContent) => {
    // Basic CSS validation
    if (!cssContent || typeof cssContent !== 'string') {
      return cssContent;
    }
    
    // Remove potentially dangerous CSS
    return cssContent
      .replace(/@import\s+[^;]+;?/gi, '')
      .replace(/expression\s*\([^)]*\)/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/vbscript:/gi, '');
  }, []);

  return {
    validateContent,
    updateCss
  };
};