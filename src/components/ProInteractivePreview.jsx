import React, { useState, useCallback, useMemo } from 'react';
import { IframePreview } from './IframePreview';
import { generateProHtmlContent } from '../utils/proHtmlContentGenerator';
import { ColorPicker } from './ColorPicker';

/**
 * ProInteractivePreview - Professional-grade interactive preview component
 * 
 * Features:
 * - 6 distinct card design options
 * - Comprehensive button system (Primary, Secondary, Delete, Submit, OK, Alert types)
 * - Professional gradient system with predefined options
 * - Advanced alert components with semantic colors
 * - Real-time preview with awesome UI controls
 */
export const ProInteractivePreview = ({ className = '' }) => {
  // Card design options (1-6)
  const [selectedCardDesign, setSelectedCardDesign] = useState(1);
  
  // Button system state
  const [buttonStyles, setButtonStyles] = useState({
    primary: { bg: '#3b82f6', hover: '#2563eb' },
    secondary: { bg: '#6b7280', hover: '#374151' },
    delete: { bg: '#ef4444', hover: '#dc2626' },
    submit: { bg: '#059669', hover: '#047857' },
    ok: { bg: '#10b981', hover: '#059669' },
  });

  // Alert system state
  const [alertStyles, setAlertStyles] = useState({
    error: { bg: '#fef2f2', border: '#fecaca', text: '#991b1b', icon: '🔥' },
    warning: { bg: '#fffbeb', border: '#fed7aa', text: '#92400e', icon: '⚠️' },
    message: { bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af', icon: '💬' },
    success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534', icon: '✅' }
  });

  // Gradient system state
  const [gradientOptions, setGradientOptions] = useState({
    selectedGradient: 'ocean',
    customStart: '#3b82f6',
    customEnd: '#8b5cf6',
    direction: 'to right'
  });

  // General styling controls
  const [generalStyles, setGeneralStyles] = useState({
    borderRadius: 8,
    spacing: 16,
    fontSize: 14,
    shadows: true,
    animations: true
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Predefined gradient options
  const predefinedGradients = {
    ocean: { start: '#0ea5e9', end: '#3b82f6', name: 'Ocean Blue' },
    sunset: { start: '#f59e0b', end: '#ef4444', name: 'Sunset Orange' },
    forest: { start: '#10b981', end: '#059669', name: 'Forest Green' },
    purple: { start: '#8b5cf6', end: '#a855f7', name: 'Purple Dream' },
    pink: { start: '#ec4899', end: '#be185d', name: 'Pink Passion' },
    dark: { start: '#374151', end: '#111827', name: 'Dark Mode' },
    rainbow: { start: '#f43f5e', end: '#8b5cf6', name: 'Rainbow' },
    gold: { start: '#fbbf24', end: '#f59e0b', name: 'Golden Hour' }
  };

  // Card design definitions
  const cardDesigns = {
    1: {
      name: 'Classic',
      style: {
        borderRadius: `${generalStyles.borderRadius}px`,
        padding: `${generalStyles.spacing}px`,
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
        boxShadow: generalStyles.shadows ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : 'none'
      }
    },
    2: {
      name: 'Modern',
      style: {
        borderRadius: `${generalStyles.borderRadius * 2}px`,
        padding: `${generalStyles.spacing * 1.5}px`,
        border: 'none',
        backgroundColor: '#f8fafc',
        boxShadow: generalStyles.shadows ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
      }
    },
    3: {
      name: 'Gradient',
      style: {
        borderRadius: `${generalStyles.borderRadius}px`,
        padding: `${generalStyles.spacing}px`,
        border: 'none',
        background: `linear-gradient(${gradientOptions.direction}, ${predefinedGradients[gradientOptions.selectedGradient].start}, ${predefinedGradients[gradientOptions.selectedGradient].end})`,
        color: '#ffffff',
        boxShadow: generalStyles.shadows ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }
    },
    4: {
      name: 'Outlined',
      style: {
        borderRadius: `${generalStyles.borderRadius}px`,
        padding: `${generalStyles.spacing}px`,
        border: '2px solid #3b82f6',
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    },
    5: {
      name: 'Glass',
      style: {
        borderRadius: `${generalStyles.borderRadius * 1.5}px`,
        padding: `${generalStyles.spacing}px`,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: generalStyles.shadows ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)' : 'none'
      }
    },
    6: {
      name: 'Neon',
      style: {
        borderRadius: `${generalStyles.borderRadius}px`,
        padding: `${generalStyles.spacing}px`,
        border: '1px solid #06d6a0',
        backgroundColor: '#001219',
        color: '#06d6a0',
        boxShadow: generalStyles.shadows ? '0 0 20px rgba(6, 214, 160, 0.3), inset 0 0 20px rgba(6, 214, 160, 0.1)' : 'none'
      }
    }
  };

  // Generate comprehensive CSS
  const generatedCss = useMemo(() => {
    const currentGradient = predefinedGradients[gradientOptions.selectedGradient];
    const cardStyle = cardDesigns[selectedCardDesign].style;
    
    return `
      /* Container Styles */
      .preview-template {
        padding: ${generalStyles.spacing * 1.5}px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        line-height: 1.5;
      }

      /* Card Designs */
      .preview-card {
        border-radius: ${cardStyle.borderRadius} !important;
        padding: ${cardStyle.padding} !important;
        border: ${cardStyle.border} !important;
        background: ${cardStyle.background || cardStyle.backgroundColor} !important;
        color: ${cardStyle.color || 'inherit'} !important;
        box-shadow: ${cardStyle.boxShadow} !important;
        margin-bottom: ${generalStyles.spacing}px !important;
        ${cardStyle.backdropFilter ? `backdrop-filter: ${cardStyle.backdropFilter} !important;` : ''}
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }

      .preview-card:hover {
        ${generalStyles.animations ? 'transform: translateY(-2px) !important;' : ''}
        ${generalStyles.shadows && selectedCardDesign !== 4 ? 'box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;' : ''}
      }

      /* Button System */
      .btn-primary {
        background: linear-gradient(135deg, ${buttonStyles.primary.bg}, ${buttonStyles.primary.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        font-size: ${generalStyles.fontSize}px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        ${generalStyles.animations ? 'transition: all 0.2s ease !important;' : ''}
        ${generalStyles.shadows ? 'box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3) !important;' : ''}
      }

      .btn-primary:hover {
        background: ${buttonStyles.primary.hover} !important;
        ${generalStyles.animations ? 'transform: translateY(-1px) !important;' : ''}
        ${generalStyles.shadows ? 'box-shadow: 0 6px 8px -1px rgba(59, 130, 246, 0.4) !important;' : ''}
      }

      .btn-secondary {
        background: linear-gradient(135deg, ${buttonStyles.secondary.bg}, ${buttonStyles.secondary.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        font-size: ${generalStyles.fontSize}px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        ${generalStyles.animations ? 'transition: all 0.2s ease !important;' : ''}
      }

      .btn-secondary:hover {
        background: ${buttonStyles.secondary.hover} !important;
        ${generalStyles.animations ? 'transform: translateY(-1px) !important;' : ''}
      }

      .btn-delete {
        background: linear-gradient(135deg, ${buttonStyles.delete.bg}, ${buttonStyles.delete.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 10px 20px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        font-size: ${generalStyles.fontSize - 1}px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        ${generalStyles.animations ? 'transition: all 0.2s ease !important;' : ''}
        ${generalStyles.shadows ? 'box-shadow: 0 2px 4px -1px rgba(239, 68, 68, 0.3) !important;' : ''}
      }

      .btn-delete:hover {
        background: ${buttonStyles.delete.hover} !important;
        ${generalStyles.animations ? 'transform: translateY(-1px) !important;' : ''}
      }

      .btn-submit {
        background: linear-gradient(135deg, ${buttonStyles.submit.bg}, ${buttonStyles.submit.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 14px 28px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        font-size: ${generalStyles.fontSize + 1}px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        ${generalStyles.animations ? 'transition: all 0.2s ease !important;' : ''}
        ${generalStyles.shadows ? 'box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.3) !important;' : ''}
      }

      .btn-submit:hover {
        background: ${buttonStyles.submit.hover} !important;
        ${generalStyles.animations ? 'transform: translateY(-1px) scale(1.02) !important;' : ''}
      }

      .btn-ok {
        background: linear-gradient(135deg, ${buttonStyles.ok.bg}, ${buttonStyles.ok.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 10px 24px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        font-size: ${generalStyles.fontSize}px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        ${generalStyles.animations ? 'transition: all 0.2s ease !important;' : ''}
      }

      .btn-ok:hover {
        background: ${buttonStyles.ok.hover} !important;
        ${generalStyles.animations ? 'transform: translateY(-1px) !important;' : ''}
      }

      /* Alert System */
      .alert-error {
        background: ${alertStyles.error.bg} !important;
        border: 1px solid ${alertStyles.error.border} !important;
        color: ${alertStyles.error.text} !important;
        padding: 16px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        margin: ${generalStyles.spacing}px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-warning {
        background: ${alertStyles.warning.bg} !important;
        border: 1px solid ${alertStyles.warning.border} !important;
        color: ${alertStyles.warning.text} !important;
        padding: 16px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        margin: ${generalStyles.spacing}px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-message {
        background: ${alertStyles.message.bg} !important;
        border: 1px solid ${alertStyles.message.border} !important;
        color: ${alertStyles.message.text} !important;
        padding: 16px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        margin: ${generalStyles.spacing}px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-success {
        background: ${alertStyles.success.bg} !important;
        border: 1px solid ${alertStyles.success.border} !important;
        color: ${alertStyles.success.text} !important;
        padding: 16px !important;
        border-radius: ${generalStyles.borderRadius}px !important;
        margin: ${generalStyles.spacing}px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      /* Text Styles */
      .preview-heading {
        font-size: ${generalStyles.fontSize + 10}px !important;
        font-weight: 700 !important;
        margin-bottom: ${generalStyles.spacing}px !important;
        line-height: 1.2 !important;
      }

      .preview-text {
        font-size: ${generalStyles.fontSize}px !important;
        line-height: 1.6 !important;
        margin-bottom: ${generalStyles.spacing}px !important;
      }

      /* Gradient Background Elements */
      .gradient-showcase {
        background: linear-gradient(${gradientOptions.direction}, ${currentGradient.start}, ${currentGradient.end}) !important;
        padding: ${generalStyles.spacing * 2}px !important;
        border-radius: ${generalStyles.borderRadius * 2}px !important;
        color: white !important;
        text-align: center !important;
        margin: ${generalStyles.spacing * 2}px 0 !important;
        ${generalStyles.shadows ? 'box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2) !important;' : ''}
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .preview-template {
          padding: ${generalStyles.spacing}px !important;
        }
        
        .btn-primary, .btn-secondary, .btn-submit {
          padding: 10px 20px !important;
          font-size: ${generalStyles.fontSize - 1}px !important;
        }
      }
    `;
  }, [selectedCardDesign, buttonStyles, alertStyles, gradientOptions, generalStyles, predefinedGradients, cardDesigns]);

  // Generate HTML content with all components
  const htmlContent = generateProHtmlContent(alertStyles);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setError(null);
  }, []);

  const handleIframeError = useCallback((errorEvent) => {
    setIsLoading(false);
    setError('Failed to load preview content');
    console.error('Preview iframe error:', errorEvent);
  }, []);

  // Update handlers
  const updateButtonStyle = (buttonType, property, value) => {
    setButtonStyles(prev => ({
      ...prev,
      [buttonType]: {
        ...prev[buttonType],
        [property]: value
      }
    }));
  };

  const updateGradientOption = (property, value) => {
    setGradientOptions(prev => ({
      ...prev,
      [property]: value
    }));
  };

  const updateGeneralStyle = (property, value) => {
    setGeneralStyles(prev => ({
      ...prev,
      [property]: value
    }));
  };

  return (
    <div className={`pro-interactive-preview ${className}`} data-testid="pro-interactive-preview">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">🎨 Professional Interactive Preview</h2>
        <p className="text-blue-100">
          Design beautiful components with professional-grade controls. Real-time preview with 6 card designs, semantic button system, and advanced styling options.
        </p>
      </div>

      {/* Main Controls Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
        
        {/* Card Design Selection */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            🎯 Card Designs
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(cardDesigns).map(([key, design]) => (
              <button
                key={key}
                onClick={() => setSelectedCardDesign(parseInt(key))}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  selectedCardDesign === parseInt(key)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
                data-testid={`card-design-${key}`}
              >
                <div className="font-semibold">{design.name}</div>
                <div className="text-xs mt-1 opacity-75">Style {key}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Button System Colors */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            🔘 Button Colors
          </h3>
          <div className="space-y-3">
            {Object.entries(buttonStyles).map(([type, style]) => (
              <div key={type} className="flex items-center justify-between">
                <span className="text-sm font-medium capitalize text-gray-700">{type}</span>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={style.bg}
                    onChange={(e) => updateButtonStyle(type, 'bg', e.target.value)}
                    className="w-8 h-8 rounded border cursor-pointer"
                    data-testid={`button-${type}-color`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient System */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            🌈 Gradients
          </h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(predefinedGradients).map(([key, gradient]) => (
                <button
                  key={key}
                  onClick={() => updateGradientOption('selectedGradient', key)}
                  className={`p-2 rounded text-xs font-medium text-white text-center transition-all ${
                    gradientOptions.selectedGradient === key ? 'ring-2 ring-white ring-offset-2' : ''
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${gradient.start}, ${gradient.end})`
                  }}
                  data-testid={`gradient-${key}`}
                >
                  {gradient.name}
                </button>
              ))}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Direction</label>
              <select
                value={gradientOptions.direction}
                onChange={(e) => updateGradientOption('direction', e.target.value)}
                className="w-full text-xs border border-gray-300 rounded px-2 py-1"
                data-testid="gradient-direction"
              >
                <option value="to right">→ Left to Right</option>
                <option value="to left">← Right to Left</option>
                <option value="to bottom">↓ Top to Bottom</option>
                <option value="to top">↑ Bottom to Top</option>
                <option value="135deg">↘ Diagonal</option>
                <option value="45deg">↗ Diagonal Alt</option>
              </select>
            </div>
          </div>
        </div>

        {/* General Controls */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            ⚙️ General Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Border Radius: {generalStyles.borderRadius}px
              </label>
              <input
                type="range"
                min="0"
                max="24"
                value={generalStyles.borderRadius}
                onChange={(e) => updateGeneralStyle('borderRadius', parseInt(e.target.value))}
                className="w-full"
                data-testid="general-border-radius"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Spacing: {generalStyles.spacing}px
              </label>
              <input
                type="range"
                min="8"
                max="32"
                value={generalStyles.spacing}
                onChange={(e) => updateGeneralStyle('spacing', parseInt(e.target.value))}
                className="w-full"
                data-testid="general-spacing"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Font Size: {generalStyles.fontSize}px
              </label>
              <input
                type="range"
                min="12"
                max="18"
                value={generalStyles.fontSize}
                onChange={(e) => updateGeneralStyle('fontSize', parseInt(e.target.value))}
                className="w-full"
                data-testid="general-font-size"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Shadows</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={generalStyles.shadows}
                  onChange={(e) => updateGeneralStyle('shadows', e.target.checked)}
                  className="sr-only peer"
                  data-testid="general-shadows"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Animations</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={generalStyles.animations}
                  onChange={(e) => updateGeneralStyle('animations', e.target.checked)}
                  className="sr-only peer"
                  data-testid="general-animations"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Style Presets */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          🎨 Quick Style Presets
        </h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              setSelectedCardDesign(1);
              setGeneralStyles(prev => ({ ...prev, borderRadius: 8, spacing: 16, fontSize: 14, shadows: true, animations: true }));
              setGradientOptions(prev => ({ ...prev, selectedGradient: 'ocean' }));
            }}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
            data-testid="preset-professional"
          >
            💼 Professional
          </button>
          <button
            onClick={() => {
              setSelectedCardDesign(3);
              setGeneralStyles(prev => ({ ...prev, borderRadius: 16, spacing: 24, fontSize: 15, shadows: true, animations: true }));
              setGradientOptions(prev => ({ ...prev, selectedGradient: 'sunset' }));
            }}
            className="px-4 py-2 bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium"
            data-testid="preset-vibrant"
          >
            ✨ Vibrant
          </button>
          <button
            onClick={() => {
              setSelectedCardDesign(5);
              setGeneralStyles(prev => ({ ...prev, borderRadius: 12, spacing: 20, fontSize: 14, shadows: true, animations: true }));
              setGradientOptions(prev => ({ ...prev, selectedGradient: 'purple' }));
            }}
            className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium"
            data-testid="preset-modern"
          >
            🔮 Modern Glass
          </button>
          <button
            onClick={() => {
              setSelectedCardDesign(6);
              setGeneralStyles(prev => ({ ...prev, borderRadius: 4, spacing: 16, fontSize: 13, shadows: true, animations: true }));
              setGradientOptions(prev => ({ ...prev, selectedGradient: 'dark' }));
            }}
            className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
            data-testid="preset-neon"
          >
            💚 Neon Dark
          </button>
          <button
            onClick={() => {
              setSelectedCardDesign(4);
              setGeneralStyles(prev => ({ ...prev, borderRadius: 2, spacing: 12, fontSize: 14, shadows: false, animations: false }));
            }}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            data-testid="preset-minimal"
          >
            ⚪ Minimal
          </button>
        </div>
      </div>

      {/* Preview Container */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            👀 Live Preview - {cardDesigns[selectedCardDesign].name} Cards
          </h3>
          {isLoading && (
            <div className="flex items-center text-sm text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
              Loading...
            </div>
          )}
        </div>
        
        <div className="border rounded-lg overflow-hidden bg-gray-50">
          <IframePreview
            htmlContent={htmlContent}
            cssContent={generatedCss}
            height="800px"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            className="w-full"
          />
        </div>
        
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>🚀 Professional Preview:</strong> This showcase includes {Object.keys(cardDesigns).length} card designs, 
            semantic button system (Primary, Secondary, Delete, Submit, OK), advanced alert components, 
            and {Object.keys(predefinedGradients).length} gradient options. All styles update in real-time with smooth animations.
          </p>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};