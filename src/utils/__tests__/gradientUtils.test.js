/**
 * Tests for Gradient Utility Functions
 * Comprehensive test coverage for gradient creation, manipulation, and CSS generation
 */

import {
  createGradient,
  updateGradientStop,
  addGradientStop,
  removeGradientStop,
  reorderGradientStops,
  generateGradientCss,
  parseGradientCss,
  validateGradientStop,
  validateGradient,
  getGradientPresets,
  interpolateGradientStop
} from '../gradientUtils';

describe('gradientUtils', () => {
  describe('createGradient', () => {
    test('creates a linear gradient with default values', () => {
      const gradient = createGradient();
      
      expect(gradient.type).toBe('linear');
      expect(gradient.angle).toBe(90);
      expect(gradient.stops).toHaveLength(2);
      expect(gradient.stops[0]).toEqual({
        id: expect.any(String),
        color: '#ff0000',
        position: 0
      });
      expect(gradient.stops[1]).toEqual({
        id: expect.any(String),
        color: '#0000ff',
        position: 100
      });
    });

    test('creates a radial gradient with custom parameters', () => {
      const gradient = createGradient({
        type: 'radial',
        radialShape: 'circle',
        radialSize: 'closest-side',
        centerX: 30,
        centerY: 70
      });
      
      expect(gradient.type).toBe('radial');
      expect(gradient.radialShape).toBe('circle');
      expect(gradient.radialSize).toBe('closest-side');
      expect(gradient.centerX).toBe(30);
      expect(gradient.centerY).toBe(70);
    });

    test('creates gradient with custom stops', () => {
      const customStops = [
        { color: '#ff0000', position: 0 },
        { color: '#00ff00', position: 50 },
        { color: '#0000ff', position: 100 }
      ];
      
      const gradient = createGradient({ stops: customStops });
      
      expect(gradient.stops).toHaveLength(3);
      expect(gradient.stops[1].color).toBe('#00ff00');
      expect(gradient.stops[1].position).toBe(50);
      expect(gradient.stops[1].id).toBeDefined();
    });
  });

  describe('updateGradientStop', () => {
    let gradient;
    
    beforeEach(() => {
      gradient = createGradient();
    });

    test('updates color of existing stop', () => {
      const stopId = gradient.stops[0].id;
      const updated = updateGradientStop(gradient, stopId, { color: '#00ff00' });
      
      expect(updated.stops[0].color).toBe('#00ff00');
      expect(updated.stops[0].position).toBe(0);
    });

    test('updates position of existing stop', () => {
      const stopId = gradient.stops[1].id;
      const updated = updateGradientStop(gradient, stopId, { position: 75 });
      
      expect(updated.stops[1].position).toBe(75);
      expect(updated.stops[1].color).toBe('#0000ff');
    });

    test('throws error for non-existent stop', () => {
      expect(() => {
        updateGradientStop(gradient, 'invalid-id', { color: '#ff00ff' });
      }).toThrow('Gradient stop with id invalid-id not found');
    });

    test('validates color format', () => {
      const stopId = gradient.stops[0].id;
      
      expect(() => {
        updateGradientStop(gradient, stopId, { color: 'invalid-color' });
      }).toThrow('Invalid color format');
    });

    test('validates position range', () => {
      const stopId = gradient.stops[0].id;
      
      expect(() => {
        updateGradientStop(gradient, stopId, { position: -10 });
      }).toThrow('Position must be between 0 and 100');
      
      expect(() => {
        updateGradientStop(gradient, stopId, { position: 110 });
      }).toThrow('Position must be between 0 and 100');
    });
  });

  describe('addGradientStop', () => {
    let gradient;
    
    beforeEach(() => {
      gradient = createGradient();
    });

    test('adds new stop at specified position', () => {
      const updated = addGradientStop(gradient, { color: '#ff00ff', position: 50 });
      
      expect(updated.stops).toHaveLength(3);
      expect(updated.stops[1].color).toBe('#ff00ff');
      expect(updated.stops[1].position).toBe(50);
      expect(updated.stops[1].id).toBeDefined();
    });

    test('maintains stops order by position', () => {
      let updated = addGradientStop(gradient, { color: '#ff00ff', position: 25 });
      updated = addGradientStop(updated, { color: '#00ff00', position: 75 });
      
      expect(updated.stops).toHaveLength(4);
      expect(updated.stops[0].position).toBe(0);
      expect(updated.stops[1].position).toBe(25);
      expect(updated.stops[2].position).toBe(75);
      expect(updated.stops[3].position).toBe(100);
    });

    test('auto-calculates position when not specified', () => {
      const updated = addGradientStop(gradient, { color: '#ff00ff' });
      
      expect(updated.stops[1].position).toBe(50);
    });
  });

  describe('removeGradientStop', () => {
    let gradient;
    
    beforeEach(() => {
      gradient = createGradient();
      gradient = addGradientStop(gradient, { color: '#ff00ff', position: 50 });
    });

    test('removes existing stop', () => {
      const stopId = gradient.stops[1].id;
      const updated = removeGradientStop(gradient, stopId);
      
      expect(updated.stops).toHaveLength(2);
      expect(updated.stops.find(stop => stop.id === stopId)).toBeUndefined();
    });

    test('prevents removal when only 2 stops remain', () => {
      const stopId = gradient.stops[1].id;
      let updated = removeGradientStop(gradient, stopId);
      
      expect(() => {
        removeGradientStop(updated, updated.stops[0].id);
      }).toThrow('Gradient must have at least 2 stops');
    });

    test('throws error for non-existent stop', () => {
      expect(() => {
        removeGradientStop(gradient, 'invalid-id');
      }).toThrow('Gradient stop with id invalid-id not found');
    });
  });

  describe('reorderGradientStops', () => {
    let gradient;
    
    beforeEach(() => {
      gradient = createGradient();
      gradient = addGradientStop(gradient, { color: '#ff00ff', position: 50 });
    });

    test('reorders stops by position', () => {
      const stops = gradient.stops.slice();
      stops[0].position = 75;
      stops[2].position = 25;
      
      const updated = reorderGradientStops({ ...gradient, stops });
      
      expect(updated.stops[0].position).toBe(25);
      expect(updated.stops[1].position).toBe(50);
      expect(updated.stops[2].position).toBe(75);
    });
  });

  describe('generateGradientCss', () => {
    test('generates linear gradient CSS', () => {
      const gradient = createGradient({
        angle: 45,
        stops: [
          { color: '#ff0000', position: 0 },
          { color: '#0000ff', position: 100 }
        ]
      });
      
      const css = generateGradientCss(gradient);
      expect(css).toBe('linear-gradient(45deg, #ff0000 0%, #0000ff 100%)');
    });

    test('generates radial gradient CSS', () => {
      const gradient = createGradient({
        type: 'radial',
        radialShape: 'circle',
        radialSize: 'closest-side',
        centerX: 30,
        centerY: 70,
        stops: [
          { color: '#ff0000', position: 0 },
          { color: '#0000ff', position: 100 }
        ]
      });
      
      const css = generateGradientCss(gradient);
      expect(css).toBe('radial-gradient(circle closest-side at 30% 70%, #ff0000 0%, #0000ff 100%)');
    });

    test('generates multi-stop gradient CSS', () => {
      const gradient = createGradient({
        stops: [
          { color: '#ff0000', position: 0 },
          { color: '#00ff00', position: 33 },
          { color: '#0000ff', position: 66 },
          { color: '#ff00ff', position: 100 }
        ]
      });
      
      const css = generateGradientCss(gradient);
      expect(css).toBe('linear-gradient(90deg, #ff0000 0%, #00ff00 33%, #0000ff 66%, #ff00ff 100%)');
    });

    test('handles transparent colors', () => {
      const gradient = createGradient({
        stops: [
          { color: 'rgba(255, 0, 0, 0.5)', position: 0 },
          { color: 'transparent', position: 100 }
        ]
      });
      
      const css = generateGradientCss(gradient);
      expect(css).toBe('linear-gradient(90deg, rgba(255, 0, 0, 0.5) 0%, transparent 100%)');
    });
  });

  describe('parseGradientCss', () => {
    test('parses linear gradient CSS', () => {
      const css = 'linear-gradient(45deg, #ff0000 0%, #0000ff 100%)';
      const gradient = parseGradientCss(css);
      
      expect(gradient.type).toBe('linear');
      expect(gradient.angle).toBe(45);
      expect(gradient.stops).toHaveLength(2);
      expect(gradient.stops[0].color).toBe('#ff0000');
      expect(gradient.stops[0].position).toBe(0);
      expect(gradient.stops[1].color).toBe('#0000ff');
      expect(gradient.stops[1].position).toBe(100);
    });

    test('parses radial gradient CSS', () => {
      const css = 'radial-gradient(circle closest-side at 30% 70%, #ff0000 0%, #0000ff 100%)';
      const gradient = parseGradientCss(css);
      
      expect(gradient.type).toBe('radial');
      expect(gradient.radialShape).toBe('circle');
      expect(gradient.radialSize).toBe('closest-side');
      expect(gradient.centerX).toBe(30);
      expect(gradient.centerY).toBe(70);
    });

    test('parses multi-stop gradient', () => {
      const css = 'linear-gradient(90deg, #ff0000 0%, #00ff00 33%, #0000ff 66%, #ff00ff 100%)';
      const gradient = parseGradientCss(css);
      
      expect(gradient.stops).toHaveLength(4);
      expect(gradient.stops[1].color).toBe('#00ff00');
      expect(gradient.stops[1].position).toBe(33);
    });

    test('returns null for invalid CSS', () => {
      expect(parseGradientCss('invalid-css')).toBeNull();
      expect(parseGradientCss('color: red;')).toBeNull();
    });
  });

  describe('validateGradientStop', () => {
    test('validates valid gradient stop', () => {
      const stop = { color: '#ff0000', position: 50 };
      expect(validateGradientStop(stop)).toBe(true);
    });

    test('validates different color formats', () => {
      const stops = [
        { color: '#ff0000', position: 0 },
        { color: 'rgb(255, 0, 0)', position: 25 },
        { color: 'rgba(255, 0, 0, 0.5)', position: 50 },
        { color: 'hsl(0, 100%, 50%)', position: 75 },
        { color: 'transparent', position: 100 }
      ];
      
      stops.forEach(stop => {
        expect(validateGradientStop(stop)).toBe(true);
      });
    });

    test('invalidates invalid color', () => {
      const stop = { color: 'invalid-color', position: 50 };
      expect(validateGradientStop(stop)).toBe(false);
    });

    test('invalidates invalid position', () => {
      expect(validateGradientStop({ color: '#ff0000', position: -1 })).toBe(false);
      expect(validateGradientStop({ color: '#ff0000', position: 101 })).toBe(false);
      expect(validateGradientStop({ color: '#ff0000', position: 'invalid' })).toBe(false);
    });

    test('invalidates missing properties', () => {
      expect(validateGradientStop({ color: '#ff0000' })).toBe(false);
      expect(validateGradientStop({ position: 50 })).toBe(false);
      expect(validateGradientStop({})).toBe(false);
    });
  });

  describe('validateGradient', () => {
    test('validates valid linear gradient', () => {
      const gradient = createGradient();
      expect(validateGradient(gradient)).toBe(true);
    });

    test('validates valid radial gradient', () => {
      const gradient = createGradient({ type: 'radial' });
      expect(validateGradient(gradient)).toBe(true);
    });

    test('invalidates gradient with invalid type', () => {
      const gradient = { ...createGradient(), type: 'invalid' };
      expect(validateGradient(gradient)).toBe(false);
    });

    test('invalidates gradient with insufficient stops', () => {
      const gradient = { ...createGradient(), stops: [{ color: '#ff0000', position: 0 }] };
      expect(validateGradient(gradient)).toBe(false);
    });

    test('invalidates gradient with invalid stops', () => {
      const gradient = {
        ...createGradient(),
        stops: [
          { color: '#ff0000', position: 0 },
          { color: 'invalid-color', position: 100 }
        ]
      };
      expect(validateGradient(gradient)).toBe(false);
    });

    test('invalidates linear gradient with invalid angle', () => {
      const gradient = { ...createGradient(), angle: 'invalid' };
      expect(validateGradient(gradient)).toBe(false);
    });

    test('invalidates radial gradient with invalid center position', () => {
      const gradient = {
        ...createGradient({ type: 'radial' }),
        centerX: -10
      };
      expect(validateGradient(gradient)).toBe(false);
    });
  });

  describe('getGradientPresets', () => {
    test('returns array of gradient presets', () => {
      const presets = getGradientPresets();
      
      expect(Array.isArray(presets)).toBe(true);
      expect(presets.length).toBeGreaterThan(0);
      
      presets.forEach(preset => {
        expect(preset).toHaveProperty('name');
        expect(preset).toHaveProperty('gradient');
        expect(validateGradient(preset.gradient)).toBe(true);
      });
    });

    test('includes popular gradient presets', () => {
      const presets = getGradientPresets();
      const presetNames = presets.map(p => p.name);
      
      expect(presetNames).toContain('Sunset');
      expect(presetNames).toContain('Ocean');
      expect(presetNames).toContain('Forest');
    });
  });

  describe('interpolateGradientStop', () => {
    test('interpolates color between two stops', () => {
      const stop1 = { color: '#ff0000', position: 0 };
      const stop2 = { color: '#0000ff', position: 100 };
      
      const interpolated = interpolateGradientStop(stop1, stop2, 50);
      
      expect(interpolated.position).toBe(50);
      expect(interpolated.color).toMatch(/^#[0-9a-f]{6}$/i);
      expect(interpolated.id).toBeDefined();
    });

    test('handles edge cases', () => {
      const stop1 = { color: '#ff0000', position: 25 };
      const stop2 = { color: '#00ff00', position: 75 };
      
      const interpolated = interpolateGradientStop(stop1, stop2, 25);
      expect(interpolated.color).toBe('#ff0000');
      
      const interpolated2 = interpolateGradientStop(stop1, stop2, 75);
      expect(interpolated2.color).toBe('#00ff00');
    });
  });

  describe('performance and edge cases', () => {
    test('handles large number of gradient stops', () => {
      const stops = [];
      for (let i = 0; i <= 100; i += 10) {
        stops.push({ color: `hsl(${i * 3.6}, 50%, 50%)`, position: i });
      }
      
      const gradient = createGradient({ stops });
      expect(validateGradient(gradient)).toBe(true);
      
      const css = generateGradientCss(gradient);
      expect(css).toContain('hsl(');
      expect(css.split(',').length).toBeGreaterThan(20);
    });

    test('handles extreme angle values', () => {
      const gradient1 = createGradient({ angle: 720 });
      expect(generateGradientCss(gradient1)).toContain('720deg');
      
      const gradient2 = createGradient({ angle: -45 });
      expect(generateGradientCss(gradient2)).toContain('-45deg');
    });

    test('preserves precision in calculations', () => {
      const gradient = createGradient({
        stops: [
          { color: '#ff0000', position: 0.5 },
          { color: '#0000ff', position: 99.75 }
        ]
      });
      
      const css = generateGradientCss(gradient);
      expect(css).toContain('0.5%');
      expect(css).toContain('99.75%');
    });
  });
});