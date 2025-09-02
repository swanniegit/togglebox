import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  parseColorString,
  formatColorString,
  rgbToHsv,
  hsvToRgb,
  rgbToHsl,
  hslToRgb,
  hexToRgb,
  rgbToHex,
  getContrastRatio,
  meetsContrastStandard,
  isValidRgb,
  isValidHex
} from '../utils/colorUtils';
import './ColorPicker.css';
import ColorWheel from './ColorWheel';
import ChannelSliders from './ChannelSliders';
import PresetSwatches from './PresetSwatches';
import useColorModel from '../hooks/useColorModel';
import AccessibilityPanel from './AccessibilityPanel';

/**
 * ColorPicker - Professional color picker component with multiple input methods
 * 
 * Features:
 * - Multiple input modes (HEX, RGB, HSV)
 * - Visual color wheel and sliders
 * - Real-time color preview
 * - Accessibility features (contrast checking, WCAG compliance)
 * - Color format validation
 * - Preset color support
 * - Keyboard navigation
 */
export const ColorPicker = ({
  value = '#000000',
  onChange,
  onColorChange,
  property,
  backgroundColor,
  showVisualPicker = true,
  showSliders = true,
  presets = [],
  className = '',
  disabled = false
}) => {
  const [inputMode, setInputMode] = useState('HEX');
  const [error, setError] = useState('');
  const [currentColor, setCurrentColor] = useState(() => {
    const parsed = parseColorString(value);
    return parsed || { r: 0, g: 0, b: 0 };
  });
  const [inputValue, setInputValue] = useState(value);

  const colorWheelRef = useRef(null);
  const isDragging = useRef(false);

  // Parse and validate color value
  const parseColor = useCallback((colorValue) => {
    if (!colorValue || typeof colorValue !== 'string') {
      console.warn('ColorPicker: Invalid color value provided');
      return { r: 0, g: 0, b: 0 };
    }

    const parsed = parseColorString(colorValue);
    if (!parsed) {
      console.warn('ColorPicker: Could not parse color value:', colorValue);
      return { r: 0, g: 0, b: 0 };
    }

    return parsed;
  }, []);

  // Update current color when value prop changes
  useEffect(() => {
    const newColor = parseColor(value);
    setCurrentColor(newColor);
    setInputValue(value);
    setError('');
  }, [value, parseColor]);

  // Get current color in different formats
  const colorFormats = useColorModel(currentColor);

  // Calculate accessibility information
  const accessibilityInfo = useMemo(() => {
    if (!backgroundColor) return null;

    const bgColor = parseColorString(backgroundColor);
    if (!bgColor) return null;

    const contrastRatio = getContrastRatio(currentColor, bgColor);
    return {
      contrastRatio: contrastRatio.toFixed(2),
      wcagAA: meetsContrastStandard(contrastRatio, 'AA', 'normal'),
      wcagAALarge: meetsContrastStandard(contrastRatio, 'AA', 'large'),
      wcagAAA: meetsContrastStandard(contrastRatio, 'AAA', 'normal')
    };
  }, [currentColor, backgroundColor]);

  // Handle color change and validation
  const handleColorChange = useCallback((newColor, skipValidation = false) => {
    if (!skipValidation && !isValidRgb(newColor.r, newColor.g, newColor.b)) {
      setError('Invalid color values');
      return;
    }

    setCurrentColor(newColor);
    setError('');

    const hexValue = rgbToHex(newColor.r, newColor.g, newColor.b);
    setInputValue(hexValue);
    onChange?.(hexValue);
    onColorChange?.(newColor, property, hexValue);
  }, [onChange, onColorChange, property]);

  // Handle HEX input
  const handleHexInput = useCallback((hexValue) => {
    try {
      let cleanHex = hexValue.trim();
      
      // Remove # if present, we'll add it back
      if (cleanHex.startsWith('#')) {
        cleanHex = cleanHex.substring(1);
      }
      
      // Handle 3-character hex by expanding it
      if (cleanHex.length === 3) {
        cleanHex = cleanHex.split('').map(char => char + char).join('');
      }
      
      // Add # back
      cleanHex = '#' + cleanHex;

      if (!isValidHex(cleanHex)) {
        setError('Invalid HEX color format');
        return;
      }

      const rgb = hexToRgb(cleanHex);
      handleColorChange(rgb);
    } catch (err) {
      setError('Invalid HEX color');
    }
  }, [handleColorChange]);

  // Handle RGB input
  const handleRgbInput = useCallback((component, value) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 0 || numValue > 255) {
      setError(`${component} value must be between 0 and 255`);
      return;
    }

    const newColor = { ...currentColor, [component]: numValue };
    handleColorChange(newColor);
  }, [currentColor, handleColorChange]);

  // Handle HSV input
  const handleHsvInput = useCallback((component, value) => {
    const numValue = parseInt(value, 10);
    
    let isValid = false;
    if (component === 'h') {
      isValid = !isNaN(numValue) && numValue >= 0 && numValue <= 360;
      if (!isValid) setError('Hue must be between 0 and 360');
    } else {
      isValid = !isNaN(numValue) && numValue >= 0 && numValue <= 100;
      if (!isValid) setError(`${component === 's' ? 'Saturation' : 'Value'} must be between 0 and 100`);
    }

    if (!isValid) return;

    const currentHsv = colorFormats.hsv;
    const newHsv = { ...currentHsv, [component]: numValue };
    const rgb = hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
    handleColorChange(rgb);
  }, [colorFormats.hsv, handleColorChange]);

  // Handle visual color wheel interaction
  const handleColorWheelInteraction = useCallback((event) => {
    if (disabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = event.clientX - rect.left - centerX;
    const y = event.clientY - rect.top - centerY;

    const angle = Math.atan2(y, x);
    const distance = Math.min(Math.sqrt(x * x + y * y), centerX);

    const hue = ((angle * 180 / Math.PI) + 360) % 360;
    const saturation = Math.min((distance / centerX) * 100, 100);

    const currentHsv = colorFormats.hsv;
    const rgb = hsvToRgb(hue, saturation, currentHsv.v);
    handleColorChange(rgb);
  }, [disabled, colorFormats.hsv, handleColorChange]);

  // Handle lightness slider
  const handleLightnessChange = useCallback((value) => {
    if (disabled) return;

    const currentHsv = colorFormats.hsv;
    const rgb = hsvToRgb(currentHsv.h, currentHsv.s, parseInt(value, 10));
    handleColorChange(rgb);
  }, [disabled, colorFormats.hsv, handleColorChange]);

  // Handle slider changes for RGB/HSV
  const handleSliderChange = useCallback((component, value, mode) => {
    if (disabled) return;

    if (mode === 'RGB') {
      handleRgbInput(component.toLowerCase(), value);
    } else if (mode === 'HSV') {
      handleHsvInput(component.toLowerCase(), value);
    }
  }, [disabled, handleRgbInput, handleHsvInput]);

  // Handle preset color selection
  const handlePresetSelect = useCallback((presetColor) => {
    if (disabled) return;

    const rgb = parseColor(presetColor);
    handleColorChange(rgb, true);
  }, [disabled, parseColor, handleColorChange]);

  // Color wheel mouse/touch handlers
  const handleColorWheelMouseDown = useCallback((event) => {
    if (disabled) return;
    
    isDragging.current = true;
    handleColorWheelInteraction(event);
  }, [disabled, handleColorWheelInteraction]);

  const handleColorWheelMouseMove = useCallback((event) => {
    if (!isDragging.current || disabled) return;
    handleColorWheelInteraction(event);
  }, [disabled, handleColorWheelInteraction]);

  const handleColorWheelMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Keyboard handling for accessibility
  const handleKeyDown = useCallback((event) => {
    if (disabled) return;

    const { key } = event;
    const currentHsv = colorFormats.hsv;
    let newHsv = { ...currentHsv };

    switch (key) {
      case 'ArrowLeft':
        newHsv.h = (newHsv.h - 5 + 360) % 360;
        break;
      case 'ArrowRight':
        newHsv.h = (newHsv.h + 5) % 360;
        break;
      case 'ArrowUp':
        newHsv.s = Math.min(newHsv.s + 5, 100);
        break;
      case 'ArrowDown':
        newHsv.s = Math.max(newHsv.s - 5, 0);
        break;
      default:
        return;
    }

    event.preventDefault();
    const rgb = hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
    handleColorChange(rgb);
  }, [disabled, colorFormats.hsv, handleColorChange]);

  // Add global mouse event listeners for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (event) => handleColorWheelMouseMove(event);
    const handleGlobalMouseUp = () => handleColorWheelMouseUp();

    if (isDragging.current) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [handleColorWheelMouseMove, handleColorWheelMouseUp]);

  const renderInputMode = () => {
    switch (inputMode) {
      case 'HEX':
        return (
          <div className="color-input-group">
            <label htmlFor="hex-input" className="color-input-label">
              HEX
            </label>
            <input
              id="hex-input"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                handleHexInput(e.target.value);
              }}
              disabled={disabled}
              className="color-input"
              placeholder="#000000"
              maxLength={7}
            />
          </div>
        );

      case 'RGB':
        return (
          <ChannelSliders
            mode="RGB"
            values={currentColor}
            disabled={disabled}
            onNumber={(k, v) => handleRgbInput(k, v)}
            onSlider={handleSliderChange}
          />
        );

      case 'HSV':
        return (
          <ChannelSliders
            mode="HSV"
            values={colorFormats.hsv}
            disabled={disabled}
            onNumber={(k, v) => handleHsvInput(k, v)}
            onSlider={handleSliderChange}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className={`color-picker ${className} ${disabled ? 'color-picker-disabled' : ''}`}
      role="group"
      aria-label="Color picker"
    >
      <div className="color-picker-header">
        <div 
          className="color-preview"
          data-testid="color-preview"
          style={{ 
            backgroundColor: `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`,
            border: '2px solid #ddd',
            borderRadius: '4px',
            width: '60px',
            height: '40px',
            display: 'inline-block',
            marginRight: '12px'
          }}
          aria-label={`Current color: ${colorFormats.hex}`}
        />
        
        <div className="input-mode-tabs">
          {['HEX', 'RGB', 'HSV'].map((mode) => (
            <button
              key={mode}
              onClick={() => setInputMode(mode)}
              disabled={disabled}
              className={`input-mode-tab ${inputMode === mode ? 'active' : ''}`}
              aria-pressed={inputMode === mode}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="color-error" role="alert">
          {error}
        </div>
      )}

      <div className="color-picker-body">
        {showVisualPicker && (
          <ColorWheel
            hsv={colorFormats.hsv}
            disabled={disabled}
            onMouseDown={handleColorWheelMouseDown}
            onKeyDown={handleKeyDown}
            onLightnessChange={handleLightnessChange}
            wheelRef={colorWheelRef}
          />
        )}

        <div className="color-inputs">
          {renderInputMode()}
        </div>

        <PresetSwatches presets={presets} disabled={disabled} onSelect={handlePresetSelect} />

        <AccessibilityPanel info={accessibilityInfo} />
      </div>

    </div>
  );
};

export default ColorPicker;