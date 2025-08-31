import React, { useState, useCallback, useMemo } from 'react';
import { IframePreview } from './IframePreview';
import { generateSampleHtmlContent } from '../utils/htmlContentGenerator';
import { ColorPicker } from './ColorPicker';

/**
 * InteractivePreview - Advanced preview component with interactive property controls
 * 
 * Features:
 * - Interactive sliders for cards, buttons, and text elements
 * - Real-time CSS generation based on control values
 * - Color picker integration for colors
 * - Responsive design controls
 */
export const InteractivePreview = ({ className = '' }) => {
  // Card properties
  const [cardProps, setCardProps] = useState({
    borderRadius: 8,
    padding: 16,
    shadow: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb'
  });

  // Button properties
  const [buttonProps, setButtonProps] = useState({
    borderRadius: 6,
    paddingX: 16,
    paddingY: 8,
    fontSize: 14,
    backgroundColor: '#3b82f6',
    textColor: '#ffffff',
    hoverColor: '#2563eb',
    shadow: 2
  });

  // Text properties
  const [textProps, setTextProps] = useState({
    fontSize: 16,
    lineHeight: 1.5,
    color: '#374151',
    headingSize: 24,
    headingColor: '#111827'
  });

  // Layout properties
  const [layoutProps, setLayoutProps] = useState({
    containerPadding: 24,
    spacing: 16,
    maxWidth: 768
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Generate CSS based on current property values
  const generatedCss = useMemo(() => {
    return `
      .preview-template {
        max-width: ${layoutProps.maxWidth}px;
        padding: ${layoutProps.containerPadding}px;
      }

      .preview-card {
        border-radius: ${cardProps.borderRadius}px !important;
        padding: ${cardProps.padding}px !important;
        box-shadow: 0 ${cardProps.shadow}px ${cardProps.shadow * 2}px rgba(0, 0, 0, ${cardProps.shadow * 0.02}) !important;
        background-color: ${cardProps.backgroundColor} !important;
        border: ${cardProps.borderWidth}px solid ${cardProps.borderColor} !important;
        margin-bottom: ${layoutProps.spacing}px !important;
      }

      .preview-button {
        border-radius: ${buttonProps.borderRadius}px !important;
        padding: ${buttonProps.paddingY}px ${buttonProps.paddingX}px !important;
        font-size: ${buttonProps.fontSize}px !important;
        background-color: ${buttonProps.backgroundColor} !important;
        color: ${buttonProps.textColor} !important;
        box-shadow: 0 ${buttonProps.shadow}px ${buttonProps.shadow * 2}px rgba(0, 0, 0, ${buttonProps.shadow * 0.05}) !important;
        border: none !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
      }

      .preview-button:hover {
        background-color: ${buttonProps.hoverColor} !important;
        transform: translateY(-1px) !important;
      }

      .preview-text {
        font-size: ${textProps.fontSize}px !important;
        line-height: ${textProps.lineHeight} !important;
        color: ${textProps.color} !important;
        margin-bottom: ${layoutProps.spacing}px !important;
      }

      .preview-heading {
        font-size: ${textProps.headingSize}px !important;
        color: ${textProps.headingColor} !important;
        margin-bottom: ${layoutProps.spacing}px !important;
      }

      .preview-subheading {
        font-size: ${textProps.headingSize * 0.8}px !important;
        color: ${textProps.headingColor} !important;
        margin-bottom: ${layoutProps.spacing * 0.75}px !important;
      }

      section {
        margin-bottom: ${layoutProps.spacing * 2}px !important;
      }
    `;
  }, [cardProps, buttonProps, textProps, layoutProps]);

  const htmlContent = generateSampleHtmlContent();

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setError(null);
  }, []);

  const handleIframeError = useCallback((errorEvent) => {
    setIsLoading(false);
    setError('Failed to load preview content');
    console.error('Preview iframe error:', errorEvent);
  }, []);

  // Property update handlers
  const updateCardProp = (prop, value) => {
    setCardProps(prev => ({ ...prev, [prop]: value }));
  };

  const updateButtonProp = (prop, value) => {
    setButtonProps(prev => ({ ...prev, [prop]: value }));
  };

  const updateTextProp = (prop, value) => {
    setTextProps(prev => ({ ...prev, [prop]: value }));
  };

  const updateLayoutProp = (prop, value) => {
    setLayoutProps(prev => ({ ...prev, [prop]: value }));
  };

  // Color picker handlers
  const handleCardColorChange = (color) => {
    updateCardProp('backgroundColor', color);
  };

  const handleButtonColorChange = (color) => {
    updateButtonProp('backgroundColor', color);
  };

  const handleTextColorChange = (color) => {
    updateTextProp('color', color);
  };

  return (
    <div className={`interactive-preview ${className}`} data-testid="interactive-preview">
      {/* Controls Panel */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Interactive Style Controls
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Card Controls */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Card Properties</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Border Radius: {cardProps.borderRadius}px
              </label>
              <input
                type="range"
                min="0"
                max="24"
                value={cardProps.borderRadius}
                onChange={(e) => updateCardProp('borderRadius', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="card-border-radius-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Padding: {cardProps.padding}px
              </label>
              <input
                type="range"
                min="8"
                max="48"
                value={cardProps.padding}
                onChange={(e) => updateCardProp('padding', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="card-padding-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Shadow: {cardProps.shadow}px
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={cardProps.shadow}
                onChange={(e) => updateCardProp('shadow', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="card-shadow-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Background Color
              </label>
              <ColorPicker
                value={cardProps.backgroundColor}
                onChange={handleCardColorChange}
                showVisualPicker={false}
                className="card-color-picker"
                data-testid="card-color-picker"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Border Width: {cardProps.borderWidth}px
              </label>
              <input
                type="range"
                min="0"
                max="8"
                value={cardProps.borderWidth}
                onChange={(e) => updateCardProp('borderWidth', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="card-border-width-slider"
              />
            </div>
          </div>

          {/* Button Controls */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Button Properties</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Border Radius: {buttonProps.borderRadius}px
              </label>
              <input
                type="range"
                min="0"
                max="24"
                value={buttonProps.borderRadius}
                onChange={(e) => updateButtonProp('borderRadius', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="button-border-radius-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Horizontal Padding: {buttonProps.paddingX}px
              </label>
              <input
                type="range"
                min="8"
                max="32"
                value={buttonProps.paddingX}
                onChange={(e) => updateButtonProp('paddingX', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="button-padding-x-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Vertical Padding: {buttonProps.paddingY}px
              </label>
              <input
                type="range"
                min="4"
                max="20"
                value={buttonProps.paddingY}
                onChange={(e) => updateButtonProp('paddingY', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="button-padding-y-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Font Size: {buttonProps.fontSize}px
              </label>
              <input
                type="range"
                min="10"
                max="20"
                value={buttonProps.fontSize}
                onChange={(e) => updateButtonProp('fontSize', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="button-font-size-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Background Color
              </label>
              <ColorPicker
                value={buttonProps.backgroundColor}
                onChange={handleButtonColorChange}
                showVisualPicker={false}
                className="button-color-picker"
                data-testid="button-color-picker"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Shadow: {buttonProps.shadow}px
              </label>
              <input
                type="range"
                min="0"
                max="12"
                value={buttonProps.shadow}
                onChange={(e) => updateButtonProp('shadow', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="button-shadow-slider"
              />
            </div>
          </div>

          {/* Text & Layout Controls */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Text & Layout</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Text Size: {textProps.fontSize}px
              </label>
              <input
                type="range"
                min="12"
                max="24"
                value={textProps.fontSize}
                onChange={(e) => updateTextProp('fontSize', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="text-font-size-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Heading Size: {textProps.headingSize}px
              </label>
              <input
                type="range"
                min="18"
                max="36"
                value={textProps.headingSize}
                onChange={(e) => updateTextProp('headingSize', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="heading-font-size-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Line Height: {textProps.lineHeight}
              </label>
              <input
                type="range"
                min="1.2"
                max="2.0"
                step="0.1"
                value={textProps.lineHeight}
                onChange={(e) => updateTextProp('lineHeight', parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="line-height-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Text Color
              </label>
              <ColorPicker
                value={textProps.color}
                onChange={handleTextColorChange}
                showVisualPicker={false}
                className="text-color-picker"
                data-testid="text-color-picker"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Container Padding: {layoutProps.containerPadding}px
              </label>
              <input
                type="range"
                min="16"
                max="64"
                value={layoutProps.containerPadding}
                onChange={(e) => updateLayoutProp('containerPadding', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="container-padding-slider"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Element Spacing: {layoutProps.spacing}px
              </label>
              <input
                type="range"
                min="8"
                max="32"
                value={layoutProps.spacing}
                onChange={(e) => updateLayoutProp('spacing', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                data-testid="element-spacing-slider"
              />
            </div>
          </div>
        </div>

        {/* Preset Buttons */}
        <div className="mt-8 pt-6 border-t">
          <h4 className="text-md font-medium text-gray-700 mb-3">Quick Presets</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setCardProps({
                  borderRadius: 8,
                  padding: 16,
                  shadow: 5,
                  backgroundColor: '#ffffff',
                  borderWidth: 1,
                  borderColor: '#e5e7eb'
                });
                setButtonProps({
                  borderRadius: 6,
                  paddingX: 16,
                  paddingY: 8,
                  fontSize: 14,
                  backgroundColor: '#3b82f6',
                  textColor: '#ffffff',
                  hoverColor: '#2563eb',
                  shadow: 2
                });
              }}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              data-testid="preset-default"
            >
              Default
            </button>
            <button
              onClick={() => {
                setCardProps({
                  borderRadius: 16,
                  padding: 24,
                  shadow: 12,
                  backgroundColor: '#f8fafc',
                  borderWidth: 0,
                  borderColor: '#e5e7eb'
                });
                setButtonProps({
                  borderRadius: 12,
                  paddingX: 24,
                  paddingY: 12,
                  fontSize: 16,
                  backgroundColor: '#8b5cf6',
                  textColor: '#ffffff',
                  hoverColor: '#7c3aed',
                  shadow: 6
                });
              }}
              className="px-3 py-2 text-sm bg-purple-100 hover:bg-purple-200 rounded-md transition-colors"
              data-testid="preset-modern"
            >
              Modern
            </button>
            <button
              onClick={() => {
                setCardProps({
                  borderRadius: 2,
                  padding: 20,
                  shadow: 0,
                  backgroundColor: '#ffffff',
                  borderWidth: 2,
                  borderColor: '#374151'
                });
                setButtonProps({
                  borderRadius: 0,
                  paddingX: 20,
                  paddingY: 10,
                  fontSize: 14,
                  backgroundColor: '#374151',
                  textColor: '#ffffff',
                  hoverColor: '#111827',
                  shadow: 0
                });
              }}
              className="px-3 py-2 text-sm bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors"
              data-testid="preset-minimal"
            >
              Minimal
            </button>
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
          <h3 className="text-lg font-medium text-gray-800">Live Interactive Preview</h3>
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
            cssContent={generatedCss}
            height="700px"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            className="w-full"
          />
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-xs text-blue-700">
            <strong>Interactive Preview:</strong> Use the sliders above to adjust card properties, button styling, 
            text appearance, and layout spacing in real-time. All changes are applied instantly to the preview.
          </p>
        </div>
      </div>
    </div>
  );
};