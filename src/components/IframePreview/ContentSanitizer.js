/**
 * Content Sanitizer - Secure content sanitization for iframe previews
 * Handles HTML and CSS sanitization with security validation
 */

export class ContentSanitizer {
  /**
   * Sanitize HTML content to prevent XSS attacks
   * @param {string} html - HTML content to sanitize
   * @returns {string} Sanitized HTML content
   */
  static sanitizeHtml(html) {
    if (!html || typeof html !== 'string') return '';
    
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '')
      .replace(/\son\w+\s*=\s*[^>\s]+/gi, '')
      .replace(/javascript:/gi, '');
  }

  /**
   * Sanitize CSS content to prevent dangerous CSS injection
   * @param {string} css - CSS content to sanitize
   * @returns {string} Sanitized CSS content
   */
  static sanitizeCss(css) {
    if (!css || typeof css !== 'string') return '';
    
    return css
      .replace(/@import\s+[^;]+;?/gi, '')
      .replace(/expression\s*\([^)]*\)/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/behavior\s*:/gi, '')
      .replace(/-moz-binding/gi, '');
  }

  /**
   * Create a secure HTML document with sanitized content
   * @param {string} html - HTML body content
   * @param {string} css - CSS styles
   * @returns {string} Complete HTML document string
   */
  static createSecureDocument(html, css) {
    const sanitizedHtml = this.sanitizeHtml(html);
    const sanitizedCss = this.sanitizeCss(css);
    
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: https:; font-src data: https:;">
        <title>ToggleBox Preview</title>
        <style id="dynamic-css">
          ${this.getBaseStyles()}
          /* Dynamic CSS from ToggleBox */
          ${sanitizedCss}
        </style>
      </head>
      <body>
        ${sanitizedHtml}
      </body>
      </html>
    `;
  }

  /**
   * Get base CSS styles for consistent rendering
   * @returns {string} Base CSS styles
   */
  static getBaseStyles() {
    return `
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
    `;
  }

  /**
   * Validate HTML content for security issues
   * @param {string} html - HTML content to validate
   * @returns {Object} Validation result with security status
   */
  static validateHtmlSecurity(html) {
    const dangerousPatterns = [
      { pattern: /<script/i, description: 'Script tags' },
      { pattern: /on\w+\s*=/i, description: 'Event handlers' },
      { pattern: /javascript:/i, description: 'JavaScript protocols' },
      { pattern: /<iframe/i, description: 'Iframe elements' },
      { pattern: /<embed/i, description: 'Embed elements' },
      { pattern: /<object/i, description: 'Object elements' },
      { pattern: /data:(?!image\/)/i, description: 'Non-image data URLs' }
    ];

    const violations = [];
    
    for (const { pattern, description } of dangerousPatterns) {
      if (pattern.test(html)) {
        violations.push(description);
      }
    }

    return {
      isSecure: violations.length === 0,
      violations,
      sanitizedContent: violations.length > 0 ? this.sanitizeHtml(html) : html
    };
  }

  /**
   * Validate CSS content for security issues
   * @param {string} css - CSS content to validate
   * @returns {Object} Validation result with security status
   */
  static validateCssSecurity(css) {
    const dangerousPatterns = [
      { pattern: /@import/i, description: 'CSS imports' },
      { pattern: /expression\s*\(/i, description: 'CSS expressions' },
      { pattern: /javascript:/i, description: 'JavaScript protocols' },
      { pattern: /vbscript:/i, description: 'VBScript protocols' },
      { pattern: /behavior\s*:/i, description: 'CSS behaviors' },
      { pattern: /-moz-binding/i, description: 'XBL bindings' }
    ];

    const violations = [];
    
    for (const { pattern, description } of dangerousPatterns) {
      if (pattern.test(css)) {
        violations.push(description);
      }
    }

    return {
      isSecure: violations.length === 0,
      violations,
      sanitizedContent: violations.length > 0 ? this.sanitizeCss(css) : css
    };
  }

  /**
   * Create error document when content generation fails
   * @param {string} errorMessage - Error message to display
   * @returns {string} Error HTML document
   */
  static createErrorDocument(errorMessage = 'Content could not be loaded') {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview Error</title>
        <style>
          ${this.getBaseStyles()}
          .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            padding: 2rem;
          }
          .error-icon { font-size: 3rem; margin-bottom: 1rem; }
          .error-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #dc2626; }
          .error-message { color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="error-container">
          <div class="error-icon">⚠️</div>
          <h2 class="error-title">Preview Error</h2>
          <p class="error-message">${errorMessage}</p>
        </div>
      </body>
      </html>
    `;
  }
}