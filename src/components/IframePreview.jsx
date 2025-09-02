/**
 * IframePreview - Backwards Compatible Wrapper
 * 
 * This file maintains backwards compatibility while using the new modular 
 * IframePreview system located in ./IframePreview/
 * 
 * MIGRATION NOTICE: 
 * - New code should import from './IframePreview/' directly
 * - This wrapper will be maintained for existing components
 * - All functionality has been preserved and enhanced
 */

// Import from new modular system
import { 
  IframePreview as NewIframePreview, 
  useIframePreview as useNewIframePreview 
} from './IframePreview/index.js';

/**
 * IframePreview - Secure iframe component for real-time CSS preview
 * 
 * Features:
 * - Secure sandboxing to prevent XSS attacks
 * - CSS isolation from parent document
 * - Real-time CSS injection without page reload
 * - Proper content security policy implementation
 * - Safe HTML content handling
 * 
 * This is now a wrapper around the new modular system for backwards compatibility.
 */
export const IframePreview = ({
  htmlContent = '',
  cssContent = '',
  className = '',
  height = '600px',
  onLoad,
  onError,
  allowScripts = false
}) => {
  return (
    <NewIframePreview
      htmlContent={htmlContent}
      cssContent={cssContent}
      className={className}
      height={height}
      onLoad={onLoad}
      onError={onError}
      allowScripts={allowScripts}
      showLoadingState={true}
      showErrorState={true}
    />
  );
};

/**
 * Hook for managing iframe content updates
 * Provides utilities for working with the IframePreview component
 * 
 * This maintains backwards compatibility with the original hook interface.
 */
export const useIframePreview = () => {
  return useNewIframePreview();
};

// Export the new modular components for direct access
export { 
  IframeRenderer, 
  LoadingSpinner, 
  ErrorDisplay,
  ContentSanitizer,
  useIframeContent,
  useIframeValidation
} from './IframePreview/index.js';