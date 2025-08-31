/**
 * Gradient Utility Functions for ToggleBox
 * 
 * Provides comprehensive gradient creation, manipulation, and CSS generation utilities
 * Supports linear and radial gradients with multi-stop editing capabilities
 */

import { parseColorString, formatColorString, hexToRgb, rgbToHex, isValidHex } from './colorUtils';

/**
 * Generate unique ID for gradient stops
 * @returns {string} Unique identifier
 */
const generateId = () => {
  return `stop_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Create a new gradient with default values
 * @param {Object} options - Gradient configuration options
 * @returns {Object} Gradient object
 */
export const createGradient = (options = {}) => {
  const {
    type = 'linear',
    angle = 90,
    radialShape = 'ellipse',
    radialSize = 'farthest-corner',
    centerX = 50,
    centerY = 50,
    stops = [
      { color: '#ff0000', position: 0 },
      { color: '#0000ff', position: 100 }
    ]
  } = options;

  // Add IDs to stops if they don't have them
  const stopsWithIds = stops.map(stop => ({
    ...stop,
    id: stop.id || generateId()
  }));

  return {
    type,
    angle,
    radialShape,
    radialSize,
    centerX,
    centerY,
    stops: stopsWithIds
  };
};

/**
 * Update an existing gradient stop
 * @param {Object} gradient - Gradient object
 * @param {string} stopId - ID of the stop to update
 * @param {Object} updates - Updates to apply to the stop
 * @returns {Object} Updated gradient object
 */
export const updateGradientStop = (gradient, stopId, updates) => {
  const stopIndex = gradient.stops.findIndex(stop => stop.id === stopId);
  
  if (stopIndex === -1) {
    throw new Error(`Gradient stop with id ${stopId} not found`);
  }

  // Validate updates
  if (updates.color && !isValidColor(updates.color)) {
    throw new Error('Invalid color format');
  }

  if (updates.position !== undefined) {
    if (typeof updates.position !== 'number' || updates.position < 0 || updates.position > 100) {
      throw new Error('Position must be between 0 and 100');
    }
  }

  const newStops = [...gradient.stops];
  newStops[stopIndex] = { ...newStops[stopIndex], ...updates };

  // Reorder stops by position
  newStops.sort((a, b) => a.position - b.position);

  return { ...gradient, stops: newStops };
};

/**
 * Add a new gradient stop
 * @param {Object} gradient - Gradient object
 * @param {Object} stop - Stop to add { color, position }
 * @returns {Object} Updated gradient object
 */
export const addGradientStop = (gradient, stop) => {
  if (!isValidColor(stop.color)) {
    throw new Error('Invalid color format');
  }

  let position = stop.position;
  
  // Auto-calculate position if not specified
  if (position === undefined) {
    const sortedStops = [...gradient.stops].sort((a, b) => a.position - b.position);
    
    // Find a good position between existing stops
    for (let i = 0; i < sortedStops.length - 1; i++) {
      const current = sortedStops[i];
      const next = sortedStops[i + 1];
      const gap = next.position - current.position;
      
      if (gap > 10) { // Only add if there's a reasonable gap
        position = current.position + gap / 2;
        break;
      }
    }
    
    // If no good position found, add at midpoint
    if (position === undefined) {
      position = 50;
    }
  }

  if (position < 0 || position > 100) {
    throw new Error('Position must be between 0 and 100');
  }

  const newStop = {
    ...stop,
    position,
    id: generateId()
  };

  const newStops = [...gradient.stops, newStop];
  newStops.sort((a, b) => a.position - b.position);

  return { ...gradient, stops: newStops };
};

/**
 * Remove a gradient stop
 * @param {Object} gradient - Gradient object
 * @param {string} stopId - ID of the stop to remove
 * @returns {Object} Updated gradient object
 */
export const removeGradientStop = (gradient, stopId) => {
  if (gradient.stops.length <= 2) {
    throw new Error('Gradient must have at least 2 stops');
  }

  const stopIndex = gradient.stops.findIndex(stop => stop.id === stopId);
  
  if (stopIndex === -1) {
    throw new Error(`Gradient stop with id ${stopId} not found`);
  }

  const newStops = gradient.stops.filter(stop => stop.id !== stopId);
  return { ...gradient, stops: newStops };
};

/**
 * Reorder gradient stops by position
 * @param {Object} gradient - Gradient object
 * @returns {Object} Updated gradient object with sorted stops
 */
export const reorderGradientStops = (gradient) => {
  const sortedStops = [...gradient.stops].sort((a, b) => a.position - b.position);
  return { ...gradient, stops: sortedStops };
};

/**
 * Generate CSS string for gradient
 * @param {Object} gradient - Gradient object
 * @returns {string} CSS gradient string
 */
export const generateGradientCss = (gradient) => {
  if (!validateGradient(gradient)) {
    throw new Error('Invalid gradient object');
  }

  const stops = gradient.stops
    .map(stop => `${stop.color} ${stop.position}%`)
    .join(', ');

  if (gradient.type === 'linear') {
    return `linear-gradient(${gradient.angle}deg, ${stops})`;
  } else if (gradient.type === 'radial') {
    const shape = gradient.radialShape || 'ellipse';
    const size = gradient.radialSize || 'farthest-corner';
    const centerX = gradient.centerX || 50;
    const centerY = gradient.centerY || 50;
    
    return `radial-gradient(${shape} ${size} at ${centerX}% ${centerY}%, ${stops})`;
  }

  throw new Error(`Unsupported gradient type: ${gradient.type}`);
};

/**
 * Parse CSS gradient string to gradient object
 * @param {string} css - CSS gradient string
 * @returns {Object|null} Gradient object or null if invalid
 */
export const parseGradientCss = (css) => {
  if (!css || typeof css !== 'string') {
    return null;
  }

  const trimmed = css.trim();

  // Parse linear gradient
  const linearMatch = trimmed.match(/linear-gradient\s*\(\s*([^)]+)\s*\)/i);
  if (linearMatch) {
    const params = linearMatch[1];
    const parts = params.split(',').map(p => p.trim());
    
    let angle = 90;
    let colorStart = 0;

    // Check if first part is an angle
    if (parts[0].includes('deg')) {
      angle = parseInt(parts[0]);
      colorStart = 1;
    }

    const stops = [];
    for (let i = colorStart; i < parts.length; i++) {
      const stopMatch = parts[i].match(/^(.+?)\s+(\d+(?:\.\d+)?)%$/);
      if (stopMatch) {
        const color = stopMatch[1].trim();
        const position = parseFloat(stopMatch[2]);
        
        if (isValidColor(color)) {
          stops.push({
            id: generateId(),
            color,
            position
          });
        }
      }
    }

    if (stops.length >= 2) {
      return createGradient({
        type: 'linear',
        angle,
        stops
      });
    }
  }

  // Parse radial gradient
  const radialMatch = trimmed.match(/radial-gradient\s*\(\s*([^)]+)\s*\)/i);
  if (radialMatch) {
    const params = radialMatch[1];
    const parts = params.split(',').map(p => p.trim());
    
    let shape = 'ellipse';
    let size = 'farthest-corner';
    let centerX = 50;
    let centerY = 50;
    let colorStart = 0;

    // Parse shape, size, and position from first part
    const shapeMatch = parts[0].match(/(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%)?/);
    if (shapeMatch) {
      if (shapeMatch[1]) shape = shapeMatch[1];
      if (shapeMatch[2]) size = shapeMatch[2];
      if (shapeMatch[3]) centerX = parseFloat(shapeMatch[3]);
      if (shapeMatch[4]) centerY = parseFloat(shapeMatch[4]);
      colorStart = 1;
    }

    const stops = [];
    for (let i = colorStart; i < parts.length; i++) {
      const stopMatch = parts[i].match(/^(.+?)\s+(\d+(?:\.\d+)?)%$/);
      if (stopMatch) {
        const color = stopMatch[1].trim();
        const position = parseFloat(stopMatch[2]);
        
        if (isValidColor(color)) {
          stops.push({
            id: generateId(),
            color,
            position
          });
        }
      }
    }

    if (stops.length >= 2) {
      return createGradient({
        type: 'radial',
        radialShape: shape,
        radialSize: size,
        centerX,
        centerY,
        stops
      });
    }
  }

  return null;
};

/**
 * Validate gradient stop
 * @param {Object} stop - Gradient stop to validate
 * @returns {boolean} Whether the stop is valid
 */
export const validateGradientStop = (stop) => {
  if (!stop || typeof stop !== 'object') {
    return false;
  }

  if (!stop.color || !isValidColor(stop.color)) {
    return false;
  }

  if (typeof stop.position !== 'number' || stop.position < 0 || stop.position > 100) {
    return false;
  }

  return true;
};

/**
 * Validate gradient object
 * @param {Object} gradient - Gradient to validate
 * @returns {boolean} Whether the gradient is valid
 */
export const validateGradient = (gradient) => {
  if (!gradient || typeof gradient !== 'object') {
    return false;
  }

  if (!['linear', 'radial'].includes(gradient.type)) {
    return false;
  }

  if (!Array.isArray(gradient.stops) || gradient.stops.length < 2) {
    return false;
  }

  if (!gradient.stops.every(validateGradientStop)) {
    return false;
  }

  if (gradient.type === 'linear') {
    if (typeof gradient.angle !== 'number') {
      return false;
    }
  }

  if (gradient.type === 'radial') {
    const { centerX, centerY } = gradient;
    if (typeof centerX !== 'number' || centerX < 0 || centerX > 100 ||
        typeof centerY !== 'number' || centerY < 0 || centerY > 100) {
      return false;
    }
  }

  return true;
};

/**
 * Get predefined gradient presets
 * @returns {Array} Array of gradient presets
 */
export const getGradientPresets = () => {
  return [
    {
      name: 'Sunset',
      gradient: createGradient({
        angle: 45,
        stops: [
          { color: '#ff7e5f', position: 0 },
          { color: '#feb47b', position: 100 }
        ]
      })
    },
    {
      name: 'Ocean',
      gradient: createGradient({
        angle: 135,
        stops: [
          { color: '#667eea', position: 0 },
          { color: '#764ba2', position: 100 }
        ]
      })
    },
    {
      name: 'Forest',
      gradient: createGradient({
        angle: 90,
        stops: [
          { color: '#11998e', position: 0 },
          { color: '#38ef7d', position: 100 }
        ]
      })
    },
    {
      name: 'Fire',
      gradient: createGradient({
        angle: 0,
        stops: [
          { color: '#f12711', position: 0 },
          { color: '#f5af19', position: 100 }
        ]
      })
    },
    {
      name: 'Purple Rain',
      gradient: createGradient({
        angle: 180,
        stops: [
          { color: '#8360c3', position: 0 },
          { color: '#2ebf91', position: 100 }
        ]
      })
    },
    {
      name: 'Midnight',
      gradient: createGradient({
        angle: 270,
        stops: [
          { color: '#2c3e50', position: 0 },
          { color: '#000000', position: 100 }
        ]
      })
    },
    {
      name: 'Rainbow',
      gradient: createGradient({
        angle: 90,
        stops: [
          { color: '#ff0000', position: 0 },
          { color: '#ff8000', position: 16.67 },
          { color: '#ffff00', position: 33.33 },
          { color: '#00ff00', position: 50 },
          { color: '#0080ff', position: 66.67 },
          { color: '#8000ff', position: 83.33 },
          { color: '#ff00ff', position: 100 }
        ]
      })
    },
    {
      name: 'Radial Glow',
      gradient: createGradient({
        type: 'radial',
        radialShape: 'circle',
        radialSize: 'closest-side',
        centerX: 50,
        centerY: 50,
        stops: [
          { color: '#ffffff', position: 0 },
          { color: '#4facfe', position: 50 },
          { color: '#00f2fe', position: 100 }
        ]
      })
    }
  ];
};

/**
 * Interpolate a new gradient stop between two existing stops
 * @param {Object} stop1 - First stop
 * @param {Object} stop2 - Second stop
 * @param {number} position - Position for new stop (0-100)
 * @returns {Object} New gradient stop
 */
export const interpolateGradientStop = (stop1, stop2, position) => {
  // Handle edge cases
  if (position <= stop1.position) {
    return { id: generateId(), color: stop1.color, position };
  }
  if (position >= stop2.position) {
    return { id: generateId(), color: stop2.color, position };
  }

  // Calculate interpolation factor
  const range = stop2.position - stop1.position;
  const offset = position - stop1.position;
  const factor = offset / range;

  // Parse colors
  const color1 = parseColorString(stop1.color) || hexToRgb(stop1.color);
  const color2 = parseColorString(stop2.color) || hexToRgb(stop2.color);

  if (!color1 || !color2) {
    // Fallback to first color if parsing fails
    return { id: generateId(), color: stop1.color, position };
  }

  // Interpolate RGB values
  const r = Math.round(color1.r + (color2.r - color1.r) * factor);
  const g = Math.round(color1.g + (color2.g - color1.g) * factor);
  const b = Math.round(color1.b + (color2.b - color1.b) * factor);

  const interpolatedColor = rgbToHex(r, g, b);

  return {
    id: generateId(),
    color: interpolatedColor,
    position
  };
};

/**
 * Validate if a color string is valid
 * @param {string} color - Color string to validate
 * @returns {boolean} Whether the color is valid
 */
const isValidColor = (color) => {
  if (!color || typeof color !== 'string') {
    return false;
  }

  // Check for common color formats
  const trimmed = color.trim().toLowerCase();
  
  // Named colors
  if (trimmed === 'transparent' || 
      /^(red|green|blue|yellow|orange|purple|pink|brown|black|white|gray|grey)$/i.test(trimmed)) {
    return true;
  }

  // HEX colors
  if (isValidHex(color)) {
    return true;
  }

  // RGB/RGBA colors
  if (/^rgba?\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*[0-9.]+)?\s*\)$/i.test(trimmed)) {
    return true;
  }

  // HSL/HSLA colors
  if (/^hsla?\s*\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[0-9.]+)?\s*\)$/i.test(trimmed)) {
    return true;
  }

  return false;
};