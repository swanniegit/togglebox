/**
 * BaseDemo - Base component for CSS preview demos
 * Consolidates common patterns from PreviewDemo, StylePlayground, SixCardsInteractive, etc.
 * 
 * Features:
 * - Unified state management for demo components
 * - CSS preset system with template support
 * - IframePreview integration with error handling
 * - Export functionality for CSS
 * - Customizable controls through composition
 */

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { IframePreview } from '../IframePreview';

export const BaseDemo = ({
  // Content configuration
  contentGenerator,
  initialContent = '',
  contentType = 'html', // 'html' or 'function'
  
  // CSS configuration
  initialCss = '',
  cssPresets = {},
  
  // UI configuration
  controlsComponent: ControlsComponent,
  exportComponent: ExportComponent,
  className = '',
  
  // IframePreview configuration
  iframeProps = {},
  
  // Callbacks
  onStateChange,
  onError,
  onLoad,
  
  // Advanced configuration
  debounceDelay = 300,
  enableExport = true,
  showPresets = true,
  
  // Custom state for complex demos
  customState = {},
  customStateActions = {}
}) => {
  // Core state management
  const [cssContent, setCssContent] = useState(initialCss);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPreset, setSelectedPreset] = useState('default');
  
  // Custom state for complex components (like SixCardsInteractive)
  const [customDemoState, setCustomDemoState] = useState(customState);
  
  // Refs for debouncing and performance
  const debounceRef = useRef(null);
  const cssUpdateRef = useRef(cssContent);
  
  // Generate HTML content based on configuration
  const htmlContent = useMemo(() => {
    if (contentType === 'function' && typeof contentGenerator === 'function') {
      return contentGenerator(customDemoState);
    }
    
    if (typeof contentGenerator === 'string') {
      return contentGenerator;
    }
    
    if (typeof contentGenerator === 'function') {
      return contentGenerator();
    }
    
    return initialContent;
  }, [contentGenerator, contentType, customDemoState, initialContent]);
  
  // Handle CSS updates with debouncing
  const handleCssChange = useCallback((newCss) => {
    setError(null);
    cssUpdateRef.current = newCss;
    
    // Clear existing debounce timer
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    // Set new debounced update
    debounceRef.current = setTimeout(() => {
      setCssContent(cssUpdateRef.current);
    }, debounceDelay);
  }, [debounceDelay]);
  
  // Handle immediate CSS updates (for presets)
  const handleImmediateCssChange = useCallback((newCss) => {
    setError(null);
    setCssContent(newCss);
    cssUpdateRef.current = newCss;
    
    // Clear any pending debounced updates
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
  }, []);
  
  // Handle custom state updates
  const handleCustomStateChange = useCallback((updates) => {
    const newState = typeof updates === 'function' 
      ? updates(customDemoState) 
      : { ...customDemoState, ...updates };
      
    setCustomDemoState(newState);
    onStateChange?.(newState);
  }, [customDemoState, onStateChange]);
  
  // Handle preset selection
  const handlePresetSelect = useCallback((presetKey) => {
    const preset = cssPresets[presetKey];
    if (preset) {
      setSelectedPreset(presetKey);
      
      if (typeof preset === 'string') {
        handleImmediateCssChange(preset);
      } else if (preset.css) {
        handleImmediateCssChange(preset.css);
        
        // Apply preset state if available
        if (preset.state) {
          handleCustomStateChange(preset.state);
        }
      }
    }
  }, [cssPresets, handleImmediateCssChange, handleCustomStateChange]);
  
  // Handle iframe events
  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setError(null);
    onLoad?.();
  }, [onLoad]);
  
  const handleIframeError = useCallback((errorEvent) => {
    setIsLoading(false);
    const errorMessage = 'Failed to load preview content';
    setError(errorMessage);
    console.error('BaseDemo iframe error:', errorEvent);
    onError?.(errorMessage, errorEvent);
  }, [onError]);
  
  // Export functionality
  const handleExport = useCallback(() => {
    const exportData = {
      css: cssContent,
      html: htmlContent,
      customState: customDemoState,
      preset: selectedPreset,
      timestamp: new Date().toISOString()
    };
    
    return exportData;
  }, [cssContent, htmlContent, customDemoState, selectedPreset]);
  
  // Download CSS file
  const handleDownloadCss = useCallback(() => {
    const blob = new Blob([cssContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `styles-${Date.now()}.css`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [cssContent]);
  
  // Copy CSS to clipboard
  const handleCopyCss = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(cssContent);
      return true;
    } catch (err) {
      console.error('Failed to copy CSS:', err);
      return false;
    }
  }, [cssContent]);
  
  // Cleanup debounce timer on unmount
  React.useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);
  
  // Prepare props for child components
  const controlsProps = {
    cssContent,
    onCssChange: handleCssChange,
    onImmediateCssChange: handleImmediateCssChange,
    
    // Custom state management
    customState: customDemoState,
    onCustomStateChange: handleCustomStateChange,
    customActions: customStateActions,
    
    // Preset management
    presets: Object.keys(cssPresets),
    selectedPreset,
    onPresetSelect: handlePresetSelect,
    showPresets,
    
    // State information
    isLoading,
    error,
    
    // Export functions
    onExport: handleExport,
    onDownload: handleDownloadCss,
    onCopy: handleCopyCss
  };
  
  const exportProps = {
    cssContent,
    htmlContent,
    customState: customDemoState,
    onDownload: handleDownloadCss,
    onCopy: handleCopyCss,
    onExport: handleExport
  };
  
  return (
    <div className={`base-demo ${className}`}>
      {/* Controls Component */}
      {ControlsComponent && (
        <div className="base-demo-controls mb-6">
          <ControlsComponent {...controlsProps} />
        </div>
      )}
      
      {/* Main Preview */}
      <div className="base-demo-preview">
        <IframePreview
          htmlContent={htmlContent}
          cssContent={cssContent}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className="base-demo-iframe"
          {...iframeProps}
        />
      </div>
      
      {/* Export Component */}
      {enableExport && ExportComponent && (
        <div className="base-demo-export mt-6">
          <ExportComponent {...exportProps} />
        </div>
      )}
      
      {/* Error Display */}
      {error && (
        <div className="base-demo-error mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <span className="text-red-500 mr-2">⚠️</span>
            <span className="text-red-700 font-medium">Error:</span>
            <span className="text-red-600 ml-2">{error}</span>
          </div>
          <button 
            onClick={() => setError(null)}
            className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
          >
            Dismiss
          </button>
        </div>
      )}
      
      {/* Loading Indicator */}
      {isLoading && (
        <div className="base-demo-loading mt-4 text-center text-gray-500">
          <div className="inline-flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
            Loading preview...
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Default Export Component - Simple export functionality
 */
export const DefaultExportComponent = ({ cssContent, onDownload, onCopy }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    const success = await onCopy();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  return (
    <div className="export-controls flex gap-2">
      <button
        onClick={onDownload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Download CSS
      </button>
      <button
        onClick={handleCopy}
        className={`px-4 py-2 rounded transition-colors ${
          copied 
            ? 'bg-green-600 text-white' 
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        {copied ? '✓ Copied!' : 'Copy CSS'}
      </button>
    </div>
  );
};

/**
 * Hook for BaseDemo functionality
 * Provides utilities for working with the BaseDemo component
 */
export const useBaseDemo = (initialState = {}) => {
  const [state, setState] = useState(initialState);
  
  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);
  
  const resetState = useCallback(() => {
    setState(initialState);
  }, [initialState]);
  
  return {
    state,
    updateState,
    resetState
  };
};