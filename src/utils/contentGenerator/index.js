/**
 * Unified Content Generator System
 * Consolidates all HTML content generation with template composition patterns
 * Replaces multiple separate content generators with a unified approach
 */

import { TemplateBuilder } from './TemplateBuilder.js';
import { ComponentLibrary } from './ComponentLibrary.js';

export class ContentGenerator {
  constructor() {
    this.builder = new TemplateBuilder();
    this.components = new ComponentLibrary();
  }

  /**
   * Generate content using a template and options
   * @param {string} template - Template name (sample, sixCards, professional, etc.)
   * @param {Object} options - Template-specific options
   * @returns {string} Generated HTML content
   */
  generateContent(template, options = {}) {
    try {
      return this.builder
        .setTemplate(template)
        .withComponents(this.components)
        .withOptions(options)
        .build();
    } catch (error) {
      console.error('Content generation failed:', error);
      return this.generateFallbackContent(error.message);
    }
  }

  /**
   * Generate sample HTML content (backwards compatibility with original)
   * @param {Object} options - Optional customization options
   * @returns {string} HTML content
   */
  generateSampleHtmlContent(options = {}) {
    return this.generateContent('sample', options);
  }

  /**
   * Generate six cards interactive content
   * @param {Object} alertStyles - Alert styling options (backwards compatibility)
   * @param {Object} options - Additional options
   * @returns {string} HTML content
   */
  generateSixCardsContent(alertStyles = {}, options = {}) {
    return this.generateContent('sixCards', {
      ...options,
      alertStyles
    });
  }

  /**
   * Generate professional demo content
   * @param {Object} alertStyles - Alert styling options (backwards compatibility)
   * @param {Object} options - Additional options
   * @returns {string} HTML content
   */
  generateProContent(alertStyles = {}, options = {}) {
    return this.generateContent('professional', {
      ...options,
      alertStyles
    });
  }

  /**
   * Generate minimal preview content
   * @param {Object} options - Customization options
   * @returns {string} HTML content
   */
  generateMinimalContent(options = {}) {
    return this.generateContent('minimal', options);
  }

  /**
   * Generate typography-focused content
   * @param {Object} options - Customization options
   * @returns {string} HTML content
   */
  generateTypographyContent(options = {}) {
    return this.generateContent('typography', options);
  }

  /**
   * Generate form-focused content
   * @param {Object} options - Customization options
   * @returns {string} HTML content
   */
  generateFormContent(options = {}) {
    return this.generateContent('forms', options);
  }

  /**
   * Generate alert components showcase
   * @param {Object} options - Customization options
   * @returns {string} HTML content
   */
  generateAlertContent(options = {}) {
    return this.generateContent('alerts', options);
  }

  /**
   * Generate custom content with specific sections
   * @param {Array} sections - Array of section names to include
   * @param {Object} options - Customization options
   * @returns {string} HTML content
   */
  generateCustomContent(sections, options = {}) {
    const customTemplate = {
      sections,
      layout: options.layout || 'standard',
      defaultOptions: options
    };

    return this.components.render(customTemplate, options);
  }

  /**
   * Get available templates
   * @returns {Array} Array of available template names
   */
  getAvailableTemplates() {
    return this.builder.getAvailableTemplates();
  }

  /**
   * Get template description
   * @param {string} templateName - Template name
   * @returns {string} Template description
   */
  getTemplateDescription(templateName) {
    return this.builder.getTemplateDescription(templateName);
  }

  /**
   * Validate content for security issues
   * @param {string} html - HTML content to validate
   * @returns {Object} Validation result
   */
  validateContent(html) {
    return validateHtmlSecurity(html);
  }

  /**
   * Generate fallback content when template generation fails
   * @param {string} errorMessage - Error message to display
   * @returns {string} Fallback HTML content
   */
  generateFallbackContent(errorMessage = 'Content generation failed') {
    return `
      <div data-testid="html-template" class="preview-template p-6 max-w-4xl mx-auto bg-white">
        <div class="text-center p-8">
          <div class="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Content Generation Error</h2>
          <p class="text-gray-600">${errorMessage}</p>
          <div class="mt-4">
            <button class="preview-button px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Retry
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Reset the generator state
   */
  reset() {
    this.builder.reset();
    return this;
  }
}

/**
 * Content sanitization utilities (preserved from original)
 */
export const sanitizeHtmlContent = (html) => {
  if (!html || typeof html !== 'string') return '';
  
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<embed\b[^>]*>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/\son\w+\s*=\s*[^>\s]+/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/data:(?!image\/)/gi, '');
};

export const sanitizeCssContent = (css) => {
  if (!css || typeof css !== 'string') return '';
  
  return css
    .replace(/@import\s+url\s*\([^)]*\)/gi, '')
    .replace(/expression\s*\([^)]*\)/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/behavior\s*:/gi, '')
    .replace(/-moz-binding/gi, '')
    .replace(/data:(?!image\/)/gi, '');
};

export const validateHtmlSecurity = (html) => {
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
    sanitizedContent: violations.length > 0 ? sanitizeHtmlContent(html) : html
  };
};

export const validateCssSecurity = (css) => {
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
    sanitizedContent: violations.length > 0 ? sanitizeCssContent(css) : css
  };
};

// Create a default instance for easy importing
export const contentGenerator = new ContentGenerator();

// Export individual generator functions for backwards compatibility
export const generateSampleHtmlContent = (options) => contentGenerator.generateSampleHtmlContent(options);
export const generateSixCardsContent = (alertStyles, options) => contentGenerator.generateSixCardsContent(alertStyles, options);
export const generateProContent = (alertStyles, options) => contentGenerator.generateProContent(alertStyles, options);