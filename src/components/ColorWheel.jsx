import React from 'react';

export default function ColorWheel({
  hsv,
  disabled,
  onMouseDown,
  onKeyDown,
  onLightnessChange,
  wheelRef,
}) {
  return (
    <div className="visual-color-picker" data-testid="visual-color-picker">
      <div
        ref={wheelRef}
        className="color-wheel"
        data-testid="color-wheel"
        onMouseDown={onMouseDown}
        onKeyDown={onKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="slider"
        aria-label="Color wheel - use arrow keys to adjust hue and saturation"
        aria-valuemin="0"
        aria-valuemax="360"
        aria-valuenow={hsv.h}
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `conic-gradient(
            hsl(0, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(240, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(360, 100%, 50%)
          )`,
          cursor: disabled ? 'not-allowed' : 'pointer',
          position: 'relative',
          margin: '20px auto'
        }}
      >
        <div
          className="color-wheel-pointer"
          style={{
            position: 'absolute',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: '2px solid white',
            boxShadow: '0 0 4px rgba(0,0,0,0.5)',
            transform: 'translate(-50%, -50%)',
            left: `${50 + (hsv.s / 100 * 50) * Math.cos(hsv.h * Math.PI / 180)}%`,
            top: `${50 + (hsv.s / 100 * 50) * Math.sin(hsv.h * Math.PI / 180)}%`,
            pointerEvents: 'none'
          }}
        />
      </div>

      <div className="lightness-slider-container">
        <label htmlFor="lightness-slider" className="slider-label">Lightness</label>
        <input
          id="lightness-slider"
          type="range"
          min="0"
          max="100"
          value={hsv.v}
          onChange={(e) => onLightnessChange(e.target.value)}
          disabled={disabled}
          className="lightness-slider"
          data-testid="lightness-slider"
          aria-label="Lightness slider"
          style={{
            width: '200px',
            background: `linear-gradient(to right, 
              hsl(${hsv.h}, ${hsv.s}%, 0%), 
              hsl(${hsv.h}, ${hsv.s}%, 100%))`
          }}
        />
      </div>
    </div>
  );
}


