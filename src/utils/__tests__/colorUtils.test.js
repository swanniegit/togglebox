import {
  hsvToRgb,
  rgbToHsv,
  rgbToHex,
  hexToRgb,
  rgbToHsl,
  hslToRgb,
  getRelativeLuminance,
  getContrastRatio,
  meetsContrastStandard,
  isValidRgb,
  isValidHsv,
  isValidHsl,
  isValidHex,
  parseColorString,
  formatColorString
} from '../colorUtils';

describe('Color Utility Functions', () => {
  
  describe('HSV to RGB conversion', () => {
    test('converts pure red correctly', () => {
      const result = hsvToRgb(0, 100, 100);
      expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts pure green correctly', () => {
      const result = hsvToRgb(120, 100, 100);
      expect(result).toEqual({ r: 0, g: 255, b: 0 });
    });

    test('converts pure blue correctly', () => {
      const result = hsvToRgb(240, 100, 100);
      expect(result).toEqual({ r: 0, g: 0, b: 255 });
    });

    test('converts white correctly', () => {
      const result = hsvToRgb(0, 0, 100);
      expect(result).toEqual({ r: 255, g: 255, b: 255 });
    });

    test('converts black correctly', () => {
      const result = hsvToRgb(0, 0, 0);
      expect(result).toEqual({ r: 0, g: 0, b: 0 });
    });

    test('throws error for invalid HSV values', () => {
      expect(() => hsvToRgb(-1, 50, 50)).toThrow('Invalid HSV values');
      expect(() => hsvToRgb(361, 50, 50)).toThrow('Invalid HSV values');
      expect(() => hsvToRgb(180, -1, 50)).toThrow('Invalid HSV values');
      expect(() => hsvToRgb(180, 101, 50)).toThrow('Invalid HSV values');
    });
  });

  describe('RGB to HSV conversion', () => {
    test('converts pure red correctly', () => {
      const result = rgbToHsv(255, 0, 0);
      expect(result).toEqual({ h: 0, s: 100, v: 100 });
    });

    test('converts pure green correctly', () => {
      const result = rgbToHsv(0, 255, 0);
      expect(result).toEqual({ h: 120, s: 100, v: 100 });
    });

    test('converts pure blue correctly', () => {
      const result = rgbToHsv(0, 0, 255);
      expect(result).toEqual({ h: 240, s: 100, v: 100 });
    });

    test('converts white correctly', () => {
      const result = rgbToHsv(255, 255, 255);
      expect(result).toEqual({ h: 0, s: 0, v: 100 });
    });

    test('converts black correctly', () => {
      const result = rgbToHsv(0, 0, 0);
      expect(result).toEqual({ h: 0, s: 0, v: 0 });
    });

    test('throws error for invalid RGB values', () => {
      expect(() => rgbToHsv(-1, 0, 0)).toThrow('Invalid RGB values');
      expect(() => rgbToHsv(256, 0, 0)).toThrow('Invalid RGB values');
      expect(() => rgbToHsv(255, 255, 256)).toThrow('Invalid RGB values');
    });
  });

  describe('RGB to HEX conversion', () => {
    test('converts red to hex correctly', () => {
      expect(rgbToHex(255, 0, 0)).toBe('#FF0000');
    });

    test('converts green to hex correctly', () => {
      expect(rgbToHex(0, 255, 0)).toBe('#00FF00');
    });

    test('converts blue to hex correctly', () => {
      expect(rgbToHex(0, 0, 255)).toBe('#0000FF');
    });

    test('converts white to hex correctly', () => {
      expect(rgbToHex(255, 255, 255)).toBe('#FFFFFF');
    });

    test('converts black to hex correctly', () => {
      expect(rgbToHex(0, 0, 0)).toBe('#000000');
    });

    test('handles single digit hex values', () => {
      expect(rgbToHex(1, 2, 3)).toBe('#010203');
    });

    test('throws error for invalid RGB values', () => {
      expect(() => rgbToHex(-1, 0, 0)).toThrow('Invalid RGB values');
      expect(() => rgbToHex(256, 0, 0)).toThrow('Invalid RGB values');
    });
  });

  describe('HEX to RGB conversion', () => {
    test('converts red hex to RGB correctly', () => {
      expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('FF0000')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts green hex to RGB correctly', () => {
      expect(hexToRgb('#00FF00')).toEqual({ r: 0, g: 255, b: 0 });
    });

    test('converts blue hex to RGB correctly', () => {
      expect(hexToRgb('#0000FF')).toEqual({ r: 0, g: 0, b: 255 });
    });

    test('handles 3-character hex codes', () => {
      expect(hexToRgb('#F00')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('ABC')).toEqual({ r: 170, g: 187, b: 204 });
    });

    test('handles lowercase hex codes', () => {
      expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('throws error for invalid hex values', () => {
      expect(() => hexToRgb('#GG0000')).toThrow('Invalid HEX color format');
      expect(() => hexToRgb('#FF00')).toThrow('Invalid HEX color format');
      expect(() => hexToRgb('invalid')).toThrow('Invalid HEX color format');
    });
  });

  describe('RGB to HSL conversion', () => {
    test('converts red to HSL correctly', () => {
      const result = rgbToHsl(255, 0, 0);
      expect(result).toEqual({ h: 0, s: 100, l: 50 });
    });

    test('converts green to HSL correctly', () => {
      const result = rgbToHsl(0, 255, 0);
      expect(result).toEqual({ h: 120, s: 100, l: 50 });
    });

    test('converts blue to HSL correctly', () => {
      const result = rgbToHsl(0, 0, 255);
      expect(result).toEqual({ h: 240, s: 100, l: 50 });
    });

    test('converts white to HSL correctly', () => {
      const result = rgbToHsl(255, 255, 255);
      expect(result).toEqual({ h: 0, s: 0, l: 100 });
    });

    test('converts black to HSL correctly', () => {
      const result = rgbToHsl(0, 0, 0);
      expect(result).toEqual({ h: 0, s: 0, l: 0 });
    });
  });

  describe('HSL to RGB conversion', () => {
    test('converts red HSL to RGB correctly', () => {
      const result = hslToRgb(0, 100, 50);
      expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts green HSL to RGB correctly', () => {
      const result = hslToRgb(120, 100, 50);
      expect(result).toEqual({ r: 0, g: 255, b: 0 });
    });

    test('converts blue HSL to RGB correctly', () => {
      const result = hslToRgb(240, 100, 50);
      expect(result).toEqual({ r: 0, g: 0, b: 255 });
    });

    test('converts white HSL to RGB correctly', () => {
      const result = hslToRgb(0, 0, 100);
      expect(result).toEqual({ r: 255, g: 255, b: 255 });
    });

    test('converts black HSL to RGB correctly', () => {
      const result = hslToRgb(0, 0, 0);
      expect(result).toEqual({ r: 0, g: 0, b: 0 });
    });
  });

  describe('Color accessibility functions', () => {
    test('calculates relative luminance correctly', () => {
      expect(getRelativeLuminance(255, 255, 255)).toBeCloseTo(1, 2);
      expect(getRelativeLuminance(0, 0, 0)).toBeCloseTo(0, 2);
      expect(getRelativeLuminance(255, 0, 0)).toBeCloseTo(0.2126, 3);
    });

    test('calculates contrast ratio correctly', () => {
      const white = { r: 255, g: 255, b: 255 };
      const black = { r: 0, g: 0, b: 0 };
      const red = { r: 255, g: 0, b: 0 };

      expect(getContrastRatio(white, black)).toBeCloseTo(21, 0);
      expect(getContrastRatio(white, white)).toBeCloseTo(1, 0);
      expect(getContrastRatio(white, red)).toBeGreaterThan(3);
    });

    test('checks WCAG contrast standards correctly', () => {
      expect(meetsContrastStandard(4.5, 'AA', 'normal')).toBe(true);
      expect(meetsContrastStandard(4.4, 'AA', 'normal')).toBe(false);
      expect(meetsContrastStandard(3.0, 'AA', 'large')).toBe(true);
      expect(meetsContrastStandard(7.0, 'AAA', 'normal')).toBe(true);
      expect(meetsContrastStandard(6.9, 'AAA', 'normal')).toBe(false);
    });
  });

  describe('Validation functions', () => {
    test('validates RGB values correctly', () => {
      expect(isValidRgb(255, 255, 255)).toBe(true);
      expect(isValidRgb(0, 0, 0)).toBe(true);
      expect(isValidRgb(128, 64, 192)).toBe(true);
      
      expect(isValidRgb(-1, 0, 0)).toBe(false);
      expect(isValidRgb(256, 0, 0)).toBe(false);
      expect(isValidRgb(255.5, 0, 0)).toBe(false);
      expect(isValidRgb('255', 0, 0)).toBe(false);
    });

    test('validates HSV values correctly', () => {
      expect(isValidHsv(360, 100, 100)).toBe(true);
      expect(isValidHsv(0, 0, 0)).toBe(true);
      expect(isValidHsv(180, 50, 75)).toBe(true);
      
      expect(isValidHsv(-1, 50, 50)).toBe(false);
      expect(isValidHsv(361, 50, 50)).toBe(false);
      expect(isValidHsv(180, -1, 50)).toBe(false);
      expect(isValidHsv(180, 101, 50)).toBe(false);
    });

    test('validates HSL values correctly', () => {
      expect(isValidHsl(360, 100, 100)).toBe(true);
      expect(isValidHsl(0, 0, 0)).toBe(true);
      expect(isValidHsl(180, 50, 75)).toBe(true);
      
      expect(isValidHsl(-1, 50, 50)).toBe(false);
      expect(isValidHsl(361, 50, 50)).toBe(false);
      expect(isValidHsl(180, -1, 50)).toBe(false);
      expect(isValidHsl(180, 101, 50)).toBe(false);
    });

    test('validates HEX values correctly', () => {
      expect(isValidHex('#FF0000')).toBe(true);
      expect(isValidHex('FF0000')).toBe(true);
      expect(isValidHex('#ABC')).toBe(true);
      expect(isValidHex('ABC')).toBe(true);
      expect(isValidHex('#ff0000')).toBe(true);
      
      expect(isValidHex('#GG0000')).toBe(false);
      expect(isValidHex('#FF00')).toBe(false);
      expect(isValidHex('invalid')).toBe(false);
      expect(isValidHex(123)).toBe(false);
    });
  });

  describe('Color string parsing', () => {
    test('parses HEX color strings correctly', () => {
      expect(parseColorString('#FF0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(parseColorString('FF0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(parseColorString('#ABC')).toEqual({ r: 170, g: 187, b: 204 });
    });

    test('parses RGB color strings correctly', () => {
      expect(parseColorString('rgb(255, 0, 0)')).toEqual({ r: 255, g: 0, b: 0 });
      expect(parseColorString('RGB(0, 255, 0)')).toEqual({ r: 0, g: 255, b: 0 });
      expect(parseColorString('rgb( 0 , 0 , 255 )')).toEqual({ r: 0, g: 0, b: 255 });
    });

    test('parses HSL color strings correctly', () => {
      expect(parseColorString('hsl(0, 100%, 50%)')).toEqual({ r: 255, g: 0, b: 0 });
      expect(parseColorString('HSL(120, 100%, 50%)')).toEqual({ r: 0, g: 255, b: 0 });
      expect(parseColorString('hsl( 240 , 100% , 50% )')).toEqual({ r: 0, g: 0, b: 255 });
    });

    test('returns null for invalid color strings', () => {
      expect(parseColorString('invalid')).toBeNull();
      expect(parseColorString('#GG0000')).toBeNull();
      expect(parseColorString('rgb(256, 0, 0)')).toBeNull();
      expect(parseColorString(123)).toBeNull();
    });
  });

  describe('Color string formatting', () => {
    const testColor = { r: 255, g: 128, b: 64 };

    test('formats to HEX correctly', () => {
      expect(formatColorString(testColor, 'hex')).toBe('#FF8040');
      expect(formatColorString(testColor)).toBe('#FF8040'); // default format
    });

    test('formats to RGB correctly', () => {
      expect(formatColorString(testColor, 'rgb')).toBe('rgb(255, 128, 64)');
    });

    test('formats to HSL correctly', () => {
      expect(formatColorString(testColor, 'hsl')).toMatch(/^hsl\(\d+, \d+%, \d+%\)$/);
    });

    test('throws error for invalid RGB values', () => {
      expect(() => formatColorString({ r: -1, g: 0, b: 0 })).toThrow('Invalid RGB values');
    });

    test('throws error for unsupported format', () => {
      expect(() => formatColorString(testColor, 'invalid')).toThrow('Unsupported format: invalid');
    });
  });

  describe('Round-trip conversions', () => {
    test('RGB to HSV to RGB maintains accuracy', () => {
      const original = { r: 128, g: 64, b: 192 };
      const hsv = rgbToHsv(original.r, original.g, original.b);
      const converted = hsvToRgb(hsv.h, hsv.s, hsv.v);
      
      // Allow for small rounding errors (within 1 unit)
      expect(Math.abs(converted.r - original.r)).toBeLessThanOrEqual(1);
      expect(Math.abs(converted.g - original.g)).toBeLessThanOrEqual(1);
      expect(Math.abs(converted.b - original.b)).toBeLessThanOrEqual(1);
    });

    test('RGB to HSL to RGB maintains accuracy', () => {
      const original = { r: 128, g: 64, b: 192 };
      const hsl = rgbToHsl(original.r, original.g, original.b);
      const converted = hslToRgb(hsl.h, hsl.s, hsl.l);
      
      // Allow for small rounding errors (within 1 unit)
      expect(Math.abs(converted.r - original.r)).toBeLessThanOrEqual(1);
      expect(Math.abs(converted.g - original.g)).toBeLessThanOrEqual(1);
      expect(Math.abs(converted.b - original.b)).toBeLessThanOrEqual(1);
    });

    test('RGB to HEX to RGB maintains accuracy', () => {
      const original = { r: 128, g: 64, b: 192 };
      const hex = rgbToHex(original.r, original.g, original.b);
      const converted = hexToRgb(hex);
      
      expect(converted).toEqual(original);
    });
  });
});