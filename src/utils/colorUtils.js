/**
 * Color Utility Functions for ToggleBox
 * 
 * Provides comprehensive color format conversion and validation utilities
 * Supports HSV, RGB, HEX, and HSL color formats with proper validation
 */

/**
 * Convert HSV to RGB
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} v - Value (0-100)
 * @returns {Object} RGB object {r, g, b} with values 0-255
 */
export const hsvToRgb = (h, s, v) => {
  if (!isValidHsv(h, s, v)) {
    throw new Error('Invalid HSV values');
  }

  h = h / 60;
  s = s / 100;
  v = v / 100;

  const c = v * s;
  const x = c * (1 - Math.abs((h % 2) - 1));
  const m = v - c;

  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 1) {
    r = c; g = x; b = 0;
  } else if (h >= 1 && h < 2) {
    r = x; g = c; b = 0;
  } else if (h >= 2 && h < 3) {
    r = 0; g = c; b = x;
  } else if (h >= 3 && h < 4) {
    r = 0; g = x; b = c;
  } else if (h >= 4 && h < 5) {
    r = x; g = 0; b = c;
  } else if (h >= 5 && h < 6) {
    r = c; g = 0; b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
};

/**
 * Convert RGB to HSV
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {Object} HSV object {h, s, v}
 */
export const rgbToHsv = (r, g, b) => {
  if (!isValidRgb(r, g, b)) {
    throw new Error('Invalid RGB values');
  }

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h = 0;
  if (diff !== 0) {
    if (max === r) {
      h = ((g - b) / diff) % 6;
    } else if (max === g) {
      h = (b - r) / diff + 2;
    } else {
      h = (r - g) / diff + 4;
    }
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  const s = max === 0 ? 0 : Math.round((diff / max) * 100);
  const v = Math.round(max * 100);

  return { h, s, v };
};

/**
 * Convert RGB to HEX
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {string} HEX color string (e.g., "#FF0000")
 */
export const rgbToHex = (r, g, b) => {
  if (!isValidRgb(r, g, b)) {
    throw new Error('Invalid RGB values');
  }

  const toHex = (n) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};

/**
 * Convert HEX to RGB
 * @param {string} hex - HEX color string (e.g., "#FF0000" or "FF0000")
 * @returns {Object} RGB object {r, g, b}
 */
export const hexToRgb = (hex) => {
  if (!isValidHex(hex)) {
    throw new Error('Invalid HEX color format');
  }

  // Remove # if present
  hex = hex.replace('#', '');

  // Handle 3-character hex codes
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
};

/**
 * Convert RGB to HSL
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {Object} HSL object {h, s, l}
 */
export const rgbToHsl = (r, g, b) => {
  if (!isValidRgb(r, g, b)) {
    throw new Error('Invalid RGB values');
  }

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

    if (max === r) {
      h = ((g - b) / diff) + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / diff + 2;
    } else {
      h = (r - g) / diff + 4;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
};

/**
 * Convert HSL to RGB
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} l - Lightness (0-100)
 * @returns {Object} RGB object {r, g, b}
 */
export const hslToRgb = (h, s, l) => {
  if (!isValidHsl(h, s, l)) {
    throw new Error('Invalid HSL values');
  }

  h /= 360;
  s /= 100;
  l /= 100;

  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};

/**
 * Calculate relative luminance of a color
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {number} Relative luminance (0-1)
 */
export const getRelativeLuminance = (r, g, b) => {
  if (!isValidRgb(r, g, b)) {
    throw new Error('Invalid RGB values');
  }

  const sRGB = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
};

/**
 * Calculate contrast ratio between two colors
 * @param {Object} color1 - RGB object {r, g, b}
 * @param {Object} color2 - RGB object {r, g, b}
 * @returns {number} Contrast ratio (1-21)
 */
export const getContrastRatio = (color1, color2) => {
  const l1 = getRelativeLuminance(color1.r, color1.g, color1.b);
  const l2 = getRelativeLuminance(color2.r, color2.g, color2.b);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Check if contrast meets WCAG standards
 * @param {number} contrastRatio - Contrast ratio
 * @param {string} level - WCAG level ('AA' or 'AAA')
 * @param {string} size - Text size ('normal' or 'large')
 * @returns {boolean} Whether contrast meets standards
 */
export const meetsContrastStandard = (contrastRatio, level = 'AA', size = 'normal') => {
  const standards = {
    AA: { normal: 4.5, large: 3 },
    AAA: { normal: 7, large: 4.5 }
  };

  const required = standards[level]?.[size];
  return required ? contrastRatio >= required : false;
};

/**
 * Validation functions
 */
export const isValidRgb = (r, g, b) => {
  return [r, g, b].every(val => 
    typeof val === 'number' && 
    val >= 0 && 
    val <= 255 && 
    Number.isInteger(val)
  );
};

export const isValidHsv = (h, s, v) => {
  return typeof h === 'number' && h >= 0 && h <= 360 &&
         typeof s === 'number' && s >= 0 && s <= 100 &&
         typeof v === 'number' && v >= 0 && v <= 100;
};

export const isValidHsl = (h, s, l) => {
  return typeof h === 'number' && h >= 0 && h <= 360 &&
         typeof s === 'number' && s >= 0 && s <= 100 &&
         typeof l === 'number' && l >= 0 && l <= 100;
};

export const isValidHex = (hex) => {
  if (typeof hex !== 'string') return false;
  
  const cleanHex = hex.replace('#', '');
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(cleanHex);
};

/**
 * Parse color string to RGB
 * @param {string} colorString - Color in any supported format
 * @returns {Object} RGB object {r, g, b} or null if invalid
 */
export const parseColorString = (colorString) => {
  if (typeof colorString !== 'string') return null;

  colorString = colorString.trim();

  // Try HEX format
  if (colorString.startsWith('#') || /^[0-9A-Fa-f]{3,6}$/.test(colorString)) {
    try {
      return hexToRgb(colorString);
    } catch {
      return null;
    }
  }

  // Try RGB format
  const rgbMatch = colorString.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
  if (rgbMatch) {
    const [, r, g, b] = rgbMatch.map(Number);
    return isValidRgb(r, g, b) ? { r, g, b } : null;
  }

  // Try HSL format
  const hslMatch = colorString.match(/hsl\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);
  if (hslMatch) {
    const [, h, s, l] = hslMatch.map(Number);
    try {
      return hslToRgb(h, s, l);
    } catch {
      return null;
    }
  }

  return null;
};

/**
 * Format RGB to CSS color string
 * @param {Object} rgb - RGB object {r, g, b}
 * @param {string} format - Output format ('hex', 'rgb', 'hsl')
 * @returns {string} Formatted color string
 */
export const formatColorString = (rgb, format = 'hex') => {
  if (!isValidRgb(rgb.r, rgb.g, rgb.b)) {
    throw new Error('Invalid RGB values');
  }

  switch (format.toLowerCase()) {
    case 'hex':
      return rgbToHex(rgb.r, rgb.g, rgb.b);
    case 'rgb':
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    case 'hsl': {
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};