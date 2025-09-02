import React from 'react';
import { Link } from 'react-router-dom';

export default function ThemeSelector({
  presets = {},
  selectedKey,
  onSelect,
  pickerBaseColor,
  inlinePicker,
}) {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4">
        {Object.entries(presets).map(([key, gradient]) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`p-3 rounded text-xs font-medium text-white text-center transition-all ${
              selectedKey === key ? 'ring-4 ring-white ring-offset-2 transform scale-105' : 'hover:scale-105'
            }`}
            style={{ background: `linear-gradient(135deg, ${gradient.start}, ${gradient.end})` }}
            title={`${gradient.name} Theme`}
            data-testid={`gradient-${key}`}
          >
            {gradient.name}
          </button>
        ))}
        {!pickerBaseColor ? (
          inlinePicker ? (
            <button
              onClick={inlinePicker.onOpen}
              className="p-3 rounded text-xs font-medium text-center transition-all bg-blue-100 text-blue-700 hover:bg-blue-200"
              title="Open color picker"
              data-testid="gradient-from-picker-inline"
            >
              Try the color picker
            </button>
          ) : (
            <Link
              to="/color-picker"
              className="p-3 rounded text-xs font-medium text-center transition-all bg-blue-100 text-blue-700 hover:bg-blue-200"
              title="Try the color picker"
              data-testid="gradient-from-picker-link"
            >
              Try the color picker
            </Link>
          )
        ) : (
          <button
            onClick={() => onSelect('fromPicker')}
            className={`p-3 rounded text-xs font-medium text-white text-center transition-all ${
              selectedKey === 'fromPicker' ? 'ring-4 ring-white ring-offset-2 transform scale-105' : 'hover:scale-105'
            }`}
            style={{ background: pickerBaseColor }}
            title="Use base color from Color Picker"
            data-testid="gradient-from-picker"
          >
            From Color Picker
          </button>
        )}
      </div>
    </div>
  );
}


