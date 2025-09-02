import React, { useState, useCallback } from 'react';
import { IframePreview } from './IframePreview';
import { generateSampleHtmlContent } from '../utils/htmlContentGenerator';

/**
 * PreviewDemo - Demonstration component for real-time CSS preview
 * 
 * Shows how the IframePreview component works with real-time CSS updates
 * This component will be used for testing the CSS injection system
 */
export const PreviewDemo = ({ initialCss = '', className = '' }) => {
  const [cssContent, setCssContent] = useState(initialCss);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Generate the HTML content using our utility
  const htmlContent = generateSampleHtmlContent();

  // Handle CSS updates with debouncing for performance
  const handleCssChange = useCallback((newCss) => {
    setError(null);
    setCssContent(newCss);
  }, []);

  // Handle iframe load events
  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setError(null);
  }, []);

  const handleIframeError = useCallback((errorEvent) => {
    setIsLoading(false);
    setError('Failed to load preview content');
    console.error('Preview iframe error:', errorEvent);
  }, []);

  // Sample CSS presets for testing
  const cssPresets = {
    default: '',
    colorful: `
      .preview-heading { 
        color: #e91e63; 
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }
      .preview-text { 
        color: #2196f3; 
        font-size: 1.1em;
        line-height: 1.6;
      }
      .preview-button { 
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        border: none;
        color: white;
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      }
      .preview-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
      }
    `,
    dark: `
      .preview-template {
        background: #1a1a1a;
        color: #ffffff;
      }
      .preview-heading {
        color: #61dafb;
        border-bottom: 2px solid #61dafb;
        padding-bottom: 8px;
      }
      .preview-text {
        color: #e6e6e6;
        background: rgba(255, 255, 255, 0.05);
        padding: 12px;
        border-radius: 6px;
        border-left: 4px solid #61dafb;
      }
      .preview-button {
        background: #61dafb;
        color: #1a1a1a;
        font-weight: bold;
        border: 2px solid #61dafb;
      }
      .preview-button:hover {
        background: transparent;
        color: #61dafb;
      }
      .preview-card {
        background: #2d2d2d;
        border: 1px solid #404040;
        color: #ffffff;
      }
      form {
        background: #2d2d2d !important;
        border: 1px solid #404040;
      }
      input, textarea {
        background: #1a1a1a !important;
        border: 1px solid #404040 !important;
        color: #ffffff !important;
      }
      input:focus, textarea:focus {
        border-color: #61dafb !important;
        box-shadow: 0 0 0 2px rgba(97, 218, 251, 0.2) !important;
      }
    `,
    minimal: `
      .preview-template {
        font-family: 'Georgia', serif;
        max-width: 600px;
        line-height: 1.8;
        color: #333;
      }
      .preview-heading {
        font-weight: normal;
        color: #222;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        margin-bottom: 30px;
      }
      .preview-text {
        font-size: 1.1em;
        margin-bottom: 25px;
        text-align: justify;
      }
      .preview-button {
        background: none;
        border: 2px solid #333;
        color: #333;
        padding: 12px 24px;
        font-family: inherit;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9em;
      }
      .preview-button:hover {
        background: #333;
        color: white;
      }
      .preview-card {
        border: 1px solid #ddd;
        background: #fafafa;
        padding: 20px;
        margin: 10px 0;
      }
      section {
        margin-bottom: 50px;
      }
    `
  };

  return (
    <div className={`preview-demo ${className}`} data-testid="preview-demo">
      {/* Control Panel */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Real-time CSS Preview Demo
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* CSS Editor */}
          <div>
            <label htmlFor="css-editor" className="block text-sm font-medium text-gray-700 mb-2">
              CSS Editor
            </label>
            <textarea
              id="css-editor"
              data-testid="css-editor"
              value={cssContent}
              onChange={(e) => handleCssChange(e.target.value)}
              placeholder="Enter your CSS here to see real-time changes..."
              className="w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              style={{ resize: 'vertical' }}
            />
          </div>
          
          {/* Preset Buttons */}
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                CSS Presets
              </legend>
            <div className="space-y-2">
              {Object.entries(cssPresets).map(([name, css]) => (
                <button
                  key={name}
                  onClick={() => handleCssChange(css)}
                  className="w-full px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-left capitalize"
                  data-testid={`preset-${name}`}
                >
                  {name} Theme
                </button>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-gray-50 rounded-md">
              <p className="text-xs text-gray-600">
                <strong>Try these features:</strong>
              </p>
              <ul className="text-xs text-gray-600 mt-1 space-y-1">
                <li>• Change colors using .preview-heading, .preview-text</li>
                <li>• Style buttons with .preview-button</li>
                <li>• Modify cards using .preview-card</li>
                <li>• Update the main container with .preview-template</li>
              </ul>
            </div>
            </fieldset>
          </div>
        </div>
        
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
      </div>

      {/* Preview Container */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">Live Preview</h3>
          {isLoading && (
            <div className="flex items-center text-sm text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
              Loading...
            </div>
          )}
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <IframePreview
            htmlContent={htmlContent}
            cssContent={cssContent}
            height="600px"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allowScripts={false}
            className="w-full"
          />
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-xs text-blue-700">
            <strong>Security Note:</strong> This preview is rendered in a sandboxed iframe with restricted permissions. 
            All content is isolated from the parent document to prevent XSS attacks.
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Simple wrapper component for basic iframe preview usage
 */
export const SimplePreview = ({ htmlContent, cssContent, height = '400px' }) => {
  return (
    <div className="simple-preview" data-testid="simple-preview">
      <IframePreview
        htmlContent={htmlContent || generateSampleHtmlContent()}
        cssContent={cssContent || ''}
        height={height}
      />
    </div>
  );
};