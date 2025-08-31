import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ColorPicker } from './ColorPicker';
import {
  createGradient,
  updateGradientStop,
  addGradientStop,
  removeGradientStop,
  reorderGradientStops,
  generateGradientCss,
  parseGradientCss,
  getGradientPresets,
  interpolateGradientStop,
  validateGradient
} from '../utils/gradientUtils';
import './GradientBuilder.css';

/**
 * GradientBuilder - Professional gradient creation and editing component
 * 
 * Features:
 * - Linear and radial gradient support
 * - Multi-stop gradient editing with drag-and-drop
 * - Real-time preview and CSS generation
 * - Gradient direction/position controls
 * - Preset gradients library
 * - Integration with ColorPicker for stop color selection
 * - Professional UI matching ToggleBox design standards
 */
export const GradientBuilder = ({
  value = null,
  onChange,
  onGradientChange,
  onCssChange,
  className = '',
  disabled = false,
  showPreview = true,
  showPresets = true,
  showCssExport = true
}) => {
  // Initialize gradient state
  const [gradient, setGradient] = useState(() => {
    if (value) {
      const parsed = parseGradientCss(value);
      return parsed || createGradient();
    }
    return createGradient();
  });

  const [selectedStopId, setSelectedStopId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [cssOutput, setCssOutput] = useState('');
  const [error, setError] = useState('');

  const gradientBarRef = useRef(null);
  const dragStopRef = useRef(null);

  // Generate CSS when gradient changes
  const gradientCss = useMemo(() => {
    try {
      return generateGradientCss(gradient);
    } catch (err) {
      setError(err.message);
      return '';
    }
  }, [gradient]);

  // Update CSS output
  useEffect(() => {
    setCssOutput(gradientCss);
    onChange?.(gradientCss);
    onGradientChange?.(gradient);
    onCssChange?.(gradientCss);
  }, [gradientCss, gradient, onChange, onGradientChange, onCssChange]);

  // Parse value prop changes
  useEffect(() => {
    if (value && value !== gradientCss) {
      const parsed = parseGradientCss(value);
      if (parsed) {
        setGradient(parsed);
        setError('');
      }
    }
  }, [value, gradientCss]);

  // Get currently selected stop
  const selectedStop = useMemo(() => {
    return gradient.stops.find(stop => stop.id === selectedStopId);
  }, [gradient.stops, selectedStopId]);

  // Handle gradient type change
  const handleTypeChange = useCallback((type) => {
    if (disabled) return;
    
    const newGradient = { 
      ...gradient, 
      type,
      // Reset radial-specific properties when switching to linear
      ...(type === 'linear' && {
        radialShape: undefined,
        radialSize: undefined,
        centerX: undefined,
        centerY: undefined
      }),
      // Set default radial properties when switching to radial
      ...(type === 'radial' && {
        radialShape: 'ellipse',
        radialSize: 'farthest-corner',
        centerX: 50,
        centerY: 50
      })
    };
    
    setGradient(newGradient);
    setError('');
  }, [gradient, disabled]);

  // Handle angle change for linear gradients
  const handleAngleChange = useCallback((angle) => {
    if (disabled || gradient.type !== 'linear') return;
    
    setGradient({ ...gradient, angle: parseInt(angle, 10) });
  }, [gradient, disabled]);

  // Handle radial gradient properties
  const handleRadialChange = useCallback((property, value) => {
    if (disabled || gradient.type !== 'radial') return;
    
    setGradient({ 
      ...gradient, 
      [property]: property.includes('center') ? parseInt(value, 10) : value 
    });
  }, [gradient, disabled]);

  // Handle stop color change
  const handleStopColorChange = useCallback((color) => {
    if (!selectedStopId || disabled) return;
    
    try {
      const updated = updateGradientStop(gradient, selectedStopId, { color });
      setGradient(updated);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }, [gradient, selectedStopId, disabled]);

  // Handle stop position change
  const handleStopPositionChange = useCallback((stopId, position) => {
    if (disabled) return;
    
    try {
      const updated = updateGradientStop(gradient, stopId, { position: Math.round(position) });
      setGradient(updated);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }, [gradient, disabled]);

  // Add new gradient stop
  const handleAddStop = useCallback((position) => {
    if (disabled) return;
    
    try {
      // Find the two stops that bracket this position for color interpolation
      const sortedStops = [...gradient.stops].sort((a, b) => a.position - b.position);
      let newColor = '#ffffff';
      
      for (let i = 0; i < sortedStops.length - 1; i++) {
        const current = sortedStops[i];
        const next = sortedStops[i + 1];
        
        if (position >= current.position && position <= next.position) {
          const interpolated = interpolateGradientStop(current, next, position);
          newColor = interpolated.color;
          break;
        }
      }
      
      const updated = addGradientStop(gradient, { color: newColor, position });
      setGradient(updated);
      setError('');
      
      // Select the new stop
      const newStop = updated.stops.find(stop => stop.position === position);
      if (newStop) {
        setSelectedStopId(newStop.id);
      }
    } catch (err) {
      setError(err.message);
    }
  }, [gradient, disabled]);

  // Remove gradient stop
  const handleRemoveStop = useCallback((stopId) => {
    if (disabled) return;
    
    try {
      const updated = removeGradientStop(gradient, stopId);
      setGradient(updated);
      setError('');
      
      // Clear selection if removed stop was selected
      if (selectedStopId === stopId) {
        setSelectedStopId(null);
      }
    } catch (err) {
      setError(err.message);
    }
  }, [gradient, selectedStopId, disabled]);

  // Handle gradient bar click to add stop
  const handleGradientBarClick = useCallback((event) => {
    if (disabled || isDragging) return;
    
    const rect = gradientBarRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    handleAddStop(Math.round(position));
  }, [handleAddStop, disabled, isDragging]);

  // Handle stop drag start
  const handleStopDragStart = useCallback((event, stopId) => {
    if (disabled) return;
    
    event.stopPropagation();
    setIsDragging(true);
    setSelectedStopId(stopId);
    setDragStartX(event.clientX);
    dragStopRef.current = stopId;
    
    // Set cursor style
    document.body.style.cursor = 'grabbing';
  }, [disabled]);

  // Handle stop drag
  const handleStopDrag = useCallback((event) => {
    if (!isDragging || !gradientBarRef.current || disabled) return;
    
    const rect = gradientBarRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    if (dragStopRef.current) {
      handleStopPositionChange(dragStopRef.current, position);
    }
  }, [isDragging, handleStopPositionChange, disabled]);

  // Handle stop drag end
  const handleStopDragEnd = useCallback(() => {
    setIsDragging(false);
    dragStopRef.current = null;
    document.body.style.cursor = 'default';
  }, []);

  // Add global event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleStopDrag);
      document.addEventListener('mouseup', handleStopDragEnd);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleStopDrag);
      document.removeEventListener('mouseup', handleStopDragEnd);
    };
  }, [isDragging, handleStopDrag, handleStopDragEnd]);

  // Handle preset selection
  const handlePresetSelect = useCallback((preset) => {
    if (disabled) return;
    
    setGradient(preset.gradient);
    setSelectedStopId(null);
    setError('');
  }, [disabled]);

  // Copy CSS to clipboard
  const handleCopyCss = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(gradientCss);
      // Could show a toast notification here
    } catch (err) {
      console.warn('Failed to copy CSS to clipboard:', err);
    }
  }, [gradientCss]);

  // Render gradient type selector
  const renderTypeSelector = () => (
    <div className="gradient-type-selector">
      <label className="gradient-section-label">Gradient Type</label>
      <div className="gradient-type-buttons">
        <button
          onClick={() => handleTypeChange('linear')}
          disabled={disabled}
          className={`gradient-type-btn ${gradient.type === 'linear' ? 'active' : ''}`}
          aria-pressed={gradient.type === 'linear'}
        >
          Linear
        </button>
        <button
          onClick={() => handleTypeChange('radial')}
          disabled={disabled}
          className={`gradient-type-btn ${gradient.type === 'radial' ? 'active' : ''}`}
          aria-pressed={gradient.type === 'radial'}
        >
          Radial
        </button>
      </div>
    </div>
  );

  // Render linear gradient controls
  const renderLinearControls = () => (
    <div className="gradient-linear-controls">
      <label className="gradient-section-label">Direction</label>
      <div className="gradient-angle-control">
        <input
          type="range"
          min="0"
          max="360"
          value={gradient.angle}
          onChange={(e) => handleAngleChange(e.target.value)}
          disabled={disabled}
          className="gradient-angle-slider"
          aria-label="Gradient angle"
        />
        <div className="gradient-angle-input">
          <input
            type="number"
            min="0"
            max="360"
            value={gradient.angle}
            onChange={(e) => handleAngleChange(e.target.value)}
            disabled={disabled}
            className="gradient-angle-number"
          />
          <span>°</span>
        </div>
      </div>
    </div>
  );

  // Render radial gradient controls
  const renderRadialControls = () => (
    <div className="gradient-radial-controls">
      <div className="gradient-radial-shape">
        <label className="gradient-section-label">Shape</label>
        <select
          value={gradient.radialShape}
          onChange={(e) => handleRadialChange('radialShape', e.target.value)}
          disabled={disabled}
          className="gradient-select"
        >
          <option value="ellipse">Ellipse</option>
          <option value="circle">Circle</option>
        </select>
      </div>
      
      <div className="gradient-radial-size">
        <label className="gradient-section-label">Size</label>
        <select
          value={gradient.radialSize}
          onChange={(e) => handleRadialChange('radialSize', e.target.value)}
          disabled={disabled}
          className="gradient-select"
        >
          <option value="closest-side">Closest Side</option>
          <option value="closest-corner">Closest Corner</option>
          <option value="farthest-side">Farthest Side</option>
          <option value="farthest-corner">Farthest Corner</option>
        </select>
      </div>
      
      <div className="gradient-radial-position">
        <label className="gradient-section-label">Center Position</label>
        <div className="gradient-position-controls">
          <div className="gradient-position-input">
            <label>X:</label>
            <input
              type="number"
              min="0"
              max="100"
              value={gradient.centerX}
              onChange={(e) => handleRadialChange('centerX', e.target.value)}
              disabled={disabled}
              className="gradient-position-number"
            />
            <span>%</span>
          </div>
          <div className="gradient-position-input">
            <label>Y:</label>
            <input
              type="number"
              min="0"
              max="100"
              value={gradient.centerY}
              onChange={(e) => handleRadialChange('centerY', e.target.value)}
              disabled={disabled}
              className="gradient-position-number"
            />
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Render gradient preview bar
  const renderGradientBar = () => (
    <div className="gradient-editor">
      <label className="gradient-section-label">Gradient Stops</label>
      <div
        ref={gradientBarRef}
        className="gradient-bar"
        onClick={handleGradientBarClick}
        style={{ background: gradientCss }}
        data-testid="gradient-bar"
      >
        {gradient.stops.map((stop) => (
          <div
            key={stop.id}
            className={`gradient-stop ${selectedStopId === stop.id ? 'selected' : ''}`}
            style={{
              left: `${stop.position}%`,
              backgroundColor: stop.color
            }}
            onMouseDown={(e) => handleStopDragStart(e, stop.id)}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedStopId(stop.id);
              setShowColorPicker(true);
            }}
            data-testid={`gradient-stop-${stop.id}`}
            title={`${stop.color} at ${stop.position}%`}
          >
            {gradient.stops.length > 2 && (
              <button
                className="gradient-stop-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveStop(stop.id);
                }}
                disabled={disabled}
                title="Remove stop"
                aria-label="Remove color stop"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="gradient-bar-help">
        Click on the gradient to add color stops. Drag stops to reposition.
      </div>
    </div>
  );

  // Render color picker for selected stop
  const renderColorPicker = () => {
    if (!selectedStop || !showColorPicker) return null;
    
    return (
      <div className="gradient-color-picker">
        <div className="gradient-color-picker-header">
          <label className="gradient-section-label">
            Color Stop at {selectedStop.position}%
          </label>
          <button
            onClick={() => setShowColorPicker(false)}
            className="gradient-color-picker-close"
            aria-label="Close color picker"
          >
            ×
          </button>
        </div>
        <ColorPicker
          value={selectedStop.color}
          onChange={handleStopColorChange}
          showVisualPicker={true}
          showSliders={true}
          disabled={disabled}
          className="gradient-color-picker-component"
        />
      </div>
    );
  };

  // Render gradient presets
  const renderPresets = () => {
    if (!showPresets) return null;
    
    const presets = getGradientPresets();
    
    return (
      <div className="gradient-presets">
        <label className="gradient-section-label">Presets</label>
        <div className="gradient-presets-grid">
          {presets.map((preset, index) => (
            <button
              key={index}
              className="gradient-preset"
              onClick={() => handlePresetSelect(preset)}
              disabled={disabled}
              title={preset.name}
              style={{
                background: generateGradientCss(preset.gradient)
              }}
              data-testid={`gradient-preset-${preset.name.toLowerCase()}`}
            >
              <span className="gradient-preset-name">{preset.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Render CSS export
  const renderCssExport = () => {
    if (!showCssExport) return null;
    
    return (
      <div className="gradient-css-export">
        <label className="gradient-section-label">CSS Output</label>
        <div className="gradient-css-output">
          <textarea
            value={gradientCss}
            readOnly
            className="gradient-css-textarea"
            data-testid="gradient-css-output"
            rows="3"
          />
          <button
            onClick={handleCopyCss}
            className="gradient-css-copy"
            disabled={disabled}
            title="Copy CSS to clipboard"
            aria-label="Copy CSS to clipboard"
          >
            Copy
          </button>
        </div>
      </div>
    );
  };

  return (
    <div 
      className={`gradient-builder ${className} ${disabled ? 'gradient-builder-disabled' : ''}`}
      role="group"
      aria-label="Gradient builder"
    >
      {error && (
        <div className="gradient-error" role="alert" data-testid="gradient-error">
          {error}
        </div>
      )}

      <div className="gradient-builder-content">
        {renderTypeSelector()}
        
        {gradient.type === 'linear' && renderLinearControls()}
        {gradient.type === 'radial' && renderRadialControls()}
        
        {renderGradientBar()}
        
        {renderColorPicker()}
        
        {renderPresets()}
        
        {renderCssExport()}
      </div>
    </div>
  );
};

export default GradientBuilder;