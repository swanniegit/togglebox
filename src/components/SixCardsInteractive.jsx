import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { IframePreview } from './IframePreview';
import { generateSixCardsHtmlContent } from '../utils/sixCardsHtmlGenerator';
import { ColorPicker } from './ColorPicker';

/**
 * SixCardsInteractive - Individual customizable cards system
 * 
 * Features:
 * - 6 individual cards (Card 1, Card 2, Card 3, Card 4, Card 5, Card 6)
 * - Each card has independent styling controls
 * - Export functionality generates CSS with 6 distinct classes
 * - Professional button system and alerts
 * - Gradient system with predefined options
 */
export const SixCardsInteractive = ({ className = '' }) => {
  // Individual card states - each card can be customized independently
  const [cards, setCards] = useState({
    card1: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 16,
      shadow: 2,
      borderWidth: 1,
      borderColor: '#e5e7eb'
    },
    card2: {
      backgroundColor: '#f8fafc',
      borderRadius: 12,
      padding: 20,
      shadow: 4,
      borderWidth: 0,
      borderColor: '#e5e7eb'
    },
    card3: {
      backgroundColor: '#eff6ff',
      borderRadius: 16,
      padding: 24,
      shadow: 6,
      borderWidth: 2,
      borderColor: '#3b82f6'
    },
    card4: {
      backgroundColor: '#f0fdf4',
      borderRadius: 8,
      padding: 18,
      shadow: 3,
      borderWidth: 1,
      borderColor: '#10b981'
    },
    card5: {
      backgroundColor: '#fef2f2',
      borderRadius: 10,
      padding: 22,
      shadow: 5,
      borderWidth: 2,
      borderColor: '#ef4444'
    },
    card6: {
      backgroundColor: '#faf5ff',
      borderRadius: 14,
      padding: 20,
      shadow: 4,
      borderWidth: 1,
      borderColor: '#8b5cf6'
    }
  });

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
    direction: 'to right',
    enableGradient: true,
    customColors: {
      color1: '#3b82f6',
      color2: '#8b5cf6', 
      color3: '#ec4899',
      color4: '#f59e0b'
    }
  });

  // General styling controls
  const [generalStyles, setGeneralStyles] = useState({
    fontSize: 14,
    shadows: true,
    animations: true
  });

  const [selectedCard, setSelectedCard] = useState('card1');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Predefined gradient options with comprehensive color themes
  const predefinedGradients = {
    ocean: { 
      start: '#0ea5e9', 
      end: '#3b82f6', 
      name: 'Ocean Blue',
      theme: {
        primary: '#3b82f6',
        secondary: '#0ea5e9', 
        success: '#06b6d4',
        warning: '#f59e0b',
        danger: '#ef4444',
        cardTints: ['#f0f9ff', '#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa']
      }
    },
    sunset: { 
      start: '#f59e0b', 
      end: '#ef4444', 
      name: 'Sunset Orange',
      theme: {
        primary: '#f59e0b',
        secondary: '#ef4444',
        success: '#10b981',
        warning: '#fbbf24',
        danger: '#dc2626',
        cardTints: ['#fefbeb', '#fef3c7', '#fed7aa', '#fdba74', '#fb923c', '#f97316']
      }
    },
    forest: { 
      start: '#10b981', 
      end: '#059669', 
      name: 'Forest Green',
      theme: {
        primary: '#10b981',
        secondary: '#059669',
        success: '#06d6a0',
        warning: '#f59e0b',
        danger: '#ef4444',
        cardTints: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e']
      }
    },
    purple: { 
      start: '#8b5cf6', 
      end: '#a855f7', 
      name: 'Purple Dream',
      theme: {
        primary: '#8b5cf6',
        secondary: '#a855f7',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        cardTints: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7']
      }
    },
    pink: { 
      start: '#ec4899', 
      end: '#be185d', 
      name: 'Pink Passion',
      theme: {
        primary: '#ec4899',
        secondary: '#be185d',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#dc2626',
        cardTints: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899']
      }
    },
    dark: { 
      start: '#374151', 
      end: '#111827', 
      name: 'Dark Mode',
      theme: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        cardTints: ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280']
      }
    },
    rainbow: { 
      start: '#f43f5e', 
      end: '#8b5cf6', 
      name: 'Rainbow',
      theme: {
        primary: '#f43f5e',
        secondary: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        cardTints: ['#fdf2f8', '#fce7f3', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc']
      }
    },
    gold: { 
      start: '#fbbf24', 
      end: '#f59e0b', 
      name: 'Golden Hour',
      theme: {
        primary: '#f59e0b',
        secondary: '#fbbf24',
        success: '#10b981',
        warning: '#d97706',
        danger: '#ef4444',
        cardTints: ['#fffbeb', '#fef3c7', '#fed7aa', '#fdba74', '#fb923c', '#f97316']
      }
    },
    custom: {
      start: '#3b82f6',
      end: '#ec4899',
      name: 'Custom',
      theme: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        cardTints: ['#f0f9ff', '#e0e7ff', '#fdf2f8', '#fef3c7', '#fed7aa', '#fdba74']
      }
    }
  };

  // Generate custom theme based on user's 4 colors
  const generateCustomTheme = () => {
    const { color1, color2, color3, color4 } = gradientOptions.customColors;
    
    // Create lighter tints for cards by mixing with white
    const lighten = (color, amount) => {
      const num = parseInt(color.replace("#", ""), 16);
      const amt = Math.round(2.55 * amount);
      const R = Math.min(255, (num >> 16) + amt);
      const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
      const B = Math.min(255, (num & 0x0000FF) + amt);
      return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    };

    return {
      start: color1,
      end: color3,
      name: 'Custom Rainbow',
      theme: {
        primary: color1,
        secondary: color2,
        success: color3,
        warning: color4,
        danger: color3,
        cardTints: [
          lighten(color1, 85), // Very light
          lighten(color2, 70), // Light
          lighten(color3, 85), // Very light
          lighten(color4, 70), // Light  
          lighten(color1, 40), // Medium
          lighten(color2, 25)  // Darker
        ]
      }
    };
  };

  // Generate comprehensive CSS with 6 individual card classes
  const generatedCss = useMemo(() => {
    const currentGradient = gradientOptions.selectedGradient === 'custom' 
      ? generateCustomTheme() 
      : predefinedGradients[gradientOptions.selectedGradient];
    
    return `
      /* Container Styles */
      .preview-template {
        padding: 24px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        line-height: 1.5;
      }

      /* Individual Card Styles - Export Ready */
      .card-1 {
        background-color: ${cards.card1.backgroundColor} !important;
        border-radius: ${cards.card1.borderRadius}px !important;
        padding: ${cards.card1.padding}px !important;
        border: ${cards.card1.borderWidth}px solid ${cards.card1.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card1.shadow}px ${cards.card1.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }

      .card-2 {
        background-color: ${cards.card2.backgroundColor} !important;
        border-radius: ${cards.card2.borderRadius}px !important;
        padding: ${cards.card2.padding}px !important;
        border: ${cards.card2.borderWidth}px solid ${cards.card2.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card2.shadow}px ${cards.card2.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }

      .card-3 {
        background-color: ${cards.card3.backgroundColor} !important;
        border-radius: ${cards.card3.borderRadius}px !important;
        padding: ${cards.card3.padding}px !important;
        border: ${cards.card3.borderWidth}px solid ${cards.card3.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card3.shadow}px ${cards.card3.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }

      .card-4 {
        background-color: ${cards.card4.backgroundColor} !important;
        border-radius: ${cards.card4.borderRadius}px !important;
        padding: ${cards.card4.padding}px !important;
        border: ${cards.card4.borderWidth}px solid ${cards.card4.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card4.shadow}px ${cards.card4.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }

      .card-5 {
        background-color: ${cards.card5.backgroundColor} !important;
        border-radius: ${cards.card5.borderRadius}px !important;
        padding: ${cards.card5.padding}px !important;
        border: ${cards.card5.borderWidth}px solid ${cards.card5.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card5.shadow}px ${cards.card5.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }

      .card-6 {
        background-color: ${cards.card6.backgroundColor} !important;
        border-radius: ${cards.card6.borderRadius}px !important;
        padding: ${cards.card6.padding}px !important;
        border: ${cards.card6.borderWidth}px solid ${cards.card6.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card6.shadow}px ${cards.card6.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }

      /* Hover effects for all cards */
      .card-1:hover, .card-2:hover, .card-3:hover, .card-4:hover, .card-5:hover, .card-6:hover {
        ${generalStyles.animations ? 'transform: translateY(-2px) !important;' : ''}
        ${generalStyles.shadows ? 'box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;' : ''}
      }

      /* Button System */
      .btn-primary {
        background: linear-gradient(135deg, ${buttonStyles.primary.bg}, ${buttonStyles.primary.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: 8px !important;
        font-size: ${generalStyles.fontSize}px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        ${generalStyles.animations ? 'transition: all 0.2s ease !important;' : ''}
      }

      .btn-primary:hover {
        background: ${buttonStyles.primary.hover} !important;
        ${generalStyles.animations ? 'transform: translateY(-1px) !important;' : ''}
      }

      .btn-secondary {
        background: linear-gradient(135deg, ${buttonStyles.secondary.bg}, ${buttonStyles.secondary.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: 8px !important;
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
        border-radius: 8px !important;
        font-size: ${generalStyles.fontSize - 1}px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        ${generalStyles.animations ? 'transition: all 0.2s ease !important;' : ''}
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
        border-radius: 8px !important;
        font-size: ${generalStyles.fontSize + 1}px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        ${generalStyles.animations ? 'transition: all 0.2s ease !important;' : ''}
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
        border-radius: 8px !important;
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
        border-radius: 8px !important;
        margin: 16px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-warning {
        background: ${alertStyles.warning.bg} !important;
        border: 1px solid ${alertStyles.warning.border} !important;
        color: ${alertStyles.warning.text} !important;
        padding: 16px !important;
        border-radius: 8px !important;
        margin: 16px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-message {
        background: ${alertStyles.message.bg} !important;
        border: 1px solid ${alertStyles.message.border} !important;
        color: ${alertStyles.message.text} !important;
        padding: 16px !important;
        border-radius: 8px !important;
        margin: 16px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-success {
        background: ${alertStyles.success.bg} !important;
        border: 1px solid ${alertStyles.success.border} !important;
        color: ${alertStyles.success.text} !important;
        padding: 16px !important;
        border-radius: 8px !important;
        margin: 16px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      /* Gradient Background Elements */
      .gradient-showcase {
        background: ${gradientOptions.enableGradient 
          ? `linear-gradient(${gradientOptions.direction}, ${currentGradient.start}, ${currentGradient.end})` 
          : currentGradient.start
        } !important;
        padding: 32px !important;
        border-radius: 16px !important;
        color: white !important;
        text-align: center !important;
        margin: 32px 0 !important;
        ${generalStyles.shadows ? 'box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2) !important;' : ''}
      }

      /* Text Styles */
      .preview-heading {
        font-size: ${generalStyles.fontSize + 10}px !important;
        font-weight: 700 !important;
        margin-bottom: 16px !important;
        line-height: 1.2 !important;
      }

      .preview-text {
        font-size: ${generalStyles.fontSize}px !important;
        line-height: 1.6 !important;
        margin-bottom: 16px !important;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .preview-template {
          padding: 16px !important;
        }
        
        .card-1, .card-2, .card-3, .card-4, .card-5, .card-6 {
          padding: 16px !important;
        }
        
        .btn-primary, .btn-secondary, .btn-submit {
          padding: 10px 20px !important;
          font-size: ${generalStyles.fontSize - 1}px !important;
        }
      }
    `;
  }, [cards, buttonStyles, alertStyles, gradientOptions, generalStyles, predefinedGradients]);

  // Generate HTML content with all 6 cards
  const htmlContent = generateSixCardsHtmlContent(alertStyles);

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
  const updateCardProperty = (cardId, property, value) => {
    setCards(prev => ({
      ...prev,
      [cardId]: {
        ...prev[cardId],
        [property]: value
      }
    }));
  };

  const updateButtonStyle = (buttonType, property, value) => {
    setButtonStyles(prev => ({
      ...prev,
      [buttonType]: {
        ...prev[buttonType],
        [property]: value
      }
    }));
  };

  // Apply gradient theme to all components for cohesive design
  const applyGradientTheme = (gradientKey) => {
    const currentGradient = gradientKey === 'custom' 
      ? generateCustomTheme() 
      : predefinedGradients[gradientKey];
    const theme = currentGradient.theme;
    
    // Update button styles based on gradient theme
    setButtonStyles({
      primary: { bg: theme.primary, hover: theme.secondary },
      secondary: { bg: theme.secondary, hover: theme.primary },
      delete: { bg: theme.danger, hover: '#dc2626' },
      submit: { bg: theme.success, hover: '#047857' },
      ok: { bg: theme.success, hover: theme.primary },
    });

    // Update alert styles based on gradient theme
    setAlertStyles({
      error: { 
        bg: '#fef2f2', 
        border: theme.danger, 
        text: '#991b1b', 
        icon: '🔥' 
      },
      warning: { 
        bg: '#fffbeb', 
        border: theme.warning, 
        text: '#92400e', 
        icon: '⚠️' 
      },
      message: { 
        bg: theme.cardTints[0], 
        border: theme.primary, 
        text: '#1e40af', 
        icon: '💬' 
      },
      success: { 
        bg: '#f0fdf4', 
        border: theme.success, 
        text: '#166534', 
        icon: '✅' 
      }
    });

    // Update card colors based on gradient theme
    setCards(prev => ({
      card1: { ...prev.card1, backgroundColor: theme.cardTints[0], borderColor: theme.primary },
      card2: { ...prev.card2, backgroundColor: theme.cardTints[1], borderColor: theme.secondary },
      card3: { ...prev.card3, backgroundColor: theme.cardTints[2], borderColor: theme.primary },
      card4: { ...prev.card4, backgroundColor: theme.cardTints[3], borderColor: theme.success },
      card5: { ...prev.card5, backgroundColor: theme.cardTints[4], borderColor: theme.warning },
      card6: { ...prev.card6, backgroundColor: theme.cardTints[5], borderColor: theme.secondary }
    }));
  };

  // Apply initial gradient theme on component mount
  useEffect(() => {
    applyGradientTheme(gradientOptions.selectedGradient);
  }, []); // Only run once on mount

  const updateGradientOption = (property, value) => {
    setGradientOptions(prev => ({
      ...prev,
      [property]: value
    }));
    
    // If changing the gradient selection, apply the theme to all components
    if (property === 'selectedGradient') {
      applyGradientTheme(value);
    }
  };

  const updateCustomColor = (colorKey, value) => {
    setGradientOptions(prev => ({
      ...prev,
      customColors: {
        ...prev.customColors,
        [colorKey]: value
      }
    }));
    
    // If custom gradient is selected, reapply the theme with new colors
    if (gradientOptions.selectedGradient === 'custom') {
      // Small delay to ensure state is updated
      setTimeout(() => applyGradientTheme('custom'), 10);
    }
  };

  const updateGeneralStyle = (property, value) => {
    setGeneralStyles(prev => ({
      ...prev,
      [property]: value
    }));
  };

  // Export CSS functionality
  const exportCSS = () => {
    const blob = new Blob([generatedCss], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'six-cards-stylesheet.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentCard = cards[selectedCard];

  return (
    <div className={`six-cards-interactive ${className}`} data-testid="six-cards-interactive">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">🃏 Six Cards Interactive Studio</h2>
        <p className="text-indigo-100">
          Customize 6 individual cards with independent styling. Export your stylesheet with .card-1 through .card-6 classes ready to use in your projects.
        </p>
      </div>

      {/* Master Theme Selection - Full Width */}
      <div className="mb-6">
        {/* Gradient System - Master Color Controller */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm border-2 border-blue-200">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
            🎨 Master Color Themes
          </h3>
          <p className="text-sm text-blue-700 mb-4 font-medium">
            Choose a gradient theme to set cohesive colors for all cards, buttons, and alerts. Then fine-tune individual components below!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4">
            {Object.entries(predefinedGradients).map(([key, gradient]) => (
              <button
                key={key}
                onClick={() => updateGradientOption('selectedGradient', key)}
                className={`p-3 rounded text-xs font-medium text-white text-center transition-all ${
                  gradientOptions.selectedGradient === key ? 'ring-4 ring-white ring-offset-2 transform scale-105' : 'hover:scale-105'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${gradient.start}, ${gradient.end})`
                }}
                data-testid={`gradient-${key}`}
                title={`${gradient.name} Theme`}
              >
                {gradient.name}
              </button>
            ))}
          </div>
          
          {/* Custom Color Picker Section */}
          <div className="bg-white/70 p-4 rounded-lg border-2 border-dashed border-blue-300 mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              🎨 Create Your Own Rainbow
            </h4>
            <p className="text-xs text-gray-600 mb-3">
              Pick 4 colors to create your custom theme. Click "Custom" above to apply it!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              {Object.entries(gradientOptions.customColors).map(([key, color], index) => (
                <div key={key} className="text-center">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Color {index + 1}
                  </label>
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => updateCustomColor(key, e.target.value)}
                    className="w-full h-10 rounded border cursor-pointer"
                    data-testid={`custom-${key}`}
                    title={`Custom Color ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => updateGradientOption('selectedGradient', 'custom')}
              className={`w-full py-2 px-4 text-sm font-medium rounded transition-all ${
                gradientOptions.selectedGradient === 'custom'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
              data-testid="apply-custom-theme"
            >
              {gradientOptions.selectedGradient === 'custom' ? '✓ Custom Theme Active' : 'Apply Custom Theme'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Gradient Direction</label>
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
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Gradient Effect</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateGradientOption('enableGradient', true)}
                  className={`px-3 py-2 text-xs font-medium rounded transition-all ${
                    gradientOptions.enableGradient
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  data-testid="gradient-enable"
                >
                  Yes
                </button>
                <button
                  onClick={() => updateGradientOption('enableGradient', false)}
                  className={`px-3 py-2 text-xs font-medium rounded transition-all ${
                    !gradientOptions.enableGradient
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  data-testid="gradient-disable"
                >
                  No
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {gradientOptions.enableGradient ? 'Smooth gradient backgrounds' : 'Solid color backgrounds'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Controls Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        
        {/* Card Selection & Individual Controls */}
        <div className="xl:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              🎯 Individual Card Controls
            </h3>
            <button
              onClick={exportCSS}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
              data-testid="export-css-button"
            >
              📥 Export CSS
            </button>
          </div>

          {/* Card Selector */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {Object.keys(cards).map((cardId, index) => (
              <button
                key={cardId}
                onClick={() => setSelectedCard(cardId)}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  selectedCard === cardId
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
                style={{ backgroundColor: selectedCard === cardId ? undefined : cards[cardId].backgroundColor }}
                data-testid={`select-${cardId}`}
              >
                Card {index + 1}
              </button>
            ))}
          </div>

          {/* Current Card Controls */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-4">
              Editing: Card {selectedCard.slice(-1)} (.{selectedCard.replace('card', 'card-')})
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Background Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={currentCard.backgroundColor}
                    onChange={(e) => updateCardProperty(selectedCard, 'backgroundColor', e.target.value)}
                    className="w-12 h-8 rounded border cursor-pointer"
                    data-testid={`${selectedCard}-bg-color`}
                  />
                  <input
                    type="text"
                    value={currentCard.backgroundColor}
                    onChange={(e) => updateCardProperty(selectedCard, 'backgroundColor', e.target.value)}
                    className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                    data-testid={`${selectedCard}-bg-text`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Border Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={currentCard.borderColor}
                    onChange={(e) => updateCardProperty(selectedCard, 'borderColor', e.target.value)}
                    className="w-12 h-8 rounded border cursor-pointer"
                    data-testid={`${selectedCard}-border-color`}
                  />
                  <input
                    type="text"
                    value={currentCard.borderColor}
                    onChange={(e) => updateCardProperty(selectedCard, 'borderColor', e.target.value)}
                    className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                    data-testid={`${selectedCard}-border-text`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Border Radius: {currentCard.borderRadius}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={currentCard.borderRadius}
                  onChange={(e) => updateCardProperty(selectedCard, 'borderRadius', parseInt(e.target.value))}
                  className="w-full"
                  data-testid={`${selectedCard}-border-radius`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Padding: {currentCard.padding}px
                </label>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={currentCard.padding}
                  onChange={(e) => updateCardProperty(selectedCard, 'padding', parseInt(e.target.value))}
                  className="w-full"
                  data-testid={`${selectedCard}-padding`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Shadow: {currentCard.shadow}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={currentCard.shadow}
                  onChange={(e) => updateCardProperty(selectedCard, 'shadow', parseInt(e.target.value))}
                  className="w-full"
                  data-testid={`${selectedCard}-shadow`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Border Width: {currentCard.borderWidth}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="4"
                  value={currentCard.borderWidth}
                  onChange={(e) => updateCardProperty(selectedCard, 'borderWidth', parseInt(e.target.value))}
                  className="w-full"
                  data-testid={`${selectedCard}-border-width`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons & Gradients */}
        <div className="space-y-6">
          {/* Button System Colors */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
              🔘 Button Colors
            </h3>
            <div className="space-y-3">
              {Object.entries(buttonStyles).map(([type, style]) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-sm font-medium capitalize text-gray-700">{type}</span>
                  <input
                    type="color"
                    value={style.bg}
                    onChange={(e) => updateButtonStyle(type, 'bg', e.target.value)}
                    className="w-8 h-8 rounded border cursor-pointer"
                    data-testid={`button-${type}-color`}
                  />
                </div>
              ))}
            </div>
          </div>


          {/* General Settings */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
              ⚙️ General Settings
            </h3>
            <div className="space-y-4">
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
      </div>

      {/* Preview Container */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            👀 Live Preview - All 6 Cards
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
        
        <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
          <p className="text-sm text-indigo-700">
            <strong>🎯 Export Ready:</strong> Your CSS includes 6 individual card classes (.card-1, .card-2, .card-3, .card-4, .card-5, .card-6) 
            plus complete button system and alert components. Perfect for any project!
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