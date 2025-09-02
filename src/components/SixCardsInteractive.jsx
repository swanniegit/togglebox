import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IframePreview } from './IframePreview';
import { generateSixCardsHtmlContent } from '../utils/sixCardsHtmlGenerator';
import { ColorPicker } from './ColorPicker';
import ColorSystemPreview from './ColorSystemPreview';
import ThemeSelector from './ThemeSelector';
import { consumeTransferButton, consumePickerThemeColor } from '../utils/storageBridge';
import { startPayfastCheckout, isPayfastReady } from '../utils/payfast';
import ExportActions from './ExportActions';
import CardEditor from './CardEditor';

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
  const [pickerBaseColor, setPickerBaseColor] = useState(null);
  const [paywallUnlocked, setPaywallUnlocked] = useState(false);
  const [showInlinePicker, setShowInlinePicker] = useState(false);

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

  // Helper: create theme from color picker base (must be declared before use)
  const generateFromPickerTheme = (baseOverride) => {
    const base = baseOverride || pickerBaseColor || '#3b82f6';
    const lighten = (hex, amount) => {
      const num = parseInt(hex.replace('#', ''), 16);
      const amt = Math.round(2.55 * amount);
      const R = Math.min(255, (num >> 16) + amt);
      const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
      const B = Math.min(255, (num & 0x0000FF) + amt);
      return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    };
    const hexToTint = (hex, amount) => lighten(hex, amount);
    const start = lighten(base, 0);
    const end = lighten(base, -20);
    return {
      start,
      end,
      name: 'From Color Picker',
      theme: {
        primary: base,
        secondary: lighten(base, -15),
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        cardTints: [
          hexToTint(base, 85),
          hexToTint(base, 70),
          hexToTint(base, 60),
          hexToTint(base, 50),
          hexToTint(base, 40),
          hexToTint(base, 30)
        ]
      }
    };
  };

  // Generate comprehensive CSS with 6 individual card classes
  const generatedCss = useMemo(() => {
    const currentGradient = gradientOptions.selectedGradient === 'custom'
      ? generateCustomTheme()
      : gradientOptions.selectedGradient === 'fromPicker'
        ? generateFromPickerTheme()
        : predefinedGradients[gradientOptions.selectedGradient];
    
    const hexToRgba = (hex, alpha = 1) => {
      const sanitized = hex.replace('#', '');
      const bigint = parseInt(sanitized, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const hexToTint = (hex, amount) => {
      const num = parseInt(hex.replace('#', ''), 16);
      const amt = Math.round(2.55 * amount);
      const R = Math.min(255, (num >> 16) + amt);
      const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
      const B = Math.min(255, (num & 0x0000FF) + amt);
      return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    };
    const hexToRgbInt = (hex) => {
      const sanitized = hex.replace('#', '');
      const bigint = parseInt(sanitized, 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };
    const toHex = (n) => n.toString(16).padStart(2, '0');
    const mixColors = (hex1, hex2, ratio = 0.5) => {
      const c1 = hexToRgbInt(hex1);
      const c2 = hexToRgbInt(hex2);
      const r = Math.round(c1.r * (1 - ratio) + c2.r * ratio);
      const g = Math.round(c1.g * (1 - ratio) + c2.g * ratio);
      const b = Math.round(c1.b * (1 - ratio) + c2.b * ratio);
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };
    const chooseTextColor = (hex) => {
      const sanitized = hex.replace('#', '');
      const bigint = parseInt(sanitized, 16);
      let r = (bigint >> 16) & 255;
      let g = (bigint >> 8) & 255;
      let b = bigint & 255;
      // sRGB to linear
      const srgbToLin = (c) => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      };
      const R = srgbToLin(r), G = srgbToLin(g), B = srgbToLin(b);
      const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
      // Slightly more aggressive threshold so mid-darks switch to light text
      return luminance > 0.55 ? '#111827' : '#ffffff';
    };
    
    const start = currentGradient.start;
    const end = currentGradient.end;
    const overlayAlpha = 0.35; // allow base card tints to remain distinct
    const gradientImage = gradientOptions.enableGradient
      ? `linear-gradient(${gradientOptions.direction}, ${hexToRgba(start, overlayAlpha)}, ${hexToRgba(end, overlayAlpha)})`
      : 'none';
    const textOnGradient = chooseTextColor(mixColors(start, end, 0.5));
    
    const themeName = gradientOptions.selectedGradient === 'fromPicker' && pickerBaseColor
      ? `Color Picker Base (${pickerBaseColor})`
      : gradientOptions.selectedGradient;

    return `
      /* ToggleBox Stylesheet - Theme: ${themeName} */
      /* Container Styles */
      .preview-template {
        padding: 24px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        line-height: 1.5;
      }

      /* Design Tokens derived from current theme */
      :root {
        --tb-primary: ${buttonStyles.primary.bg};
        --tb-primary-hover: ${buttonStyles.primary.hover};
        --tb-secondary: ${buttonStyles.secondary.bg};
        --tb-success: ${buttonStyles.ok.bg};
        --tb-warning: ${alertStyles.warning.border};
        --tb-danger: ${buttonStyles.delete.bg};
        --tb-neutral: #e5e7eb;
        --tb-grad-start: ${start};
        --tb-grad-end: ${end};
        --tb-text-dark: #111827;
        --tb-text: #374151;
        --tb-radius: 9999px;
      }

      /* Individual Card Styles - Export Ready */
      .card-1 {
        background-color: ${cards.card1.backgroundColor} !important;
        background-image: ${gradientImage} !important;
        color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card1.backgroundColor)} !important;
        border-radius: ${cards.card1.borderRadius}px !important;
        padding: ${cards.card1.padding}px !important;
        border: ${cards.card1.borderWidth}px solid ${cards.card1.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card1.shadow}px ${cards.card1.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }
      .card-1 * { color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card1.backgroundColor)} !important; }

      .card-2 {
        background-color: ${cards.card2.backgroundColor} !important;
        background-image: ${gradientImage} !important;
        color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card2.backgroundColor)} !important;
        border-radius: ${cards.card2.borderRadius}px !important;
        padding: ${cards.card2.padding}px !important;
        border: ${cards.card2.borderWidth}px solid ${cards.card2.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card2.shadow}px ${cards.card2.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }
      .card-2 * { color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card2.backgroundColor)} !important; }

      .card-3 {
        background-color: ${cards.card3.backgroundColor} !important;
        background-image: ${gradientImage} !important;
        color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card3.backgroundColor)} !important;
        border-radius: ${cards.card3.borderRadius}px !important;
        padding: ${cards.card3.padding}px !important;
        border: ${cards.card3.borderWidth}px solid ${cards.card3.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card3.shadow}px ${cards.card3.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }
      .card-3 * { color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card3.backgroundColor)} !important; }

      .card-4 {
        background-color: ${cards.card4.backgroundColor} !important;
        background-image: ${gradientImage} !important;
        color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card4.backgroundColor)} !important;
        border-radius: ${cards.card4.borderRadius}px !important;
        padding: ${cards.card4.padding}px !important;
        border: ${cards.card4.borderWidth}px solid ${cards.card4.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card4.shadow}px ${cards.card4.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }
      .card-4 * { color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card4.backgroundColor)} !important; }

      .card-5 {
        background-color: ${cards.card5.backgroundColor} !important;
        background-image: ${gradientImage} !important;
        color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card5.backgroundColor)} !important;
        border-radius: ${cards.card5.borderRadius}px !important;
        padding: ${cards.card5.padding}px !important;
        border: ${cards.card5.borderWidth}px solid ${cards.card5.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card5.shadow}px ${cards.card5.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }
      .card-5 * { color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card5.backgroundColor)} !important; }

      .card-6 {
        background-color: ${cards.card6.backgroundColor} !important;
        background-image: ${gradientImage} !important;
        color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card6.backgroundColor)} !important;
        border-radius: ${cards.card6.borderRadius}px !important;
        padding: ${cards.card6.padding}px !important;
        border: ${cards.card6.borderWidth}px solid ${cards.card6.borderColor} !important;
        box-shadow: ${generalStyles.shadows ? `0 ${cards.card6.shadow}px ${cards.card6.shadow * 2}px rgba(0, 0, 0, 0.1)` : 'none'} !important;
        margin-bottom: 16px !important;
        ${generalStyles.animations ? 'transition: all 0.3s ease !important;' : ''}
      }
      .card-6 * { color: ${gradientOptions.enableGradient ? textOnGradient : chooseTextColor(cards.card6.backgroundColor)} !important; }

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

      /* Badges */
      .badge { display:inline-flex; align-items:center; gap:6px; padding: 4px 10px; border-radius: 9999px; font-weight:600; font-size:12px; letter-spacing:.2px; }
      .badge-primary { background: var(--tb-primary); color: #fff; box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1); }
      .badge-success { background: var(--tb-success); color: #fff; box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1); }
      .badge-warning { background: var(--tb-warning); color: #fff; box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1); }
      .badge-danger { background: var(--tb-danger); color: #fff; box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1); }
      .badge-neutral { background: var(--tb-neutral); color: var(--tb-text); box-shadow: inset 0 -1px 0 rgba(0,0,0,.06); }

      /* Chips */
      .chip { display:inline-flex; align-items:center; padding: 6px 12px; border-radius: 9999px; font-weight:500; font-size:12px; }
      .chip-primary { background: rgba(59,130,246,.12); color: var(--tb-primary); border: 1px solid rgba(59,130,246,.25); }
      .chip-success { background: rgba(16,185,129,.12); color: var(--tb-success); border: 1px solid rgba(16,185,129,.25); }
      .chip-warning { background: rgba(245,158,11,.12); color: var(--tb-warning); border: 1px solid rgba(245,158,11,.25); }
      .chip-danger { background: rgba(239,68,68,.12); color: var(--tb-danger); border: 1px solid rgba(239,68,68,.25); }
      .chip-outline { background:#fff; color: var(--tb-primary); border: 1px solid var(--tb-primary); }

      /* Tabs */
      .tabs { display:flex; gap:16px; border-bottom: 1px solid #e5e7eb; }
      .tab { position:relative; padding: 8px 4px; color:#6b7280; font-weight:600; }
      .tab.active { color: var(--tb-primary); }
      .tab.active:after { content:''; position:absolute; left:0; right:0; bottom:-1px; height:2px; background: linear-gradient(90deg, var(--tb-grad-start), var(--tb-grad-end)); border-radius:2px; }

      /* Progress */
      .progress { width:100%; height:10px; border-radius:9999px; background:#e5e7eb; overflow:hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,.06); }
      .progress-bar { height:100%; background: linear-gradient(90deg, var(--tb-grad-start), var(--tb-grad-end)); box-shadow: 0 1px 2px rgba(0,0,0,.08); }

      /* Links */
      .link { color: var(--tb-primary); text-decoration:none; font-weight:500; }
      .link:hover { text-decoration:underline; }

      /* Avatars */
      .avatar { width:40px; height:40px; border-radius:9999px; box-shadow: 0 2px 6px rgba(0,0,0,.12), inset 0 -2px 6px rgba(255,255,255,.25); border:3px solid #fff; }
      .avatar-primary { background: var(--tb-primary); outline: 2px solid var(--tb-grad-end); }
      .avatar-success { background: var(--tb-success); outline: 2px solid var(--tb-primary); }
      .avatar-warning { background: var(--tb-warning); outline: 2px solid var(--tb-primary); }

      /* Breadcrumbs */
      .breadcrumbs a { color: var(--tb-primary); text-decoration:none; }
      .breadcrumbs .divider { color:#9ca3af; }
      .breadcrumbs .current { color:#6b7280; }

      /* Pagination */
      .pagination { display:flex; align-items:center; gap:8px; }
      .page { padding:8px 10px; border-radius:8px; border:1px solid #e5e7eb; background:#fff; }
      .page-active { background: var(--tb-primary); border-color: var(--tb-primary); color:#fff; box-shadow: 0 1px 2px rgba(0,0,0,.08); }

      /* Pills (for table statuses) */
      .pill { padding: 3px 8px; border-radius: 9999px; color:#fff; font-size:12px; font-weight:600; }
      .pill-success { background: var(--tb-success); }
      .pill-warning { background: var(--tb-warning); }
      .pill-danger { background: var(--tb-danger); }

      /* Table */
      .table thead tr { background: linear-gradient(90deg, var(--tb-grad-start), var(--tb-grad-end)); color:#fff; }
      .table tbody tr { background:#fff; }

      /* Toggles */
      .toggle { width:44px; height:24px; border-radius:9999px; position:relative; background:#e5e7eb; transition: background .2s ease; }
      .toggle .knob { position:absolute; top:2px; left:2px; width:20px; height:20px; background:#fff; border-radius:9999px; box-shadow:0 1px 2px rgba(0,0,0,.1); transition: transform .2s ease; }
      .toggle.on { background: var(--tb-primary); }
      .toggle.on .knob { transform: translateX(20px); }

      /* Toasts */
      .toast { display:flex; gap:10px; align-items:flex-start; padding:12px 14px; border-radius:10px; background:#fff; border:1px solid #e5e7eb; box-shadow: 0 4px 8px rgba(0,0,0,.06); }
      .toast .icon { width:24px; height:24px; border-radius:9999px; display:inline-flex; align-items:center; justify-content:center; color:#fff; font-size:12px; }
      .toast-success { border-left:4px solid var(--tb-success); }
      .toast-success .icon { background: var(--tb-success); }
      .toast-warning { border-left:4px solid var(--tb-warning); }
      .toast-warning .icon { background: var(--tb-warning); }
      .toast-danger { border-left:4px solid var(--tb-danger); }
      .toast-danger .icon { background: var(--tb-danger); }
      .toast-message { border-left:4px solid var(--tb-primary); }
      .toast-message .icon { background: var(--tb-primary); }

      /* Code block */
      .code-block { background:#0b1220; color:#e5e7eb; border-radius:12px; border:1px solid #0f172a; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; padding:14px 16px; overflow:auto; box-shadow: inset 0 1px 0 rgba(255,255,255,.04); }
      .code-block .k { color: var(--tb-warning); }
      .code-block .fn { color: var(--tb-success); }
      .code-block .p { color: #93c5fd; }
      .code-block .s { color: #f472b6; }
      .code-block .c { color:#64748b; }

      /* Mini bar chart */
      .chart { display:grid; gap:10px; }
      .bar { height:10px; background:#e5e7eb; border-radius:9999px; overflow:hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,.06); }
      .bar-fill { height:100%; background: linear-gradient(90deg, var(--tb-grad-start), var(--tb-grad-end)); border-radius:9999px; box-shadow: 0 1px 2px rgba(0,0,0,.08); }

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
  }, [cards, buttonStyles, alertStyles, gradientOptions, generalStyles, predefinedGradients, pickerBaseColor]);

  // Active gradient/theme for previews outside the iframe
  const activeGradient = gradientOptions.selectedGradient === 'custom'
    ? generateCustomTheme()
    : gradientOptions.selectedGradient === 'fromPicker'
      ? generateFromPickerTheme()
      : predefinedGradients[gradientOptions.selectedGradient];

  // Generate HTML content with all 6 cards
  const htmlContent = generateSixCardsHtmlContent(alertStyles, {
    primary: buttonStyles.primary.bg,
    primaryHover: buttonStyles.primary.hover,
    secondary: buttonStyles.secondary.bg,
    success: buttonStyles.ok.bg,
    warning: alertStyles.warning?.border,
    danger: buttonStyles.delete.bg,
    neutral: '#e5e7eb',
    start: activeGradient.start,
    end: activeGradient.end,
  });

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
  const applyGradientTheme = (gradientKey, opts = {}) => {
    const currentGradient = gradientKey === 'custom'
      ? generateCustomTheme()
      : gradientKey === 'fromPicker'
        ? generateFromPickerTheme(opts.base)
        : predefinedGradients[gradientKey];
    const theme = currentGradient.theme;
    
    // Update button styles based on gradient theme
    setButtonStyles({
      // Strong separation by default
      primary: { bg: theme.primary, hover: theme.secondary },            // brand
      secondary: { bg: '#6b7280', hover: '#374151' },                    // neutral gray
      delete: { bg: theme.danger, hover: '#dc2626' },                    // red
      submit: { bg: '#8b5cf6', hover: '#7c3aed' },                       // violet
      ok: { bg: '#22c55e', hover: '#16a34a' },                           // green
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

    // Update card colors based on gradient theme with fallback to generated tints
    const tints = theme.cardTints && theme.cardTints.length === 6
      ? theme.cardTints
      : [
          theme.primary,
          hexToTint(theme.primary, 85),
          hexToTint(theme.secondary || theme.primary, 70),
          hexToTint(theme.primary, 60),
          hexToTint(theme.secondary || theme.primary, 50),
          hexToTint(theme.primary, 40),
        ];
    setCards(prev => ({
      card1: { ...prev.card1, backgroundColor: tints[0], borderColor: theme.primary },
      card2: { ...prev.card2, backgroundColor: tints[1], borderColor: theme.secondary || theme.primary },
      card3: { ...prev.card3, backgroundColor: tints[2], borderColor: theme.primary },
      card4: { ...prev.card4, backgroundColor: tints[3], borderColor: theme.success || theme.primary },
      card5: { ...prev.card5, backgroundColor: tints[4], borderColor: theme.warning || theme.secondary || theme.primary },
      card6: { ...prev.card6, backgroundColor: tints[5], borderColor: theme.secondary || theme.primary }
    }));
  };

  // Apply initial gradient theme on component mount
  useEffect(() => {
    applyGradientTheme(gradientOptions.selectedGradient);
    // Intake color handed off from color picker demo (one-shot)
    const transfer = consumeTransferButton();
    if (transfer && transfer.type === 'button' && transfer.target && transfer.color) {
      updateButtonStyle(transfer.target, 'bg', transfer.color);
    }
    // Load base color from color picker, if provided (one-shot)
    const base = consumePickerThemeColor();
    if (base) setPickerBaseColor(base);
  }, []); // Only run once on mount

  // If using From Color Picker theme, re-apply when base color changes
  useEffect(() => {
    if (gradientOptions.selectedGradient === 'fromPicker' && pickerBaseColor) {
      applyGradientTheme('fromPicker', { base: pickerBaseColor });
    }
  }, [pickerBaseColor]);

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

  // Export demo index.html including all components; expects CSS file in same folder
  const exportDemoHtml = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ToggleBox Demo</title>
    <link rel="stylesheet" href="./six-cards-stylesheet.css" />
    <style>body{background:#f8fafc;padding:24px} .container{max-width:1200px;margin:0 auto}</style>
  </head>
  <body>
    <div class="container">
${generateSixCardsHtmlContent(alertStyles, {
  primary: buttonStyles.primary.bg,
  primaryHover: buttonStyles.primary.hover,
  secondary: buttonStyles.secondary.bg,
  success: buttonStyles.ok.bg,
  warning: alertStyles.warning?.border,
  danger: buttonStyles.delete.bg,
  neutral: '#e5e7eb',
  start: activeGradient.start,
  end: activeGradient.end,
})}
    </div>
  </body>
</html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Build and copy agent-safe integration instructions
  const copyAgentInstructions = async () => {
    const themeLabel = gradientOptions.selectedGradient === 'fromPicker' && pickerBaseColor
      ? `From Color Picker (${pickerBaseColor})`
      : predefinedGradients[gradientOptions.selectedGradient]?.name || 'Custom Theme';

    const instructions = `Integrate ToggleBox stylesheet (Theme: ${themeLabel}).

1) Add the CSS file to your project and include in the <head> of every page:
<link rel="stylesheet" href="/assets/css/six-cards-stylesheet.css" />

2) Use the provided utility classes without renaming:
   - Cards: .card-1 ... .card-6
   - Buttons: .btn-primary, .btn-secondary, .btn-submit, .btn-ok, .btn-delete
   - Alerts: .alert-error, .alert-warning, .alert-message, .alert-success

3) HTML example:
<div class="card-1"><h3>Title</h3><p class="preview-text">Content</p><button class="btn-primary">Action</button></div>

4) Guardrails for agents (do NOT proceed without asking the user):
   - Do not remove or rename any .card-* / .btn-* / .alert-* classes.
   - Do not change background-color or background-image on .card-* rules; both are required for solid/gradient compatibility.
   - Do not reduce color contrast or change text colors on cards/buttons to values that may break readability.
   - Do not delete border-radius, spacing, or box-shadow tokens from these classes.
   - If a design needs override, add new classes or wrappers; avoid editing the exported classes directly.
   - Before altering the stylesheet, explicitly ask: "Will this change reduce contrast, remove gradients, rename classes, or otherwise degrade the visual system?" If yes, stop and request confirmation.

5) Optional customization: create CSS variables on :root and map them to these classes; keep original declarations as fallbacks.
`;

    try {
      await navigator.clipboard.writeText(instructions);
      window.alert('Agent instructions copied to clipboard.');
    } catch (e) {
      console.error('Clipboard copy failed', e);
    }
  };

  const handleUnlock = () => {
    if (isPayfastReady()) {
      // Start PayFast with base $10; upsell for +$5 via a follow-up flow could be added
      startPayfastCheckout({ amount: 10.0, itemName: 'ToggleBox CSS Export', itemDescription: 'Unlock stylesheet export' });
      // After redirect back from PayFast you can mark unlocked via server ITN; for demo, keep confirm fallback too
    } else {
      // Fallback confirm flow until credentials/ITN are configured
      const confirmCss = window.confirm('Unlock CSS + Demo export for $10? Click Cancel to abort.');
      if (!confirmCss) return;
      const confirmAgent = window.confirm('Add AI Instructions unlock for +$5? Click OK to include, Cancel to skip.');
      setPaywallUnlocked(true);
      if (confirmAgent) {}
    }
  };

  const currentCard = cards[selectedCard];

  return (
    <div className={`six-cards-interactive ${className}`} data-testid="six-cards-interactive">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">🎨 Stylesheet Builder</h2>
            <p className="text-indigo-100">
              Build a cohesive stylesheet: define brand colors, buttons, cards, alerts, and form states.
              The 6 cards below are preview surfaces driven by your system colors.
            </p>
          </div>
          <ExportActions
            onExport={exportCSS}
            onExportHtml={exportDemoHtml}
            onCopyAgentInstructions={copyAgentInstructions}
            submitStyle={{ background: `linear-gradient(135deg, ${buttonStyles.submit.bg}, ${buttonStyles.submit.hover})` }}
            locked={!paywallUnlocked}
            onUnlock={handleUnlock}
          />
        </div>
      </div>

      

      {/* Master Theme Selection - Full Width */}
      <div className="mb-6">
        {/* Gradient System - Master Color Controller */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm border-2 border-blue-200">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center">
            🎨 Card Background Gradient & Themes
          </h3>
          <div className="mb-3 p-3 rounded-md bg-white/70 border border-blue-200 text-xs text-blue-900">
            These controls color the six cards below. Toggle gradient on/off and pick a theme or your custom color.
          </div>
          <p className="text-sm text-blue-700 mb-4 font-medium">
            Choose a gradient theme to set cohesive colors for all cards, buttons, and alerts. Then fine-tune individual components below!
          </p>
          <ThemeSelector
            presets={Object.fromEntries(Object.entries(predefinedGradients).filter(([k]) => k !== 'custom'))}
            selectedKey={gradientOptions.selectedGradient}
            onSelect={(key) => updateGradientOption('selectedGradient', key)}
            pickerBaseColor={pickerBaseColor}
            inlinePicker={{ onOpen: () => setShowInlinePicker(true) }}
          />
          
          
          {/* Removed legacy custom panel; color picker lives in the theme grid now */}

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

      {/* System-wide preview components bound to current theme */}
      <ColorSystemPreview
        theme={activeGradient.theme}
        buttonStyles={buttonStyles}
        alertStyles={alertStyles}
        currentGradient={activeGradient}
        onUpdateButtonStyle={updateButtonStyle}
      />

      {/* Inline Color Picker Modal */}
      {showInlinePicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowInlinePicker(false)} />
          <div className="relative bg-white rounded-lg shadow-xl border max-w-xl w-full p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">Pick a base color</h3>
              <button onClick={() => setShowInlinePicker(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <ColorPicker
              value={pickerBaseColor || '#3b82f6'}
              onChange={(hex) => {
                setPickerBaseColor(hex);
              }}
              onColorChange={(rgb, property, hex) => {
                setPickerBaseColor(hex);
              }}
              property={'backgroundColor'}
              backgroundColor={'#ffffff'}
              showVisualPicker={true}
              showSliders={true}
              presets={[ '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#0ea5e9', '#111827', '#e5e7eb' ]}
            />
            <div className="mt-4 flex items-center justify-end gap-2">
              <button className="px-4 py-2 rounded border" onClick={() => setShowInlinePicker(false)}>Cancel</button>
              <button
                className="px-4 py-2 rounded text-white"
                style={{ background: `linear-gradient(135deg, ${buttonStyles.submit.bg}, ${buttonStyles.submit.hover})` }}
                onClick={() => {
                  applyGradientTheme('fromPicker', { base: pickerBaseColor });
                  setGradientOptions(prev => ({ ...prev, selectedGradient: 'fromPicker' }));
                  setShowInlinePicker(false);
                }}
              >
                Use this color
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Controls Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        
        {/* Card Selection & Individual Controls */}
        <div className="xl:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">🎯 Individual Card Controls</h3>
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
          <CardEditor
            selectedCard={selectedCard}
            card={currentCard}
            update={(prop, val) => updateCardProperty(selectedCard, prop, val)}
          />
        </div>

        {/* Buttons & Gradients */}
        <div className="space-y-6">
          {/* Button System Colors merged into ColorSystemPreview via controls */}


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
            allowScripts={false}
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