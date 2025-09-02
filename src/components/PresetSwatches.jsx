import React from 'react';

export default function PresetSwatches({ presets = [], disabled, onSelect }) {
  if (!presets.length) return null;
  return (
    <div className="color-presets">
      <div className="presets-label">Presets</div>
      <div className="presets-grid">
        {presets.map((preset, index) => (
          <button
            key={index}
            className="preset-color"
            onClick={() => onSelect(preset)}
            disabled={disabled}
            style={{ backgroundColor: preset }}
            title={preset}
            aria-label={`Select preset color ${preset}`}
          />
        ))}
      </div>
    </div>
  );
}


