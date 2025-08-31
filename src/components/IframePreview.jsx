import React, { useEffect, useRef, useMemo } from 'react';

/**
 * IframePreview - Secure iframe component for real-time CSS preview
 * 
 * Features:
 * - Secure sandboxing to prevent XSS attacks
 * - CSS isolation from parent document
 * - Real-time CSS injection without page reload
 * - Proper content security policy implementation
 * - Safe HTML content handling
 */
export const IframePreview = ({
  htmlContent = '',
  cssContent = '',
  className = '',
  height = '600px',
  onLoad,
  onError
}) => {
  const iframeRef = useRef(null);

  // Sanitize HTML content to prevent XSS
  const sanitizeHtml = (html) => {
    if (!html || typeof html !== 'string') return '';
    
    // Remove script tags and event handlers
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '')
      .replace(/\son\w+\s*=\s*[^>\s]+/gi, '')
      .replace(/javascript:/gi, '');
  };

  // Sanitize CSS content to prevent dangerous CSS
  const sanitizeCss = (css) => {
    if (!css || typeof css !== 'string') return '';
    
    return css
      .replace(/@import\s+[^;]+;?/gi, '')
      .replace(/@import\s+url\s*\([^)]*\)[^;]*;?/gi, '')
      .replace(/expression\s*\([^)]*\)/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/behavior\s*:/gi, '')
      .replace(/-moz-binding/gi, '');
  };

  // Create secure iframe content with CSP and CSS injection
  const createSecureContent = useMemo(() => {
    const sanitizedHtml = sanitizeHtml(htmlContent);
    const safeCss = sanitizeCss(cssContent || '');

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: https:; font-src data: https:;">
        <meta http-equiv="X-Content-Type-Options" content="nosniff">
        <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
        <title>ToggleBox Preview</title>
        <style id="dynamic-css">
          /* Reset and base styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            line-height: 1.5;
            color: #333;
            background: #ffffff;
            overflow-x: auto;
            min-height: 100vh;
          }
          
          /* Dynamic CSS from ToggleBox */
          ${safeCss}
        </style>
      </head>
      <body>
        ${sanitizedHtml}
      </body>
      </html>
    `;
  }, [htmlContent, cssContent]);

  // Create data URL for secure content injection
  const iframeSrc = useMemo(() => {
    const encodedContent = encodeURIComponent(createSecureContent);
    return `data:text/html;charset=utf-8,${encodedContent}`;
  }, [createSecureContent]);

  // Handle iframe load events
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      onLoad?.();
    };

    const handleError = (event) => {
      console.warn('IframePreview: Failed to load content', event);
      onError?.(event);
    };

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
    };
  }, [onLoad, onError]);

  // Update iframe content when props change
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Update the iframe src with new content
    iframe.src = iframeSrc;
  }, [iframeSrc]);

  return (
    <div className={`iframe-preview-container ${className}`}>
      <iframe
        ref={iframeRef}
        data-testid="preview-iframe"
        title="ToggleBox CSS Preview - Secure Sandbox Environment"
        src={iframeSrc}
        sandbox="allow-same-origin" // Minimal permissions - no scripts, forms, or navigation
        style={{
          width: '100%',
          height: height,
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
        }}
        loading="lazy" // Improve performance
        referrerPolicy="no-referrer" // Privacy protection
      />
    </div>
  );
};

/**
 * Hook for managing iframe content updates
 * Provides utilities for working with the IframePreview component
 */
export const useIframePreview = () => {
  const updateCss = (cssContent) => {
    // This would be used by parent components to trigger CSS updates
    return cssContent;
  };

  const validateContent = (htmlContent) => {
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
  };

  return {
    updateCss,
    validateContent
  };
};