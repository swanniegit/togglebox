import React from 'react';

export default function ChannelSliders({
  mode, // 'RGB' | 'HSV'
  values, // { r,g,b } or { h,s,v }
  disabled,
  onNumber,
  onSlider,
}) {
  const rows = mode === 'RGB'
    ? [
        { key: 'r', label: 'Red', min: 0, max: 255, sliderClass: 'red-slider' },
        { key: 'g', label: 'Green', min: 0, max: 255, sliderClass: 'green-slider' },
        { key: 'b', label: 'Blue', min: 0, max: 255, sliderClass: 'blue-slider' },
      ]
    : [
        { key: 'h', label: 'Hue', min: 0, max: 360, sliderClass: 'hue-slider' },
        { key: 's', label: 'Saturation', min: 0, max: 100, sliderClass: 'saturation-slider' },
        { key: 'v', label: 'Value', min: 0, max: 100, sliderClass: 'value-slider' },
      ];

  return (
    <div className={`${mode.toLowerCase()}-inputs color-input-group`}>
      {rows.map(({ key, label, min, max, sliderClass }) => (
        <div key={key} className={`${mode.toLowerCase()}-input-item`}>
          <label className="color-input-label">{label}</label>
          <input
            type="number"
            min={min}
            max={max}
            value={values[key]}
            onChange={(e) => onNumber(key, e.target.value)}
            disabled={disabled}
            className="color-input color-input-small"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={values[key]}
            onChange={(e) => onSlider(key.toUpperCase(), e.target.value, mode)}
            disabled={disabled}
            className={`color-slider ${sliderClass}`}
            aria-label={`${label} slider`}
          />
        </div>
      ))}
    </div>
  );
}


