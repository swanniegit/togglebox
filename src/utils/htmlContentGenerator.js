/**
 * HTML Content Generator Utilities
 * 
 * DEPRECATED: This file is maintained for backwards compatibility.
 * New implementations should use the unified ContentGenerator system at:
 * src/utils/contentGenerator/index.js
 * 
 * Provides secure methods to convert React components to HTML strings
 * for injection into the IframePreview component.
 */

// Import from new unified system
import { 
  generateSampleHtmlContent as _generateSampleHtmlContent,
  sanitizeHtmlContent as _sanitizeHtmlContent,
  sanitizeCssContent as _sanitizeCssContent,
  validateHtmlSecurity as _validateHtmlSecurity,
  validateCssSecurity as _validateCssSecurity
} from './contentGenerator/index.js';

/**
 * Converts the SampleHtmlTemplate component structure to HTML string
 * This avoids security issues with rendering React components in iframes
 * while maintaining the same content structure for CSS testing
 * 
 * @deprecated Use ContentGenerator from './contentGenerator/index.js' instead
 */
export const generateSampleHtmlContent = () => {
  return _generateSampleHtmlContent();
};

/**
 * Content sanitization utilities
 * @deprecated Use functions from './contentGenerator/index.js' instead
 */
export const sanitizeHtmlContent = (html) => {
  return _sanitizeHtmlContent(html);
};

/**
 * CSS sanitization utilities
 * @deprecated Use functions from './contentGenerator/index.js' instead
 */
export const sanitizeCssContent = (css) => {
  return _sanitizeCssContent(css);
};

/**
 * Validates HTML content for security issues
 * @deprecated Use functions from './contentGenerator/index.js' instead
 */
export const validateHtmlSecurity = (html) => {
  return _validateHtmlSecurity(html);
};

/**
 * Validates CSS content for security issues
 * @deprecated Use functions from './contentGenerator/index.js' instead
 */
export const validateCssSecurity = (css) => {
  return _validateCssSecurity(css);
};